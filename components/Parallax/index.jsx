"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import styles from "./index.module.scss";
import SkillList from "../SkillList";
const Parallax = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="skills" className={styles.parallax}>
            <div ref={ref} className={styles.thumbnail}>
                <motion.span
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={slideInFromTop(0.8)}
                    style={{ y: yText }}
                    className={styles.text}
                >
                    Skills
                </motion.span>
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={slideInFromBottom(0.5)}
                    className={styles.mountains}
                ></motion.div>
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={slideInFromRight(0.6)}
                    className={styles.planets}
                    style={{
                        y: yBg,
                        backgroundImage: `url(/thumbnail/planets.png)`,
                    }}
                ></motion.div>
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={slideInFromLeft(0.6)}
                    style={{ x: yBg }}
                    className={styles.stars}
                ></motion.div>
            </div>
            <SkillList />
        </section>
    );
};

export default Parallax;
