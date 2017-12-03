import React, { Component } from 'react';
import * as constants from '../lib/constants';
import { getBeerClass } from '../lib/helpers';
import './BeerService.css';

class BeerService extends Component {

    getFilteringOptions() {
        const filteringOptions = [
            {
                "id": "1",
                "display": constants.LIGHT_BEER_DISPLAY,
                "value": constants.LIGHT_BEER,
            },
            {
                "id": "2",
                "display": constants.DARK_BEER_DISPLAY,
                "value": constants.DARK_BEER,
            },
        ];

        return filteringOptions;
    }

    changeActiveBeerFilter(selectedOption) {
        if (selectedOption === this.props.selectedFilter) {
            selectedOption = null;
        }
        this.props.filterBeerList(selectedOption)
    }

    render() {
        const filteringOptions = this.getFilteringOptions();
        const selectedFilter = this.props.selectedFilter;

        return (
            <div className="BeerService-container">
                {filteringOptions.map(function (option) {
                    return (
                        <div className={getBeerClass(option.value)} key={option.id}>
                            <span className={`Filter-option ${selectedFilter === option.value ? 'Active-filter' : null}`} onClick={() => this.changeActiveBeerFilter(option.value)}>{option.display}</span>
                        </div>
                    )
                }, this)}
            </div>
        );
    }
}

export default BeerService;
