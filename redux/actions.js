import axios from 'axios';

const apiUrl = "../data/mock.json";

export const fetchBookingResults = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {        
        dispatch(booking(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function booking(results) {
    return {
        type: 'BOOKING_RESULTS',
        results
    }

}




