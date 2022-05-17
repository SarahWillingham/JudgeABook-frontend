import Header from './Header';
import NavBar from './NavBar';
import Card from './Card';
import Footer from './Footer';
import { useEffect, useState } from 'react';

function HomePage(props) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(()=>[]);
      props.restaurants.forEach(restaurant=>{
        setRestaurants(prevState=>([
          ...prevState,
          restaurant
        ]))
      })
  }, [props.restaurants])

  return (
    <div>
      <NavBar currentUser={props.currentUser}/>
      <Header
        searchRestaurants={props.searchRestaurants}
        partialSearchRestaurants={props.partialSearchRestaurants}/>
      <div className = "container">
        <div className = "row justify-content-center">
          {restaurants.map(restaurant => {
            const numberOfReviews = props.reviews.filter(review => review.restaurantId === restaurant.id).length;
              return (
                <Card
                  key={restaurant.id}
                  setFindRestaurants={props.setFindRestaurants}
                  numberOfReviews={numberOfReviews}
                  restaurant={restaurant}
                  setCurrentRestaurant={props.setCurrentRestaurant}
                />
              )
          })}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default HomePage;
