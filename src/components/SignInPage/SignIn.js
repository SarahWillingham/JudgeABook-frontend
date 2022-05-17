import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../css/SignInStyle.css';

function SignIn(props) {

    const [username, setUsername] = useState(0);
    const [pass, setPass] = useState(0);
    const [pass2, setPass2] = useState(0);
    const history = useHistory();

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePassChange = (e) => {
        setPass(e.target.value);
    }

    const handlePassSignUpVerificationChange = (e) => {
        setPass2(e.target.value);
    }

    const handleSubmitSignIn = (e) => {
        e.preventDefault();
        const matches = props.users.filter(user=>user.username===username);
        matches.forEach(match => {
            if (match.password === pass){
                props.setCurrentUser(match);

                history.push("/");
            }
        })
    }

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        if (pass === pass2) {

            try{
                fetch(`http://jumpfinalprojectusersservice-env.eba-jm5kjp4s.us-east-1.elasticbeanstalk.com/api/add/user`, {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        username: username,
                        password: pass,
                        role: "ROLE_USER"
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        props.setUsers({...props.users, data});
                        props.setCurrentUser({ username: username, pass: pass });
                    })
                history.push("/");
            } catch (err) {
                console.error(err);
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto p-0">
                    <div className="card">
                        <div className="login-box">
                            <div className="login-snip">
                                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked></input>
                                <label htmlFor="tab-1" className="tab">Login</label>
                                <input id="tab-2" type="radio" name="tab" className="sign-up"></input>
                                <label htmlFor="tab-2" className="tab">Sign Up</label>
                                <div className="login-space">
                                    <form className="login" onSubmit={handleSubmitSignIn}>
                                        <div className="group">
                                            <label htmlFor="user" className="label">Username</label>
                                            <input id="input-user1" type="text" className="input" onChange={handleUserNameChange} placeholder="Enter your username"></input>
                                        </div>
                                        <div className="group">
                                            <label htmlFor="pass" className="label">Password</label>
                                            <input id="input-pass1" type="password" className="input" onChange={handlePassChange} data-type="password" placeholder="Enter your password" autoComplete="on"></input> </div>
                                        <br></br>
                                        <br></br>
                                        <div className="group">
                                            <input type="submit" className="button" value="Sign In"></input>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="foot"> <a href="#">Forgot Password?</a> </div>
                                    </form>
                                    <form className="sign-up-form" onSubmit={handleSubmitSignUp}>
                                        <div className="group"> <label htmlFor="user" className="label">Username</label> <input id="input-user2" type="text" className="input" placeholder="Create your Username" onChange={handleUserNameChange}></input> </div>
                                        <div className="group"> <label htmlFor="pass" className="label">Password</label> <input id="input-pass2" type="password" className="input" data-type="password" placeholder="Create your password" autoComplete="on" onChange={handlePassChange}></input> </div>
                                        <div className="group"> <label htmlFor="pass" className="label">Repeat Password</label> <input id="input-pass3" type="password" className="input" data-type="password" placeholder="Repeat your password" autoComplete="on" onChange={handlePassSignUpVerificationChange}></input></div>
                                        <div className="group">
                                        <input type="submit" className="button" value="Sign Up"></input> </div>
                                        <div className="hr"></div>
                                        <div className="foot"> <label htmlFor="tab-1">Already Member?</label> </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
