import React, { Component } from 'react';
import BeerList from './containers/BeerList';
import logo from './logo.svg';
import * as constants from './lib/constants';
import { compareByProperty } from './lib/helpers';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      itemsToDisplay: [],
      selectedFilter: null,
    };
  }

  componentDidMount() {
    this.getBeerList();
  }

  getBeerList() {
    this.setState({ isLoading: true });

    return fetch('/beer/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'VerySecretToken',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          items: responseJson.items,
          itemsToDisplay: responseJson.items,
        });
        return responseJson.items;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  filterBeerList(filterValue) {
    if (filterValue === null) {
      this.setState({
        selectedFilter: filterValue,
        itemsToDisplay: this.state.items,
      });
    } else {
      const itemsToDisplay = this.state.items.filter(item => item.color === filterValue);
      this.setState({
        itemsToDisplay: itemsToDisplay,
        selectedFilter: filterValue,
      });
    }
  }

  sortBeerList(sortValue, sortDirection) {
    var sortedItemsToDisplay = this.state.itemsToDisplay;

    switch (sortDirection) {
      case constants.ASCENDING:
        sortedItemsToDisplay = this.state.itemsToDisplay.sort(compareByProperty(sortValue, 1));
        this.setState({ itemsToDisplay: sortedItemsToDisplay });
        break;
      case constants.DESCENDING:
        sortedItemsToDisplay = this.state.itemsToDisplay.sort(compareByProperty(sortValue, -1));
        this.setState({ itemsToDisplay: sortedItemsToDisplay });
        break;
      case constants.NO_SORTING:
        this.filterBeerList(this.state.selectedFilter)
        break;
      default:
        return;
    }
  }

  render() {
    var itemsToDisplay = this.state.itemsToDisplay;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Beer Routes</h1>
        </header>
        <div className="App-intro">
          <BeerList selectedFilter={this.state.selectedFilter} sortBeerList={this.sortBeerList.bind(this)} filterBeerList={this.filterBeerList.bind(this)} beers={itemsToDisplay} />
        </div>
      </div>
    );
  }
}

export default App;
