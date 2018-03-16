import { graphql, requestSubscription } from 'react-relay';
import environment from '../relay-environment';
const newAuthorSubscription = graphql`
subscription NewAuthorSubscription {
  newAuthor { id name }
}
`
export default () => {
  const subscriptionConfig = {
    subscription: newAuthorSubscription,
    variables: {},
    updater: proxyStore => {
      // Get the new author
      const newAuthor = proxyStore.getRootField('newAuthor');
      // Get existing authors
      const root = proxyStore.getRoot();
      const authors = root.getLinkedRecords('authors');
      // Prepend the new author
      root.setLinkedRecords([newAuthor, ...authors], 'authors');
    },
    onError: error => console.log(`An error occured:`, error)
  }
  requestSubscription(
    environment,
    subscriptionConfig
  )
}
