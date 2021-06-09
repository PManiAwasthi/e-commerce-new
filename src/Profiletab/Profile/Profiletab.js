import React from 'react';
import "./Profiletab.css";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import {Paper, TextField, Grid, makeStyles, FormControl, FormLabel, RadioGroup, FormControlLabel,Radio} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStateValue } from "../../StateProvider";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { auth,firestore } from '../../firebase/util';
import { initialState } from '../../reducer';
import Sidebar from './sidebar';
import {useSelector,useDispatch } from 'react-redux';

const mapState = (state) =>({
    currentUser:    state.user.currentUser
 });

const db = firestore;
const useStyle = makeStyles(theme => ({
    root:{
        flexGrow:1,
        '& .MuiFormControl-root':{
            width:'80%',
            margin:theme.spacing(1),
            
        }
    },
    pageContent:{
        margin:theme.spacing(2),
        padding:theme.spacing(2),
    },
    container:{
        "@media only screen and (max-width: 700px)":{
            direction: "column"
        }
    }
}))


function Profiletab(props) {
    const {currentUser} = useSelector(mapState);
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyle();
    var [docs,setDocs] = useState();
     var [values,setvalues] =useState({
                name:"",
                email:"",
                mobile:"",
                address:"",
                gender:"",
                accounttype:"",
                userid:"",
                username:""
     });
        useEffect(async ()=>{
            
            if (currentUser) {
                const result = await db.collection('users')
          .where('userid',"==", currentUser.userid ).get().then(function(snapshot){
                 snapshot.docs.forEach(doc => {
                      setvalues(doc.data());
                      setDocs(doc);
                      
                  });
          })
          }

        },[])
        useEffect(() => {
            return () => {
                localStorage.setItem("values",values)
            }
        }, [values])
    const handleInputChange = e => {
        e.preventDefault();
        const {name, value} = e.target
        setvalues({
            ...values,
            [name]:value
        })
    }
    //alert(docs.id)

    const onSaveBtnClick = async e=>{
        e.preventDefault();
        //alert(values.userid)
        await db.collection('users').doc(docs.id).set({
            ...values,

              })
    }
    return (
        <div className="profilecontainer">
            <Grid container className = {classes.container} >
                <Grid item xs = {2}>
                    <div className = "profileCard">
                    <Sidebar></Sidebar>
                    </div>
                </Grid>
            <Grid item xs = {8}>
                <Paper  className={classes.pageContent}>
                <form className={classes.root}>
                   <Grid container>
                       <Grid item xs = {6}>
                           <h3 className="input_heading">Personal Information</h3>
                           <Grid item >
                           <TextField variant="outlined" label="Full Name"
                           value={values?.name}  name="name" onChange={handleInputChange}></TextField></Grid>
                           <Grid item >
                           <TextField variant="outlined" label="Email" 
                           value={values?.email} name="email" onChange={handleInputChange}></TextField></Grid>
                           <Grid item >
                           <TextField variant="outlined" label="Mobile Number" 
                           value={values?.mobile} name="mobile" onChange={handleInputChange}></TextField></Grid>
                           <Grid item >
                           <TextField variant="outlined" label="Address"
                           value={values?.address} name="address" onChange={handleInputChange}></TextField></Grid>
                           
                       </Grid>
                       <Grid item xs={6}>
                           <FormControl>
                               <FormLabel>Gender</FormLabel>
                               <RadioGroup row name="gender" value={values?.gender} onChange={handleInputChange}>
                                   <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                   <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                   <FormControlLabel value="other" control={<Radio/>} label="Others"/>
                               </RadioGroup>
                           </FormControl>
                           <FormControl>
                               <FormLabel>Type of Account</FormLabel>
                               <RadioGroup row name="accounttype" value={values?.accounttype} onChange={handleInputChange}>
                                   <FormControlLabel value="seller" control={<Radio/>} label="Seller"/>
                                   <FormControlLabel value="buyer" control={<Radio/>} label="Buyer"/>
                               </RadioGroup>
                           </FormControl>
                           
                       </Grid>
                       <div className="btninputs">
                           <input  type="submit" value="Update Values" className="btn solid" ></input>
                           <input type="submit" value="Save" className="btn solid" onClick={onSaveBtnClick}></input>
                           </div>
                   </Grid>
                </form>
                </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profiletab
