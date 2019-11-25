/* eslint-disable react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'


const rootEl = document.querySelector('#root');

// const initialState = {
//   employees: [],
//   empCount: 0,
//   curPage: 0,
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_EMPCOUNT': {
//       return Object.assign({}, state, {empCount: action.count})
//     }
//     case 'SET_EMPLOYEES': {
//       return Object.assign({}, state, {employees: action.employees})
//     }
//     case 'SET_CURPAGE': {
//       return Object.assign({}, state, {curPage: action.page})
//     }
//     default:
//       return state
//   }
// }


// const store = createStore(reducer)

// const fetchData = async () => {
//   const idx = store.getState().curPage
//   await axios.get(`http://localhost:3000/api/employees/${idx}`)
//     .then(res => {
//       store.dispatch({
//         type: SET_EMPLOYEES,
//         employees: res.data.rows
//       }),
//       store.dispatch({
//         type: SET_EMPCOUNT,
//         count: res.data.count
//       })
//     })
// }


// class Nav extends React.Component {
//   constructor() {
//     super()
//     this.state = store.getState()
//   }

//   componentWillUnmount(){
//     this.unsubscribe();
//   }
//   componentDidMount(){
//     this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
//   }

//   componentDidUpdate(prevProps) {
//     const newPage = this.props.location.pathname.slice(1)
//     const curPage = prevProps.location.pathname.slice(1)

//     if (newPage !== curPage) {
//       store.dispatch({
//         type: 'SET_CURPAGE',
//         page: newPage
//       })
//       fetchData()
//     }
//   }

//   render() {
//     const { empCount } = this.state
//     const totalPages = Math.ceil(empCount / 50)
//     const pages = []
//     const curPage = Number(this.props.location.pathname.slice(1))
//     const nextPage = curPage < totalPages - 1 ? curPage + 1 : totalPages - 1
//     const prevPage = curPage > 0 ? curPage - 1 : 0

//     for (let i = 0; i < totalPages; i++){
//       pages.push(i)
//     }

//     return (
//       <nav>
//         <Link to={`/${prevPage}`}>Prev</Link>
//         {
//           pages.map((page, idx) => <Link to={`/${page}`} key={idx}>{page + 1}</Link>)
//         }
//         <Link to={`/${nextPage}`}>Next</Link>
//       </nav>
//     )
//   }
// }

// class Table extends React.Component {
//   constructor() {
//     super()
//     this.state = store.getState()
//   }

//   componentWillUnmount(){
//     this.unsubscribe();
//   }
//   componentDidMount(){
//     this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
//   }

//   render() {
//     const {employees} = this.state

//     return (
//       <div>
//         <table>
//           <thead>
//             <th>First Name</th>
//             <th>Last name</th>
//             <th>Email</th>
//             <th>Title</th>
//           </thead>
//           <tbody>
//             {employees.map((emp, idx) => {
//               return (
//                 <tr key={idx}>
//                   <td>{emp.firstName}</td>
//                   <td>{emp.lastName}</td>
//                   <td>{emp.email}</td>
//                   <td>{emp.title}</td>
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }


// class App extends React.Component {

//   componentDidMount(){
//     fetchData()
//   }


//   render() {
//     return (
//       <div>
//         <h1>ACME Pager</h1>
//         <HashRouter>
//           <Route component={ Nav } />
//           <Route path='/:id?' component={ Table } />
//         </HashRouter>
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, rootEl);
