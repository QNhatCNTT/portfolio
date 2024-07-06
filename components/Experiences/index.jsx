"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import CounterAnimationText from "../ui/CounterAnimation";
import CardExperience from "../ui/Card";
import Container from "../ui/Container";
import { dataExpienceProject1, dataExpienceProject2, projects } from "./data";
import styles from "./index.module.scss";
import Detail from "./Detail";
export default function ExperiencesSection() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "center end"],
    });

    return (
        <section id="experience" className={styles.sectionContainer}>
            <Container classname={styles.containerItem}>
                <div className={styles.heading}>
                    <span className={styles.title}>Experiences</span>
                    <span className={styles.counter}>
                        <CounterAnimationText value={3} />+{" "}
                        <span className={styles.description}>Years Of Experience</span>
                    </span>
                </div>
                <div className={styles.experience} ref={container}>
                    <Detail
                        company={dataExpienceProject1.company}
                        position={dataExpienceProject1.position}
                        description={dataExpienceProject1.description}
                        projectName={dataExpienceProject1.projectName}
                        teamSize={dataExpienceProject1.teamSize}
                        time={dataExpienceProject1.time}
                        responsibilities={dataExpienceProject1.responsibilities}
                    />
                    {projects.map((project, i) => {
                        const targetScale = 1 - (projects.length - i) * 0.05;
                        return (
                            <CardExperience
                                key={`project_${i}`}
                                i={i}
                                {...project}
                                progress={scrollYProgress}
                                range={[i * 0.1, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
                <div className={styles.lastExperience}>
                    <Detail
                        company={dataExpienceProject2.company}
                        position={dataExpienceProject2.position}
                        time={dataExpienceProject2.time}
                        responsibilities={dataExpienceProject2.responsibilities}
                    />
                </div>
            </Container>
        </section>
    );
}
