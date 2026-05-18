import { WordCard } from '../components/WordCard'
import { SearchInput } from '../components/SearchInput'
import { nouns } from '../data/nouns'
import { useWordSearch } from '../hooks/useWordSearch'
import type { Word } from '../types/word'

type NounsScreenProps = {
  isSaved: (id: string) => boolean
  onSave: (word: Word) => void
}

export function NounsScreen({ isSaved, onSave }: NounsScreenProps) {
  const { query, setQuery, filteredWords, resultCount, totalCount } = useWordSearch(nouns)

  return (
    <main className="screen">
      <header className="page-header">
        <p className="eyebrow">Főnevek</p>
        <h1>Существительные</h1>
      </header>

      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder="Искать слово: ház, дом, хааз..."
        resultCount={resultCount}
        totalCount={totalCount}
      />

      <div className="word-list">
        {filteredWords.map((noun) => (
          <WordCard key={noun.id} word={noun} saved={isSaved(noun.id)} onSave={onSave} />
        ))}
      </div>
    </main>
  )
}
