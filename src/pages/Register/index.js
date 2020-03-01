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
       <div className="container">
            <div className="box">
                <div>ReactWars</div>

                <div>Registrar Usuário</div>


                <div>Usuário</div>
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


                <div>Senha</div>
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
                    label="Registrar"
                    onClick={() => {handleRegister()}}
                />

                <div>
                <Link to="/">
                   Cancelar
                </Link>
            </div>

            { (message) ? <div className={(error) ? "error": "success"} >{message}</div> : <span></span>}

            </div>
            
            
    </div>
    )
}
