import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {

    const { progress } = useProgress();

  return (
    <Html center>
    <div style={{
      color: 'white',
      fontSize: '2rem',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: '20px',
      borderRadius: '8px',
    }}>
      {`Loading... ${Math.round(progress)}%`}
    </div>
  </Html>
  )
}

export default Loader
