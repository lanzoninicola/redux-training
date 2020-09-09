import { SET_RED, SET_YELLOW, SET_GREEN, SET_BLACK } from '../actions/actions';

export const setColor = (e) => {

    let action = {}

    console.log('setColor', e.target.name)

    switch (e.target.name) {
        case 'red':
            return {
                ...action,
                type: SET_RED,
                payload: '#ff0000'
            }
        case 'yellow':
            return {
                ...action,
                type: SET_YELLOW,
                payload: '#ffff00'
            }
        case 'green':
            return {
                ...action,
                type: SET_GREEN,
                payload: '#00ff00'
            }
        default:
            return {
                ...action,
                type: SET_BLACK,
                payload: '#000000'
            }
    }

}