import { OrbitControls, Reflector, useTexture } from '@react-three/drei'
import wood from '../assets/wood.jpg'

const Experience = () => {

     // add texture
    const woodTexture = useTexture(wood);


   
  return (
  <>
     <OrbitControls makeDefault minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4} />

       <mesh rotation={[-Math.PI / 2, 0, 0]} >
         <planeGeometry args={[40, 40]}/>
         <meshStandardMaterial map={woodTexture} />
       </mesh>

      <mesh position={[0, 10, -15]} rotation={[0, 0, 0]}>
        <planeGeometry args={[40, 20]} />
        <meshStandardMaterial map={woodTexture} roughness={0.8} metalness={0.5} />
      </mesh>


      <mesh position={[-20, 10, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial map={woodTexture} roughness={0.8} metalness={0.5} />
      </mesh>


      <mesh position={[20, 10, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial map={woodTexture} roughness={0.8} metalness={0.5} />
      </mesh>
  </>

  )
}

export default Experience
