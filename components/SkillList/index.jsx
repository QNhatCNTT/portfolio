"use client";

import React from "react";
import { motion } from "framer-motion";
import { backend_skill, frontend_skill, other_skill } from "@/constants";
import { slideInFromTop } from "@/utils/motion";
import Container from "../ui/Container";
import SkillDataProvider from "../ui/SkillDataProvider";
import styles from "./index.module.scss";
export default function SkillList() {
    return (
        <div className={styles.containerSection}>
            <Container classname={styles.containerItem}>
                <motion.span initial="hidden" animate="visible" variants={slideInFromTop(0.3)} className={styles.title}>
                    Making apps with modern <span className={styles.styling}>technologies</span>
                </motion.span>

                <div className={styles.listData}>
                    {frontend_skill.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.image}
                            width={image.width}
                            height={image.height}
                            index={1 * index + 1}
                        />
                    ))}
                </div>
                <div className={styles.listData}>
                    {backend_skill.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.image}
                            width={image.width}
                            height={image.height}
                            index={2 * index + 1}
                        />
                    ))}
                </div>
                <div className={styles.listData}>
                    {other_skill.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.image}
                            width={image.width}
                            height={image.height}
                            index={3 * index + 1}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}
