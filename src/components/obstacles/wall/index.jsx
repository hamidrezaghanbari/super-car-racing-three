import { useBox } from "@react-three/cannon"

const Wall = {}

function RightWall(props) {
    const [ref] = useBox(() => ({
        mass: 100000,
        position: [6, 2.5, props.z ?? 0],

    }))

    return (
        <mesh ref={ref} castShadow receiveShadow>
            <boxGeometry args={[2, 5, 10]} />
            <meshPhongMaterial color={'#000'} />
        </mesh>
    )
}

function LeftWall(props) {
    const [ref] = useBox(() => ({
        mass: 100000,
        position: [-6, 2.5, props.z ?? 0],
    }))

    return (
        <mesh ref={ref} castShadow receiveShadow>
            <boxGeometry args={[2, 5, 10]} />
            <meshBasicMaterial color={'#000'} />
        </mesh>
    )
}

function EndWall(props) {
    const [ref] = useBox(() => ({
        mass: 100000,
        position: [0, 2.5, props.z],
    }))

    return (
        <mesh ref={ref} castShadow receiveShadow>
            <boxGeometry args={[10, 5, 2]} />
            <meshBasicMaterial color={'#000'} />
        </mesh>
    )
}

Wall.RightWall = RightWall
Wall.LeftWall = LeftWall
Wall.EndWall = EndWall


export default Wall