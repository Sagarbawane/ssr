
import  React,{ Component, useEffect,useState } from 'react';
import StopLoss from "../Resources/STOPLOSS_ICON.svg";
import GROWTH_ICON from "../Resources/GROWTH_ICON.svg";
import Decision from "../Resources/decision-making-2 1.svg";
import Book from "../Resources/Group 227.svg";
import { Link } from "react-router-dom";


const WhyCycle=()=>{
    return (
      <div style={{background:"#000000"}} >
           <div style={{padding:"60px 0px 30px 0px",marginLeft:"60px"}}  className="paraStockDetails">Why Cycle ?</div>
           <div style={{ width: "100vw", margin: "auto" }}>
               <div style={{display:"flex",justifyContent:"space-evenly"}}>
<div style={{flex:"0,25"}}>
    <div className="whyCycleMain">

<img
                src={Decision}
                alt="stoploss"
style={{marginTop:"27px"}}
              />
              <div  className="whyCycleMainText" style={{padding:"16px 10px 16px 10px"}} >
                Helps in making better investment Decisions
              </div>

    </div>

</div>
<div style={{flex:"0,25"}}>
        <div className="whyCycleMain">
                  <img
                src={StopLoss}
                alt="stoploss"
                style={{marginTop:"27px"}}

              />
              <div className="whyCycleMainText" style={{padding:"32px 10px 5px 10px"}}>
                {" "}
                Stoploss feature that helps to prevent losses
              </div>

        
    </div>

</div>
<div style={{flex:"0,25"}}>
<div className="whyCycleMain">

<img
                src={GROWTH_ICON}
                alt="stoploss"
                style={{marginTop:"40px"}}

              />
              <div className="whyCycleMainText" style={{padding:"36px 10px 5px 10px"}}>
                Flexible short, mid & long term Investments{" "}
              </div>
        
        </div>
    
</div>
<div style={{flex:"0,25"}}>
<div className="whyCycleMain">

<img  src={Book} alt="stoploss" style={{marginTop:"40px"}}
 />
              <div className="whyCycleMainText" style={{padding:"36px 10px 5px 10px"}}>
                Learn from Experts <br />
                about investing
              </div>

        
        </div>
    
</div>

               </div>
      
        </div>
        <a href="https://app.mycycles.in"  target="_blank">
           <div className="buttonCheckedSSR"><span style={{display:"inline-block",paddingTop:"16px"}}>REGISTER FOR EARLY ACCESS</span></div>
          </a>
           <br/>
      </div>

    );

}
export default WhyCycle;
