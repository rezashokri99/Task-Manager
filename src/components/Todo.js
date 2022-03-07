import React, { useRef, useState } from 'react';
import { MdMoreVert } from "react-icons/md";
import styles from "./Todo.InProgress.completed.module.css";


const Todo = (props) => {


    const [isActiveEdit, setActiveEdit] = useState(false);

    const listRef = useRef();


    const toggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };


    return (
        <div key={props.id} className={styles.todo}>

            <div className={styles.todoHeaderSection}>
            <div className={styles.todoTitle}>{props.title}</div>
                <div ref={listRef} className={` ${styles.menu} ${isActiveEdit ? styles.open  : ""}`} onClick={toggleClass} >
                    <div className={styles.button}></div>
                    <div className={styles.button}></div>
                    <div className={styles.button}></div>
                </div>
            </div>

            <div className={styles.todoMainSection}>
            <p>{props.description}</p>
            </div>

            <div className={styles.todofooterSection}>
            <div className={styles.todoTimeCreated}>
                <p>
                Created: <span>{props.createdTime}</span>
                </p>
            </div>
            <div className={styles.todoTimeUpdated}>
                <p>
                updated: <span>{props.updatedTime}</span>
                </p>
            </div>
            </div>


        </div>
    );
}
 
export default Todo;