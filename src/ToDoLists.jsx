import React from 'react'
const ToDoLists= (props) => {
  
return(
    <>
    <div class="todo_style">
        <i class="fa fa-times" onClick={() =>{
            props.onSelect(props.id);
        }}/>
    <li>{props.text}</li>
    </div>
    </>
);
};
export default ToDoLists;