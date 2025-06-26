import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoaderProvider } from "./context/loader"
import { MainLayout } from "./layouts/MainLayout"
import { HomePage } from "./pages/HomePage"

function App() {

  return (
    <>
        <LoaderProvider>
            <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
            </BrowserRouter>
        </LoaderProvider>
    </>
  )
}

export default App
