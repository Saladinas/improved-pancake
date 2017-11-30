import React, { Component } from 'react';
import Beer from '../components/Beer';
import BeerListHeader from '../components/BeerListHeader';
import './BeerList.css';

class BeerList extends Component {

    getListOfBeerIds() {
        return Object.keys(this.props.beers);
    };

    getBeerElement(beerId) {
        const beer = this.props.beers[beerId];

        return <Beer key={beer.id} beer={beer}></Beer>;
    };

    render() {
        const beerElements = this.getListOfBeerIds().map(this.getBeerElement, this);

        return (
            <section className="row Beer-list-container">
                <div className="col-xs-7 col-xs-offset-1">
                    <BeerListHeader/>
                    {beerElements}
                </div>
                <div className="col-xs-3">
                    FILTER | SORT
                </div>
            </section>
        );
    }
}

export default BeerList;
