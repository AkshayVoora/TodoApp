import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <>hi tere</>
      <CreateTodo/>
    </div>
  )
}

export default App
