import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { KeyboardControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { EnvSettings, Car, GameInterface, GameMap, Particles, SelectCar, StartLetters, Title } from './components';

const keyboardActions = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
]

export default function App() {
    const [bgColor] = useState(['#FFB344']);
    const [car, setCar] = useState('')
    const mouse = useRef([0, 0])

    return (
        <>
            {!car ? <SelectCar setRacingCar={setCar} />
                : (<KeyboardControls map={keyboardActions}>
                    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 50 }}>

                        <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
                            <StartLetters />

                            <GameMap />

                            <Particles count={10000} mouse={mouse} />

                            {car === 'red-car' && <Car variant="race-car" width={0.9} front={1.0} back={-1} force={5000} position={[0, 0, 0]} rotation={[0, Math.PI, 0]} angularVelocity={[0, 1, 0]} wheelRadius={2} />}
                            {car === 'blue-car' && <Car variant="race-future-car" width={1.2} front={1.1} back={-1.2} force={3000} position={[0, 0, 0]} rotation={[0, Math.PI, 0]} angularVelocity={[0, 1, 0]} wheelRadius={2} />}
                            {car === 'fire-truck' && <Car variant="fire-truck" width={0.9} front={1.2} back={-1} force={2000} position={[0, 0, 0]} rotation={[0, Math.PI, 0]} angularVelocity={[0, 1, 0]} wheelRadius={2} />}

                        </Physics>


                        <Perf />

                        <EnvSettings color={bgColor} />

                        <Title label="Racing Game" />
                    </Canvas>


                    <GameInterface reset={() => setCar('')} />

                </KeyboardControls>)
            }
        </>
    );
}
