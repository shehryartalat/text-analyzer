import React, { useEffect } from 'react'

export default function (props) {



    const changeMode = () => {


        if (props.mode === false)
          props.setMode(true);
        else
          props.setMode(false)
      }
    
    console.log('props have ',props)
    useEffect(()=>{
    })

    return (
        <div>

            <nav className={`navbar navbar-expand-lg px-2 navbar-light bg-${props.mode === true ? 'light' : 'dark'} text-${props.mode !== true ? 'light' : 'dark'}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-${props.mode !== true ? 'light' : 'dark'}`}>Navbar</a>
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
                                <label className="form-check-label">{props.mode === true ? 'Dark mode' : 'light mode'}</label>
                            </div>

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
