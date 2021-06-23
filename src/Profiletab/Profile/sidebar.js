import React from 'react'
import "./sidebar.css";
import {Link,useHistory} from "react-router-dom";
function Sidebar() {
        
        const history = useHistory();
        const gotohome = e => {
                e.preventDefault();
                history.push("/");
        }
        

        const goToWishlist = e => {
                e.preventDefault();
                history.push("/wishlist");
        }

        const goToProduct = e => {
                e.preventDefault();
                history.push("/product");
        }
        
    return (
            <div className="sidebarContainer">
                <div className = "sidebarheading">
                        <h2 className="titlesidebar">User info</h2>
                </div>
                <div className="sidebarelement1">
                <div className="sidebarelementsoptions">
                            <div className="elementheading" onClick={gotohome}>
                                    <span>Home</span>
                            </div>
                            <div className="elementarrow">&#62;</div>
                    </div>
                    <div className="sidebarelementsoptions">
                            <div className="elementheading">
                                    <span>Profile</span>
                            </div>
                            <div className="elementarrow">&#62;</div>
                    </div>
                    <div className="sidebarelementsoptions">
                            <div className="elementheading">
                            <span>Orders</span>
                            </div>
                            <div className="elementarrow">&#62;</div>
                    </div>
                    <div className="sidebarelementsoptions">
                    <div className="elementheading" onClick={goToWishlist}>
                    <span>Wishlist</span>
                            </div>
                            <div className="elementarrow">&#62;</div>
                    </div>
                    <div className="sidebarelementsoptions">
                    <div className="elementheading" onClick={goToProduct}>
                    <span>Products</span>
                            </div>
                            <div className="elementarrow">&#62;</div>
                    </div>
                </div>
            
        </div>
    )
}

export default Sidebar
