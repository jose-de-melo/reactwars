import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FormattedMessage } from 'react-intl'

import { fetchData, clearData, setCurrentObject } from '../../store/actions'
import { getDataFromCategory, getPageData } from '../../services/apiServices'

import './styles.css'

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

    useEffect(() => { getInitialData() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])

    return (
        <div className="c-list">
            <div className="title-list">
                <FormattedMessage id={category}/>
            </div>

            <div>
                <button type="button" onClick={goBackHome}>Página Inicial</button>
            </div>
            

            <div className="list">

                {   (state.data) 
                    ? 
                    state.data.map(element =>
                        <div className="card-list" key={element.name}>
                            <div className="name-element">{element.name}</div>
                            <button className="button-card buttonCard" type="button" onClick={() => moreInfo(element)}>Ver mais</button>
                        </div>
                    )
                    :
                    <div className="loading">Carregando...</div>}
            </div>
        
            <div className="buttons-action">
                <button className="button-action" type="button" onClick={() => getPage('previousPage')}>Página Anterior</button>
                <button className="button-action" type="button" onClick={() => getPage('nextPage')}>Próxima Página</button>
            </div>

            
        
        </div>
    );
}