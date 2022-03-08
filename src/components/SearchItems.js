import React from 'react';
import SearchItem from './SearchItem';
import styles from "./SearchItems.module.css";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';



const SearchItems = ({tasksSearchFiltred, setSearchValue, dispatchData}) => {

    const navigate = useNavigate();

    const goToTaskManager = () => {
        setSearchValue("");
        navigate("/taskmanager")
    }

    return (
        <div className={styles.taskManager}>
            <div className={styles.progressSection}>
                <div className={styles.progressTypeTitle}>
                    <p>Search tasks</p>
                    <span>{tasksSearchFiltred.length}</span>
                </div>
                <Button onClick={goToTaskManager} variant="contained" style={{width: "100%", marginBottom: "30px "}} fullWidth>Go to task manager</Button>
                
                <div className={styles.progressesList}>
                    {
                        tasksSearchFiltred && tasksSearchFiltred.map((task) => <SearchItem key={task.id} dispatchData={dispatchData} {...task} />)
                    }

                </div>
            </div>

        </div>
    );
}
 
export default SearchItems;