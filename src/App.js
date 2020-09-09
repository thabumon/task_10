import React, { useState } from 'react';
import './App.css';
import ToDoList from "./ToDoLists";

const App = () =>{
  const[inputList, setInputList]=useState("");
  const[Items, setItems]=useState([]);

  const itemEvent =(event) =>{
    setInputList(event.target.value);
  };
  const listOfItems =(event) =>{
    setItems((oldItems)=>{
      return[...oldItems,inputList];
    });
    setInputList("");
  };
    const deleteItems=(id) =>{
        console.log("deleted");
        setItems((oldItems) =>{
          return oldItems.filter((arrElem,index) =>{
            return index !== id;
          })
        })
    }
  return(
   <>
   <div class="main_div">
    <div class="center_div">
      <br/>
      <h2>ToDo list</h2>
      <br/>
      <input type="text" placeholder="Add an Item" value={inputList} onChange={itemEvent}/>
      <button onClick={listOfItems}>+</button>
      <ol>
      {
        Items.map((itemval,index)=>{return <ToDoList key={index}
         id={index}
         text={itemval}
         onSelect={deleteItems}/>;
        })
      }
      </ol>
    </div> 
   </div>
  </>
  )
};

export default App;
