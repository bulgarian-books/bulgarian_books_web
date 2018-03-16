import { graphql, requestSubscription } from 'react-relay';
import environment from '../relay-environment';

const newBookSubscription = graphql`
subscription NewBookSubscription {
  newBook { id title }
}
`
export default () => {
  const subscriptionConfig = {
    subscription: newBookSubscription,
    variables: {},
    updater: proxyStore => {
      // Get the new book
      const newBook = proxyStore.getRootField('newBook');
      // Get existing books
      const root = proxyStore.getRoot();
      const books = root.getLinkedRecords('books');
      // Prepend the new book
      root.setLinkedRecords([newBook, ...books], 'books');
    },
    onError: error => console.log(`An error occured:`, error)
  }
  requestSubscription(
    environment,
    subscriptionConfig
  )
}
