import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './relay-environment';
import NewBookSubscription from './subscriptions/NewBookSubscription';

const query = graphql`
  query BooksQuery { books { id title } }
`;

class Books extends Component {
  
  componentDidMount() {
    NewBookSubscription();
  } 
  
  renderBook(book) {
    return (
        <li key={book.id}>{book.title}</li>
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
                {props.books.map(book => this.renderBook(book))}
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

export default Books;
