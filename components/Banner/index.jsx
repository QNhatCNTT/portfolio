"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop, sliderVariants } from "@/utils/motion";
import { Button } from "../ui/MovingBorders";
import Container from "../ui/Container";
import styles from "./index.module.scss";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
export default function Banner() {
    return (
        <motion.section initial="hidden" animate="visible" className={styles.bannerContainer} id="about-us">
            <motion.div variants={slideInFromTop()} className={styles.topBanner}>
                <Button
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    className={styles.title}
                    borderRadius="10px"
                    style={{
                        background: "rgb(4,7,29)",
                        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                        borderRadius: "10px",
                    }}
                >
                    <span>
                        Welcome to <span className={styles.styling}>My Portfolio</span>
                    </span>
                </Button>
            </motion.div>
            <Container>
                <motion.div initial="hidden" animate="visible" className={styles.bottomBanner}>
                    <motion.div variants={slideInFromLeft(0.5)} className={styles.leftBanner}>
                        <motion.div initial="hidden" animate="visible" variants={textVariants}>
                            <span>+84 96 086 155 | dangquocnhat1998@gmail.com</span>
                        </motion.div>
                        <motion.span
                            initial="initial"
                            animate="animate"
                            variants={slideInFromLeft(0.5)}
                            className={styles.author}
                        >
                            Dang Quoc Nhat
                        </motion.span>
                        <motion.span
                            initial="initial"
                            animate="animate"
                            variants={slideInFromLeft(0.5)}
                            className={styles.role}
                        >
                            Front-end <br /> Developer
                        </motion.span>
                        <motion.img
                            variants={textVariants}
                            animate="scrollButton"
                            src="/images/scroll.png"
                            alt="scroll"
                            className={styles.scrollIcon}
                        />
                    </motion.div>
                    <motion.div variants={slideInFromRight(0.8)} className={styles.rightBanner}>
                        <Image
                            src="/icons/mainIconsdark.svg"
                            alt="work icons"
                            height={650}
                            width={650}
                            loading="lazy"
                        />
                    </motion.div>
                </motion.div>
            </Container>
            <motion.div
                className={styles.slidingTextContainer}
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Front-end Developer
            </motion.div>
        </motion.section>
    );
}
