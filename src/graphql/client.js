import { ApolloClient, createNetworkInterface } from 'apollo-client'
import config from '../config'
import AuthService from '../auth/AuthService'

const networkInterface = createNetworkInterface({
  // DEV_ONLY
  uri: `${config.API_HOST}/graphql`,
})

// Inject authentication token in HTTP headers.
networkInterface.use([{
  applyMiddleware(req, next) {
    req.options.headers = req.options.headers || {}
    req.options.headers['Authorization'] = `Bearer ${AuthService.getToken()}`
    next()
  },
}])

export default new ApolloClient({ networkInterface })
