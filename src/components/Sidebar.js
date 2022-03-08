import React from 'react';
import styles from "./Sidebar.module.css";
import { GrHomeRounded } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { SiAddthis } from "react-icons/si";
import { Link, useLocation } from 'react-router-dom';



const Sidebar = () => {
    
    const pathLocation = useLocation().pathname;

    const statusHandler = () => {
        localStorage.setItem("statusclick", JSON.stringify(""));
        localStorage.setItem("editTask", JSON.stringify(""));
    }

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.title}>Todo App</div>
            <div className={styles.menuContainer}>
                <ul>
                    <li><Link to="./taskmanager" className={pathLocation === "/taskmanager" ? styles.active : ""}><GrHomeRounded /> <span>Overview</span></Link></li>
                    <li><Link to="./addtask" className={pathLocation === "/addtask" ? styles.active : ""} onClick={statusHandler}><SiAddthis /> <span>Add task</span></Link></li>
                    <li><a href="#1"><BsGithub /> <span>GitHub</span></a></li>
                    <li><a href="#1"><BsInstagram /> <span>Instagram</span></a></li>
                    <li><a href="#1"><GrLinkedinOption /> <span>Linkedin</span></a></li>
                </ul>
                <ul>
                    <li><a href="#1"><FiSettings /><span>Settings</span></a></li>
                    <li><a href="#1"><MdLogout /><span>Log out</span></a></li>
                </ul>
            </div>

        </div>
    );
}
 
export default Sidebar;