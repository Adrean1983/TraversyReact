// import React, { Component } from 'react';
// import TodoItem from './TodoItem';
// import PropTypes from 'prop-types';

// class Todos extends Component {
//   render() {
//     return this.props.todos.map((todo) => (
//       <TodoItem key={todo.id} todo={todo} />
//     ));
//   }
// }

// // PropTypes
// Todos.propTypes = {
//   todos: PropTypes.array.isRequired
// }

// export default Todos;


// app.js

// import React, { Component } from 'react';
// import Todos from './Component/Todos';

// import './App.css';

// class App extends Component {
//   state = {
//     todos: [
//       {
//         id: 1,
//         title: 'Take out the trash',
//         completed: false
//       },
//       {
//         id: 2,
//         title: 'Dinner with wife',
//         completed: true
//       },
//       {
//         id: 3,
//         title: 'Meeting with boss',
//         completed: false
//       }
//     ]
//   }

//   render() {
//     console.log(this.state.todos)
//     return (
//       <div className="App">
//         <Todos todos={this.state.todos} />
//       </div>
//     );
//   }
// }

// export default App;


// //Todo Item
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';


// export class TodoItem extends Component {
    
//     render() {
//         return (
//             <div>
//                 <p>{this.props.todo.title}</p>
//             </div>
//         )
        
//     }
// }

// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired
// }

// export default TodoItem;