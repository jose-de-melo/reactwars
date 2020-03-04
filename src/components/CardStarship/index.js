import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl'
import { FaCoins, FaFilm, FaUserAlt} from "react-icons/fa"

export default class CardStarship extends Component {
  render() {
    console.log(this.props.element)
    return <div className="card-info">
                <div className="info-name">{this.props.element.name}</div>

                <div className="information">
                  <div className="row">
                    <div>
                      <FaCoins className="icon" />
                      <div className="info-value">{this.props.element.cost_in_credits} <FormattedMessage id="credits"/></div>
                    </div>
                  </div>

                  <div className="row">
                    <div>
                      <FaUserAlt className="icon"/>
                      <div className="info-value">
                      {(this.props.element.passengers === 'unknown') 
                        ? <FormattedMessage id="unknownPassengers"/>
                        : <span>{this.props.element.passengers} <FormattedMessage id="passengers"/></span>
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