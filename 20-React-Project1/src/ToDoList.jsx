import React from "react";
import { useState } from "react";
import "./ToDoList.css";
import { v4 as uuidv4 } from 'uuid';

import List from "./components/List/List.jsx"

export const ToDoList = () => {
    const [text, setText] =  useState("");
    const [ToDoList, setToDoList] = useState([]);

    const addItem = ()=>{
      const newToDoItem = {
        id: uuidv4(),
        item: text,
        done: false,
      };
      setToDoList([...ToDoList, newToDoItem]);
      setText("");
    };
    
    console.log("To do list",ToDoList);
  return (
    <div className="ToDoList">
      <h1>To Do List</h1>
      <div className="adder">
        <input type="text" placeholder="Add Items to your List" value={text} onChange={(event) =>setText(event.target.value)} onKeyDown={(e) => {
        if (e.key === "Enter")
            addItem();
        }}/>
        <span  onClick={addItem} >+</span>
      </div>
      <List ToDoList={ToDoList} />
    </div>
  );
};

export default ToDoList; 