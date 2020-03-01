import { createStore } from 'redux'

const INITIAL_STATE = {
    data: null,
    nextPage: null,
    previousPage: null,
    currentObject: null,
    currentCategory: null
}

function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, data: action.data, nextPage: action.nextPage, previousPage: action.previousPage}
        case 'SET_CURRENT_OBJECT':
            return {...state, currentObject: action.object, currentCategory: action.category}
        case 'CLEAR_DATA':
            return {...state, data: null, nextPage: null, previousPage: null, currentObject: null, currentCategory: null}
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;