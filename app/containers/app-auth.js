import { connect } from 'react-redux'
import { login } from '../actions'
import App from '../components/app'

const mapStateToProps = (state, ownProps) => {
  return {
    'isLoggedIn': state.user.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    'onClick': () => {
      dispatch(login())
    }
  }
}

const AppAuth = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppAuth
