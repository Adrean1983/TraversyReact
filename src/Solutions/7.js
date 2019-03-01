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
