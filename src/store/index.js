import { createStore } from 'redux'

const INITIAL_STATE = {
    data: {
        currentShowingInfo: '',
        peoples: [],
        planets: [],
        starships: []
    }
}

function information(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'LIST_PEOPLE':
            return state.data.peoples
            break;

        case 'LIST_PLANETS':
            return state.data.planets
            break;

        case 'LIST_STARSHIPS':
            return state.data.starships
            break;

        case 'UPDATE_SHOWING_INFO':
            return {...state, data.currentShowingInfo: action.info}
            break;
    
        default:
            return state;
    }
}

const store = createStore(information);

export default store;