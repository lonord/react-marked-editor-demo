import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkedEditor from 'react-marked-editor';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
		this.markdown = md;
	}
	
	handleMarkdownChange (newValue) {
		this.markdown = newValue;
	}

	render() {
		return (
			<div style={styles.wrapper}>
				<ReactMarkedEditor style={styles.editor} initialMarkdown={md} onChange={this.handleMarkdownChange}/>
			</div>
		);
	}
}

const styles = {
	wrapper: {
		height: '100%',
		width: '100%',
		boxSizing: 'border-box',
		padding: 50
	},
	editor: {
		height: '100%',
		width: '100%',
		border: '1px solid #777'
	}
};

const md = `
# React marked editor example

1. item1
2. item3
3. item3

--------

- item1
- item2
- item3

A text of \`markdown\`.

\`\`\`js
console.log('javascript code');
\`\`\`

|this is table| A | B |
|-------------|---|---|
|    hello    | 1 | 2 |
|    world    | 3 | 4 |

#### EOF
`;

ReactDOM.render(<App/>, document.getElementById('root'));