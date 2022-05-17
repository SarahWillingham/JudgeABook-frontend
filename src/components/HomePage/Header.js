import { useState } from 'react';
import '../../css/HeaderStyle.css';

function Header(props){

  const [restaurant, setRestaurant] = useState();

  const handleChange = (e) => {
    setRestaurant(e.target.value);
    props.partialSearchRestaurants(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.searchRestaurants(restaurant);
  }

  return(
      <header className="masthead text-white text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h4 className="mb-5">Welcome to Resti Review</h4>
          </div>
          <div className="col-md-17 col-lg-6 col-xl-5 mx-auto">
            <form>
              <div className="form-row justify-content-center ">
                <div className="input-group  col-12 "> <input type="text" className="form-control" placeholder="Search For A Restaurant" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChange}></input> <button className=" btn-primary border-rad col-3" type="button" id="button-addon2" onClick={handleClick}>Search</button> </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
