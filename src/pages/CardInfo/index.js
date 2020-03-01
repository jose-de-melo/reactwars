import React from 'react';

//useDispatch
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

export default function CardInfo() {
  const object = useSelector(state => state.currentObject)
  const category = useSelector(state => state.currentCategory)
  const history = useHistory()

  return (
    <div>
      {object.name}
      <button type="button" onClick={() => {history.push(`/list/${category}`)}}>Voltar</button>
    </div>
  );
}
