import React, { useRef, useState } from 'react';
import styles from "./Todo.InProgress.completed.module.css";


const InProgress = (props) => {


    const [isActiveEdit, setActiveEdit] = useState(false);

    const listRef = useRef();


    const toggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };



    return (
        <div key={props.id} className={styles.completed}>
                
            <div className={styles.completedHeaderSection}>
                <div className={styles.completedTitle}>{props.title}</div>
                <span>
                    <div ref={listRef} className={` ${styles.menu} ${isActiveEdit ? styles.open  : ""}`} onClick={toggleClass} >
                        <div className={styles.button}></div>
                        <div className={styles.button}></div>
                        <div className={styles.button}></div>
                    </div>
                </span>
            </div>

            <div className={styles.completedMainSection}>
                <p>{props.description}</p>
            </div>

            <div className={styles.completedfooterSection}>
                
                <div className={styles.completedTimeCreated}>
                <p>
                    Created: <span>{props.createdTime}</span>
                </p>
                </div>

                <div className={styles.completedTimeUpdated}>
                <p>
                    updated: <span>{props.updatedTime}</span>
                </p>
                </div>

            </div>


        </div>
    );
}
 
export default InProgress;

