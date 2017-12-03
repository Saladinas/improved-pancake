import React, { Component } from 'react';
import * as constants from '../lib/constants';
import './BeerListHeaders.css';
import Header from './Header';

class BeerListHeaders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columnHeaders: this.getHeaderColumns(),
        }
    };

    getHeaderColumns() {
        const columnsHeaders = [
            {
                "id": "1",
                "name": constants.BEER_NAME_DISPLAY,
                "class": "col-xs-6",
                "sortingKey": constants.NAME,
                "sortDirection": constants.NO_SORTING,
            },
            {
                "id": "2",
                "name": constants.BITTERNESS_DISPLAY,
                "class": "col-xs-3",
                "sortingKey": constants.BITTERNESS,
                "sortDirection": constants.NO_SORTING,
            },
            {
                "id": "3",
                "name": constants.VOLUME_DISPLAY,
                "class": "col-xs-3",
                "sortingKey": constants.VOLUME,
                "sortDirection": constants.NO_SORTING,
            },
        ];

        return columnsHeaders;
    }

    getListOfHeadersIds() {
        return Object.keys(this.state.columnHeaders);
    };


    getHeaderElement(headerId) {
        const header = this.state.columnHeaders[headerId];

        return <Header key={header.id} sortBeerList={this.changeCurrentSortingKey.bind(this)} header={header} />;
    };

    changeCurrentSortingKey(sortingKey, sortDirection) {
        var headerState = this.state.columnHeaders;

        headerState.forEach(function (header) {
            if (header.sortingKey === sortingKey) {
                header.sortDirection = sortDirection;
            } else {
                header.sortDirection = constants.NO_SORTING;
            }
        });

        this.setState({ columnHeaders: headerState });
        this.props.sortBeerList(sortingKey, sortDirection);
    }

    render() {
        const columnHeaders = this.getListOfHeadersIds().map(this.getHeaderElement, this);

        return (
            <div className="row List-header-container">
                {columnHeaders}
            </div>
        );
    }
}

export default BeerListHeaders;
