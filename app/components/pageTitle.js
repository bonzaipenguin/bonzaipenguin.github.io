import React from "react";
import styles from "../studies.module.css";

const PageTitle = ({ study, subtitle }) => {
    return (
       <header className={styles.header}>
            <div className={styles.title}>
                <h1>{study}</h1>
                <p>{subtitle}</p>
            </div>
       </header>
    );
}

export default PageTitle;