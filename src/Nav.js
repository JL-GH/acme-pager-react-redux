import React from 'react';
import {HashRouter, Link, NavLink, Route, Switch} from 'react-router-dom'
import {SET_CURPAGE, SET_EMPLOYEES, SET_EMPCOUNT, store} from './store.js'
import {fetchData, deleteData} from './fetch.js'


class Nav extends React.Component {
  constructor() {
    super()
    this.state = store.getState()
  }

  componentWillUnmount(){
    this.unsubscribe();
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentDidUpdate(prevProps) {
    const newPage = this.props.location.pathname.slice(1)
    const curPage = prevProps.location.pathname.slice(1)

    if (newPage !== curPage) {
      store.dispatch({
        type: SET_CURPAGE,
        page: newPage
      })
      fetchData()
    }
  }

  render() {
    const { empCount } = this.state
    const totalPages = Math.ceil(empCount / 50)
    const pages = []
    const curPage = Number(this.props.location.pathname.slice(1))
    const nextPage = curPage < totalPages - 1 ? curPage + 1 : totalPages - 1
    const prevPage = curPage > 0 ? curPage - 1 : 0

    for (let i = 0; i < totalPages; i++){
      pages.push(i)
    }

    return (
      <nav>
        <Link to={`/${prevPage}`}>Prev</Link>
        {
          pages.map((page, idx) => <Link to={`/${page}`} key={idx}>{page + 1}</Link>)
        }
        <Link to={`/${nextPage}`}>Next</Link>
      </nav>
    )
  }
}

export default Nav;
