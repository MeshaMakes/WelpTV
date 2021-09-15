import logo from "../logo.svg"
import React from 'react'

const Navbar = () => {
    return (
        <div style={{border: "solid 0.1px #ffffff", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img style={{color: 'red', width: "50px"}} src={logo}></img>

            <button style={{backgroundColor: '#00ff0050', borderLeft: 'solid 5px #00ff00'}} >
                <img style={{color: 'red', width: "50px"}} src={logo}></img>
            </button>
        </div>
    )
}

export default Navbar
