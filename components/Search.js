import React ,{Component} from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class Search extends Component {
	state ={ validated:false, setValidated:false }
	constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){


    }
    handleSubmit(event) {
    	event.preventDefault();
    	const form = event.currentTarget;
    	
    	  if (form.checkValidity() === false) {
		      this.setState({setValidated:false});
		      
		    }else{
		      this.props.fetchBookingResults().then(() => {
		      	this.props.history.push('/results')
		      });
		      
		      this.setState({setValidated:true});
		    }
        
        
    }
	render() {
		

		return(
			<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
				<h2>Agent Booking</h2>
              <Form.Group as={Row} className="form-group">
		         <Form.Label column sm="2">Source City</Form.Label>
		          <Col sm="6">
		         <Form.Control type="text" required
                     name="source" 
                     //value={this.state.formControls.name.value} 
                     //onChange={this.changeHandler} 
              		/>
              		
              	  </Col>
		       </Form.Group>
		       <Form.Group as={Row} className="form-group">
		         <Form.Label column sm="2">Destination City</Form.Label>
		          <Col sm="6">
		         <Form.Control type="text" required
                     name="destination"                      
                     
              		/>
              	  </Col>
		       </Form.Group>
		       <Form.Group as={Row} className="form-group">
		         <Form.Label column sm="2">Start Date</Form.Label>
		          <Col sm="6">
		         <Form.Control type="date" required
                     name="startdate"                      
                     
              		/>
              	  </Col>
		       </Form.Group>
		       <Form.Group as={Row} className="form-group">
		         <Form.Label column sm="2">Return Date</Form.Label>
		          <Col sm="6">
		         <Form.Control type="date" 
                     name="returndate"                      
                     
              		/>
              	  </Col>
		       </Form.Group>



		
              
		        <Button type="submit" variant="primary">
			          Search
			       </Button>

              

          </Form>     

			)
	}
}

export default withRouter(Search)