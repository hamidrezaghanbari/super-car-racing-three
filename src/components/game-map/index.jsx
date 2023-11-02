import { Fragment } from "react"
import { Box, Pillar, Plane, Wall } from "../obstacles"
import { Flag } from ".."
import useGame from "../../stores/useGame"

const Map = () => {
    const blocksCount = useGame((state) => state.blocksCount)

    return (
        <>
            {Array.from({ length: blocksCount + 1 }).map((_, idx) => (
                <Fragment key={idx}>
                    <Plane position={[0, 0, -(idx) * 10]} rotation={[-Math.PI / 2, 0, 0]} userData={{ id: 'floor' }} bgColor={'#ffb344'} />

                    <Wall.RightWall z={-(idx) * 10} />

                    <Wall.LeftWall z={-(idx) * 10} />

                    {idx <= blocksCount - 2 && <>
                        <Box position={[Math.floor(Math.random() * 10) - 4, 2.5, -(idx + 1) * 10]} userData={{ health: 80 }} />

                        <Pillar position={[Math.floor(Math.random() * 10) - 4, 2.5, -(idx + 1) * 10]} userData={{ health: 100 }} />

                        <Box position={[Math.floor(Math.random() * 10) - 4, 2.5, -(idx + 1) * 10]} userData={{ health: 80 }} />
                    </>}

                    {idx === blocksCount && <>
                        <Flag position={[0, 2, -idx * 10]} />

                        <Wall.EndWall z={-(idx + 0.6) * 10} />
                    </>}
                </Fragment>
            ))}
        </>
    )
}

export default Map