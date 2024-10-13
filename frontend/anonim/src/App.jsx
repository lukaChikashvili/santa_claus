import { Outlet } from "react-router"
import NavBar from "./components/NavBar"
import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import Lights from "./components/Lights"

function App() {


  return (
    <>
    <NavBar />

     <div className="fixed top-0 left-0 w-full h-screen -z-10 ">
    <Canvas>
      <Lights />
        <Experience />
      </Canvas>
      </div>
      <main>
        <Outlet />

        
      </main>
    </>
  )
}

export default App
