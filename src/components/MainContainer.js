import React from 'react';
import styles from "./MainContainer.module.css";
import SearchInput from './searchInput/SearchInput';
import { IoNotificationsOutline } from "react-icons/io5";


const Main = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainHeader}>
                <SearchInput />
                <div>
                    <IoNotificationsOutline />
                    
                </div>
            </div>
        </div>
    );
}
 
export default Main;