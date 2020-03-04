import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { addUser } from '../../services/storageServices'

import { useIntl, FormattedMessage } from 'react-intl'

import { TextInput, Button } from 'grommet';
import './styles.css'

export default function Register (){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    const intl = useIntl()

    function verifyFields(){
        if(user === '' || password === ''){
            setError(true)
            setMessage(intl.formatMessage({id: 'messageErrorRegister'}))
            return false;
        }
        return true;
    }

    function handleRegister(){
        if(verifyFields()){
            addUser(user, password)
            setError(false)
            setMessage(intl.formatMessage({id: 'messageSuccessRegister'}))
        }
    }

    return (
       <div className="c-register">
            <div className="title">ReactWars</div>
            <div className="box">
                

                <div className="action"><FormattedMessage id="actionRegister"/></div>


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
                    label={intl.formatMessage({id: 'actionRegister'})}
                    onClick={() => {handleRegister()}}
                />

                <div className="div-link">
                    <Link to="/" className="link">
                        <FormattedMessage id="linkRegister"/>
                    </Link>
                </div>

            { (message) ? <div className={(error) ? "message error": "message success"} >{message}</div> : <span></span>}

            </div>
            
            
    </div>
    )
}
