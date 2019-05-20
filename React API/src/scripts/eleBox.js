import React from 'react';
import ReactDOM from 'react-dom';

export class ElementContainer extends React.Component {
	render() {
		return (
			<li key={this.props.key} className="listItem">
				<a href={ this.props.url } className="listItem__link" target="_blank">
					<h2 className="listItem__title">{ this.props.name }</h2>
				</a>
				<p className="listItem__desc">{ this.props.description }</p>
				<p className="listItem__created">{ this.props.created }</p>
			</li>
		);
	}
}