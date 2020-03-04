import React from 'react';

//useDispatch
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import CardPeople from '../../components/CardPeople'
import CardPlanet from '../../components/CardPlanet'
import CardStarship from '../../components/CardStarship'

import './styles.css'

export default function CardInfo() {
  const currentObject = useSelector(state => state.currentObject)
  const category = useSelector(state => state.currentCategory)
  const history = useHistory()

  console.log(currentObject)

  const renderFunctions = {
    'people': (element) => <CardPeople element={element}/>,
    'planets': (element) => <CardPlanet element={element}/>,
    'starships': (element) => <CardStarship element={element}/>
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
