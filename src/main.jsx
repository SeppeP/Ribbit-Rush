import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './reset.css'
import './index.css'
import Experience from './Experience.jsx'
import {Canvas} from "@react-three/fiber";
import {KeyboardControls} from "@react-three/drei";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <KeyboardControls map={[
            {name: 'forward', keys: ['ArrowUp', 'KeyW']},
            {name: 'right', keys: ['ArrowRight', 'KeyD']},
            {name: 'backward', keys: ['ArrowDown', 'KeyS']},
            {name: 'left', keys: ['ArrowLeft', 'KeyA']},
        ]}>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [2.5, 4, 6]
                }}
            >
                <Experience/>
            </Canvas>
        </KeyboardControls>
    </StrictMode>
)
