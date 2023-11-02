import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useRaycastVehicle } from '@react-three/cannon';
import { useControls } from './logics/useControls';
import Wheel from './wheel';
import * as THREE from 'three'
import RaceCar from './race-car'
import FireTruck from './fire-truck'
import RaceFutureCar from './race-future-car'
import { useGameStart } from './logics/useGameStart';
import useGame from '../../stores/useGame';
import { useWheelInfo } from './logics/useWheelInfo';

function Car({ variant, radius = 0.7, width = 1.2, height = 0.3, front = 1.3, back = -1.15, steer = 0.6, force = 2000, maxBrake = 1e5, ...props }) {
  const chassis = useRef();
  const wheel1 = useRef();
  const wheel2 = useRef();
  const wheel3 = useRef();
  const wheel4 = useRef();
  const controls = useControls();


  const { wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4 } = useWheelInfo({ radius, width, height, front, back })


  const end = useGame((state) => state.end)
  const restart = useGame((state) => state.restart)
  const blocksCount = useGame((state) => state.blocksCount)
  const addCollisions = useGame((state) => state.addCollisions)


  const [vehicle, api] = useRaycastVehicle(() => ({
    chassisBody: chassis,
    wheels: [wheel1, wheel2, wheel3, wheel4],
    wheelInfos: [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4],
    indexForwardAxis: 2,
    indexRightAxis: 0,
    indexUpAxis: 1
  }));

  const resetCar = () => {
    chassis.current.api.position.set(0, 0.5, 0);
    chassis.current.api.velocity.set(0, 0, 0);
    chassis.current.api.angularVelocity.set(0, 0.5, 0);
    chassis.current.api.rotation.set(0, -Math.PI / 4, 0);
  };

  // camera
  const [smoothedCameraPosition] = useState(() => new THREE.Vector3(10, 10, 10))
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3())

  useFrame((state, delta) => {
    const { forward, backward, left, right, brake, reset } = controls.current;
    for (let e = 2; e < 4; e++) api.applyEngineForce(forward || backward ? force * (forward && !backward ? -1 : 1) : 0, 2);

    for (let s = 0; s < 2; s++) api.setSteeringValue(left || right ? steer * (left && !right ? 1 : -1) : 0, s);

    for (let b = 2; b < 4; b++) api.setBrake(brake ? maxBrake : 0, b);


    let bodyPosition = new THREE.Vector3(0, 0, 0);
    bodyPosition.setFromMatrixPosition(chassis.current.matrixWorld);


    const cameraPosition = new THREE.Vector3()
    cameraPosition.copy(bodyPosition)

    cameraPosition.z += 15.25
    cameraPosition.y += 10.65

    const cameraTarget = new THREE.Vector3()
    cameraTarget.copy(bodyPosition)
    cameraTarget.y += 0.25

    smoothedCameraPosition.lerp(cameraPosition, 10 * delta)
    smoothedCameraTarget.lerp(cameraTarget, 10 * delta)

    state.camera.position.copy(smoothedCameraPosition)
    state.camera.lookAt(smoothedCameraTarget)


    /**
      * Phases
    */
    if (bodyPosition.z < - (blocksCount * 10))
      end()

    if (bodyPosition.y < - 4)
      restart()



    if (reset) {
      resetCar();
      return;
    }
  });


  useGameStart()

  const GetCar = () => {
    switch (variant) {
      case 'race-car':
        return <RaceCar addCollisions={addCollisions} ref={chassis} rotation={props.rotation} position={props.position} angularVelocity={props.angularVelocity} />

      case 'fire-truck':
        return <FireTruck addCollisions={addCollisions} ref={chassis} rotation={props.rotation} position={props.position} angularVelocity={props.angularVelocity} />

      case 'race-future-car':
        return <RaceFutureCar addCollisions={addCollisions} ref={chassis} rotation={props.rotation} position={props.position} angularVelocity={props.angularVelocity} />

      default:
        return null
    }
  }

  return (
    <group ref={vehicle} position={[0, -0.3, 0]}>
      <GetCar />
      <Wheel ref={wheel1} radius={radius} leftSide />
      <Wheel ref={wheel2} radius={radius} />
      <Wheel ref={wheel3} radius={radius} leftSide />
      <Wheel ref={wheel4} radius={radius} />
    </group>
  );
}

export default Car;


