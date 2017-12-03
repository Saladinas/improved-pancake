import React, { Component } from 'react';
import { getBeerClass } from '../lib/helpers';
import './Beer.css';

class Beer extends Component {

    render() {
        const beer = this.props.beer;
        const beerClass = getBeerClass(beer.color);

        return (
            <div className="row">
                <div className={`col-md-6 col-xs-3 Beer-name ${beerClass}`}>{beer.name}</div>
                <div className={`col-md-3 col-xs-5 ${beerClass}`}><span className={`badge Beer-numbers ${beerClass}`}>{beer.bitterness}</span></div>
                <div className={`col-md-3 col-xs-4 ${beerClass}`}><span className={`badge Beer-numbers ${beerClass}`}>{beer.alc}</span></div>
            </div>
        );
    }
}

export default Beer;
