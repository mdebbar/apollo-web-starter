let config

if (process.env.NODE_ENV === 'production') {
  config = {
    'test-key': 'prod-val',
  }
} else {
  // This part will automatically be removed in production builds.
  config = {
    'test-key': 'dev-val',
  }
}

export default config
