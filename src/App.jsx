import Navbar from "./components/Navbar"
import { BrowserRouter,Route,Routes } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navbar/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
