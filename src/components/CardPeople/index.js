import React, { Component } from 'react';

import { GoGlobe } from "react-icons/go";

import './styles.css';

export default class CardPeople extends Component {

  render() {
    return <div className="card-info">
                <div className="info-name">{this.props.element.name}</div>
                <div><GoGlobe/>{this.props.element.homeworld}</div>
                
                {this.props.element.films.map(film =>
                  <div key={film}>{film}</div>
                )}
            </div>;
  }
}
