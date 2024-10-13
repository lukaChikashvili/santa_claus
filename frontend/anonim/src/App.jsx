import { Outlet } from "react-router"
import NavBar from "./components/NavBar"
import CanvasPage from "./components/CanvasPage"


function App() {


  return (
    <>
    <NavBar />

      <main>
        <Outlet />
        <CanvasPage />
      </main>
    </>
  )
}

export default App
