import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'
import config from '../config'
import { isTokenExpired } from './jwtHelpers'

const callbackUrl = `${window.location.protocol}//${window.location.host}/auth/callback`

class AuthService {
  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: callbackUrl,
        responseType: 'token',
        params: {
          scope: 'openid email given_name family_name',
        },
      },
    })
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this._setupEventListeners()
  }

  _setupEventListeners() {
    this.lock.on('authenticated', (authResult) => {
      // TODO: make sure `authResult.idTokenPayload.email` exists. Otherwise, ask the user
      //       to remove the Kino App and login again and allow access to their email.
      this.setToken(authResult.idToken)
      browserHistory.replace('/')
    })

    this.lock.on('show', () => {
      this.shown = true
    })

    this.lock.on('hide', () => {
      this.shown = false
    })
  }

  login() {
    if (!this.shown) {
      this.lock.show()
    }
  }

  loggedIn() {
    return !!this.getToken()
  }

  setToken(idToken) {
    window.localStorage.setItem('id_token', idToken)
  }

  getToken() {
    const token = window.localStorage.getItem('id_token')
    if (token && !isTokenExpired(token)) {
      return token
    }
    return null
  }

  logout() {
    window.localStorage.removeItem('id_token')
    browserHistory.replace('/')
  }
}

export default new AuthService(config.AUTH0_CLIENT_ID, config.AUTH0_DOMAIN)
