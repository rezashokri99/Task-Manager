import React from 'react';
import styles from "./Sidebar.module.css";
import { GrHomeRounded } from "react-icons/gr";
import { BsFolder2Open } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";



const Sidebar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.title}>Todo App</div>
            <div className={styles.menuContainer}>
                <ul>
                    <li><a href="#1"><GrHomeRounded /> Overview</a></li>
                    <li><a href="#1"><BsGithub /> GitHub</a></li>
                    <li><a href="#1"><BsInstagram /> Instagram</a></li>
                    <li><a href="#1"><GrLinkedinOption /> Linkedin</a></li>
                    <li><a href="#1"><BsFolder2Open /> Projects</a></li>
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