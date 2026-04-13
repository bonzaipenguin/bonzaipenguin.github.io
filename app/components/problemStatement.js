import React from "react";
import styles from "../studies.module.css";

const ProblemStatement = ({ problem, struggles, impact}) => {
    return (
        <div className={styles.problemStatement}>
            <h2 className={styles.sectionHead}>The Problem</h2>
            <p>{problem}</p>
            <div>
                <h4>Users struggled to:</h4>
                <ul>
                    {struggles.map((struggle, index) => (
                        <li key={index}>{struggle}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>Impact:</h4>
                <ul>
                    {impact.map((impact, index) => (
                        <li key={index}>{impact}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProblemStatement;