import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl'
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
                        ? <FormattedMessage id="unknownHabitants"/>
                        : <span>{this.props.element.population} <FormattedMessage id="habitants"/></span>
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