import Platform from "./Platform.jsx";

export default function Level() {

    const level1= [
        false, true, true, true, false,
        false, true, false, true, false,
        true, true, false, true, true,
        false, false, false, false, false,
        false, false, false, false, false,
    ]

    const positions = [
        {x: -2.6, y: 0, z: -2.6},
        {x: -1.3, y: 0, z: -2.6},
        {x: 0, y: 0, z: -2.6},
        {x: 1.3, y: 0, z: -2.6},
        {x: 2.6, y: 0, z: -2.6},

        {x: -2.6, y: 0, z: -1.3},
        {x: -1.3, y: 0, z: -1.3},
        {x: 0, y: 0, z: -1.3},
        {x: 1.3, y: 0, z: -1.3},
        {x: 2.6, y: 0, z: -1.3},

        {x: -2.6, y: 0, z: 0},
        {x: -1.3, y: 0, z: 0},
        {x: 0, y: 0, z: 0},
        {x: 1.3, y: 0, z: 0},
        {x: 2.6, y: 0, z: 0},

        {x: -2.6, y: 0, z: 1.3},
        {x: -1.3, y: 0, z: 1.3},
        {x: 0, y: 0, z: 1.3},
        {x: 1.3, y: 0, z: 1.3},
        {x: 2.6, y: 0, z: 1.3},

        {x: -2.6, y: 0, z: 2.6},
        {x: -1.3, y: 0, z: 2.6},
        {x: 0, y: 0, z: 2.6},
        {x: 1.3, y: 0, z: 2.6},
        {x: 2.6, y: 0, z: 2.6},
    ]

    return <>
        {/*<axesHelper args={[3]} />*/}
        {positions.map((position, index) => level1[index] ? <Platform key={index} position={position} /> : null)}
    </>
}