import { SearchInput } from '../components/SearchInput'
import { WordCard } from '../components/WordCard'
import type { SavedWord } from '../hooks/useSavedWords'
import { useWordSearch } from '../hooks/useWordSearch'

type DictionaryScreenProps = {
  savedWords: SavedWord[]
  onRemove: (id: string) => void
}

export function DictionaryScreen({ savedWords, onRemove }: DictionaryScreenProps) {
  const { query, setQuery, filteredWords, resultCount, totalCount } = useWordSearch(savedWords)

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
        <>
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Искать в сохранённых словах..."
            resultCount={resultCount}
            totalCount={totalCount}
          />

          {filteredWords.length === 0 ? (
            <section className="card empty-card">
              <h2>Ничего не найдено</h2>
              <p>Попробуй другое слово или часть перевода.</p>
            </section>
          ) : (
            <div className="word-list">
              {filteredWords.map((word) => (
                <WordCard key={word.id} word={word} onRemove={onRemove} />
              ))}
            </div>
          )}
        </>
      )}
    </main>
  )
}
