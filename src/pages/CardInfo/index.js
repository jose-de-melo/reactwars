import React from 'react';

//useDispatch
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import CardPeople from '../../components/CardPeople'

import './styles.css'

export default function CardInfo() {
  const state = useSelector(state => state)
  const {currentObject} = state
  //const category = useSelector(state => state.currentCategory)
  const category = 'people'
  const history = useHistory()

  const renderFunctions = {
    'people': (element) => <CardPeople element={currentObject}/>
  }

  function renderCard(){
    return renderFunctions[category](currentObject)
  }

  return (
    <div className="c-info">
      {renderCard()}
      <button className="button-info" type="button" onClick={() => {history.push(`/list/${category}`)}}>Voltar</button>
    </div>
  );
}
