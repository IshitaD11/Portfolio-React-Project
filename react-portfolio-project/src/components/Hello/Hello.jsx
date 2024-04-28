// eslint-disable-next-line no-unused-vars
import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Hello.module.css";

export const Hello = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hi, I am Ishita </h1>
        <p className={styles.description}> I am backend developer with 6 years of experience in Java and springboot.
            Reach out if you would like to learn more
        </p>
        <a href='mailto:ishita.das9038@gmail.com' className={styles.contactBtn}> Contact Me</a>
    </div>
    <img src={getImageUrl("hello/Profile.png")} alt="Avatar" className={styles.profileImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}
