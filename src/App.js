
import React from 'react';
import {HashRouter, Link, NavLink, Route, Switch} from 'react-router-dom'
import Table from './Table.js'
import Nav from './Nav.js'
import {fetchData, deleteData} from './fetch.js'

class App extends React.Component {

  componentDidMount(){
    fetchData()
  }


  render() {
    return (
      <div>
        <h1>ACME Pager</h1>
        <HashRouter>
          <Route path='/:id?' component={ Table } />
          <Route component={ Nav } />
        </HashRouter>
      </div>
    )
  }
}

export default App;
