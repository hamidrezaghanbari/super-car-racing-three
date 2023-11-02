import { useBox } from "@react-three/cannon";

const Box = (props) => {
    const [ref] = useBox(() => ({ mass: 10, ...props }));

    return (
        <mesh ref={ref}>
            <boxGeometry />
            <meshPhongMaterial color={'#ccc'} />
        </mesh>
    );
};

export default Box;