export function clearData(){
    return {
        type: 'CLEAR_DATA'
    }
}

export function setCurrentObject(object, category, films, homeworld){
    return {
        type: 'SET_CURRENT_OBJECT',
        object,
        category,
        films,
        homeworld
    }
}

export function fetchData(data, nextPage, previousPage){
    return {
        type: 'FETCH_DATA', 
        data, 
        nextPage, 
        previousPage
    }
}