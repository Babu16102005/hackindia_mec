import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import * as THREE from 'three';

const RobotModel = () => {
    // Use a reliable CDN for the rawgit files
    const colladaUrl = 'https://cdn.jsdelivr.net/gh/Verlangieri/robot-animation@master/app/obj/boule.DAE';

    // Suppress warnings temporarily if loader complains
    const [collada, setCollada] = useState(null);

    useEffect(() => {
        const loader = new ColladaLoader();
        loader.load(colladaUrl, (result) => {
            // Traverse the loaded model to apply a custom premium material
            result.scene.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshPhysicalMaterial({
                        color: 0x10b981, // Emerald green to match the theme
                        emissive: 0x10b981, // Stronger green glow
                        emissiveIntensity: 0.2, // Noticeable glow
                        metalness: 0.6, // Less dark
                        roughness: 0.2,
                        clearcoat: 1.0,
                        clearcoatRoughness: 0.1,
                    });
                }
            });
            setCollada(result);
        });
    }, []);

    const robotGroupRef = useRef();

    useEffect(() => {
        if (collada?.scene) {
            collada.scene.rotation.y = THREE.MathUtils.degToRad(-90);
        }
    }, [collada]);

    useFrame((state) => {
        if (robotGroupRef.current) {
            const time = state.clock.getElapsedTime();

            // Flying hover up and down
            robotGroupRef.current.position.y = Math.sin(time * 2) * 0.5 - 1;

            // Look at mouse
            const targetRotationY = state.pointer.x * (Math.PI / 4);
            const targetRotationX = -state.pointer.y * (Math.PI / 6);

            robotGroupRef.current.rotation.y = THREE.MathUtils.lerp(robotGroupRef.current.rotation.y, targetRotationY, 0.05);
            robotGroupRef.current.rotation.x = THREE.MathUtils.lerp(robotGroupRef.current.rotation.x, targetRotationX, 0.05);
        }
    });

    if (!collada) return null;

    // Reduced scale for a more balanced fit
    return (
        <group ref={robotGroupRef} scale={[1.2, 1.2, 1.2]}>
            <primitive object={collada.scene} />
        </group>
    );
};

const Robot3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <Canvas camera={{ position: [0, 1, 25], fov: 45 }}>
                <ambientLight intensity={3.5} color={0xffffff} />
                <directionalLight position={[0, 100, 50]} intensity={4.5} castShadow />
                <RobotModel />
            </Canvas>
        </div>
    );
};

export default Robot3D;
