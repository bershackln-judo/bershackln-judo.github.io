const fs = require('fs')
const path = require('path')

const sourcePath = path.join(process.cwd(), 'legacy/app.js')
const targetPath = path.join(process.cwd(), 'src/data/verbs.ts')

const source = fs.readFileSync(sourcePath, 'utf8')

const declaration = source.match(/\b(?:const|let|var)\s+verbs\s*=\s*\[/)

if (!declaration) {
  console.error('Не нашёл массив verbs в legacy/app.js')
  console.error('Проверь вручную через: grep -n "verbs" legacy/app.js | head -20')
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
  console.error('Не смог найти конец массива verbs')
  process.exit(1)
}

const arraySource = source.slice(start, end + 1)

let legacyVerbs

try {
  legacyVerbs = Function(`"use strict"; return (${arraySource});`)()
} catch (error) {
  console.error('Нашёл массив verbs, но не смог его прочитать как JavaScript.')
  console.error(error)
  process.exit(1)
}

function makeId(value, index) {
  const base = String(value || `verb-${index + 1}`)
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return base || `verb-${index + 1}`
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

const normalized = legacyVerbs
  .map((verb, index) => {
    const hu = String(verb.hu || verb.infinitive || '').trim()
    const ru = String(verb.ru || verb.translation || '').trim()

    return {
      id: makeId(hu, index),
      hu,
      ru,
      transcription: verb.transcription ? String(verb.transcription).trim() : undefined,
      infinitive: verb.infinitive ? String(verb.infinitive).trim() : undefined,
      examples: normalizeExamples(verb.examples),
    }
  })
  .filter((verb) => verb.hu && verb.ru)
  .map((verb) => {
    const clean = {}

    for (const [key, value] of Object.entries(verb)) {
      if (value !== undefined && value !== '') {
        clean[key] = value
      }
    }

    return clean
  })

if (normalized.length === 0) {
  console.error('Массив verbs найден, но после обработки не осталось ни одного глагола.')
  process.exit(1)
}

const output = `import type { Verb } from '../types/word'

export const verbs: Verb[] = ${JSON.stringify(normalized, null, 2)}
`

fs.writeFileSync(targetPath, output)

console.log(`Готово: перенесено ${normalized.length} глаголов в src/data/verbs.ts`)
console.log(`Первый глагол: ${normalized[0].hu} — ${normalized[0].ru}`)
console.log(`Последний глагол: ${normalized[normalized.length - 1].hu} — ${normalized[normalized.length - 1].ru}`)
