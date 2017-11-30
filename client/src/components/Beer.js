import React, { Component } from 'react';
import * as constants from '../lib/constants';
import './Beer.css';

class Beer extends Component {

    getBeerClass(color) {
        switch (color) {
            case constants.LIGHT_BEER:
                return constants.LIGHT_BEER_CLASS;
            case constants.DARK_BEER:
                return constants.DARK_BEER_CLASS;
            default:
                return;
        }
    };

    render() {
        const beer = this.props.beer;
        const beerClass = this.getBeerClass(beer.color);

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
