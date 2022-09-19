import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const [length, setLength] = useState(0)
  const [count, setcount] = useState(0)
  const [sentence, setsentence] = useState(0)
  const [copy, setcopy] = useState(0)
  const [clear, setclear] = useState(null)
  const [lenghtShow,setLengthShow] = useState(false)
  const [countshow,setcountshow] = useState(false)
  const [sentenceshow,setsentenceshow] = useState(false)
  const [clears] = useState(false)


  const changeValue = (e) => {

    setValue(e.target.value)
  }

  const findLength = () => {
    setLengthShow(true)
    setcountshow(false)
    setsentenceshow(false)
    setLength(value.length)
  }

  const findcount = () => {
    setcountshow(true)
    setLengthShow(false)
    setsentenceshow(false)
    setcount(value.split(' ').length)
  }

  const findsentence = () => {
    setsentenceshow(true)
    setLengthShow(false)
    setcountshow(false)
    setsentence(value.split('.').length)
  }

  const copytoboard = () => {
    setcopy(navigator.clipboard.writeText(value))
  }

  const clearfield = () => {
    setLengthShow(false)
    setcountshow(false)
    setsentenceshow(false)
    setValue('')
    setLength('0')
    setcount('0')
    setsentence('0')
  };





  return (
    <div className="App container">
      <h1 className='display-1'>Text-Analyzer</h1>

      {/* <input className='form-control my-4' onChange={changeValue} value={value}></input> */}

      <textarea className='form-control my-4' onChange={changeValue} value={value} id="exampleFormControlTextarea1" rows="3"></textarea>
      {/* <button type='button' className='btn btn-primary' onClick={findLength}>Calculate length</button>
      <button type="button" className='btn btn-secondary'>Calculate words</button> */}

      <button type="button" className="btn btn-primary me-md-2" onClick={findLength}>Calculate length</button>
      <button type="button" className="btn btn-secondary me-md-2" onClick={findcount}>Calculate words</button>
      <button type='button' className='btn btn-success me-md-2' onClick={findsentence}>Calculate sentences</button>
      <button type='button' className='btn btn-warning me-md-2' onClick={copytoboard}>Copy to clipboard</button>
      <button type='button' className='btn btn-danger me-md-2' onClick={clearfield}>Clear</button>

      {lenghtShow == true? <p>The length is {length}</p> : ''}
      {countshow == true? <p>The words are {count}</p> : ''}
      {sentenceshow == true? <p>The sentences are {sentence}</p> : ''}


    </div>
  );
}

export default App;
