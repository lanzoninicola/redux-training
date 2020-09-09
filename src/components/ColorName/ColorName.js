import React from 'react'
import { connect } from 'react-redux'


const ColorName = ({ ...props }) => {

    let colorName = null;

    switch (props.colorChoosed) {
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


const mapState = (state) => {
    return {
        colorChoosed: state.choosedColor
    }
}


export default connect(mapState)(ColorName);