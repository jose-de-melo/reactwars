import { createStore } from 'redux'

import api from '../services/api'

function getAPIData(category){
    var response = api.get(`/${category}/`)
    return response
}


/**
const INITIAL_STATE ={
    currentInfo: '',
    data: '',
    nextPage: null,
    previousPage: null
}


 */

const INITIAL_STATE = {
    currentShowingInfo: '',
    peoples: [],
    planets: [],
    starships: []
}

function information(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'FETCH_INFO':
            return {...state, peoples: ['Luke Skywalker', 'Jabba The Hut'], planets: ['Naboo']}
    
        default:
            return state;
    }
}

function fetchData(category){
    api.get(`/${category}/`).then((resolve, reject) => {
        
    })
}

const store = createStore(information);

export default store;