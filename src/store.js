import {createStore} from 'redux'

const SET_EMPCOUNT = 'SET_EMPCOUNT'
const SET_EMPLOYEES = 'SET_EMPLOYEES'
const SET_CURPAGE = 'SET_CURPAGE'
const DELETE = 'DELETE'

const initialState = {
  employees: [],
  empCount: 0,
  curPage: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPCOUNT: {
      return Object.assign({}, state, {empCount: action.count})
    }
    case SET_EMPLOYEES: {
      return Object.assign({}, state, {employees: action.employees})
    }
    case SET_CURPAGE: {
      return Object.assign({}, state, {curPage: action.page})
    }
    case DELETE: {
      const deleted = state.employees.filter(emp => emp.id !== action.delete)
      return Object.assign({}, state, {employees: deleted})
    }
    default:
      return state
  }
}

const store = createStore(reducer)

export {
  store,
  SET_EMPCOUNT,
  SET_EMPLOYEES,
  SET_CURPAGE,
  DELETE,
}
