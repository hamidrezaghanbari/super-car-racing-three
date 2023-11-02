
import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

const RaceFutureCar = forwardRef(({ addCollisions, args = [1.7, 1, 4], mass = 500, setVisible, ...props }, ref) => {
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/race-futrure/model.gltf')

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
        <mesh ref={ref} api={api} userData={{ id: 'drifter' }} {...props} scale={1.5}>

            <mesh geometry={nodes.Mesh_body015.geometry} material={materials.plastic} />
            <mesh geometry={nodes.Mesh_body015_1.geometry} material={materials.paintBlue} />
            <mesh geometry={nodes.Mesh_body015_2.geometry} material={materials._defaultMat} />
            <mesh geometry={nodes.Mesh_body015_3.geometry} material={materials.window} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft025.geometry} material={nodes.Mesh_wheel_frontLeft025.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft025_1.geometry} material={nodes.Mesh_wheel_frontLeft025_1.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft025_2.geometry} material={nodes.Mesh_wheel_frontLeft025_2.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft026.geometry} material={nodes.Mesh_wheel_frontLeft026.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft026_1.geometry} material={nodes.Mesh_wheel_frontLeft026_1.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft026_2.geometry} material={nodes.Mesh_wheel_frontLeft026_2.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft027.geometry} material={nodes.Mesh_wheel_frontLeft027.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft027_1.geometry} material={nodes.Mesh_wheel_frontLeft027_1.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft027_2.geometry} material={nodes.Mesh_wheel_frontLeft027_2.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft012.geometry} material={nodes.Mesh_wheel_frontLeft012.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft012_1.geometry} material={nodes.Mesh_wheel_frontLeft012_1.material} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft012_2.geometry} material={nodes.Mesh_wheel_frontLeft012_2.material} />

        </mesh>
    );
});

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/race-futrure/model.gltf')

export default RaceFutureCar;


