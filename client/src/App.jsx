import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './ThemContext.jsx'
import Self from './Self'
import Counter from './Reduce.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [n , setN] = useState("")



function changer(){
  setN("Dharmendra")
}




  return (
  //  <ThemeProvider>
  //  <Self/>
  //  </ThemeProvider>
  <>
  <Counter/>
  </>
  )
}

export default App
