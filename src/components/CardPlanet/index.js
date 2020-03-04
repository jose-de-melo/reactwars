import React, { Component } from 'react';

import { FaTemperatureLow, FaFilm, FaUserAlt} from "react-icons/fa"

export default class CardPlanet extends Component {
  render() {
    return <div className="card-info">
                <div className="info-name">{this.props.element.name}</div>

                <div className="information">
                  <div className="row">
                    <div className="planet">
                      <FaTemperatureLow className="icon" />
                      <div className="info-value">{this.props.element.climate}</div>
                    </div>
                  </div>

                  <div className="row">
                    <div>
                      <FaUserAlt className="icon"/>
                      <div className="info-value">
                      {(this.props.element.population === 'unknown') 
                        ? 'Número de habitantes desconhecido'
                        : `${this.props.element.population} habitantes`
                      }
                      </div>
                    </div >
                  </div>

                  <div className="films">
                    <FaFilm className="icon" />
                    <ul>
                      {this.props.element.films.map(film =>
                        <li key={film}>{film}</li>
                      )}
                    </ul>
                  </div>
                </div>
            </div>;
  }
}