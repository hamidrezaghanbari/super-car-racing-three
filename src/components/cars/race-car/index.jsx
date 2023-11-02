

import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

const RaceCar = forwardRef(({ addCollisions, args = [1.7, 1, 4], mass = 500, setVisible, ...props }, ref) => {
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/race-car/model.gltf')

    const [, api] = useBox(
        () => ({
            mass,
            args,
            allowSleep: false,
            onCollide: (e) => {
                addCollisions()
            },
            ...props
        }),
        ref
    );

    return (
        <mesh ref={ref} api={api} userData={{ id: 'drifter' }} {...props} >

            <mesh geometry={nodes.Mesh_body014.geometry} material={materials.paintRed} />
            <mesh geometry={nodes.Mesh_body014_1.geometry} material={materials.plastic} />
            <mesh geometry={nodes.Mesh_body014_2.geometry} material={materials.window} />
            <mesh geometry={nodes.Mesh_body014_3.geometry} material={materials._defaultMat} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft028.geometry} material={nodes.Mesh_wheel_frontLeft028.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft028_1.geometry} material={nodes.Mesh_wheel_frontLeft028_1.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft028_2.geometry} material={nodes.Mesh_wheel_frontLeft028_2.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft029.geometry} material={nodes.Mesh_wheel_frontLeft029.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft029_1.geometry} material={nodes.Mesh_wheel_frontLeft029_1.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft029_2.geometry} material={nodes.Mesh_wheel_frontLeft029_2.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft030.geometry} material={nodes.Mesh_wheel_frontLeft030.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft030_1.geometry} material={nodes.Mesh_wheel_frontLeft030_1.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft030_2.geometry} material={nodes.Mesh_wheel_frontLeft030_2.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft011.geometry} material={nodes.Mesh_wheel_frontLeft011.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft011_1.geometry} material={nodes.Mesh_wheel_frontLeft011_1.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft011_2.geometry} material={nodes.Mesh_wheel_frontLeft011_2.material} />

        </mesh >
    );
});

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/race-car/model.gltf')


export default RaceCar;
