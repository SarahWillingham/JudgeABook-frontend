import '../../css/EditRestaurantStyle.css';
import NavBar from '../HomePage/NavBar';
import Footer from '../HomePage/Footer';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

export default function EditRestaurantView(props) {
  const [name, setName] = useState(props.currentRestaurant.name)
  const [description, setDescription] = useState(props.currentRestaurant.description)
  const [phone, setPhone] = useState(props.currentRestaurant.phone)
  const [address, setAddress] = useState(props.currentRestaurant.address)
  const history = useHistory();

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  }

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://jumprestaurantservice-env.eba-zehpzbtd.us-east-1.elasticbeanstalk.com/api/restaurant/update`, {
      "method": "PUT",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
        "id": props.currentRestaurant.id,
        "address": address,
        "category": props.currentRestaurant.category,
        "description": description,
        "email": props.currentRestaurant.email,
        "imgUrl": props.currentRestaurant.imgUrl,
        "name": name,
        "numOfRating": props.currentRestaurant.numOfRating,
        "phone": phone,
        "rating": props.currentRestaurant.rating,
        "reviews": props.currentRestaurant.reviews
      })
    });
    props.setCurrentRestaurant({
      ...props.currentRestaurant,
      name: name,
      description: description,
      phone: phone,
      address: address
    });
    history.push("/")
  }

  return (
    <div>
      <NavBar currentUser={props.currentUser} />
      <div className="container mt-5">
        <div className="card card-cascade  reverse">
          <div className="view view-cascade overlay">
            <br></br>
            <img className="card-img-top" width="500px" src={props.currentRestaurant.imgUrl}
              alt="Card cap"></img>
            <div className="mask rgba-white-slight"></div>
          </div>
          <form className="card-body card-body-cascade text-center form-group" onSubmit={handleSubmit}>
            <div class="form-group mt-2">
              <label for="restaurant-name">Name</label>
              <input
                type="text"
                class="form-control"
                id="restaurant-name"
                placeholder={props.currentRestaurant.name}
                onChange={handleChangeName}/>
            </div>
            <div class="form-group mt-2">
              <label for="restaurant-description">Description</label>
              <input
                type="text"
                class="form-control"
                id="restaurant-description"
                placeholder={props.currentRestaurant.description}
                onChange={handleChangeDescription}/>
            </div>
            <div class="form-group mt-2">
                <label for="restaurant-phone">Phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="restaurant-phone"
                  placeholder={props.currentRestaurant.phone}
                  onChange={handleChangePhone}/>
            </div>
            <div class="form-group mt-2">
                <label for="restaurant-address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="restaurant-address"
                  placeholder={props.currentRestaurant.address}
                  onChange={handleChangeAddress}/>
            </div>
            <button class="btn btn-primary send btn-sm" type="submit">Submit</button>
          </form>
          <br></br>
        </div>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
