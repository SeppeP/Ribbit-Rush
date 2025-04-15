import {Canvas} from "@react-three/fiber";
import Level from "./components/Level.jsx";
import Player from "./components/Player.jsx";

export default function Experience() {
    return (
        <>
            {/*<color args={['orangered']} attach="background" />*/}
            <Level/>
            <Player/>
        </>
    )
}