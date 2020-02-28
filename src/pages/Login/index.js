import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";

import { TextInput, Button } from 'grommet';
import './styles.css'

export default function Login(){
  let history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  function verifyFields(){
      if(user === '' || password === ''){
          setError(true)
          setMessage('Usuário ou senha inválido!')
          return false;
      }
      else{
          return true;
      }
  }

  function verifyLogin(){
    let logins = JSON.parse(localStorage.getItem("@reactwars/logins"))

    for(let i = 0; i < logins.length; i++){
      let element = logins[i]
      
      if(element.login === user && element.password === password){
        localStorage.setItem("@reactwars/userLogged", JSON.stringify(element))
        return true;
      }
    }

    setError(true)
    setMessage('Usuário não cadastrado ou inválido!')
    return false;
  }

  function handleLogin(){
    if(verifyFields() && verifyLogin()){
      history.push('/home')
    }
  }

  return (
    <div className="container">
      <div className="box">
        <div>ReactWars</div>
        <div>Entrar</div>
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
          label="Entrar"
          onClick={() => {handleLogin()}}
        />

        <div>
            <Link to="/register">
              Sem cadastro ? Registre-se aqui.
            </Link>
        </div>

        { (error) ? <div>{message}</div> : <span></span>}

      </div>
    </div>
  )
}

