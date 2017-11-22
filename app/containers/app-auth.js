import { connect } from 'react-redux'
import { login, logout } from '../actions'
import App from '../components/app'

const mapStateToProps = (state, ownProps) => {
  return {
    'isLoggedIn': state.user.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    'onLogin': () => {
      dispatch(login())
    },
    'onLogout': () => {
      dispatch(logout())
    }
  }
}

const AppAuth = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppAuth
