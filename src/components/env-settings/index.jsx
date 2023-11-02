import { Environment, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"

const EnvSettings = ({ color }) => {
    return (
        <>

            <fog attach="fog" args={[color[0], 10, 50]} />

            <color attach="background" args={color} />

            <ambientLight intensity={0.4} color={color[0]} />

            <directionalLight position={[0, 1000, 0]} intensity={0.2} />

            <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={0.8} />



            <Suspense fallback={null}>
                <Environment preset="night" />
            </Suspense>

            <OrbitControls />
        </>
    )
}

export default EnvSettings