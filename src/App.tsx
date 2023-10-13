
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Home from './components/templates/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharacterProfile from './components/templates/CharacterProfile'
import SelectedCharacterContext from './context/SelectedCharacterContext'
import { useState } from 'react'
import { Character } from './interfaces/character'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 1000,
    },
  },
})


function App() {

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)

  return (
    <QueryClientProvider client={queryClient}>
      <SelectedCharacterContext.Provider value={{ value: selectedCharacter, setter: setSelectedCharacter }}>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='profile'
              element={<CharacterProfile />}
            />
          </Routes>
        </BrowserRouter>
      </SelectedCharacterContext.Provider>
    </QueryClientProvider>
  )
}

export default App
