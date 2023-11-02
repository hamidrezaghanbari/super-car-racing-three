
import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

const FireTruck = forwardRef(({ addCollisions, args = [1.7, 1, 4], mass = 500, setVisible, ...props }, ref) => {
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/firetruck/model.gltf')

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
        <mesh ref={ref} api={api} userData={{ id: 'drifter' }} {...props}>

            <mesh geometry={nodes.Mesh_wheel_frontLeft036.geometry} material={materials['carTire.020']} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft036_1.geometry} material={materials['_defaultMat.029']} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft036_2.geometry} material={materials['plastic.022']} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft037.geometry} material={materials['carTire.021']} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft037_1.geometry} material={materials['_defaultMat.030']} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft037_2.geometry} material={materials['plastic.023']} />
            <mesh geometry={nodes.Mesh_body011.geometry} material={materials['lightBack.015']} />
            <mesh geometry={nodes.Mesh_body011_1.geometry} material={materials['paintGreen.006']} />
            <mesh geometry={nodes.Mesh_body011_2.geometry} material={materials['plastic.021']} />
            <mesh geometry={nodes.Mesh_body011_3.geometry} material={materials['paintRed.005']} />
            <mesh geometry={nodes.Mesh_body011_4.geometry} material={materials['lightFront.018']} />
            <mesh geometry={nodes.Mesh_body011_5.geometry} material={materials['window.020']} />
            <mesh geometry={nodes.Mesh_body011_6.geometry} material={materials['lightBlue.003']} />
            <mesh geometry={nodes.Mesh_body011_7.geometry} material={materials['_defaultMat.028']} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft038.geometry} material={materials['carTire.022']} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft038_1.geometry} material={materials['_defaultMat.031']} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft038_2.geometry} material={materials['plastic.024']} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft007.geometry} material={materials['carTire.011']} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft007_1.geometry} material={materials['_defaultMat.032']} />
            <mesh geometry={nodes.Mesh_wheel_frontLeft007_2.geometry} material={materials['plastic.025']} />

        </mesh>
    );
});

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/firetruck/model.gltf')

export default FireTruck;

