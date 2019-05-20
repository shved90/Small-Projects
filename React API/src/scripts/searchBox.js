import React from 'react';
import ReactDOM from 'react-dom';

class SearchField extends React.Component {
  constructor() {
    super();
    this.state = {
      inputBox: null,
    };
    
    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  publish() {
    alert( "You've searched for: " + this.state.inputBox + <br /> + "But I didnt pass this over to main so it doesnt work" ); // push over to some child for main to inherit and search
  }
  
  render() {
    return <div className="inputForm">
      <input 
        type="text" 
        name="inputBox" 
        placeholder="Enter topic here..." 
        value={ this.state.inputBox }
        onChange={ this.handleChange } 
      />
      
      <button value="Send" onClick={ this.publish }>Search</button>
    </div>
  }
}

ReactDOM.render(<SearchField />, document.getElementById('form'));