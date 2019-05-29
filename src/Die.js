import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
    render() {
        let die = `Die fas fa-dice-${this.props.face}`;
        return <i className={die}></i>;
    }
}

export default Die;
