import React from "react";
import styles from "../studies.module.css";

const MyRole = ({ role, highlights }) => {
    return (
        <div className={styles.myRole}>
            <h2 className={styles.sectionHead}>My Role</h2>
            <p><b>{role}</b></p>
            <ul>
                {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyRole;