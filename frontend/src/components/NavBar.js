import React, {useState} from 'react'
import axios from 'axios'
import './NavBar.css';

function NavBar({cogWheel, logo}){
    return (
        <div className='nav'>
            <div id='logo'>
                <img width="60%" src = {logo} alt='mealmate navbar'/>
            </div>

            <button id='cogwheel'>
            <img src={cogWheel} alt='Settings'/>
            </button>
        </div>
    )
}

export default NavBar;