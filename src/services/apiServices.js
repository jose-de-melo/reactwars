import api from './api'

export async function getDataFromCategory(category) {
    return await api.get(`/${category}/`)
}

export async function getPageData(route){
    return await api.get(route)
}