
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Home from './components/Home'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 1000,
    },
  },
})


function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
