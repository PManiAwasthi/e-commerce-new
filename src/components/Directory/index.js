import React from"react"
import "./style.scss"
import WoodArt from "./../../Assets/woodArtHome.jpg"
import BellMetal from "./../../Assets/BellMetalImageHome.jpg"
import WroughtIron from "./../../Assets/wroughtIronHome.jpg"


const Directory = props =>{
    return(
        <div  className ="directory">
            <div className="wrap">
            <div 
            className ="item"
            style={{
                backgroundImage:`url(${BellMetal})`
            }}>
                <a href="/">BellMetal art</a>
            </div>
                <div 
              className ="item"
              style={{
                backgroundImage:`url(${WroughtIron})`
            }}>
                <a href="/">Wrought Iron Art</a>
                </div>
                <div 
              className ="item"
              style={{
                backgroundImage:`url(${WoodArt})`
            }}>
                <a href="/">Wood Art</a>
                </div>
        </div>

        </div>

    );

}
export default Directory;