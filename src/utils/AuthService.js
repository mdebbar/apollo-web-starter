import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'
import config from '../config'
import { isTokenExpired } from './jwtHelpers'

const redirectUrl = window.location.protocol + '//' + window.location.host

class AuthService {
  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: redirectUrl,
        responseType: 'token',
      },
    })
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this._setupEventListeners()
  }

  _setupEventListeners() {
    this.lock.on('authenticated', (authResult) => {
      this.setToken(authResult.idToken)
      browserHistory.replace('/')
      this.hide()
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

  hide() {
    if (this.shown) {
      this.lock.hide()
    }
  }

  loggedIn() {
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  setToken(idToken) {
    window.localStorage.setItem('id_token', idToken)
  }

  getToken() {
    return window.localStorage.getItem('id_token')
  }

  logout() {
    window.localStorage.removeItem('id_token')
    browserHistory.replace('/')
  }
}

export default new AuthService(config.AUTH0_CLIENT_ID, config.AUTH0_DOMAIN)
