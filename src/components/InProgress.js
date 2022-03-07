import React, { useRef, useState } from 'react';
import styles from "./Todo.InProgress.completed.module.css";


const InProgress = (props) => {


    const [isActiveEdit, setActiveEdit] = useState(false);

    const listRef = useRef();


    const toggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };



    return (
        <div key={props.id} className={styles.progress}>
            <div className={styles.progressHeaderSection}>
            <div className={styles.progressTitle}>{props.title}</div>
                <span>
                    <div ref={listRef} className={` ${styles.menu} ${isActiveEdit ? styles.open  : ""}`} onClick={toggleClass} >
                        <div className={styles.button}></div>
                        <div className={styles.button}></div>
                        <div className={styles.button}></div>
                    </div>
                </span>
            </div>

            <div className={styles.progressMainSection}>
            <p>{props.description}</p>
            </div>

            <div className={styles.progressfooterSection}>
            
            <div className={styles.progressTimeCreated}>
                <p>
                Created: <span>{props.createdTime}</span>
                </p>
            </div>
            
            <div className={styles.progressTimeUpdated}>
                <p>
                updated: <span>{props.updatedTime}</span>
                </p>
            </div>

            </div>

        </div>
    );
}
 
export default InProgress;

