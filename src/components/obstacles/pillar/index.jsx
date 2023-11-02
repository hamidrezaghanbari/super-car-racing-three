import { useCylinder } from "@react-three/cannon";

const Pillar = ({ args = [0.7, 0.7, 4, 16], onCollide, ...props }) => {
    const [ref] = useCylinder(() => ({ mass: 10, args, ...props }));

    return (
        <mesh ref={ref} castShadow>
            <cylinderGeometry args={args} />
            <meshPhongMaterial />

        </mesh>
    );
};


export default Pillar