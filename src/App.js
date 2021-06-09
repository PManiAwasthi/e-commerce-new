import React,{ useEffect   } from"react";
import './default.scss';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import {useDispatch} from 'react-redux'

//hoc 
import WithAuth from'./hoc/withAuth'
import WithAdminAuth  from './hoc/withAdminAuth'

//components 
import AdminToolbar from './components/AdminToolbar/index'

//layouts
import MainLayout from"./layouts/MainLayout"
import HomepageLayout from"./layouts/HomepageLayout"
//pages
import Homepage from './pages/Homepage/index';
import Registration from "./Signup/MainSignup";
import Login from"./Login/MainLogin"; 
import Dashboard from './pages/Dashboard/dashboard'
import {checkUserSession} from './Redux/User/user.actions'
import EmailPassword from "./components/EmailPassword";
import Admin from "./pages/Admin/admin";
import AdminLayout from "./layouts/AdminLayout";
import DashBoardLayout from "./layouts/DashboardLayout";
import Search from "./pages/Search/search";
import ProductDetails from './pages/ProductDetails/productDetails'
import Cart from "./pages/Cart/cart";
import Payment from "./pages/Payment/payment";
import Order from "./pages/OrderDetails/order";
import Profile from "./Profiletab/Profile/Profiletab";
import Profiletab from "./Profiletab/Profile/Profiletab";
import Wishlist from "./Profiletab/Wishlist/Wishlist";



const App = props =>{
    const dispatch = useDispatch();
    useEffect(() =>{
      dispatch(checkUserSession())
    })


 
  return (
    <div className="App">
       <Router>
         <AdminToolbar/>
        <Switch>
        <Route exact path="/" render={()=>(
          <HomepageLayout>
          <Homepage/>
          </HomepageLayout>
        )} />
        <Route exact path="/profiletab" render={()=>(
          <WithAuth>
            <Profiletab/>
          </WithAuth>
        )}/>
        <Route exact path="/wishlist" render = {() =>(
          <WithAuth>
          <Wishlist/>
        </WithAuth>
        )}/>
         <Route exact path="/registration" render={()=>(
          <Registration/>
        )} />
           <Route exact path="/login" 
           render={()=>(
          <Login/>
        )} />
        
        <Route exact path="/forgetpassword" 
           render={()=>(
          <MainLayout>
          <EmailPassword/>
          </MainLayout>
        )} />
          <Route exact path="/admin" 
           render={()=>(
          <WithAdminAuth>
            <AdminLayout>
              <Admin/>
            </AdminLayout>
          </WithAdminAuth>
        )} />
        
         <Route exact path="/product" 
           render={()=>(
             
                <MainLayout>
                <Search/>
                </MainLayout>
              
        )} />
          <Route exact path="/search/:filterType" 
           render={()=>(
             
                <MainLayout>
                <Search/>
                </MainLayout>
              
        )} />
           <Route exact path="/product/:productID" 
           render={()=>(
             
                <MainLayout>
                <ProductDetails/>
                </MainLayout>
           )}/>
              

          <Route exact path="/cart" 
           render={()=>(
             
                <MainLayout>
                <Cart/>
                </MainLayout>
              
        )} />


      <Route exact path="/payment" 
           render={()=>(
            <WithAuth>
             
                <MainLayout>
                <Payment/>
                </MainLayout>
           </WithAuth>
              
        )} />
          <Route exact path="/order/:orderID" 
           render={()=>(
             <WithAuth>
                <DashBoardLayout>
                  <Order/>
                </DashBoardLayout>
                
            </WithAuth>
           )}/>

        </Switch>
        </Router>
    </div>
  );
           
}

export default App;
