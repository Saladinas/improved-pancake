import React, { Component } from 'react';
import Beer from '../components/Beer';
import BeerListHeaders from '../components/BeerListHeaders';
import BeerService from '../services/BeerService';
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
                    <BeerListHeaders sortBeerList={this.props.sortBeerList} />
                    {beerElements}
                </div>
                <div className="col-xs-3">
                    <BeerService selectedFilter={this.props.selectedFilter} sortBeerList={this.props.sortBeerList} filterBeerList={this.props.filterBeerList} filterList={this.filterList}/>
                </div>
            </section>
        );
    }
}

export default BeerList;
