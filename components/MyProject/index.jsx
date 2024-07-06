"use client";

import React, { useRef } from "react";
import { useScroll } from "@react-three/drei";
import ProjectItem from "./ProjectItem";
import Container from "../ui/Container";
import { myProject } from "./data";
import styles from "./index.module.scss";
import useDevice from "@/hooks/useDevice";
export default function MyProjects() {
    const { isMobile } = useDevice();
    return (
        <section id="projects" className={styles.projectContainer}>
            <Container>
                <div className={styles.projectItem}>
                    <span className={styles.title}>Projects</span>
                    <div className={styles.listProject}>
                        {myProject.map((item, index) => {
                            return <ProjectItem key={index} data={item} isFullWith={index === 0 && !isMobile} />;
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
