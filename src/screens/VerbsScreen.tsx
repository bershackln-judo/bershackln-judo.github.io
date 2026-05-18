import { WordCard } from '../components/WordCard'
import { SearchInput } from '../components/SearchInput'
import { verbs } from '../data/verbs'
import { useWordSearch } from '../hooks/useWordSearch'
import type { Word } from '../types/word'

type VerbsScreenProps = {
  isSaved: (id: string) => boolean
  onSave: (word: Word) => void
}

export function VerbsScreen({ isSaved, onSave }: VerbsScreenProps) {
  const { query, setQuery, filteredWords, resultCount, totalCount } = useWordSearch(verbs)

  return (
    <main className="screen">
      <header className="page-header">
        <p className="eyebrow">Igék</p>
        <h1>Глаголы</h1>
      </header>

      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder="Искать глагол: dobni, бросить, добни..."
        resultCount={resultCount}
        totalCount={totalCount}
      />

      <div className="word-list">
        {filteredWords.map((verb) => (
          <WordCard key={verb.id} word={verb} saved={isSaved(verb.id)} onSave={onSave} />
        ))}
      </div>
    </main>
  )
}
