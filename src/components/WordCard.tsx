import type { Word } from '../types/word'

type WordCardProps = {
  word: Word
  saved?: boolean
  onSave?: (word: Word) => void
  onRemove?: (id: string) => void
}

export function WordCard({ word, saved, onSave, onRemove }: WordCardProps) {
  function speak() {
    const utterance = new SpeechSynthesisUtterance(word.hu)
    utterance.lang = 'hu-HU'
    speechSynthesis.speak(utterance)
  }

  return (
    <article className="card word-card">
      <div>
        <h3>{word.hu}</h3>
        {word.transcription && <p className="transcription">{word.transcription}</p>}
        <p>{word.ru}</p>

        {word.examples?.map((example) => (
          <p className="example" key={example}>
            {example}
          </p>
        ))}
      </div>

      <div className="word-actions">
        <button type="button" onClick={speak}>
          🔊
        </button>

        {onSave && !saved && (
          <button type="button" onClick={() => onSave(word)}>
            Добавить
          </button>
        )}

        {onRemove && (
          <button type="button" onClick={() => onRemove(word.id)}>
            Удалить
          </button>
        )}
      </div>
    </article>
  )
}
