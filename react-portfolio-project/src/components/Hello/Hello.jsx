import React from 'react';
import { getImageUrl } from '../../utils';

import styles from "./Hello.module.css";

export const Hello = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hi, I am Ishita </h1>
        <p className={styles.description}> I am an experienced backend developer proficient in Java, SpringBoot, and SQL. 
          Explore my portfolio and reach out to me know more!
        </p>
        <a href='mailto:ishita.das9038@gmail.com' className={styles.contactBtn}> Contact Me </a>
    </div>
    <img src={getImageUrl("hello/Profile.png")} alt="Avatar" className={styles.profileImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}
