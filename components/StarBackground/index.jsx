"use client";

import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import { inSphere } from "maath/random/dist/maath-random.esm";

import styles from "./index.module.scss";

const StarBackground = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => inSphere(new Float32Array(6000), { radius: 1.2 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial transparent color="$fff" size={0.002} sizeAttenuation={true} dethWrite={false} />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className={styles.startsCanvas}>
        <Canvas camera={{ position: [0, 0, 1] }}>
            <StarBackground />
            <Preload all />
        </Canvas>
    </div>
);

export default StarsCanvas;
