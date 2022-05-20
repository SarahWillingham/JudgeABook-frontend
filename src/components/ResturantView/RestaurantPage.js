import NavBar from '../HomePage/NavBar';
import Footer from '../HomePage/Footer';
import RestaurantBody from './RestaurantBody';

function RestaurantPage(props){
    return(
        <div>
            <NavBar currentUser={props.currentUser} setJWT={props.setJWT} setCurrentUser={props.setCurrentUser} setRestaurants={props.setRestaurants}/>
            <br></br>
            <RestaurantBody
                reviews={props.reviews}
                setReviews={props.setReviews}
                currentRestaurant={props.currentRestaurant}
                currentUser = {props.currentUser}
                />
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
}

export default RestaurantPage;
