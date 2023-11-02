import { usePlane } from "@react-three/cannon";

const Plane = (props) => {
    const [ref] = usePlane(() => ({
        type: 'Static', material: 'ground', restitution: 0.9,
        friction: 0.3, ...props
    }));


    return (
        <group>

            <mesh ref={ref} receiveShadow position={props.position}>
                <planeGeometry args={[10, 10]} />
                <meshBasicMaterial color={props.bgColor} />
                <meshBasicMaterial color={'#000'} />
            </mesh>

        </group>
    );
}

export default Plane