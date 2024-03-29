import Main from './Main'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './redux/actions'




import { withRouter } from 'react-router-dom';

function mapStateToProps(state) {
  console.log('mapStateToProps',state.bookingresults)
    return {
        bookingresults: state.bookingresults,
        //comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)

}



const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App

