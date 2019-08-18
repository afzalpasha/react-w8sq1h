import React ,{Component} from 'react'

class BookingResults extends Component {

	render() {
		
		return(
			<div> 
				<table className="table">
					  <thead>
					    <tr>
					      <th scope="col" colSpan="2" className="text-center">Flight Number</th>
					      <th scope="col" colSpan="2" className="text-center">Airline</th>
					      <th scope="col" colSpan="2" className="text-center">Departure</th>
					      <th scope="col" colSpan="2" className="text-center">Arrival</th>
					      <th scope="col" colSpan="2" className="text-center">Duration</th>
					      <th scope="col" colSpan="2" className="text-center">No.Of Stops</th>
					      <th scope="col" colSpan="2" className="text-center">Price</th>
					    </tr>
					  </thead>
					  <tbody>
					  {
					  	this.props.bookingresults.results.map((item,index) => {
					  		return (
					  			<tr key={index}>
							      <th scope="row" colSpan="2" className="text-center">{item.flightnumber}</th>
							      <td colSpan="2" className="text-center">{item.airline}</td>
							      <td colSpan="2" className="text-center">{item.departure}</td>
							      <td colSpan="2" className="text-center">{item.arrival}</td>
							      <td colSpan="2" className="text-center">{item.duration}</td>
							      <td colSpan="2" className="text-center">{item.stops}</td>
							      <td colSpan="2" className="text-center">{item.price}</td>
							    </tr>
					  		)
					  	})
					  }
					    
					    
					    
					  </tbody>
					</table>
					<nav aria-label="Page navigation example">
					  <ul class="pagination justify-content-center">
					    <li class="page-item disabled">
					      <a class="page-link" href="#" tabindex="-1">Previous</a>
					    </li>
					    <li class="page-item"><a class="page-link" href="#">1</a></li>
					    <li class="page-item"><a class="page-link" href="#">2</a></li>
					    <li class="page-item"><a class="page-link" href="#">3</a></li>
					    <li class="page-item">
					      <a class="page-link" href="#">Next</a>
					    </li>
					  </ul>
					</nav>
			</div>    

			)
	}
}

export default BookingResults