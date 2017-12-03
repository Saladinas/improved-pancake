import React, { Component } from 'react';
import * as constants from '../lib/constants';
import { getBeerClass } from '../lib/helpers';
import './BeerService.css';

class BeerService extends Component {

    getFilteringOptions() {
        const filteringOptions = [
            {
                "id": "1",
                "display": constants.ALL_BEER_DISPLAY,
                "value": constants.ALL_BEER,
            },
            {
                "id": "2",
                "display": constants.LIGHT_BEER_DISPLAY,
                "value": constants.LIGHT_BEER,
            },
            {
                "id": "3",
                "display": constants.DARK_BEER_DISPLAY,
                "value": constants.DARK_BEER,
            },
        ];

        return filteringOptions;
    }

    render() {
        const filteringOptions = this.getFilteringOptions();

        return (
            <div className="BeerService-container">
                FILTER BEER
                {filteringOptions.map(function (option) {
                    return (
                        <div onClick={() => this.props.filterBeerList(option.value)} className={`Active-cursor ${getBeerClass(option.value)}`} key={option.id}>
                            {option.display}
                        </div>
                    )
                }, this)}
            </div>
        );
    }
}

export default BeerService;
