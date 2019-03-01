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