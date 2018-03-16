import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './relay-environment';
import NewAuthorSubscription from './subscriptions/NewAuthorSubscription';

const query = graphql`
  query AppQuery { authors { id name } }
`;

class App extends Component {
  
  componentDidMount() {
    NewAuthorSubscription();
  }

  renderAuthor(author) {
    return (
      <div key={author.id} className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{author.name}</h5>
            <input type="button" value="books" className="btn btn-primary" />
            <input type="button" value="notify me about this author" className="btn btn-primary" style={{float: 'right'}} />
          </div>
        </div>
        <br />
      </div>
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
