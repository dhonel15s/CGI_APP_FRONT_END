// IMPORT: DEPENDENCIES
import { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// IMPORT: BOOTSTRAP ELEMENTS
import { Container, Form, Button, Row, Col } from 'react-bootstrap'; 

// IMPORT: USER CONTEXT
import UserContext from '../UserContext.js';

// IMPORT: CSS
import "../App.css";

// LOGIN FUNCTION MAIN --------------------------------------------------------------
export default function Login(){
	// DECLARE USER CONTEXT
	const { user, setUser } = useContext(UserContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// SUBMIT BUTTON DEFAULT VALUE
	const [isActive, setIsActive] = useState(false);


	// ACTIVE CHECKING IF INPUT FIELDS ARE NOT EMPTY
	useEffect(() => {

	    if(email !== '' && password !== ''){
	        setIsActive(true);
	    }else{
	        setIsActive(false);
	    }

	}, [email, password]);

	// This function checks the input email and password from Database
	function authenticate(event) {

		// PREVENT PAGE FROM AUTO RELOAD
	    event.preventDefault();

	    // FETCH USER DATA FROM DATABASE
	    fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
	        method: "POST",
	        headers: {
	            "Content-Type": "application/json"
	        },
	        // PASS INPUT EMAIL & PASSWORD AND CONVERT TO JSON FORMAT
	        body: JSON.stringify({
	            email: email,
	            password: password
	        })
	    })
	    .then(response => response.json())
	    .then(data => {

	        // CHECK LOGIN VALIDITY
	        // IF TOKEN IS NOT EMPTY (Valid credentials):
	        if(data.accessToken !== undefined){

	        	// ADD DATA TO LOCAL STORAGE
	            sessionStorage.setItem("token", data.accessToken);

	            // CALL FUNCTION TO RETRIEVE USER DETAILS FROM TOKEN
	            retrieveUserDetails(data.accessToken);

	            Swal.fire({
	                title: "Login Successful",
	                icon: "success",
	                text: data.message
	            });

	            setEmail('');
	            setPassword('');

	        }
	        else{
	        	// IF EMPTY TOKEN (Invalid credentials):
	            Swal.fire({
	                title: "Login Failed!",
	                icon: "error",
	                text: data.message
	            });
	        }
	    });


	}

	// This function retrieves user details using the retrieved Token after login
	const retrieveUserDetails = (token) => {

		// FETCH FROM USER DETAILS DATABASE
		fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
		    method: "GET",
		    headers:{
		        Authorization: `Bearer ${token}`
		    }
		})
		.then(response => response.json())
		.then(data => {


		    // STORE RETRIEVED USER DATA FROM TOKEN TO USER CONTEXT
		    setUser({
		        id: data.details._id
		    });
		})
	}


	// LOGIN MAIN DESIGN-------------------------------------------------------
	if(user.id === null){
	return (
		<Row className="login-row p-2">
			<Col className="m-auto" xs={11} md={8} lg={6}>
				<Container className="login-bg p-5 shadow-sm rounded-5">
					<Form onSubmit={(event) => authenticate(event)} className="text-white login-bg">
						<h2 className="login-bg login-title mb-4">Login</h2>
						<Form.Group className="mb-3 login-bg py-2" controlId="formBasicEmail">
					        <Form.Label className="login-bg">Email address</Form.Label>
					        <Form.Control
					        	className="rounded-pill"
					        	type="email"
					        	value={email}
					        	onChange={(event)=>setEmail(event.target.value)}
					        	placeholder="ex. juan@mail.com"
					        	required/>
					    </Form.Group>

					      <Form.Group className="mb-3 login-bg" controlId="formBasicPassword">
					        <Form.Label className="login-bg">Password</Form.Label>
					        <Form.Control
					        	className="rounded-pill"
					        	value={password}
					        	onChange={(event)=>setPassword(event.target.value)}
					        	type="password"/>
					      </Form.Group>

					      {/*CHECKING IF EMAIL AND PASSWORD FIELD IS EMPTY OR NOT*/}
					      {
					      	isActive ?
					      		// IF INPUT FIELDS ARE COMPLETE
					      		<Button type="submit" className="submit-button shadow-sm text-dark rounded-pill px-4">Login</Button>
					      	:
					      		// IF INPUT FIELDS ARE EMPTY
					      		<Button type="submit" className="submit-button shadow-sm text-dark rounded-pill px-4" disabled>Login</Button>
					      }
					      
					</Form>
				</Container>
			</Col>
		</Row>
	  )
	}

	else {
		<Navigate to="/home"/>
	}

}