import React, { Component } from 'react';
import Beer from '../components/Beer';
import './BeerList.css';

class BeersList extends Component {

    getListOfBeersIds() {
        return Object.keys(this.props.beers);
    };

    getBeerElement(beerId) {
        const beer = this.props.beers[beerId];

        return <Beer key={beer.id} beer={beer}></Beer>;
    };

    render() {
        const beerElements = this.getListOfBeersIds().map(this.getBeerElement, this);

        return (
            <section className="row Beer-list-container">
                <div className="col-xs-7 col-xs-offset-1">
                {beerElements}
                </div>
                <div className="col-xs-3">
                FILTER | SORT
                </div>
            </section>
        );
    }
}

export default BeersList;
