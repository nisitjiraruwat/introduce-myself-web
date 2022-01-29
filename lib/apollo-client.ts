import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { log } from 'console'

const apolloClientUri = typeof window === 'undefined'
  ? process.env.SERVER_SIDE_ADMIN_URL!
  : process.env.ADMIN_URL!

log(apolloClientUri)

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: apolloClientUri,
    credentials: 'same-origin'
  }),
  cache: new InMemoryCache()
})

export default client
