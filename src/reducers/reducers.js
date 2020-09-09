import { SET_RED, SET_YELLOW, SET_GREEN } from '../actions/actions';

const initialState = {
    choosedColor: 'BLACK'
}

export const changeColor = (state = initialState, action) => {

    switch (action.type) {
        case SET_RED:
            return {
                ...state,
                choosedColor: action.payload
            }
        case SET_YELLOW:
            return {
                ...state,
                choosedColor: action.payload
            }
        case SET_GREEN:
            return {
                ...state,
                choosedColor: action.payload
            }
        default:
            return state
    }
}