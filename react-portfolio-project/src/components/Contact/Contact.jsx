import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ishita.das9038@gmail.com">ishita.das9038@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ishita-das11/">linkedin.com/ishita-das11</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/IshitaD11">github.com/IshitaD11</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/Leetcode.png")} alt="Leetcode icon" />
          <a href="https://leetcode.com/u/ishita_das/">leetcode.com/ishita_das</a>
        </li>
      </ul>
    </footer>
  );
};