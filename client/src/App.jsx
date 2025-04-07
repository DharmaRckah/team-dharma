import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ThemeProvider } from './ThemContext.jsx'
import UseReducee from './Reduce.jsx'

import Self from './Self.jsx'
import UseReff from './UseRefff.jsx'

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



  // <>
  
  <UseReff/>
  //  <UseReducee/>
  // </>


  )
}

export default App
