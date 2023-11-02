import { useKeyboardControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { addEffect } from '@react-three/fiber'
import useGame from '../../stores/useGame'
import './styles.css'

export default function GameInterface({ reset }) {
    const time = useRef()
    const collisionsRef = useRef()
    const resultRef = useRef()

    const restart = useGame((state) => state.restart)
    const collisions = useGame((state) => state.collisions)
    const phase = useGame((state) => state.phase)

    const forward = useKeyboardControls((state) => state.forward)
    const backward = useKeyboardControls((state) => state.backward)
    const leftward = useKeyboardControls((state) => state.leftward)
    const rightward = useKeyboardControls((state) => state.rightward)
    const jump = useKeyboardControls((state) => state.jump)

    useEffect(() => {
        const unsubscribeEffect = addEffect(() => {
            const state = useGame.getState()

            let elapsedTime = 0

            if (state.phase === 'playing')
                elapsedTime = Date.now() - state.startTime
            else if (state.phase === 'ended')
                elapsedTime = state.endTime - state.startTime

            elapsedTime /= 1000
            elapsedTime = elapsedTime.toFixed(2)

            if (time.current) {
                time.current.textContent = elapsedTime

            }
        })

        return () => {
            unsubscribeEffect()
        }
    }, [])

    useEffect(() => {

        if (collisionsRef.current) {
            collisionsRef.current.textContent = (collisions ? ' - ' : '') + collisions + ' Points'

        }
    }, [collisions])

    useEffect(() => {
        const isFailed = +(time?.current?.textContent ?? 0) > 20 || +collisions > 10
        if (resultRef?.current) {
            resultRef.current.textContent = isFailed ? 'You Lose the Game (for win you must finish the map in under 20 seconds and with less than 10 negative points)' : 'You win the Match GREAT!'
            resultRef.current.className = `${isFailed ? 'result failure-result' : 'result success-result'}`

        }

    }, [phase])



    return <div className="interface">

        {/* Time */}
        <div ref={time} className="time">0.00</div>
        <div ref={collisionsRef} className="collisions">0</div>

        {/* Restart */}
        {phase === 'ended' && (<div className="restart" onClick={() => { restart(); reset() }}>
            <span>Press to Reset</span>
            <div ref={resultRef} className='result'></div>
        </div>)}

        {/* Controls */}
        <div className="controls">
            <div className="raw">
                <div className={`key ${forward ? 'active' : ''}`}></div>
            </div>
            <div className="raw">
                <div className={`key ${leftward ? 'active' : ''}`}></div>
                <div className={`key ${backward ? 'active' : ''}`}></div>
                <div className={`key ${rightward ? 'active' : ''}`}></div>
            </div>
            <div className="raw">
                <div className={`key large ${jump ? 'active' : ''}`}></div>
            </div>
        </div>

    </div>
}