import './App.css';
import React, { useState } from 'react';
import AddList from './Components/AddList'
import List from './Components/List'


function App() {


  const[list,setList] = useState([]);

  return (
    <>




      <AddList list={list} setList={setList}></AddList>
      <List list={list} ></List>
    </>

    
  );
}

export default App;
