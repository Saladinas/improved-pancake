import React, { Component } from 'react';
import * as constants from '../lib/constants';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortDirection: props.header.sortDirection,
            sortIcon: this.getIcon(props.header.sortDirection)
        }
    };

    getIcon(sortDirection) {
        switch (sortDirection) {
            case constants.ASCENDING:
                return constants.ASCENDING_ICON;
            case constants.DESCENDING:
                return constants.DESCENDING_ICON;
            case constants.NO_SORTING:
                return null;
            default:
                return;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.sortDirection !== nextProps.header.sortDirection) {
            this.setState({
                sortDirection: nextProps.header.sortDirection,
                sortIcon: this.getIcon(nextProps.header.sortDirection)
            })
        }
    }

    changeSortDirection() {
        const header = this.props.header;

        switch (this.state.sortDirection) {
            case constants.ASCENDING:
                this.setState({
                    sortDirection: constants.DESCENDING,
                    sortIcon: this.getIcon(constants.DESCENDING)
                }, function () {
                    this.props.sortBeerList(header.sortingKey, this.state.sortDirection);
                });
                break;
            case constants.DESCENDING:
                this.setState({
                    sortDirection: constants.NO_SORTING,
                    sortIcon: this.getIcon(constants.NO_SORTING)
                }, function () {
                    this.props.sortBeerList(header.sortingKey, this.state.sortDirection);
                });
                break;
            case constants.NO_SORTING:
                this.setState({
                    sortDirection: constants.ASCENDING,
                    sortIcon: this.getIcon(constants.ASCENDING)
                }, function () {
                    this.props.sortBeerList(header.sortingKey, this.state.sortDirection);
                });
                break;
            default:
                return;
        }

    }

    render() {
        const header = this.props.header;

        return (
            <div onClick={this.changeSortDirection.bind(this)} className={header.class}>
                <span className="Header-title">{header.name}</span>
                <span className={`Icon ${this.state.sortIcon}`}></span>
            </div>
        );
    }
}

export default Header;
