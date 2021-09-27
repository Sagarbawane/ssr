import React from "react";
import greenStar from "../Resources/green_star.svg"
import redStar from "../Resources/red_star.svg"
import yellowStar from "../Resources/Yellow_star.svg"
import greyStar from "../Resources/grey_star.svg"
import GaugeChart from 'react-gauge-chart'



const CrsScore = (props) => {
   
    return (
        <div style={{ backgroundColor: "#212529 ",}}>
            <div style={{display:"flex",justifyContent:"space-around",paddingTop:"40px"}}>
            <div style={{flex:"0.34",paddingTop:"20px",}}>
            <GaugeChart id="gauge-chart3" 
  nrOfLevels={6} 
  colors={["#d3d3ce","#EA5E4B","#FFA500", "#FFFF00"," #18B13F","#d3d3ce"]} 
  arcWidth={0.3} 
  percent={props.crs/100} 
/>

      
            </div>
            <div style={{flex:"0.0000001"}} >

            <div className="vl"></div>
            </div>           
             <div style={{flex:"0.4",}}>
                <span className="crsScoressr">CRS Score</span>
                <span className="crsScoressrSub">stock performance rating</span>
                <span  style={{marginLeft:"50px"}} className="crsScoressrMain"><img style={{width:"40px",height:"40px",marginTop:"-20px"}}src={props.crs && props.crs>=80?greenStar:props.crs<80 && props.crs>=60?yellowStar: props.crs<60 && props.crs>=1?redStar:greyStar}/> {props.crs} <span>/</span>{props.crs?<span className="crsScoreActual">  100</span>:"N/A"}</span>
      
            </div>



        </div>
        </div>

    
    );
  };
  export default CrsScore;
  



