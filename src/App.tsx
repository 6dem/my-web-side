import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./components/MainLayout"
import { LoaderProvider } from "./context/loader"

function App() {

  return (
    <>
        <LoaderProvider>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}></Route>
            </Routes>
            </BrowserRouter>
        </LoaderProvider>
    </>
  )
}

export default App
