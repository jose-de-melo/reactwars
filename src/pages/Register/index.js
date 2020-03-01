import React, { useState } from 'react'
//import { useHistory, Link } from "react-router-dom";
import { Link } from "react-router-dom";

import { addUser } from '../../services/storageServices'


import { TextInput, Button } from 'grommet';
import './styles.css'

export default function Register (){
    //let history = useHistory();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    function verifyFields(){
        if(user === '' || password === ''){
            setError(true)
            setMessage('Ambos os campos devem ser preenchidos!')
            return false;
        }
        return true;
    }

    function handleRegister(){
        if(verifyFields()){
            addUser(user, password)
            setError(false)
            setMessage('Cadastro realizado com sucesso!')
        }
    }

    return (
       <div className="c-register">
            <div className="title">ReactWars</div>
            <div className="box">
                

                <div className="action">Registrar Usuário</div>


                <div className="label-input">Usuário</div>
                <TextInput
                    className="input"
                    size="small"
                    dropHeight="small"
                    placeholder="Usuário"
                    value={user}
                    onChange={(event) =>{
                        setUser(event.target.value)
                    }}
                />


                <div className="label-input">Senha</div>
                <TextInput
                    className="input"
                    size="small"
                    type="password"
                    dropHeight="small"
                    placeholder="Senha"
                    value={password}
                    onChange={(event) =>{
                        setPassword(event.target.value)
                    }}
                />

                <Button
                    className="button"
                    label="Registrar"
                    onClick={() => {handleRegister()}}
                />

                <div className="div-link">
                    <Link to="/" className="link">
                        Voltar
                    </Link>
                </div>

            { (message) ? <div className={(error) ? "message error": "message success"} >{message}</div> : <span></span>}

            </div>
            
            
    </div>
    )
}
