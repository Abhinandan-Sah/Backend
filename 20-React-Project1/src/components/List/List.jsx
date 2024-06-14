import React from "react";
import "./List.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const List = ({ ToDoList }) => {
  // let styles= {color: "black", backgroundColor: "white"};
  return (
    <ol className="list">
      {ToDoList.map((listItem) => (
        <li key={listItem.id}>
          <span>{listItem.item}</span>
          <span className="actions">
            <CheckCircleIcon /> 
            <DeleteForeverIcon />
          </span>
        </li>
      ))}
    </ol>
  );
};

export default List;
