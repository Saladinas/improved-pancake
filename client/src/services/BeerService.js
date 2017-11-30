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

    getSortingOptions() {
        const filteringOptions = [
            // {
            //     "id": "1",
            //     "display": constants.REMOVE_SORTING_DISPLAY,
            //     "value": constants.REMOVE_SORTING,
            // },
            {
                "id": "2",
                "display": constants.BITTERNESS_DISPLAY,
                "value": constants.BITTERNESS,
            },
            {
                "id": "3",
                "display": constants.VOLUME_DISPLAY,
                "value": constants.VOLUME,
            },
        ];

        return filteringOptions;
    }

    render() {
        const filteringOptions = this.getFilteringOptions();
        const sortingOptions = this.getSortingOptions();

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
                <div>---------------------------------</div>
                SORT BEER
                {sortingOptions.map(function (option) {
                    return (
                        <div className={`Active-cursor`} key={option.id}>
                            {option.display}:
                            <span onClick={() => this.props.sortBeerList(option.value, constants.ASCENDING)}  className="Icon-spaces"><i className="glyphicon glyphicon-sort-by-alphabet"></i></span>
                            <span onClick={() => this.props.sortBeerList(option.value, constants.DESCENDING)}  className="Icon-spaces"><i className="glyphicon glyphicon-sort-by-alphabet-alt"></i></span>
                        </div>
                    )
                }, this)}
            </div>
        );
    }
}

export default BeerService;
