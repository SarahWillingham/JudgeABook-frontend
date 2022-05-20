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
  const [JWT, setJWT] = useState({})
  const [currentUser, setCurrentUser] = useState()
  const [restaurants, setRestaurants] = useState([])
  const [findRestaurants, setFindRestaurants] = useState([])
  const [currentRestaurant, setCurrentRestaurant] = useState({})
  const [reviews, setReviews] = useState([])

  const BASE_URL_RESTAURANT_SERVICE = "http://localhost:8081/api/";
  const BASE_URL_USER_SERVICE = "http://localhost:8081/api/";
  const BASE_URL_REVIEW_SERVICE = "http://jumpfinalprojectreviews-env.eba-5yianuah.us-east-1.elasticbeanstalk.com";

 console.log(JWT)

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
          <Route exact path='/HomePage'>
            <HomePage
              restaurants={findRestaurants.length ? findRestaurants : restaurants}
              searchRestaurants={searchRestaurants}
              partialSearchRestaurants={partialSearchRestaurants}
              setCurrentRestaurant={setCurrentRestaurant}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              reviews={reviews}
              setFindRestaurants={setFindRestaurants}
              JWT = {JWT}
              setJWT = {setJWT}
              setRestaurants = {setRestaurants}
              />
          </Route>
          <Route exact path='/Restaurant'>
            <RestaurantPage
              currentRestaurant={currentRestaurant}
              setRestaurants={setRestaurants}
              currentUser={currentUser}
              setCurrentUser = {setCurrentUser}
              reviews={reviews}
              setReviews={setReviews}
              setJWT={setJWT}
              />
          </Route>
          <Route exact path='/'>
            <SignInPage
              setUsers={setUsers}
              users={users}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
              setJWT = {setJWT}/>
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
