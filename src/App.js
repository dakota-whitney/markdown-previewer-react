import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ""
    }
    this.handleChange = this.handleChange.bind(this)
  };
  handleChange(event){
    this.setState({
      inputValue: event.target.value
    });
  };
render() {
  return (
    <div className="container-fluid">
    <Editor input={this.state.inputValue} handleChange={this.handleChange}></Editor>
    <br />
    <Previewer input={this.state.inputValue}></Previewer>
    </div>
  )};
}

class Editor extends React.Component {
  constructor(props){
    super(props)
  }
render(){
  return(
    <textarea id="editor" value={this.props.input} onChange={this.props.handleChange}></textarea>
  )};
}

class Previewer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
    <div id="previewer">
      <p>{this.props.input}</p>
    </div>
    )};
}

export default App;
