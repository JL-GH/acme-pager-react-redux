import React from 'react';
import {store, SET_EMPCOUNT, SET_EMPLOYEES} from './store.js'
import {fetchData, deleteData} from './fetch.js'
import axios from 'axios';


class Table extends React.Component {
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

  componentDidUpdate(prevState) {
    if (prevState.empCount !== this.state.empCount) {
      const idx = store.getState().curPage
      axios.get(`http://localhost:3000/api/employees/${idx}`)
      .then(res => {
        store.dispatch({
          type: SET_EMPLOYEES,
          employees: res.data.rows
        })
      })
    }
  }

  render() {
    const {employees} = this.state
    return (
      <div>
        <table>
          <thead>
            <th>First Name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Title</th>
            <th>Delete?</th>
          </thead>
          <tbody>
            {employees.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.email}</td>
                  <td>{emp.title}</td>
                  <td><button onClick={() => deleteData(emp)}>Delete!</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
