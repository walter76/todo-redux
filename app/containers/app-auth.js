import { connect } from 'react-redux'
import App from '../components/app'

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

const AppAuth = connect(
  mapStateToProps
)(App)

export default AppAuth
