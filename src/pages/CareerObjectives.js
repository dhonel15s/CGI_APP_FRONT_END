// IMPORT: DEPENDENCIES
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

// IMPORT: BOOTSTRAP ELEMENTS
import { Tabs, Tab, Row, Col, Form, Button, Container } from 'react-bootstrap';

// IMPORT: CSS
import "../App.css";

// IMPORT: COMPONENTS
import ItemCard from "../components/ItemCard.js";


// CAREER OBJECTIVES FUNCTION MAIN --------------------------------------------------------------
export default function CareerObjectives() {

	// DECLARE USE STATES
	const [items, setItems] = useState([]); 

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [reason, setReason] = useState('');
	const [targetDate, setTargetDate] = useState('');
	const [completedDate, setCompletedDate] = useState('');

	// ACTIVE FETCHING OF ITEMS FROM DATABASE
	useEffect(() =>{

		// FETCH ITEMS FROM DATABASE
		fetch(`${process.env.REACT_APP_API_URL}/items/all`)
		.then(response => response.json())
		.then(data => {
			// DISPLAY EACH ITEM
			setItems(data.itemList.map(item =>{		
				return(
					<ItemCard key={item._id} itemProp={item}/>
				);
			}));
		})
	}, [items]);


	const addItem = () =>{

		fetch(`${ process.env.REACT_APP_API_URL }/items/add`, {
			method: "POST",
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
					title: "Added!",
					icon: "success",
					text: data.message
				});

				setName('');
				setDescription('');
				setReason('');
				setTargetDate('');
				setCompletedDate('');

			}
			else{
				Swal.fire({
					title: "Failed.",
					icon: "error",
					text: data.message
				});
			}

		});

	}


	// CAREER OBJECTIVES MAIN DESIGN------------------------------------------------------------------
	return(
		<>
			<Tabs defaultActiveKey="all" className="mt-4">
				<Tab eventKey="all" title="All Items" className="text-dark">
					<Row>
						{ items }
					</Row>
				</Tab>

				<Tab eventKey="add" title="Add Item" className="text-dark">
					<Row>
					<Col xs={10} md={8} className="border border-light-subtle rounded-2 mx-auto my-5">
					<Form className="p-3" onSubmit={(e)=> addItem()}>
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
					    <Button variant="primary" type="submit" className="rounded-pill logout-button mx-2 py-1 px-4">
					        Add item
					    </Button>
					    </Container>
					</Form>
					</Col>
					</Row>
				</Tab>
			</Tabs>

			
			{/*<Row>
			
			</Row>
			<Row className="mb-5">{products}</Row>*/}
		</>
	)
}