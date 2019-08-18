
import {combineReducers} from 'redux'

function bookingresults(state={}, action) {
   switch(action.type){
   	case 'BOOKING_RESULTS':   			
   	   		return action.results
   	default: return state
   }
    
}


// function bookingdetails(state = {}, action) {
    
// 	return state
    
// }

const rootReducer = combineReducers({bookingresults})

export default rootReducer