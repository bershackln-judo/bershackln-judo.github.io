import { nouns } from '../data/nouns'
import { verbs } from '../data/verbs'
import type { Screen } from '../types/word'

type HomeScreenProps = {
  onNavigate: (screen: Screen) => void
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const wordOfDay = nouns[0]

  function speakWordOfDay() {
    const utterance = new SpeechSynthesisUtterance(wordOfDay.hu)
    utterance.lang = 'hu-HU'
    speechSynthesis.speak(utterance)
  }

  return (
    <main className="screen">
      <header className="hero">
        <h1>Поясни.hu</h1>
        <p>Венгерский для жизни в Венгрии</p>
      </header>

      <section className="word-of-day card">
        <p className="eyebrow">слово дня</p>
        <h2>{wordOfDay.hu}</h2>
        <p className="transcription">{wordOfDay.transcription}</p>
        <p>{wordOfDay.ru}</p>
        <button type="button" onClick={speakWordOfDay}>
          🎙️ слушать
        </button>
      </section>

      <section className="grid">
        <button className="home-card card" type="button" onClick={() => onNavigate('verbs')}>
          <span className="emoji">⚡</span>
          <strong>Глаголы</strong>
          <small>{verbs.length} слов</small>
        </button>

        <button className="home-card card" type="button" onClick={() => onNavigate('nouns')}>
          <span className="emoji">📦</span>
          <strong>Существительные</strong>
          <small>{nouns.length} слов</small>
        </button>

        <button className="home-card card" type="button" onClick={() => onNavigate('assistant')}>
          <span className="emoji">🎙️</span>
          <strong>Помощник</strong>
          <small>Спрашивайте что угодно</small>
        </button>

        <button className="home-card card" type="button" onClick={() => onNavigate('dictionary')}>
          <span className="emoji">📚</span>
          <strong>Словарь</strong>
          <small>сохранённые слова</small>
        </button>
      </section>
    </main>
  )
}
