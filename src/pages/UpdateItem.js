// IMPORT: DEPENDENCIES
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

// IMPORT: BOOTSTRAP
import { Row, Col, Form, Container, Button } from "react-bootstrap";



// UPDATE ITEM FUNCTION MAIN --------------------------------------------------------------
export default function UpdateItem(){


	// DECLARE VARIABLE STORING THE ITEM ID FROM PARAMS (URL)
	const { itemId } = useParams();

	// USE NAVIGATE TO GO TO OTHER PAGE
	const navigate = useNavigate();

	// SET INITIAL VALUE TO FF
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [reason, setReason] = useState('');
	const [targetDate, setTargetDate] = useState('');
	const [completedDate, setCompletedDate] = useState('');

	// ACTIVE FETCHING OF ITEM DATA FROM DATABASE
	useEffect(()=>{

		fetch(`${ process.env.REACT_APP_API_URL }/items/${itemId}`)
		.then(response => response.json())
		.then(data => {
			// PASS FETCHED DATA TO VARIABLES
			setName(data.details.name);
			setDescription(data.details.description);
			setReason(data.details.reason);
			setTargetDate(data.details.targetDate);
			setCompletedDate(data.details.completedDate);
		});

	}, [itemId])

	// UPDATE ITEM FUNCTIONS -----------------------------------------------------------------

	const updateItem = (event, itemId) =>{

		event.preventDefault();

		fetch(`${ process.env.REACT_APP_API_URL }/items/update/${itemId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: name,
				description: description,
				reason: reason,
				targetDate: targetDate,
				completedDate: completedDate
			})
		})
		.then(response => response.json())
		.then(data => {

			if(data.status){
				Swal.fire({
					title: "Updated!",
					icon: "success",
					text: `${name} successfully updated.`
				});

				navigate("/careerobjectives");

			}
			else{
				Swal.fire({
					title: "Failed!",
					icon: "error",
					text: "Error encountered while updating item."
				});
			}

		});

	}

	// UPDATE ITEM MAIN DESIGN------------------------------------------------------------------
	return(
		<Row>
		<Col xs={10} md={8} className="border border-light-subtle rounded-4 mx-auto my-5 violet-bg text-white">
		<Form className="p-3" onSubmit={(e)=> updateItem(e, itemId)}>
			<Form.Group className="mb-3">
		    	<Form.Label>Item Name</Form.Label>
		        <Form.Control
		        	type="text"
		        	value={name}
		        	onChange={(e)=> setName(e.target.value)}
		        	required
		        />
		    </Form.Group>

		    <Form.Group className="mb-3">
		    	<Row>
		    		<Col>
			    		<Form.Label>Description</Form.Label>
			        	<Form.Control
			        		as="textarea"
			        		value={description}
			        		onChange={(e)=> setDescription(e.target.value)}
			        		required
			        	/>
			        </Col>

			        <Col>
			        	<Form.Label>Reason</Form.Label>
			        	<Form.Control
			        		as="textarea"
			        		value={reason}
			        		onChange={(e)=> setReason(e.target.value)}
			        		required
			        	/>
			        </Col>
		        </Row>
		    </Form.Group>

		    <Form.Group className="mb-3">
		    	<Row>
		    		<Col>
			    		<Form.Label>Target Date</Form.Label>
			        	<Form.Control
			        		type="date"
			        		value={targetDate}
			        		onChange={(e)=> setTargetDate(e.target.value)}
			        		required
			        	/>
			        </Col>

			        <Col>
			    		<Form.Label>Completed Date</Form.Label>
			        	<Form.Control
			        		type="date"
			        		value={completedDate}
			        		onChange={(e)=> setCompletedDate(e.target.value)}
			        		required
			        	/>
			        </Col>
		        </Row>
		    </Form.Group>

		    <Container className="d-flex flex-row-reverse">
		    <Button as={Link} to={`/careerobjectives`} className="rounded-pill red-button text-white shadow-sm mx-2 py-1 px-4">
		        Cancel
		    </Button>
		    <Button type="submit" className="rounded-pill yellow-button text-dark shadow-sm mx-2 py-1 px-4">
		        Update
		    </Button>
		    </Container>
		</Form>
		</Col>
		</Row>
	)
}
