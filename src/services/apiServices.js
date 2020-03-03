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