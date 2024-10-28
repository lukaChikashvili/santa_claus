import { Outlet } from "react-router"
import NavBar from "./components/NavBar"
import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import Lights from "./components/Lights"
import { useSelector } from "react-redux"
import { Suspense } from "react"
import Loader from "./components/Loader"

function App() {

  const { userInfo } = useSelector(state => state.auth);


  return (
    <>
    <NavBar />
   

     <div className="fixed top-0 left-0 w-full h-screen -z-10 ">
      {userInfo ? "" :  <Canvas camera={{position: [6, 7, 20],   fov: 75, near: 0.1, far: 1000 }}>
        <Suspense fallback = {<Loader />}>
      <Lights />
        <Experience />
        </Suspense>
      </Canvas> }
   
      </div>
      <main>
        <Outlet />

        
      </main>
    </>
  )
}

export default App
