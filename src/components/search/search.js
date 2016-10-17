import React, { Component } from 'react';
import Griddle from 'griddle-react';
import './search.css';

class Search extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currentView : 'app',
      rowData: null,
      enableSorting: true,
      enableFilter: true,
      rowHeight: 40
    };

  }

  render() {

    fetch('/user')
      .then(function(result) {
        result.body.then()
        debugger
      })

    return (
      <div className="ag-fresh" style={{height: "400px"}}>
        <h1 className="mainTitle">Applications<a href="#">+</a></h1>
        <Griddle />
      </div>
    );
  }
}

export default Search;
