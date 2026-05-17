import type { Screen } from '../types/word'

type BottomNavProps = {
  activeScreen: Screen
  onChange: (screen: Screen) => void
}

const items: Array<{
  screen: Screen
  icon: string
  label: string
}> = [
  { screen: 'home', icon: '⌂', label: 'Дом' },
  { screen: 'verbs', icon: '≡', label: 'Глаголы' },
  { screen: 'nouns', icon: '▦', label: 'Слова' },
  { screen: 'assistant', icon: '◴', label: 'Помощник' },
  { screen: 'dictionary', icon: '▤', label: 'Словарь' },
]

export function BottomNav({ activeScreen, onChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button
          key={item.screen}
          className={activeScreen === item.screen ? 'active' : ''}
          onClick={() => onChange(item.screen)}
          type="button"
        >
          <span>{item.icon}</span>
          <small>{item.label}</small>
        </button>
      ))}
    </nav>
  )
}
