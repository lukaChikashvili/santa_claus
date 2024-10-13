import { Outlet } from "react-router"
import NavBar from "./components/NavBar"


function App() {


  return (
    <>
    <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
