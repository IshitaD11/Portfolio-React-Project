import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Education.module.css";
import education from "../../data/education.json";

export const Education = () => {
  return (
    <section className={styles.container} id="education" >
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        
        <ul className={styles.certificates}>
          {
            education.map((certificate,id) => {
              return (
              <li key={id} className={styles.certificate}>
                  <a href={certificate.certificateLink} target="_blank" rel="noopener noreferrer">               
                <img src={getImageUrl(certificate.imageSrc)} alt="Education Icon" />
                <div className={styles.certificateDetails}>
                  <h3> {`${certificate.degree}, ${certificate.organisation}`} </h3>
                  <p>{certificate.endDate ? `${certificate.startDate} - ${certificate.endDate}` : `${certificate.startDate}`}</p>
                  <h4 className={styles.specialization}> {certificate.specialization} </h4>
                </div>
                </a>
              </li>
              );
            }

            )
          }
        </ul>
      </div>
      </section>
  )
}
