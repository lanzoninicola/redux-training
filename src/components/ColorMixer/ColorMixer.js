import React from 'react'
import ColorMixerButton from '../ColorMixerButton/ColorMixerButton'
import { connect } from 'react-redux';

import { setColor } from '../../actionsCreator/actionsCreator'


const ColorMixer = ({ onClickHandler, ...props }) => {
    return (
        <div id="ColorMixer" style={{
            display: 'flex',
            flexDirection: 'row'

        }}>
            <h3>ColorMixer</h3>
            <ColorMixerButton name="red" onClickHandler={props.a_setColor} />
            <ColorMixerButton name="yellow" onClickHandler={props.a_setColor} />
            <ColorMixerButton name="green" onClickHandler={props.a_setColor} />
        </div>
    )
}

const mapDispatch = dispatch => {

    return {
        a_setColor: (e) => dispatch(setColor(e))
    }

}


export default connect(null, mapDispatch)(ColorMixer);