export type Screen = 'home' | 'verbs' | 'nouns' | 'assistant' | 'dictionary'

export type Word = {
  id: string
  hu: string
  ru: string
  transcription?: string
  examples?: string[]
}

export type Verb = Word & {
  infinitive?: string
}
