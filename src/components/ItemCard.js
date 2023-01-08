// IMPORT: DEPENDENCIES
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

// IMPORT: BOOTSTRAP ELEMENTS
import { Card, Col, Container, Button } from 'react-bootstrap';

// IMPORT: CSS
import "../App.css";


// ITEM CARD FUNCTION MAIN --------------------------------------------------------------
export default function ItemCard({itemProp}) {


	const { _id, name,  description, reason, targetDate, completedDate  } = itemProp;    

    function deleteItem (itemId){
        fetch(`${process.env.REACT_APP_API_URL}/items/delete/${itemId}`, {
            method: "DELETE"
        })

        .then(response => response.json())
        .then(data => {
            if (data.status === true) {

                Swal.fire({
                    title: "Deleted!",
                    icon: "success",
                    text: `Item successfully deleted.`
                });

            }else {
                Swal.fire({
                    title: "Failed!",
                    icon: "error",
                    text: "Error encountered while deleting item."
                });
            }
        })

        
    }

    // ITEM CARD MAIN DESIGN------------------------------------------------------------------
    return (
        <Col xs={12} md={10} className="mx-auto my-3 px-3 px-md-5">
        	<Card className="shadow-sm violet-bg text-white rounded-4">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text >
                        <strong>Description: </strong>{description}<br/>
                        <strong>Reason: </strong>{reason}<br/>
                        <strong>Target Date: </strong>{targetDate}<br/>
                        <strong>Completed Date: </strong>{completedDate}
                    </Card.Text>
                    <Container className="d-flex flex-row-reverse">
                        <Button
                            className="shadow-sm rounded-pill red-button mx-2 py-1 px-4 border border-0"
                            onClick={()=> deleteItem(_id)}
                        >Delete</Button>
                        <Button
                            className="shadow-sm rounded-pill yellow-button mx-2 py-1 px-4 border border-0 text-dark"
                            as={Link} to={`/careerobjectives/update/${_id}`}
                        >Modify</Button>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    )
}