import React from 'react';
import './ColorCircle.css';

const ColorCircle = ({ defaultColor, colorChoosed }) => {



    let colorStyle = {
        backgroundColor: `${defaultColor}`
    }

    if (defaultColor === colorChoosed) {
        colorStyle = {
            ...colorStyle,
            opacity: '1'
        }
    }


    return (
        <div id="ColorCircle">
            <h3>ColorCircle</h3>
            <div className="colorCircle" style={colorStyle}></div>
        </div >
    )
}


export default ColorCircle;


// red 255 0 0
// yellow 255 255 0
// green 0 255 0