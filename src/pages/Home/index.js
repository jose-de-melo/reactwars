import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { FormattedMessage } from 'react-intl'

import { verifyStorage, removeUserLogged } from '../../services/storageServices'

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
        <div>
            <div><FormattedMessage id="home" /></div>
            <button type="button" onClick={() => showListPage('people')}>Listar Personagens</button>
            <button type="button" onClick={() => showListPage('planets')}>Listar Planetas</button>
            <button type="button" onClick={() => showListPage('starships')}>Listar Espaçonaves</button>
            <button type="button" onClick={logout}>Logout</button>
        </div>
    )
}