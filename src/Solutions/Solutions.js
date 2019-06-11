// Ctrl K Ctrl 0 *collapses all objects
// Ctrl + Shift + [ *closes a single object
// Ctrl + Shift + ] *opens a single object

const firstSolution = {
  //     import React, { Component } from 'react';
  // import App from '../App';
  // class Todos extends Component {
  //   render() {
  //     return (
  //         <h1>Todos</h1>
  //     )
  //   }
  // }
  // export default Todos;
  // // App.js
  // import React, { Component } from 'react';
  // import Todos from './Component/Todos';
  // import './App.css';
  // class App extends Component {
  //   render() {
  //     console.log(this.state.todos)
  //     return (
  //       <div className="App">
  //         <Todos/>
  //       </div>
  //     );
  //   }
  // }
  // export default App;
};
const secondSolution = {
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
};
const thirdSolution = {
  // import React, { Component } from 'react';
  // import PropTypes from 'prop-types';
  // export class TodoItem extends Component {
  //     getStyle = () => {
  //         return {
  //             background: '#f4f4f4',
  //             padding: '10px',
  //             borderBottom: '1px #ccc dotted',
  //             textDecoration: this.props.todo.completed ?
  //             'line-through' : 'none'
  //         }
  //     }
  //     render() {
  //         return (
  //             <div style={this.getStyle()}>
  //                 <p>{this.props.todo.title}</p>
  //             </div>
  //         )
  //     }
  // }
  // TodoItem.propTypes = {
  //     todo: PropTypes.object.isRequired
  // }
  // export default TodoItem;
};
const fourthSolution = {
  // //todoItem
  // return (
  //     <div style={this.getStyle()}>
  //         <p>
  //             <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {` `}
  //             {this.props.todo.title}
  //         </p>
  //     </div>
  // )
  //todos
  // //class Todos extends Component {
  //     render() {
  //         return this.props.todos.map((todo) => (
  //           <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
  //         ));
  //       }
  //     }
  // app.js
  // markComplete = () => {
  //     console.log("hello")
  //   }
  //   render() {
  //     console.log(this.state.todos)
  //     return (
  //       <div className="App">
  //         <Todos todos={this.state.todos} markComplete={this.markComplete}/>
  //       </div>
  //     );
  //   }
  // }
};
const fifthSolution = {
  // //
  // // Without Desconstructing
  // return (
  //     <div style={this.getStyle()}>
  //         <p>
  //             <input type="checkbox" onChange={this.markComplete.bind(this, this.props.todo.id)} /> {` `}
  //             {this.props.todo.title}
  //         </p>
  //     </div>
  // )
  // with deconstructing
  // render() {
  //     const { id, title } = this.props.todo;
  //     return (
  //         <div style={this.getStyle()}>
  //             <p>
  //                 <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {` `}
  //                 { title }
  //             </p>
  //         </div>
  //     )
};
const sixthSolution = {
  // markComplete = (id) => {
  // this.setState({todos: this.state.todos.map(todo => {
  //     if(todo.id === id) {
  //     todo.completed = !todo.completed
  //     }
  //     return todo;
  // }) });
  // }
};
const seventhSolution = {
  // //todoitem
  // render() {
  //     const { id, title } = this.props.todo;
  //     return (
  //         <div style={this.getStyle()}>
  //             <p>
  //                 <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
  //                 {' '}
  //                 { title }
  //                 <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
  //             </p>
  //         </div>
  //     )
  // }
  // }
  // TodoItem.propTypes = {
  // todo: PropTypes.object.isRequired
  // }
  // const btnStyle = {
  // background: "#ff0000",
  // color: "#fff",
  // border: "none",
  // padding: "5px 9px",
  // borderRadius: "50%",
  // cursor: "pointer",
  // float: "right"
  // }
  // export default TodoItem;
  // //todos
  // class Todos extends Component {
  //     render() {
  //       return this.props.todos.map((todo) => (
  //         <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
  //       ));
  //     }
  //   }
  // app.js
  // delTodo = (id) => {
  //     this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  //   }
  //   render() {
  //     console.log(this.state.todos)
  //     return (
  //       <div className="App">
  //         <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
  //       </div>
  //     );
  //   }
  // }
  // export default App;
};
const eigthSolution = {
  // import React from 'react';
  // const header = () => {
  //     return (
  //         <header style={headerStyle}>
  //             <h1>Todo list</h1>
  //         </header>
  //     )
  // }
  // const headerStyle = {
  //     color: "#fff",
  //     backgroundColor: "#333",
  //     textAlign: "center",
  //     padding: "10px"
  // }
  // export default header;
};
const ninthSolution = {
  // import React, { Component } from 'react'
  // export class AddTodo extends Component {
  //     render() {
  //         return (
  //             <form style={{ display: "flex" }}>
  //                 <input
  //                     type="text"
  //                     name="title"
  //                     style={{ flex: "10", padding: "5px" }}
  //                     placeholder="Add Todo..."
  //                 />
  //                 <input
  //                     type="submit"
  //                     value="Submit"
  //                     className="btn"
  //                     style={{flex: "1"}}
  //                 />
  //             </form>
  //         )
  //     }
  // }
  // export default AddTodo;
};
const tenthSolution = {
  // .Container {
  //     padding: 0 1rem;
  //   }
  //   .btn {
  //     display: inline-block;
  //     border: none;
  //     background: #555;
  //     color: #fff;
  //     padding: 7px 20px;
  //     cursor: pointer;
  //   }
  //   .btn:hover {
  //     background: #666;
  //   }
  // // applicationCache.js
  // render() {
  //     console.log(this.state.todos)
  //     return (
  //       <div className="App">
  //         <div className="Container">
  //           <Header />
  //           <AddTodo />
  //           <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  // export default App;
};
const eleventhSolution = {
  // import React, { Component } from 'react'
  // export class AddTodo extends Component {
  //     state = {
  //         title: ''
  //     }
  //     onChange = (e) => {
  //         this.setState({ title: e.target.value})
  //     }
  //     onSubmit = (e) => {
  //         e.preventDefault();
  //         this.props.addTodo(this.state.title);
  //         this.setState({ title: '' });
  //     }
  //     render() {
  //         return (
  //             <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
  //                 <input
  //                     type="text"
  //                     name="title"
  //                     style={{ flex: "10", padding: "5px" }}
  //                     placeholder="Add Todo..."
  //                     value={this.state.title}
  //                     onChange={this.onChange}
  //                 />
  //                 <input
  //                     type="submit"
  //                     value="Submit"
  //                     className="btn"
  //                     style={{flex: "1"}}
  //                 />
  //             </form>
  //         )
  //     }
  // }
  // export default AddTodo;
};
const twelthSolution = {
  // addTodo = (title) => {
  //     const newTodo = {
  //       id: 4,
  //       title: title,
  //       completed: false
  //     }
  //     this.setState({ todos: [...this.state.todos, newTodo]})
  //   }
  //   render() {
  //     console.log(this.state.todos)
  //     return (
  //       <div className="App">
  //         <div className="Container">
  //           <Header />
  //           <AddTodo addTodo={this.addTodo}/>
  //           <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
  //         </div>
  //       </div>
  //     );
  //   }
};
const thirteenthSolution = {};
