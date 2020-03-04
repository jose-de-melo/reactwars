import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FormattedMessage } from 'react-intl'

import { fetchData, clearData, setCurrentObject } from '../../store/actions'
import { getDataFromCategory, getPageData, getNameFilms, getNameForPlanet, getSpecies} from '../../services/apiServices'

import './styles.css'

export default function CardList() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()
    let { category } = useParams()


    function renderDescriptionPeople(element){
        return <div>
                    {element.gender}, {element.height} cm, {element.mass} kg
                </div>
    }

    function renderDescriptionPlanets(element){
        return <div>
                    {element.climate}, {element.population} <FormattedMessage id="habitants"/>
                </div>
    }

    function renderDescriptionStarships(element){
        return <div>
                    {element.passengers} <FormattedMessage id="passengers"/>, {element.cost_in_credits} <FormattedMessage id="credits"/>
                </div>
    }

    const descriptionFunctions = {
        'people': renderDescriptionPeople,
        'planets': renderDescriptionPlanets,
        'starships': renderDescriptionStarships
    }

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

    async function moreInfo(object){
        if(object.films)
            object.films = await getNameFilms(object.films)

        if(object.homeworld)
            object.homeworld = await getNameForPlanet(object.homeworld.split("/api/")[1])

        if(object.species)
            object.species = await getSpecies(object.species[0])

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
             <div>
                <button className="b-home" type="button" onClick={goBackHome}>Home</button>
            </div>

            <div id="title-list" className="title-list">
                <FormattedMessage id={category}/>
            </div>

            <div className="list">

                {   (state.data) 
                    ? 
                    state.data.map(element =>
                        <div className="card-list" key={element.name}>
                            <div className="name-element">{element.name}</div>
                            <div className="description">
                                {descriptionFunctions[category](element)}
                            </div>
                            <button className="button-card buttonCard" type="button" onClick={() => moreInfo(element)}>
                                <FormattedMessage id="buttonList"/>
                            </button>
                        </div>
                    )
                    :
                    <div className="loading"><FormattedMessage id="loading"/></div>}
            </div>
        
            <div className="buttons-action">
                {(state.previousPage)
                    ? <button className="button-action" type="button" onClick={() => getPage('previousPage')}><FormattedMessage id="buttonPrevious"/></button> 
                    : <button disabled className="button-action" type="button"><FormattedMessage id="buttonPrevious"/></button> 
                }
                
                <a className="button-action" href="#title-list"><FormattedMessage id="buttonTop"/></a>

                {(state.nextPage)
                    ? <button className="button-action" type="button" onClick={() => getPage('nextPage')}><FormattedMessage id="buttonNext"/></button>
                    : <button disabled className="button-action" type="button"><FormattedMessage id="buttonNext"/></button>
                }
            </div>
        </div>
    );
}