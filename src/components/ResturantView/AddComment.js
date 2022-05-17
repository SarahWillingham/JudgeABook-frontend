import React, { useEffect, useState } from "react";
import '../../css/AddCommentStyle.css';

function AddComment(props) {

  const [comment, setComment] = useState();
  const [rating, setRating] = useState();

  useEffect((e) =>{
    document.getElementById("clearText").value = "";
  },[])

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handleRatingChange = (e) => {
    setRating(e.target.value)
  }

  const handleSendClick = (e) => {
    e.preventDefault();
    if (!props.currentUser.username) {
      alert("You need to be signed in to write a review!");
      return;
    }

    setComment(null);
    setRating(null);

    props.setReviews([...props.reviews, {
          "comment": comment,
          "creationDate": "2021-03-31",
          "rating": rating,
          "restaurantId": props.currentRestaurant.id,
          "userId": props.currentUser.id,
          "username": props.currentUser.username
        }]);

    fetch(`http://jumpfinalprojectreviews-env.eba-5yianuah.us-east-1.elasticbeanstalk.com/api/add/review`, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
          "comment": comment,
          "creationDate": "2021-03-31",
          "rating": rating,
        "restaurantId": props.currentRestaurant.id,
        "userId": props.currentUser.id,
          "username": props.currentUser.username
      })
    })
  }

  return (
        <div className="d-flex justify-content-center">
        <div class="comment-card">
        <div class="row ">
            <div class="col-10">
                <div class="comment-box ml-2">
                    <h4>Add A Review</h4>
              <div class="rate"> <input type="radio" name="rate" value="5" id="5" onChange={handleRatingChange}></input><label for="5">☆</label> <input type="radio" name="rate" value="4" id="4" onChange={handleRatingChange}></input><label for="4">☆</label> <input type="radio" name="rate" value="3" id="3" onChange={handleRatingChange}></input><label for="3">☆</label> <input type="radio" name="rate" value="2" id="2"></input><label for="2" onChange={handleRatingChange}>☆</label> <input type="radio" name="rate" value="1" id="1" onChange={handleRatingChange}></input><label for="1">☆</label> </div>
              <div class="comment-area"> <textarea onChange={handleCommentChange} class="form-control" placeholder="what is your view?" rows="3" id= "clearText"></textarea> </div>
                    <div class="comment-btns mt-2">
                        <div class="row">
                            <div class="col-6">
                                <div class="align-content-center"> <button onClick={handleSendClick} class="btn btn-primary send btn-sm">Send <i class="fa fa-long-arrow-right ml-1"></i></button> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}


export default AddComment;
