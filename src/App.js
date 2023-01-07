// IMPORT: DEPENDENCIES
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";

// IMPORT: BOOTSTRAP ELEMENTS
import { Container } from 'react-bootstrap';

// IMPORT: USER CONTEXT
import { UserProvider } from './UserContext.js';

// IMPORT: CSS
import './App.css';

// IMPORT: PAGES
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Logout from './pages/Logout.js';
import CareerObjectives from './pages/CareerObjectives.js';

// IMPORT: COMPONENTS
import AppNavbar from './components/AppNavbar.js';

function App() {

  // GET LOGGED-IN USER DETAILS
  let loggedUser = {
      token: sessionStorage.getItem("token")
  }

  // DECLARE USER CONTEXT
  const [user, setUser] = useState({
    id: null
  });

  // USED FOR CLEARING LOCAL STORAGE
  const unsetUser = () =>{
    sessionStorage.clear(); 
  };

 // ACTIVE CHECKING OF INPUT FIELDS
 useEffect(()=>{
 }, [user])
 useEffect(()=>{

   // FETCH USER DATA FROM DATABASE
   fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
     method: "GET",
     headers:{
       // USE TOKEN FROM LOCAL STORAGE TO GET USER DETAILS
       Authorization: `Bearer ${sessionStorage.getItem("token")}`
     }
   })
   .then(response => response.json())
   .then(data => {
     // IF DATA FROM TOKEN IS VALID
     if(data._id !== undefined){
       // CHANGE USER DATA FROM NULL TO UPDATED
       setUser({
         id: data.details._id
       });
     }
     // IF DATA FROM TOKEN IS INVALID
     else{
       // CHANGE USER DATA TO NULL
       setUser({
         id: null
       });
     }
     
   })

 }, [])

  // APP MAIN DESIGN------------------------------------------------
  if(loggedUser.token === null){
    return (
      <UserProvider value={{user, setUser, unsetUser}}>
        <Router>
          <AppNavbar/>

          <Container>
            <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="*" element={<Login/>}/>
            </Routes>
          </Container>
        </Router>
      </UserProvider>
    );
  }
  else {
    return (
      <UserProvider value={{user, setUser, unsetUser}}>
        <Router>
          <AppNavbar/>
          
          <Container>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/home" element={<Home/>}/>
              <Route exact path="/careerobjectives" element={<CareerObjectives/>}/>
              <Route exact path="/logout" element={<Logout/>}/>
              <Route exact path="*" element={<Home/>}/>
            </Routes>
          </Container>
        </Router>
      </UserProvider>
    );
  }


  
}

export default App;


