import React, {useState, useEffect} from 'react';
import { useHistory} from "react-router-dom";
import { auth,firestore } from '../firebase/util';
import './LoginVariant.css';
import {Link} from "react-router-dom"
import GoogleButton from 'react-google-button';
import { useStateValue } from "../StateProvider";
import {emailSignInStart,googleSigninStart} from './../Redux/User/user.actions';
import {useDispatch,useSelector} from 'react-redux';
//import googleIcon from '../image/googleicon.svg';

function LoginVariant() {
    const mapState = ({
        user    
       }) =>({
           currentUser  : user.currentUser
       })
       
           const {currentUser} = useSelector(mapState);
           const dispatch = useDispatch();
           const history = useHistory();
           const[email,setEmail] = useState('');
           const [password,setPassword] = useState('');
       
           useEffect(() =>{
               if(currentUser){
                resetForm()
               history.push('/')

               }
           }, [currentUser, history]);
       
       
         const resetForm = ()=>{
             setEmail('');
             setPassword('');
         } 
           
         const handleSubmit = e =>{
               e.preventDefault(); // by doing this when user click the button it will stop the page to reload
               dispatch(emailSignInStart({email,password}));
           }
           const hadnleGoogleSignIn =() =>{
               dispatch(googleSigninStart());
           }
    return (
        <div className="inputForm">
            <div className="divContainer"><h2 className="title">Login</h2></div>
            <form >
                
                <div className="inputComponent">
                <div className="heading">Email
                </div>
                <input className= "inputData" type = "text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="inputComponent">
                <div className="heading">Password</div>
                <input className= "inputData" type = "password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                
                </div>
                <div className="inputComponent">
                <div className="passwordForget">
                    Forget Password?
                </div>
                </div>
            
            </form>
            <div className="divContainer">
            <input className="loginButton" value="Login" type="submit" onClick={handleSubmit}></input>
            </div>
            <div className="otheroptions">
                <GoogleButton className="social-icon"
                                onClick={hadnleGoogleSignIn} 
                            />
                            <div className="signUP">
                                Don't have a Account ? <Link to="/registration"><span className="signUpText">SignUp</span></Link> 
                            </div>
            </div>
        </div>
    )
}

export default LoginVariant
