import * as THREE from 'three'

export default function Platform({ position }) {
    const geometry = new THREE.BoxGeometry(1, 0.1, 1)
    const material = new THREE.MeshBasicMaterial({
        color: 'limegreen',
    })

    return (
        <>
            <mesh geometry={geometry} material={material} position={[ position.x, position.y, position.z ]} />
        </>
    )
}