import React, { useState } from "react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import styles from "./AppTodo.module.css";
import { Button, TextareaAutosize } from "@mui/material";

const AddTodo = () => {

    const [form, setForm] = useState({
        title: "",
        status: "",
        description: ""
    });

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


    const submitHandler = (e) => {
        e.preventDefault();
        
        let tasksLS = JSON.parse(localStorage.getItem("taskData"));
        let tasks = [];
        if (tasksLS) {
            tasks = tasksLS;
        }

        let nowDate = Date.now();
        console.log(nowDate);

        let task = {
            id: tasks.length,
            status: form.status,
            title: form.title,
            description: form.description,
            createdTime: "3/6/2022, 11:14:02 PM",
            updatedTime: "3/6/2022, 11:14:02 PM"
        }
        tasks.push()
    };




  return (
    <div className={styles.appTodoContainer}>
      <p className={styles.addTodoTitle}>Add todo</p>

      <form onSubmit={submitHandler}>
        <TextField value={form.title} onChange={changeHandler} name="title" id="outlined-basic" label="Title" variant="outlined" fullWidth />
        
        <FormControl fullWidth className={styles.selectStatusTodo}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="status"
            value={form.status}
            label="status"
            onChange={changeHandler}
          >
            <MenuItem value={"todo"}>To do</MenuItem>
            <MenuItem value={"inProgress"}>In progress</MenuItem>
            <MenuItem value={"completed"}>Completed</MenuItem>
          </Select>
        </FormControl>

        <TextareaAutosize
            name="description"
            value={form.description} 
            onChange={changeHandler}
            aria-label="empty textarea"
            placeholder="Description"
            style={{ width: "100%", minHeight: "fitContent", height: 150, padding: 10, fontSize: 16, borderRadius: "4px"}}
        />

        <Button disabled={form.title && form.status ? false : true} type="submit" variant="contained" color="success" style={{width: "100%", marginTop: "30px"}}>
            Add
        </Button>

      </form>
    </div>
  );
};

export default AddTodo;
