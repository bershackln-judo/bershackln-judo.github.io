import { useMemo, useState } from 'react'
import type { Word } from '../types/word'

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim()
}

export function useWordSearch<T extends Word>(words: T[]) {
  const [query, setQuery] = useState('')

  const filteredWords = useMemo(() => {
    const normalizedQuery = normalize(query)

    if (!normalizedQuery) {
      return words
    }

    return words.filter((word) => {
      const searchableText = normalize(
        [
          word.hu,
          word.ru,
          word.transcription,
          ...(word.examples ?? []),
        ]
          .filter(Boolean)
          .join(' '),
      )

      return searchableText.includes(normalizedQuery)
    })
  }, [query, words])

  return {
    query,
    setQuery,
    filteredWords,
    totalCount: words.length,
    resultCount: filteredWords.length,
  }
}
