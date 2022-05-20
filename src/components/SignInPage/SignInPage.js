import React from 'react';
import NavBar from '../HomePage/NavBar';
import Footer from '../HomePage/Footer';
import SignIn from './SignIn';

function SignInPage (props){
   
   
    return(

        <div>
            <NavBar currentUser={props.currentUser}/>
            <br></br>
            <br></br>
            <SignIn setUsers={props.setUsers} users={props.users} setCurrentUser={props.setCurrentUser} setJWT={props.setJWT} setResturants = {props.setResturants}/>
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
}
export default SignInPage;
