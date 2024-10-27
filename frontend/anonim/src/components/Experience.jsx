import { OrbitControls, Reflector } from '@react-three/drei'
const Experience = () => {


  return (
  <>
     <OrbitControls />
      <Reflector 
       blur={[400, 100]}
       resolution={1024}
       mixBlur={1}
       mixStrength={1}
       depthScale={1}
       minDepthThreshold={0.8}
       maxDepthThreshold={1}
       rotation = {[-Math.PI / 2, 0, 0]}
       args={[40, 30]}
       position={[0, -2, 4]}
       
       
       >
       {(Material, props) => <meshStandardMaterial {...props} color="#F5F5F5" roughness={0.3} metalness={0.6} />}
      </Reflector>
  </>
  )
}

export default Experience
