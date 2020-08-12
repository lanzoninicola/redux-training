import React from 'react'


const ColorName = ({ colorChoosed }) => {

    let colorName = null;

    switch (colorChoosed) {
        case '#ff0000':
            colorName = 'red';
            break;
        case '#ffff00':
            colorName = 'yellow';
            break;
        case '#00ff00':
            colorName = 'green';
            break;

        default:
            break;
    }


    return (
        <div id="ColorName">
            <p>Color choosed:</p>
            <h3>{colorName}</h3>
        </div >
    )
}


export default ColorName;