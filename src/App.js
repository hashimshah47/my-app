
import React from "react"
import LandingPage from "./components/LandingPage"
import HomePage from "./components/HomePage"
import {Routes, Route} from "react-router-dom"

function App() {
  return( 
    <>
  <Routes>
      <Route path="/" element = {<HomePage/>}/>
      {/* <Route path="/HomePage" elements = {<HomePage/>}/> */}
    </Routes>
    </>
  )
}

export default App;