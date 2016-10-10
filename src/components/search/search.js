import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import './search.css';
import jquery from 'jquery';

const $ = jquery;

class Search extends Component {
  
  constructor(props) {
    super(props);

    var component = this;

    function prodCell(params) {
        if(!params.value) {
          return '';
        }
        return '<span class="tag-item">' + params.value.toUpperCase() + '</span>';
    }

    function linkCell(params) {
        if(!params.value) {
          return '';
        }
        return '<a class="name-link" href="javascript://">' + params.value.toUpperCase() + '</a>';
    }

    function tagName(params) {
        if(!params.value) {
          return '';
        }
        return '<span class="tag-item">' + params.value.tagName.toUpperCase() + '</span>';
    }

    this.state = {
      currentView : 'app',
      columnDefs : [
        {headerName: "Name", field: "name", width:500, cellRenderer: linkCell},
        {headerName: "Environment Type", field: "environmentTypes", width: 300, cellClass: "type-cell", cellRenderer: prodCell},
        {headerName: "Tags", field: "tags", width: 350, cellClass: "tag-name", cellRenderer: tagName}],
        rowData: null,
        enableSorting: true,
        enableFilter: true,
        rowHeight: 40
    };

    $.when($.getJSON( "/registry/rs/ga/v2/ui/search/application"),
      $.getJSON( "/registry/rs/ga/v2/ui/search/application")).then(function( result1, result2 ) {
        var mergedResults = result1[0].searchResult.hits.concat(result2[0].searchResult.hits);
        component.setState({rowData: mergedResults})
        
        console.log('*******Merged Results********')
        console.dir(mergedResults)
    });

  }

  render() {
    var boundClick = this.handleAppClick.bind(this);

    return (
      <div className="ag-fresh" style={{height: "400px"}}>
        <h1 className="mainTitle">Applications
        <a href="#" onClick={this.handleAppClick.bind(this)}>+</a></h1>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          enableSorting={this.state.enableSorting}
          enableFilter={this.state.enableFilter}
          style={{width: "200px"}}
          rowHeight={this.state.rowHeight}
          onRowClicked={boundClick} />
      </div>
    );
  }

  handleAppClick(event) {
    this.props.onRowClick()
  }
}

export default Search;
