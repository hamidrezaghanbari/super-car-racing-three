import { forwardRef } from 'react';
import { useCylinder } from '@react-three/cannon';

const Wheel = forwardRef(({ radius = 0.7, leftSide, ...props }, ref) => {

    useCylinder(() => ({ mass: 1, type: 'Kinematic', material: 'wheel', collisionFilterGroup: 0, args: [radius, radius, 0.5, 16], ...props }), ref);
    
    return (
        <mesh ref={ref}>
            <mesh rotation={[0, 0, ((leftSide ? 1 : -1) * Math.PI) / 2]}>
             
            </mesh>
        </mesh>
    );
});

export default Wheel;

