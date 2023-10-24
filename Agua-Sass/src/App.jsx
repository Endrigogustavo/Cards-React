import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
  <div class="potion-top">
    <div class="potion-top-line"></div>
  </div>
  <div class="potion-neck"></div>
  <div class="potion-body">
    <div class="potion-content">
      <div class="blob-container">
        <div class="blob-one"></div>
        <div class="blob-two"></div>
        <div class="blob-three"></div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App
