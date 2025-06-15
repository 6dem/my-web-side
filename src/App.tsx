import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { MainLayout } from "./components/MainLayout"

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
