import './App.css'
import { useState } from 'react'
import Content from './Content'
function App() {
  const [show, setShow] = useState(false)
  return (

    <>
      <h1>hello ae</h1>
      <button onClick={() => {
        setShow(!show)
      }}>
        {show === true ? 'hide' : 'show'}
      </button>
      {show && <Content></Content>}
    </>
  )
}

export default App
