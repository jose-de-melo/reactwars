import React, { useEffect } from 'react'

import { useHistory } from "react-router-dom";

export default function Home(){
    let history = useHistory();

    function userLogged(){
        let userLogged = JSON.parse(localStorage.getItem("@reactwars/userLogged"));

        if(!userLogged){
            history.push('/login')
        }
    }

    function logout(){
        localStorage.removeItem("@reactwars/userLogged")
        history.push('/login')
    }

    function showListPage(category){
        history.push(`/list/${category}`)
    }

    useEffect(() => { userLogged() }, [])

    return (
        <div>
            <div>HOME</div>
            <button type="button" onClick={() => showListPage('people')}>Listar Personagens</button>
            <button type="button" onClick={() => showListPage('planets')}>Listar Planetas</button>
            <button type="button" onClick={() => showListPage('starships')}>Listar Espaçonaves</button>
            <button type="button" onClick={logout}>Logout</button>
        </div>
    )
}
