import React, { useState, useEffect } from 'react'
import { useIntl, FormattedMessage } from 'react-intl'

import { useHistory, Link } from "react-router-dom";
import { verifyLoginOnStorage, verifyStorage } from '../../services/storageServices'

import { TextInput, Button } from 'grommet';
import './styles.css'

export default function Login(props){
  let history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const intl = useIntl()

  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  function verifyFields(){
      if(user === '' || password === ''){
          setError(true)
          setMessage(intl.formatMessage({id: 'messageErrorLogin'}))
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

        <div className="label-input"><FormattedMessage id="labelUser"/></div>

        <TextInput
          className="input"
          size="small"
          dropHeight="small"
          placeholder={intl.formatMessage({id: 'labelUser'})}
          value={user}
          onChange={(event) =>{
              setUser(event.target.value)
          }}
        />

        <div className="label-input"><FormattedMessage id="labelPassword"/></div>

        <TextInput
          className="input"
          size="small"
          type="password"
          dropHeight="small"
          placeholder={intl.formatMessage({id: 'labelPassword'})}
          value={password}
          onChange={(event) =>{
              setPassword(event.target.value)
          }}
        />

        <Button
          className="button"
          label={intl.formatMessage({id: 'action'})}
          onClick={() => {handleLogin()}}
        />

        <div className="div-link">
            <Link className="link" to="/register">
              <FormattedMessage id="messageNoAccount"/>
            </Link>
        </div>

        { (error) ? <div className="div-error">{message}</div> : <span></span>}

      </div>
    </div>
  )
}

