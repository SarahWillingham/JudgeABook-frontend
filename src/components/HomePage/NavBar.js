import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../../img/header.png';
function NavBar(props){
    console.log(props.currentUser)
    
    const history = useHistory()

    const logOut = () => {
        props.setJWT("")
        props.setCurrentUser()
        props.setRestaurants([])
        history.push("/")
    }
    return(

        <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
        <Link to={'/HomePage'}><img src="https://library.kissclipart.com/20190109/uww/kissclipart-book-clipart-book-reading-dictionary-e24fb2e6f3d527ce.png" alt="review" height = "50px"></img> Judge A Book</Link>
        <i className="fa fa-user-circle fa-2x" onClick = {logOut}>{props.currentUser ? "Log Out" : "Log In"}</i> 
        </div>
    </nav>

    );
}
 
export default NavBar;
