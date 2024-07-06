"use client";

import React, { Suspense, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const SkillDataProvider = ({ src, width, height, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const animationDelay = 0.2;
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={isInView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
            whileHover={{ scale: 1.1 }}
        >
            <Suspense fallback={null}>
                <Image src={src} width={width} height={height} alt="skill image" loading="lazy" />
            </Suspense>
        </motion.div>
    );
};

export default SkillDataProvider;
