import * as THREE from "three";

export default function Player() {
    const geometry = new THREE.BoxGeometry(.3, .3, .3)
    const material = new THREE.MeshBasicMaterial({
        color: 'orangered',
    })

    return <>
        <mesh geometry={geometry} material={material} position={[ 2.6, .15, 0 ]} />
    </>
}