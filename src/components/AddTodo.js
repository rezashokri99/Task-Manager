import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import styles from "./AppTodo.module.css";
import { Button, TextareaAutosize } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Notify from "./Notify";



const AddTodo = ({dispatchData}) => {

    const editTask = JSON.parse(localStorage.getItem("editTask"));
    const [form, setForm] = useState(editTask ? editTask : {
        title: "",
        status: JSON.parse(localStorage.getItem("statusclick")) ? JSON.parse(localStorage.getItem("statusclick")) : "" ,
        description: ""
    });

    const navigate = useNavigate();


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

        let nowDate = new Date();
        nowDate = nowDate.toLocaleString();

        if (editTask) {
          const indexTask = tasks.findIndex((task) => task.id === editTask.id);
          const task = tasks.find((task) => task.id === editTask.id);

          const newTask = {
            ...task,
            ...form,
            updatedTime: nowDate
          };
          tasks[indexTask] = newTask;

          localStorage.setItem("taskData", JSON.stringify(tasks));

          localStorage.setItem("editTask", JSON.stringify(""));
          dispatchData({type: "AFTEREDIT"})
          Notify(`Editing applied successfully.`, "success");

        } else {
          let newTask = {
            id: tasks.length,
            status: form.status,
            title: form.title,
            description: form.description,
            createdTime: nowDate,
            updatedTime: nowDate
          }

          tasks.push(newTask);


          localStorage.setItem("taskData", JSON.stringify(tasks));
          dispatchData({type: "ADD"});
          Notify(`${newTask.title} successfully added to ${newTask.status === "todo" ? "do" : newTask.status}.`, "success");
        }

        
        navigate("/taskmanager");
    };




  return (
    <div className={styles.appTodoContainer}>
      <p className={styles.addTodoTitle}>{editTask ? "Edit todo" : "Add todo"}</p>

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
            {editTask ? "Edit" : "Add"}
        </Button>

      </form>
    </div>
  );
};

export default AddTodo;
