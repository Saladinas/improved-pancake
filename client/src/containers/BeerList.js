import React, { Component } from 'react';

class BeersList extends Component {

    getListOfBeersIds() {
        return Object.keys(this.props.beers);
    };

    getBeerElement(beerId) {
        const beer = this.props.beers[beerId];

        return <li key={beer.id}>{beer.name}</li>;
    };

    render() {
        const beerElements = this.getListOfBeersIds().map(this.getBeerElement, this);
        return (
            <ul>
                {beerElements}
            </ul>
        );
    }
}

export default BeersList;
