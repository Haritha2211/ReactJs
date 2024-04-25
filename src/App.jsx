import { useState } from 'react'
import './App.css'
import Button from './Pages/Props'

//using strings and numbers and objects and arrays

function App() {
  const [message,setMessage] =useState("Hello React");
  const updateMessage =()=>{
    setMessage("React Js");
  }
  const [count,setCount] =useState(0);
  const incrementCount=()=>{
    setCount(count+1);
  }
  const [user,setUser] =useState({name:"Haritha",dept:"cse"})
  const updateUserName=()=>{
    setUser({...user,name:"Gorijala"});
  }
  const [student,setStudent] =useState(["Haritha","Komali","Lakshmi"]);
  const addStudent=()=>{
    setStudent([...student,"Stu"+(student.length+1)]);
  }
  return (
    <>
      <h4>{message}</h4>
      <button onClick={updateMessage}>updated</button>

      <h1>{count}</h1>
        <button onClick={incrementCount}>count increased</button>

        <h4>{user.name} is worked at {user.dept} dept</h4>
        <button onClick={updateUserName}>user name updated</button>

        <ul>
          {student.map((stu) =>(
            <li key={stu}>{stu}</li>
          ))}
        </ul>
        <button onClick={addStudent}>Add new Student </button>
        <br/>

        <Button label="Click Me"/>
             
    </>
  );
 
}

export default App
