import React from "react";
import ReactDOM from "react-dom";

class ContentFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch("http://www.json-generator.com/api/json/get/cpiXUuDbfS")
      .then(results => results.json())
      .then(results => this.setState({ items: results }));
  }
  render() {
    return (
      <ul>
        {this.state.items.map(function(item, index) {
          return <h1>{item.description}</h1>;
        })}
      </ul>
    );
  }
}

export default ContentFeed;
