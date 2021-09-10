import React from "react"
import { DefaultHOC } from "./HOC/Default.HOC"
import { Temp } from "./components/Temp"

function App() {
  return (
    <>
      <h1>Hello App.jsx</h1>
      <DefaultHOC path="/" exact component={ Temp } />
    </>
  )
}

export default App