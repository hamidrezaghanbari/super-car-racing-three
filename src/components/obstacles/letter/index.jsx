import { useBox } from '@react-three/cannon';
import { useMemo } from 'react';
import { useLoader } from 'react-three-fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { extend } from '@react-three/fiber'

extend({ TextGeometry })


const Letter = (props) => {
    const [ref] = useBox(() => ({ mass: 100, ...props }));

    const font = useLoader(FontLoader, '/IBM_Plex_Serif_Bold.json');

    const config = useMemo(
        () => ({
            font,
            size: 1.5,
            height: 0.4,
            curveSegments: 24,
            bevelEnabled: false,
            bevelThickness: 0,
            bevelSize: 0.3,
            bevelOffset: 0,
            bevelSegments: 10
        }),
        [font]
    );

    return (
        <mesh ref={ref}>
            <textGeometry args={[props.children, config]} />
            <meshPhongMaterial />
        </mesh>
    );
};

export default Letter