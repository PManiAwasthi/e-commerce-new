import React, {useState, useEffect} from 'react';
import { useHistory} from "react-router-dom";
import { auth,db } from '../firebase/config';
import './SignUpVariant.css';
import {Link} from "react-router-dom";
import GoogleButton from 'react-google-button';
import { useStateValue } from "../StateProvider";
import {useDispatch,useSelector} from 'react-redux'
import {signUpUserStart} from './../Redux/User/user.actions'
//import googleIcon from '../image/googleicon.svg';


const mapState =({
    user
}) => ({
    currentUser: user.currentUser,
    userErr : user.userErr

});

function LoginVariant() {
    const { currentUser,userErr} = useSelector(mapState);
    const dispatch = useDispatch();
    const history = useHistory();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] =  useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] =  useState('');
    const [errors, setErrors] = useState([]);
   
    const resetForm = ()=>{
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
        } 

    useEffect(()=>{
        if(currentUser){
           resetForm();
           history.push('/');
        }
    }, [currentUser,history]);

    useEffect(()=>{

        if(Array.isArray(userErr) && userErr>0){
         setErrors(userErr);
         alert(userErr);
        }

    },[userErr]);


   
    

const  handleFormSubmit = e =>{
        e.preventDefault();
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        })); 
    }
    return (
        <div className="inputForm">
            <div className="divContainer"><h2 className="title">SignUp</h2></div>
            <form>
            <div className="inputComponent" onSubmit={handleFormSubmit}>
                <div className="heading">Username</div>
                <input className= "inputData" type = "text" placeholder="Username" value={displayName} onChange={e => setDisplayName(e.target.value)}></input>
                
                </div>
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
                <div className="heading">Confirm Password</div>
                <input className= "inputData" type = "password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
                
                </div>
                
            
            </form>
            <div className="divContainer">
            <input className="loginButton" value="Register" type="submit" onClick={handleFormSubmit}></input>
            </div>
            <div className="otheroptions">
                            <div className="signUP">
                                Have an Account? <Link to="/login"><span className="signUpText">Login</span></Link>
                            </div>
            </div>
        </div>
    )
}

export default LoginVariant
