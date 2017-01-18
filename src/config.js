let config

// TODO: Figure out a better way to handle configs:
// 1. It has to be easy to modify config values on the fly without a deployment.
// 2. Should production config be secret (not inside repo)?
if (process.env.NODE_ENV === 'production') {
  config = {
    AUTH0_CLIENT_ID: '',
    AUTH0_DOMAIN: 'kino.auth0.com',
  }
} else {
  // This part will automatically be removed in production builds.
  config = {
    AUTH0_CLIENT_ID: '8CsBqfjDelYpjnU66cOpK4IrTkHUvW3i',
    AUTH0_DOMAIN: 'kino.auth0.com',
  }
}

export default config
