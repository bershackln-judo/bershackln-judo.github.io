import { WordCard } from '../components/WordCard'
import type { SavedWord } from '../hooks/useSavedWords'

type DictionaryScreenProps = {
  savedWords: SavedWord[]
  onRemove: (id: string) => void
}

export function DictionaryScreen({ savedWords, onRemove }: DictionaryScreenProps) {
  return (
    <main className="screen">
      <header className="page-header">
        <p className="eyebrow">Mentett szavak</p>
        <h1>Словарь</h1>
      </header>

      {savedWords.length === 0 ? (
        <section className="card empty-card">
          <h2>Пока пусто</h2>
          <p>Добавляй слова из разделов «Глаголы» и «Существительные».</p>
        </section>
      ) : (
        <div className="word-list">
          {savedWords.map((word) => (
            <WordCard key={word.id} word={word} onRemove={onRemove} />
          ))}
        </div>
      )}
    </main>
  )
}
