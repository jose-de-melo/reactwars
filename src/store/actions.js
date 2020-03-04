export function clearData(){
    return {
        type: 'CLEAR_DATA'
    }
}

export function setCurrentObject(object, category){
    return {
        type: 'SET_CURRENT_OBJECT',
        object,
        category,
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