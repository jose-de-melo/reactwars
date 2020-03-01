import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import { fetchData, clearData, setCurrentObject } from '../../store/actions'
import { getDataFromCategory, getPageData } from '../../services/apiServices'

export default function CardList() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    let { category } = useParams()

    function setData(data){
        dispatch(fetchData(data.data.results, data.data.next, data.data.previous))
    }

    async function getInitialData(){
        if(!state.data){
            let response = await getDataFromCategory(category)
            setData(response)
        }
    }

    async function getPage(page){
        if(state[page]){
            let response = await getPageData(state[page].split("/api/")[1])
            setData(response)
        }
    }

    function moreInfo(object){
        dispatch(setCurrentObject(object, category))
        history.push('/info')
    }

    function goBackHome(){
        dispatch(clearData())
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