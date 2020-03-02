import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
//import { FormattedMessage } from 'react-intl'

import { verifyStorage, removeUserLogged } from '../../services/storageServices'

import './styles.css'

export default function Home(){
    let history = useHistory();

    function userLogged(){
        if(!verifyStorage())
            history.push('/login')
    }

    function logout(){
        removeUserLogged()
        history.push('/login')
    }

    function showListPage(category){
        history.push(`/list/${category}`)
    }

    useEffect(() => { 
        userLogged()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="c-home">
            <div className="title-home">ReactWars</div>
            <div className="div-cards">
                <span className="card-home">
                    <img src="images/luke.png" alt="Luke Skywalker"/>
                    <h3 className="title-card">Personagens</h3>
                    <div className="info-card">Informações sobre todos os personagens dos sete primeiros filmes</div>
                    <button className="button-card" type="button" onClick={() => showListPage('people')}>Listar Personagens</button>
                </span>

                <span className="card-home">
                    <img src="images/tatooine.jpg" alt="Tatooine"/>
                    <h3 className="title-card">Planetas</h3>
                    <div className="info-card">Informações sobre todos os planetas contidos nos sete primeiros filmes</div>
                    <button className="button-card" type="button" onClick={() => showListPage('planets')}>Listar Planetas</button>
                </span>

                <span className="card-home">
                    <img src="images/millenium.jpg" alt="Millenium Falcom"/>
                    <h3 className="title-card">Espaçonaves</h3>
                    <div className="info-card">Informações sobre todos as espaçonaves vistas nos sete primeiros filmes</div>
                    <button className="button-card" type="button" onClick={() => showListPage('starships')}>Listar Espaçonaves</button>
                </span>

            </div>
            <button className="button-home" type="button" onClick={logout}>Logout</button>
        </div>
    )
}