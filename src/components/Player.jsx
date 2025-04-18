import * as THREE from "three";
import {useKeyboardControls} from "@react-three/drei";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";

export default function Player() {
    const canJump = useRef(true)

    const geometry = new THREE.BoxGeometry(.3, .3, .3)
    const material = new THREE.MeshBasicMaterial({
        color: 'orangered',
    })

    const [subscribeKeys] = useKeyboardControls();

    const $player = useRef(null);

    subscribeKeys(
        (state) => state.forward,
        (isPressed) => {
            if (isPressed) jump(-1.3, 0)
        }
    )

    subscribeKeys(
        (state) => state.right,
        (isPressed) => {
            if (isPressed) jump(0, -1.3)
        }
    )

    subscribeKeys(
        (state) => state.backward,
        (isPressed) => {
            if (isPressed) jump(1.3, 0)
        }
    )

    subscribeKeys(
        (state) => state.left,
        (isPressed) => {
            if (isPressed) jump(0, 1.3)
        }
    )

    const jump = (x, z) => {
        if (!$player.current || !canJump.current) return
        const mesh = $player.current

        const tl = gsap.timeline({
            onComplete: () => canJump.current = true,
        })

        canJump.current = false;

        tl.to(mesh.position, {
            x: mesh.position.x + x,
            duration: 1,
            ease: 'power1.inOut',
        }, 0)

        tl.to(mesh.position, {
            z: mesh.position.z + z,
            duration: 1,
            ease: 'power2.inOut',
        }, 0)

        tl.to(mesh.position, {
            y: mesh.position.y + 0.5,
            duration: 0.4,
            ease: 'power1.out',
        }, 0)

        tl.to(mesh.position, {
            y: .15,
            duration: 0.5,
            ease: 'power1.in',
        }, 0.5)
    }


    return <>
        <mesh ref={$player} geometry={geometry} material={material} position={[2.6, .15, 0]}/>
    </>
}