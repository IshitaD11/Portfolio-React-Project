// eslint-disable-next-line no-unused-vars
import React from 'react';
import { getImageUrl } from '../../utils'

import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.header}> About </h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImg.png")} alt="workingWoman" className={styles.workingWomanImg} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="serverImg" />
                        <div className={styles.aboutItemText}>
                            <h3> Backend Developer </h3>
                            <p>
                                I have experience in developing fast and optimised backend system and APIs using Java and Springboot.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/database.png")} alt="dbImg" />
                        <div className={styles.aboutItemText}>
                            <h3> Database Developer </h3>
                            <p>
                                I vastly worked on designing and working on multiple databases using MySQL, Oracle SQL, SAP Hana.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/code.png")} alt="leetcodeImg" />
                        <div className={styles.aboutItemText}>
                            <h3> 500+ Leetcode Problem solved </h3>
                            <p>
                                I am an expert problem solver and Solved more than 500 problems from Leetcode, CodingNinja, InterviewBit.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="designImg" />
                        <div className={styles.aboutItemText}>
                            <h3> Frontend enthusiast </h3>
                            <p>
                                I have developed responsive frontend projects using React, html, CSS for own learning.
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};
