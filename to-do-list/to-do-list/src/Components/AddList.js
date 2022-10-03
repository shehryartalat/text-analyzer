import React, { useEffect, useState } from 'react'

export default function AddList(props) {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])


  useEffect(()=>{

  },[props.list])
  const input = (e) => {

    setTodo(e.target.value)
  }

  const inputValue = () => {
    if (todo === "") {
      alert("Must be required.")
    }
    else {

      // let x = props.list;
      // x.push({ name: todo });

      props.setList(list=>[...list,{'name':todo}]);
      localStorage.setItem('data', props.list)
    }
  }

  return (
    <div className="pt-5 page-content container" id="page-content">
      <h4 className="card-title">Todo list</h4>
      <div className="add-items d-flex">
        <input type="text" className="form-control todo-list-input" value={todo} onChange={input} placeholder="What do you need to do today?" />
        <button className="mx-4 add btn btn-primary font-weight-bold todo-list-add-btn" onClick={inputValue}>Add</button>
      </div>
    </div>
  );
};