import { Float, Text } from "@react-three/drei"

const Title = ({ label }) => {
    return (
        <Float floatIntensity={0.25} rotationIntensity={0.25}>
            <Text
                font="/shadow-into-light.woff"
                scale={2.5}
                maxWidth={0.25}
                lineHeight={0.75}
                textAlign="right"
                position={[8.75, 5, 0]}
                rotation-y={- 0.25}
            >
                {label}
                <meshBasicMaterial toneMapped={false} />
            </Text>
        </Float>
    )
}

export default Title