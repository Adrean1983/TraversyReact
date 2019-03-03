import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <ol style={listStyle}>
          <li>Make a class component called Todos. Make a h1 tag called Todos and display</li>
          <li>Add three todo items using state. They have a titled and completed. Pass the state to App and todos and display. Need to add a TodoItem Class Component . Display in a p tag The title of these componets</li>
          <li>Add Css styling to the todoItems component. Use a function. </li>
          <li>Conditionally show a line through background: '#f4f4f4',padding: '10px',borderBottom: '1px #ccc dotted',</li>
          <li>Add a checkbox to the todo items. And a method to mark items complete markComplete and console.log "hello". Climb the ladder to the App.js</li>
          <li>in todoItems bind the id. can use destructuring.</li>
          <li>Write the mark items complete -markComplete- function in app.js. need map function</li>
          <li>Write a function that adds a delete button to the inputs. Add style to button.</li>
          <li>Make a layout folder with a file called header.js. It's a functional component. Put a H1 tag. Add this styling  color: "#fff", backgroundColor: "#333", textAlign: "center", padding: "10px"</li>
          <li>Add a class component called AddTodo. It's form with an input and a submit. It has some inline flex styling.</li>
          <li>Import AddTodo to App.js and render. Then put everything being rendered in a div with classname container. Go to app.css global and add following style</li>
          <li>Add a function in AddTodo called onChange to handle onChange events. Need to add a submit event too, have to use e.preventDefault; Send title up to app with addTodo and set it back to blank. call </li>
          <li>In app Js add the addTodo function.</li>
        </ol>
        <hr />
      </div>
    );
  }
}

const listStyle = {
  fontSize: "12px",
  margin: "2px",
  padding: "16px"
}
export default App;
