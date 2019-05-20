import style from '../styles/main.scss';

import React from "react";
import ReactDOM from "react-dom";
import { ElementContainer } from './eleBox';
import { SearchFeild } from './searchBox';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [],
        isLoading: true,
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/search/repositories?q=vuejs+language:javascript&sort=created&order=desc')

    .then((response) => response.json())
    .then((data) => this.setState({ list: data.items, isLoading: false }));
};

	render() {
		if (this.state.isLoading) return <div className="loading">Loading...</div> 
		return this.state.list.map(function(item, i) { //need to add unique key the right way
			return (
				<ElementContainer 
				key={i}
				url={ item.html_url}
				name={ item.full_name}	
				description={ item.description}
				created={ item.created_at} />
			)
		})
	}
}

ReactDOM.render(<ul className="list list--results"><SearchResults /></ul>, document.getElementById("test"));