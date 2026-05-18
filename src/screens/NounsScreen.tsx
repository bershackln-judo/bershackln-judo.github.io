import { nouns } from '../data/nouns'
import { WordCard } from '../components/WordCard'
import type { Word } from '../types/word'

type NounsScreenProps = {
  isSaved: (id: string) => boolean
  onSave: (word: Word) => void
}

export function NounsScreen({ isSaved, onSave }: NounsScreenProps) {
  return (
    <main className="screen">
      <header className="page-header">
        <p className="eyebrow">Főnevek</p>
        <h1>Существительные</h1>
      </header>

      <div className="word-list">
        {nouns.map((noun) => (
          <WordCard key={noun.id} word={noun} saved={isSaved(noun.id)} onSave={onSave} />
        ))}
      </div>
    </main>
  )
}
