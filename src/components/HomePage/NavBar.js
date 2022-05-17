import { Link } from 'react-router-dom';
import Header from '../../img/header.png';
function NavBar(props){
    return(

            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                <Link to={'/'}><img src={Header} alt="review" height = "50px"></img> Resti Review</Link>
                <Link to={'/Login'}><i className="fa fa-user-circle fa-2x"></i>&nbsp;&nbsp;
                    {
                        props.currentUser.username
                            ? props.currentUser.username
                            : "Log In"
                    }
                </Link>
                </div>
            </nav>

    );
}

export default NavBar;
