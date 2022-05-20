import Comment from './Comment';
import CommentHeader from './CommentHeader';
import '../../css/CommentStyle.css';
import AddComment from './AddComment';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function RestaurantBody(props){

    const [rateNumber, setRateNumber] = useState(0);
    const [fullStars, setFullStars] = useState(0);
    const [reviews, setReviews] = useState(props.currentRestaurant.reviews)
    console.log(reviews)
    // useEffect(() => {
    //     setReviews(props.currentRestaurant.reviews.filter(review => review.restaurantId === props.currentRestaurant.id))
    // }, [props.currentRestaurant.reviews, props.currentRestaurant])
    // useEffect(
    //     () => {
    //         setRateNumber(props.currentRestaurant.rating);

    //     },[props.currentRestaurant.rating]
    // )

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

    const numberOfReviews = props.reviews.filter(review => review.restaurantId === props.currentRestaurant.id).length;

    const removeComment = (commentId) => {
        if (!props.currentUser || props.currentUser.role !== "ROLE_ADMIN") {
            alert("You need to be logged in as an admin to delete a comment!");
            return;
        }
        fetch(`http://jumpfinalprojectreviews-env.eba-5yianuah.us-east-1.elasticbeanstalk.com/api/delete/review/${commentId}`, {
            "method": "DELETE"
        });
        props.setReviews(reviews.filter(review => review.id !== commentId));
    }

    return(
        <div className = "container">
            <div className="card card-cascade  reverse">
            <div className="view view-cascade overlay">
                <br></br>
                <img className="card-img-top"  width= "500px" src={props.currentRestaurant.image}
                alt="Card cap"></img>
                <div className="mask rgba-white-slight"></div>
            </div>
            <div className="card-body card-body-cascade text-center">
                    <h4 className="card-title"><strong>{props.currentRestaurant.name}</strong></h4>
                <ul className="list-unstyled list-inline rating mb-0">
                    {fullStars}
                    &nbsp;
                    <li className="list-inline-item"><p className="text-muted">({numberOfReviews})</p></li>
                </ul>
                <p className="card-text">{props.currentRestaurant.description}</p>
            </div>
            {props.currentUser.role === "ROLE_ADMIN"
                ? <Link
                        className="btn btn-primary mx-0 mb-0"
                        to={'/EditRestaurant'}>
                        Edit
                  </Link>
                : null}
            <br></br>
            </div>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <CommentHeader />
                        <hr></hr>
                        {
                            reviews.map((review) => {
                                console.log(review)
                                return (
                                    <div >
                                        <Comment review = {review}/>
                                    </div>
                                )
                            })
                        }
                        <br></br>
                        <AddComment
                            currentUser = {props.currentUser}
                            currentRestaurant={props.currentRestaurant}
                            reviews={props.reviews}
                            setReviews={props.setReviews}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantBody;
