import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const [length, setLength] = useState(0)
  const [count, setcount] = useState(0)
  const [sentence, setsentence] = useState(0)
  const [copy, setcopy] = useState(0)
  const [clear, setclear] = useState(null)
  const [lenghtShow, setLengthShow] = useState(false)
  const [countshow, setcountshow] = useState(false)
  const [sentenceshow, setsentenceshow] = useState(false)
  const [clears, setclears] = useState(false)
  const [mode, setMode] = useState(false)
  const [shift, setshift] = useState(false)


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


  // useEffect(()=>{},[])




  const changeMode = () => {


    if (mode === false)
      setMode(true);
    else
      setMode(false)
  }

  const changeshift = () => {

    if (shift === false)
      setshift(true);
    else
      setshift(false)
  }




  return (
    <div className={`App  ${mode !== true ? 'dark' : 'light'}`}>
      <nav className={`navbar navbar-expand-lg navbar-light bg-${mode === true ? 'light' : 'dark'} text-${mode !== true ? 'light' : 'dark'}`}>
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form className="d-flex">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox"
                  onChange={changeMode}
                  role="switch" id="flexSwitchCheckDefault"></input>
                <label className="form-check-label">{mode === true ? 'Dark mode' : 'light mode'}</label>
              </div>

            </form>
          </div>
        </div>
      </nav>


      {/* <h1 className='display-1'>Text-Analyzer</h1> */}

      <div className='container'>
        <textarea className={`form-control my-4 bg-${mode === true ? 'light' : 'dark'} text-${mode !== true ? 'light' : 'dark'}`} onChange={changeValue} value={value} id="exampleFormControlTextarea1" rows="3"></textarea>

        <button type="button" className="btn btn-primary me-md-2" onClick={findLength}>Calculate length</button>
        <button type="button" className="btn btn-secondary me-md-2" onClick={findcount}>Calculate words</button>
        <button type='button' className='btn btn-success me-md-2' onClick={findsentence}>Calculate sentences</button>
        <button type='button' className='btn btn-warning me-md-2' onClick={copytoboard}>Copy to clipboard</button>
        <button type='button' className='btn btn-danger me-md-2' onClick={clearfield}>Clear</button>

        {lenghtShow == true ? <p>The length is {length}</p> : ''}
        {countshow == true ? <p>The words are {count}</p> : ''}
        {sentenceshow == true ? <p>The sentences are {sentence}</p> : ''}


      </div>


    </div>
  );
}

export default App;
