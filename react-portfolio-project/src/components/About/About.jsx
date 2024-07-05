import React from 'react';

import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}> About </h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImg.png")} alt="workingWoman" className={styles.workingWomanImg} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="serverImg" />
                        <div className={styles.aboutItemText}>
                            <h3> Backend Developer </h3>
                            <p>
                                Specialized in developing fast and optimized backend systems and APIs using Java and Spring Boot.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/database.png")} alt="dbImg" />
                        <div className={styles.aboutItemText}>
                            <h3> Database Developer </h3>
                            <p>
                                Experienced in designing and managing databases such as MySQL, Oracle SQL, SAP HANA, and PostgreSQL.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/code.png")} alt="leetcodeImg" />
                        <div className={styles.aboutItemText}>
                            <h3> 500+ Leetcode Problem solved </h3>
                            <p>
                                Solved over 500 challenges across platforms such as LeetCode, InterviewBit, demonstrating strong problem-solving skills.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="designImg" />
                        <div className={styles.aboutItemText}>
                            <h3> Frontend enthusiast </h3>
                            <p>
                                Built responsive and intuitive user interfaces using React, HTML, and CSS for personal projects.
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};
