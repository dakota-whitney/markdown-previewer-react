import React from 'react';
import './App.css';

const marked = require("marked");

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

marked.setOptions({
  breaks: true
});

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markdown: initialMarkdown
    }
    this.handleChange = this.handleChange.bind(this)
  };
  componentDidMount(){
    const fccScript = document.createElement("script");
    fccScript.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    fccScript.async = true;
    document.body.appendChild(fccScript);
  }
  handleChange(event){
    this.setState({
      markdown: event.target.value
    });
  };
render() {
  return (
    <div className="container-fluid">
    <Editor input={this.state.markdown} handleChange={this.handleChange}></Editor>
    <br />
    <Previewer input={this.state.markdown}></Previewer>
    </div>
  )};
}

const Editor = props => {
  return(
    <textarea id="editor" value={props.input} onChange={props.handleChange}></textarea>
  );
}

const Previewer = props => {
    return(
      <div dangerouslySetInnerHTML={{__html: marked(props.input)}} id="preview"/>
    );
}

const initialMarkdown = `# H1
## H2
[https://google.com]

\`<p>Inline code</p>\`

\`\`\`
let variable = a data type
\`\`\`

1. List item

> Blockquote

Created in ![alt text](./logo192.png "React Logo")

__I did it!__`

export default App;
