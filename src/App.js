import { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import RestaurantPage from './components/ResturantView/RestaurantPage';
import SignInPage from './components/SignInPage/SignInPage';
import EditRestaurantView from './components/EditRestaurant/EditRestaurantView'

function App() {

  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState({})
  const [restaurants, setRestaurants] = useState([])
  const [findRestaurants, setFindRestaurants] = useState([])
  const [currentRestaurant, setCurrentRestaurant] = useState({})
  const [reviews, setReviews] = useState([])

  const BASE_URL_RESTAURANT_SERVICE = "http://jumprestaurantservice-env.eba-zehpzbtd.us-east-1.elasticbeanstalk.com";
  const BASE_URL_USER_SERVICE = "http://jumpfinalprojectusersservice-env.eba-jm5kjp4s.us-east-1.elasticbeanstalk.com";
  const BASE_URL_REVIEW_SERVICE = "http://jumpfinalprojectreviews-env.eba-5yianuah.us-east-1.elasticbeanstalk.com";

  useEffect(()=>{
    fetchAllRestaurants();
    fetchAllUsers();
    fetchAllReviews();
  },[])

  const fetchAllRestaurants = async () => {
    // try {
    //   fetch(`${BASE_URL_RESTAURANT_SERVICE}/api/restaurants/all`)
    //     .then(res => res.json())
    //     .then(data => {
    //       setRestaurants(data);
    //     });
    // } catch (err) {
    //   console.error("Getting error: " + err);
    // }
  }

  const fetchAllUsers = async () => {
    // try {

    //   fetch(`${BASE_URL_USER_SERVICE}/api/users`)
    //     .then(res => res.json())
    //     .then(data => {
    //       setUsers(data);
    //     });
    // } catch (err) {
    //   console.error("Getting error: " + err);
    // }
  }

  const fetchAllReviews = async () => {
    // try {
    //   fetch(`${BASE_URL_REVIEW_SERVICE}/api/reviews`)
    //     .then(res => res.json())
    //     .then(data => {
    //       setReviews(data);
    //     });
    // } catch (err) {
    //   console.error("Getting error: " + err);
    // }
  }

  const searchRestaurants = (str) => {
    if (str) {
      setFindRestaurants( restaurants.filter( restaurant=> str === restaurant.name ))
    }

    if(!str.length){
      setFindRestaurants([])
    }
  }

  const partialSearchRestaurants = (str) => {
    if(str){
      setFindRestaurants(restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(str.toLowerCase())))
    }

    if (!str.length) {
      setFindRestaurants([])
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage
              restaurants={findRestaurants.length ? findRestaurants : restaurants}
              searchRestaurants={searchRestaurants}
              partialSearchRestaurants={partialSearchRestaurants}
              setCurrentRestaurant={setCurrentRestaurant}
              currentUser={currentUser}
              reviews={reviews}
              setFindRestaurants={setFindRestaurants}/>
          </Route>
          <Route exact path='/Restaurant'>
            <RestaurantPage
              currentRestaurant={currentRestaurant}
              currentUser={currentUser}
              reviews={reviews}
              setReviews={setReviews}
              />
          </Route>
          <Route exact path='/Login'>
            <SignInPage
              setUsers={setUsers}
              users={users}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}/>
          </Route>
          <Route exact path='/EditRestaurant'>
            <EditRestaurantView
              currentRestaurant={currentRestaurant}
              setCurrentRestaurant={setCurrentRestaurant}
              setRestaurants={setRestaurants}
              currentUser={currentUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
