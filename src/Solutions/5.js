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
    