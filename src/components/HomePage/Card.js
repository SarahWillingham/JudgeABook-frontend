import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/CardStyle.css';


function Card(props){

    const [rateNumber, setRateNumber] = useState(0);
    const [fullStars, setFullStars] = useState(0);

    const handleClick = (e) => {
        props.setCurrentRestaurant(props.restaurant);
        props.setFindRestaurants([]);
    }
    useEffect(() => {
            setRateNumber(props.restaurant.rating);
        },[props.restaurant.rating])

    useEffect(() =>{
        let stars;
        if(rateNumber === 1){
        stars = (
                    <span>
                        <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                    </span>
                )
        }
        if(rateNumber === 2){
            stars = (
                        <div>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>

                        </div>
                    )
            }
        if(rateNumber === 3){
            stars = (
                        <span>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>

                        </span>
                    )
            }
        if(rateNumber === 4){
            stars = (
                        <span>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>

                            </span>
                    )
            }
        if(rateNumber === 5){
            stars = (
                        <span>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>
                            <li className="list-inline-item mr-0"><i className="fa fa-star amber-text"></i></li>

                        </span>
                    )
            }
        setFullStars(stars)
    }, [rateNumber])

    return(
        <div className="col-md-4 mt-5">
            <div className="card booking-card">
                <div className="view overlay">
                    <img className="card-img-top" src={props.restaurant.image} alt={props.restaurant.name} height = "275px" width = "250px"></img>
                    <div className="mask rgba-white-slight"></div>
                </div>

                <div className="card-body">

                    <h4 className="card-title font-weight-bold">{props.restaurant.name}</h4>
                    <ul className="list-unstyled list-inline rating mb-0">
                        {fullStars}
                        &nbsp;
                        <li className="list-inline-item"><p className="text-muted">({props.numberOfReviews})</p></li>
                    </ul>
                    <p className="mb-2">• {props.restaurant.genre}</p>
                    <p className="card-text">{props.restaurant.description}</p>
                    <hr className="my-4"></hr>

                    <Link
                        className="btn btn-primary  mx-0 mb-0"
                        to={'/Restaurant'}
                        onClick={handleClick}>
                        View
                    </Link>

                </div>
            </div>
        </div>
    );
}

export  default Card;
