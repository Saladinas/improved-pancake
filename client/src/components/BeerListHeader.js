import React, { Component } from 'react';
import './BeerListHeader.css';

class BeerListHeader extends Component {

    render() {

        return (
            <div className="row List-header-container">
                <div className="col-xs-6">Beer name</div>
                <div className="col-xs-3">Bitterness</div>
                <div className="col-xs-3">Volume</div>
            </div>
        );
    }
}

export default BeerListHeader;
