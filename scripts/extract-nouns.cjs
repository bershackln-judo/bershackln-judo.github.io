const fs = require('fs')
const path = require('path')

const sourcePath = path.join(process.cwd(), 'legacy/app.js')
const targetPath = path.join(process.cwd(), 'src/data/nouns.ts')

const source = fs.readFileSync(sourcePath, 'utf8')

const declaration = source.match(/\b(?:const|let|var)\s+nouns\s*=\s*\[/)

if (!declaration) {
  console.error('Не нашёл массив nouns в legacy/app.js')
  console.error('Проверь вручную через: grep -n "nouns" legacy/app.js | head -20')
  process.exit(1)
}

const start = source.indexOf('[', declaration.index)

let depth = 0
let end = -1
let quote = null
let escaped = false
let lineComment = false
let blockComment = false

for (let i = start; i < source.length; i += 1) {
  const char = source[i]
  const next = source[i + 1]

  if (lineComment) {
    if (char === '\n') lineComment = false
    continue
  }

  if (blockComment) {
    if (char === '*' && next === '/') {
      blockComment = false
      i += 1
    }
    continue
  }

  if (quote) {
    if (escaped) {
      escaped = false
      continue
    }

    if (char === '\\') {
      escaped = true
      continue
    }

    if (char === quote) {
      quote = null
      continue
    }

    continue
  }

  if (char === '/' && next === '/') {
    lineComment = true
    i += 1
    continue
  }

  if (char === '/' && next === '*') {
    blockComment = true
    i += 1
    continue
  }

  if (char === '"' || char === "'" || char === '`') {
    quote = char
    continue
  }

  if (char === '[') depth += 1

  if (char === ']') {
    depth -= 1

    if (depth === 0) {
      end = i
      break
    }
  }
}

if (end === -1) {
  console.error('Не смог найти конец массива nouns')
  process.exit(1)
}

const arraySource = source.slice(start, end + 1)

let legacyNouns

try {
  legacyNouns = Function(`"use strict"; return (${arraySource});`)()
} catch (error) {
  console.error('Нашёл массив nouns, но не смог его прочитать как JavaScript.')
  console.error(error)
  process.exit(1)
}

function makeId(value, index) {
  const base = String(value || `noun-${index + 1}`)
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return base || `noun-${index + 1}`
}

function normalizeExamples(examples) {
  if (!Array.isArray(examples)) return undefined

  const result = examples
    .map((example) => {
      if (typeof example === 'string') return example

      if (example && typeof example === 'object') {
        const hu = example.hu || example.hungarian || example.text || ''
        const ru = example.ru || example.russian || example.translation || ''

        if (hu && ru) return `${hu} — ${ru}`
        if (hu) return String(hu)
        if (ru) return String(ru)
      }

      return ''
    })
    .map((item) => item.trim())
    .filter(Boolean)

  return result.length > 0 ? result : undefined
}

const normalized = legacyNouns
  .map((noun, index) => {
    const hu = String(noun.hu || noun.word || '').trim()
    const ru = String(noun.ru || noun.translation || '').trim()

    return {
      id: makeId(hu, index),
      hu,
      ru,
      transcription: noun.transcription ? String(noun.transcription).trim() : undefined,
      category: noun.category ? String(noun.category).trim() : undefined,
      examples: normalizeExamples(noun.examples),
    }
  })
  .filter((noun) => noun.hu && noun.ru)
  .map((noun) => {
    const clean = {}

    for (const [key, value] of Object.entries(noun)) {
      if (value !== undefined && value !== '') {
        clean[key] = value
      }
    }

    return clean
  })

if (normalized.length === 0) {
  console.error('Массив nouns найден, но после обработки не осталось ни одного существительного.')
  process.exit(1)
}

const output = `import type { Word } from '../types/word'

export const nouns: Word[] = ${JSON.stringify(normalized, null, 2)}
`

fs.writeFileSync(targetPath, output)

console.log(`Готово: перенесено ${normalized.length} существительных в src/data/nouns.ts`)
console.log(`Первое слово: ${normalized[0].hu} — ${normalized[0].ru}`)
console.log(`Последнее слово: ${normalized[normalized.length - 1].hu} — ${normalized[normalized.length - 1].ru}`)
