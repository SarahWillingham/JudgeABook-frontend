import usrImg from "../../img/user.webp"

function Comment(props){

    const handleClick = (e) => {
        e.preventDefault();
        props.removeComment(props.review.id);
    }

    return(
        <div className="card p-3 mt-2">
            <div className="row">
                <span className="col-1  "></span>
                <span className="col-2 d-flex">{props.review.creationDate}</span>
                <span className="col-5 d-flex ml-2">Rating: {props.review.rating}</span>
            </div>
            <div className=" row ">
                <div className="user col-1">
                    <img src={usrImg} width="50px" alt="user" className="user-img rounded-circle"></img>
                    <small className="font-weight-bold text-primary d-flex align-items-center ml-3">{props.review.username}</small>
                </div>
                <div className="user col-9">
                    <span>
                        <small className=" d-flex font-weight-bold  ml-2 mt-1"> {props.review.comment}</small>
                    </span>
                </div>
            </div>
            <div className="action d-flex justify-content-between mt-2 align-items-center">
                <div className="px-5">
                    <span className = "remove ml-3">
                        <small onClick={handleClick}>Remove</small>
                    </span>
                </div>
                <div className="icons align-items-center"> </div>
            </div>
        </div>
    );
}

export default Comment;
