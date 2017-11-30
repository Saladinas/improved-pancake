import React, { Component } from 'react';
import { getBeerClass } from '../lib/helpers';
import './Beer.css';

class Beer extends Component {

    render() {
        const beer = this.props.beer;
        const beerClass = getBeerClass(beer.color);

        return (
            <div className="row">
                <div className={`col-xs-6 ${beerClass}`}>{beer.name}</div>
                <div className="col-xs-3">{beer.bitterness}</div>
                <div className="col-xs-3">{beer.alc}</div>
            </div>
        );
    }
}

export default Beer;
