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
                    <li><Link to="./taskmanager" className={pathLocation === "/taskmanager" ? styles.active : ""}><GrHomeRounded /> Overview</Link></li>
                    <li><Link to="./addtask" className={pathLocation === "/addtask" ? styles.active : ""} onClick={statusHandler}><SiAddthis /> Add task</Link></li>
                    <li><a href="#1"><BsGithub /> GitHub</a></li>
                    <li><a href="#1"><BsInstagram /> Instagram</a></li>
                    <li><a href="#1"><GrLinkedinOption /> Linkedin</a></li>
                </ul>
                <ul>
                    <li><a href="#1"><FiSettings />Settings</a></li>
                    <li><a href="#1"><MdLogout />Log out</a></li>
                </ul>
            </div>

        </div>
    );
}
 
export default Sidebar;