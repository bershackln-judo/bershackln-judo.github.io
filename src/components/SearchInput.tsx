type SearchInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  resultCount: number
  totalCount: number
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Искать слово...',
  resultCount,
  totalCount,
}: SearchInputProps) {
  return (
    <section className="search-panel card">
      <label>
        <span>Поиск</span>
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type="search"
        />
      </label>

      <p>
        Найдено: {resultCount} из {totalCount}
      </p>
    </section>
  )
}
