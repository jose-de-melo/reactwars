import React from 'react'

import { useSelector, useDispatch } from "react-redux"
import { useHistory, Link } from "react-router-dom";

export default function Home(){
    const data = useSelector(state => state.peoples)
    const dispatch = useDispatch()
    let history = useHistory();

    function userLogged(){
        let userLogged = JSON.parse(localStorage.getItem("@reactwars/userLogged"));

        if(userLogged === null){
            history.push('/')
        }
    }

    function fetchData(){
        dispatch({type: 'FETCH_INFO'})
    }

    userLogged()

    return (
        <div>
            <div>HOME</div>
            <ul>
                {data.map(element => <li key={element}>{element}</li>)}
            </ul>
            <button type="button" onClick={fetchData}>Listar Personagens</button>
        </div>
    )
}
