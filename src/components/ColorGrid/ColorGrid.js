import React from 'react'
import ColorCircle from '../ColorCircle/ColorCirle'
import './ColorGrid.css'

import { connect } from 'react-redux';


const ColorGrid = ({ ...props }) => {

    const { colorChoosed } = props;

    console.log('ColorGrid', colorChoosed)

    let defaultColors = ['#ff0000', '#ffff00', '#00ff00']

    let ColorGrid = defaultColors.map((defaultColor, index) => {
        return <ColorCircle key={index} defaultColor={defaultColor} colorChoosed={colorChoosed} />
    })

    return (
        <div id="ColorGrid" className="ColorGrid" style={{ borderColor: `${colorChoosed}` }}>
            {ColorGrid}
        </div>
    )
}

const mapState = (state) => {
    console.log('mapState - state', state)
    return {
        colorChoosed: state.choosedColor
    }
}

export default connect(mapState)(ColorGrid);