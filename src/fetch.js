import axios from 'axios'
import {SET_EMPLOYEES, SET_EMPCOUNT, DELETE, store} from './store.js'

const fetchData = async () => {
  const idx = store.getState().curPage
  await axios.get(`http://localhost:3000/api/employees/${idx}`)
    .then(res => {
      store.dispatch({
        type: SET_EMPLOYEES,
        employees: res.data.rows
      }),
      store.dispatch({
        type: SET_EMPCOUNT,
        count: res.data.count
      })
    })
}

const deleteData = async (emp) => {
  await axios.delete(`http://localhost:3000/api/employees/${emp.id}`)
    .then(() => {
      store.dispatch({
        type: DELETE,
        delete: emp.id
      })
    })
}

export {fetchData, deleteData};
