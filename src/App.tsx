import { useState } from 'react'
import { BottomNav } from './components/BottomNav'
import { HomeScreen } from './screens/HomeScreen'
import { VerbsScreen } from './screens/VerbsScreen'
import { NounsScreen } from './screens/NounsScreen'
import { AssistantScreen } from './screens/AssistantScreen'
import { DictionaryScreen } from './screens/DictionaryScreen'
import { useSavedWords } from './hooks/useSavedWords'
import type { Screen } from './types/word'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const { savedWords, isSaved, saveWord, removeWord } = useSavedWords()

  return (
    <div className="app">
      {screen === 'home' && <HomeScreen onNavigate={setScreen} />}
      {screen === 'verbs' && <VerbsScreen isSaved={isSaved} onSave={saveWord} />}
      {screen === 'nouns' && <NounsScreen isSaved={isSaved} onSave={saveWord} />}
      {screen === 'assistant' && <AssistantScreen />}
      {screen === 'dictionary' && (
        <DictionaryScreen savedWords={savedWords} onRemove={removeWord} />
      )}

      <BottomNav activeScreen={screen} onChange={setScreen} />
    </div>
  )
}
