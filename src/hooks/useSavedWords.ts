import { useEffect, useState } from 'react'
import type { Word } from '../types/word'

const STORAGE_KEY = 'poyasni-hu.savedWords'

export type SavedWord = Word & {
  savedAt: string
}

export function useSavedWords() {
  const [savedWords, setSavedWords] = useState<SavedWord[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)

      if (raw) {
        setSavedWords(JSON.parse(raw))
      }
    } catch {
      setSavedWords([])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedWords))
  }, [savedWords])

  function isSaved(id: string) {
    return savedWords.some((word) => word.id === id)
  }

  function saveWord(word: Word) {
    setSavedWords((current) => {
      if (current.some((savedWord) => savedWord.id === word.id)) {
        return current
      }

      return [
        ...current,
        {
          ...word,
          savedAt: new Date().toISOString(),
        },
      ]
    })
  }

  function removeWord(id: string) {
    setSavedWords((current) => current.filter((word) => word.id !== id))
  }

  return {
    savedWords,
    isSaved,
    saveWord,
    removeWord,
  }
}
