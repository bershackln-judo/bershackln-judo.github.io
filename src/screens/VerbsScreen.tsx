import { verbs } from '../data/verbs'
import { WordCard } from '../components/WordCard'
import type { Word } from '../types/word'

type VerbsScreenProps = {
  isSaved: (id: string) => boolean
  onSave: (word: Word) => void
}

export function VerbsScreen({ isSaved, onSave }: VerbsScreenProps) {
  return (
    <main className="screen">
      <header className="page-header">
        <p className="eyebrow">Igék</p>
        <h1>Глаголы</h1>
      </header>

      <div className="word-list">
        {verbs.map((verb) => (
          <WordCard key={verb.id} word={verb} saved={isSaved(verb.id)} onSave={onSave} />
        ))}
      </div>
    </main>
  )
}
