import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import { getDataFromCategory, getPageData } from '../../services/apiServices'

import {
  useParams
} from "react-router-dom";

export default function CardList() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    let { category } = useParams()

    function fetchData(data){
        dispatch({type: 'FETCH_DATA', data: data.data.results, nextPage: data.data.next, previousPage: data.data.previous})
    }

    async function getInitialData(){
        if(!state.data){
            let response = await getDataFromCategory(category)
            fetchData(response)
        }
    }

    async function getPage(page){
        if(state[page]){
            let response = await getPageData(state[page].split("/api/")[1])
            fetchData(response)
        }
    }

    function moreInfo(object){
        dispatch({type: 'SET_CURRENT_OBJECT', object: object, category: category})
        history.push('/info')
    }

    function goBackHome(){
        dispatch({'type': 'CLEAR_DATA'})
        history.push('/')
    }

    useEffect(() => { getInitialData() }, [])

    return (
        <div>
            {category}
            {
            
                (state.data) 
                ? 
                state.data.map(element =>
                    <div key={element.name}>
                        {element.name}
                        <button type="button" onClick={() => moreInfo(element)}>Ver mais</button>
                    </div>
                )
                :
                <div>Carregando...</div>}
        
            <button type="button" onClick={() => getPage('nextPage')}>Próxima Página</button>
            <button type="button" onClick={() => getPage('previousPage')}>Página Anterior</button>
            <div>
                <button type="button" onClick={goBackHome}>Go Home</button>
            </div>
        
        </div>

        
    );
}
