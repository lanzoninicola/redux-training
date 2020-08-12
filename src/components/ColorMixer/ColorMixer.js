import React from 'react'
import ColorMixerButton from '../ColorMixerButton/ColorMixerButton'


const ColorMixer = ({ onClickHandler }) => {
    return (
        <div id="ColorMixer" style={{
            display: 'flex',
            flexDirection: 'row'

        }}>
            <ColorMixerButton name="red" onClickHandler={onClickHandler} />
            <ColorMixerButton name="yellow" onClickHandler={onClickHandler} />
            <ColorMixerButton name="green" onClickHandler={onClickHandler} />
        </div>
    )
}


export default ColorMixer;