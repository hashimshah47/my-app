import React from "react"
import LandingPage from "./components/LandingPage"
import SignIn from "./components/SignIn"
import {Routes, Route} from "react-router-dom"

function App() {
  return( 
    <>
  <Routes>
      <Route path="/" element = {<LandingPage/>}/>
      {/* <Route path="SignIn" elements = {<SignIn/>}/> */}
    </Routes>
    </>
  )
}

export default App;