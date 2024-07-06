"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styles from "./index.module.scss";
export default function TsParticles({ id = "tsparticles", config }) {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback((container) => {
        console.log(container);
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const option = useMemo(() => config, []);
    return <Particles id={id} init={particlesLoaded} options={option} className={styles.tsParticles} />;
}
