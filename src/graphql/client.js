import ApolloClient, { createNetworkInterface } from 'apollo-client'

const networkInterface = createNetworkInterface({
  // DEV_ONLY
  uri: 'http://localhost:4000/graphql',
})

export default new ApolloClient({ networkInterface })
