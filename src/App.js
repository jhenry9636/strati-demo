import React, { Component } from 'react';

import Header from './components/header/header.js'
import Search from './components/search/search.js'
import Form from './components/form/form.js'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentView : 'search'
    }
  }

  setToForm() {
    this.setState({currentView : 'form'})
  }

  render() {
    var boundClick = this.setToForm.bind(this);
    var content =
      this.state.currentView ===
        'search' ? <Search onRowClick={boundClick} {...this.props} /> : <Form />;

    return (
      <div>
        <Header />
        {content}
      </div>
    );
  }
}

export default App;
