import React, {Component} from 'react'

import {Route, Link} from 'react-router-dom';
import BookingResults from './components/BookingResults';
import Search from './components/Search'


class Main extends Component {
 
    state = { loading: true }

    componentDidMount() {
      //console.log('main function...',this.props.booking({source:'hyd',startDate:'17/08/2019'}))

        
    }

    render() {
        return ( 
        <div className="App">
         <Route exact path = "/" render={() => (
                 <div>
                      <Search {...this.props}></Search>
                 </div>

            )}/>
        <Route exact path = "/results" render={() => (
                 <div>
                      <BookingResults {...this.props}></BookingResults>
                 </div>

            )}/>
              
            </div>
        
        )
    }

}


export default Main