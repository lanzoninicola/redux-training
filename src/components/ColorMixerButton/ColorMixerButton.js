import React from 'react';
import './ColorMixerButton.css'


const ColorMixerButton = ({ name, onClickHandler }) => {
    return (
        <div id="ColorMixerButton" >
            <button className="ColorMixerButton" onClick={onClickHandler} name={name}>{name}</button>
        </div>
    )
}


export default ColorMixerButton;