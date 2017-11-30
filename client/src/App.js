import React, { Component } from 'react';
import BeerList from './containers/BeerList';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      // items: [],
      // numberOfItems: 0,
      numberOfItems: 4,
      items: [{"id":"1","name":"Šviesusis","bitterness":3,"color":"light","alc":6},{"id":"2","name":"Tamsusis","bitterness":5,"color":"dark","alc":8},{"id":"3","name":"Karamelinis","bitterness":4,"color":"dark","alc":7},{"id":"4","name":"Kvietinis","bitterness":3,"color":"light","alc":4}],
      isLoading: false,
    };
  }

  componentDidMount() {
    // this.BeerList();
  }

  BeerList() {
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

  render() {
    var items = this.state.items;
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
           <BeerList beers={items} /> 
        </div>
      </div>
    );
  }
}

export default App;
