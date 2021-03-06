import api from './api'

export async function getDataFromCategory(category) {
    return await api.get(`/${category}/`)
}

export async function getPageData(route){
    return await api.get(route)
}

export async function getPlanetName(path){
    return (await api.get(path)).data.name
}

export async function getNameFilms(listFilms){
    let films = []

    for(let i=0; i < listFilms.length; i++){
        var response = await api.get(listFilms[i].split("/api/")[1])
        films.push(response.data.title)
    }

    return films
}

export async function getNameForPlanet(path){
    return (await api.get(path)).data.name
}

export async function getSpecies(path){
    var response = await api.get(path.split("/api/")[1])
    return response.data.name
}