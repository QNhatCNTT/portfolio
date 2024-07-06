"use client";

import { useRef } from "react";
import { useTransform, motion, useScroll, useInView } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import styles from "./index.module.scss";

export default function CardExperience({
    i,
    title,
    description,
    src,
    link,
    color,
    tech,
    progress,
    range,
    targetScale,
}) {
    const container = useRef(null);
    const isInView = useInView(container, { amount: 0.1, once: false });
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div ref={container} className={styles.cardContainer}>
            <motion.div style={{ backgroundColor: color, scale, top: `calc(${i * 10}px)` }} className={styles.card}>
                <motion.h2
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={slideInFromTop(0.5)}
                    className={styles.title}
                >
                    {title}
                </motion.h2>
                <div className={styles.body}>
                    <motion.div className={styles.description} initial="hidden" animate="visible">
                        <motion.p
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                        >
                            {description}
                        </motion.p>
                        <div className={styles.techList}>
                            {tech.map((t, i) => (
                                <motion.img
                                    key={i}
                                    className={styles.itemTech}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    variants={imageVariants}
                                    src={`/images/${t}.png`}
                                    transition={{ delay: (i + 1) * 0.3 }}
                                    height={50}
                                    width={50}
                                />
                            ))}
                        </div>
                        {link && (
                            <div className={styles.linkBox}>
                                <motion.a
                                    href={link}
                                    target="_blank"
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    variants={slideInFromBottom(0.5)}
                                    className={styles.link}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    Visit
                                </motion.a>
                            </div>
                        )}
                    </motion.div>

                    <div className={styles.imageContainer}>
                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className={styles.inner}
                            style={{ scale: imageScale }}
                        >
                            <motion.img initial="hidden" animate="visible" src={src} alt="image" loading="lazy" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
