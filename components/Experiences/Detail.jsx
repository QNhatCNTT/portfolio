import React from "react";
import styles from "./Detail.module.scss";
export default function Detail({ position, company, time, description, projectName, teamSize, responsibilities }) {
    return (
        <div className={styles.detailContainer}>
            <div className={styles.detailData}>
                <h3 className={styles.position}>{position}</h3>
                <p className={styles.company}>
                    {company}&nbsp;|&nbsp;{time}
                </p>
                {projectName && (
                    <p className={styles.content}>
                        <strong>Project name:</strong>&nbsp;{projectName}&nbsp;|&nbsp;{teamSize}
                    </p>
                )}
                {description && (
                    <p className={styles.content}>
                        <strong>Description:</strong>&nbsp;{description}
                    </p>
                )}
                {!!responsibilities?.length && (
                    <div className={styles.content}>
                        <strong>Responsibilities:</strong>
                        <ul>
                            {responsibilities.map((res, index) => (
                                <li key={index}>{res}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
