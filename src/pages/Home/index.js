import React from 'react'

import { useHistory, Link } from "react-router-dom";

export default function Home(){
    let history = useHistory();

    function userLogged(){
        let userLogged = JSON.parse(localStorage.getItem("@reactwars/userLogged"));

        if(userLogged === null){
            history.push('/login')
        }
    }

    userLogged()

    return (
        <div>
            <div>HOME</div>
        </div>
    )
}
