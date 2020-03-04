import React, { Component } from 'react';

import { GoGlobe } from "react-icons/go";
import { FaFilm, FaWeight, FaUserAlt, FaTransgender, FaRulerVertical, FaCalendar} from "react-icons/fa"

export default class CardPeople extends Component {

  render() {
    return <div className="card-info">
                <div className="info-name">{this.props.element.name}</div>

                <div className="information">
                  <div className="row">
                    <div className="planet">
                      <GoGlobe className="icon" />
                      <div className="info-value">{this.props.element.homeworld}</div>
                    </div>

                    <div className="center-info">
                      <FaWeight className="icon"/>
                      <div className="info-value">{this.props.element.mass} kg</div>
                    </div>

                    <div>
                      <FaRulerVertical className="icon"/>
                      <div className="info-value">{this.props.element.height} cm</div>
                    </div>
                  </div>

                  <div className="row">
                    <div>
                      <FaUserAlt className="icon"/>
                      <div className="info-value">{this.props.element.species}</div>
                    </div >

                    <div className="center-info">
                      <FaTransgender className="icon"/>
                      <div className="info-value">{this.props.element.gender}</div>
                    </div>

                    <div>
                      <FaCalendar className="icon"/>
                      <div className="info-value">{this.props.element.birth_year}</div>
                    </div>
                  
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
