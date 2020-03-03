import React, { Component } from 'react';

// import { Container } from './styles';

export default class CardStarship extends Component {
  render() {
    return <div key={this.props.element.name}>
                {this.props.element.name}
                <button type="button" onClick={() => this.props.buttonAction(this.props.element)}>Ver mais</button>
            </div>;
  }
}
