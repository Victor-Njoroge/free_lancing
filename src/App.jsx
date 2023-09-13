import Navbar from "./components/Navbar"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import './App.css'
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
