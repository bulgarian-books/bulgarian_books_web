import React, { Component } from 'react';

import { QueryRenderer, graphql } from 'react-relay';

import environment from './relay-environment';

const query = graphql`
  query AppQuery { authors { id name } }
`;

class App extends Component {
  
  renderAuthor(author) {
    return (
        <li key={author.id}>{author.name}</li>
    );
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        render={({ error, props }) => {
          if (error) {
            return (
              <div>{error.message}</div>
            );
          } else if (props) {
            return (
              <ul>
                {props.authors.map(author => this.renderAuthor(author))}
              </ul>
            );
          } else {
            return (
              <div>Loading...</div>
            )
          }
        }}
        />
    );
  }
}

export default App;
