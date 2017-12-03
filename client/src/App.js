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
      // items: [],
      // numberOfItems: 0,
      numberOfItems: 4,
      displayingItems: 4,
      items: [{ "id": "1", "name": "Šviesusis", "bitterness": 3, "color": "light", "alc": 6 }, { "id": "2", "name": "Tamsusis", "bitterness": 5, "color": "dark", "alc": 8 }, { "id": "3", "name": "Karamelinis", "bitterness": 4, "color": "dark", "alc": 7 }, { "id": "4", "name": "Kvietinis", "bitterness": 3, "color": "light", "alc": 4 }],
      itemsToDisplay: [{ "id": "1", "name": "Šviesusis", "bitterness": 3, "color": "light", "alc": 6 }, { "id": "2", "name": "Tamsusis", "bitterness": 5, "color": "dark", "alc": 8 }, { "id": "3", "name": "Karamelinis", "bitterness": 4, "color": "dark", "alc": 7 }, { "id": "4", "name": "Kvietinis", "bitterness": 3, "color": "light", "alc": 4 }],
      isLoading: false,
    };
  }

  componentDidMount() {
    // this.getBeerList();
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
          numberOfItems: responseJson.itemCount,
          isLoading: false,
        });
        return responseJson.items;
      })
      .catch((error) => {
        console.error(error);
        this.setState({ isLoading: false });
      });
  }

  filterBeerList(filterValue) {
    if (filterValue === constants.ALL_BEER) {
      this.setState({ itemsToDisplay: this.state.items });
    } else {
      const itemsToDisplay = this.state.items.filter(item => item.color === filterValue);
      this.setState({ itemsToDisplay: itemsToDisplay });
    }
  }

  sortBeerList(sortValue, sortDirection) {
    var sortedItemsToDisplay = this.state.items;

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
        this.setState({ itemsToDisplay: sortedItemsToDisplay });
        break;
      default:
        return;
    }
  }

  render() {
    var itemsToDisplay = this.state.itemsToDisplay;
    var isLoading = this.state.isLoading;

    if (isLoading) {
      return 'Loading indicator';
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Beer Routes</h1>
        </header>
        <div className="App-intro">
          <BeerList sortBeerList={this.sortBeerList.bind(this)} filterBeerList={this.filterBeerList.bind(this)} beers={itemsToDisplay} />
        </div>
      </div>
    );
  }
}

export default App;
