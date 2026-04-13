import styles from "../studies.module.css";

const StudyOverview = ({ product,role,scope,timeline }) => {
    return (
        <div className={styles.studyOverview}>
            <h2 className={styles.sectionHead}>Overview</h2>
            <ul>
                <li>
                    <b>Product:</b> <p>{product}</p>
                </li>
                <li>
                    <b>Role:</b> <p>{role}</p>
                </li>
                <li>
                    <b>Scope:</b> <p>{scope}</p>
                </li>
                <li>
                    <b>Timeline:</b> <p>{timeline}</p>
                </li>
            </ul>
        </div>
    );
}

export default StudyOverview;