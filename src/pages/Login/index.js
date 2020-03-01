import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'

import { useHistory, Link } from "react-router-dom";
import { verifyLoginOnStorage, verifyStorage } from '../../services/storageServices'

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
          setMessage('Login inválido!')
          return false;
      }
      return true;
  }

  function verifyLogin(){
    if(verifyLoginOnStorage(user, password))
      return true

    setError(true)
    setMessage('Login inválido!')
    return false;
  }

  function handleLogin(){
    if(verifyFields() && verifyLogin()){
      history.push('/')
    }
  }

  function getUserLogged(){
    if(verifyStorage()){
        history.push('/')
    }
  }

  useEffect(() => getUserLogged() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])

  return (
    <div className="c-login">
    <div className="title">ReactWars</div>
      <div className="box">

        <div className="action"><FormattedMessage id="action"/></div>

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
          label="Entrar"
          onClick={() => {handleLogin()}}
        />

        <div className="div-link">
            <Link className="link" to="/register">
              Sem cadastro ? Registre-se aqui.
            </Link>
        </div>

        { (error) ? <div className="div-error">{message}</div> : <span></span>}

      </div>
    </div>
  )
}

