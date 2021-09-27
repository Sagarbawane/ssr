import React from "react";
import Master from "../Resources/mastertrust.svg";
import Zerodha from "../Resources/zerodha.svg";
import Angel from "../Resources/angel.svg";
import Upstox from "../Resources/upstock.svg";
class integrate extends React.Component {
  

  render() {
    return (
<div style={{ background:"#ffffff",width:"100vw",height:"60vh",paddingTop:"-40px !important" }}>
 <div style={{color:"#000000",padding:"60px 0px",marginLeft:"60px"}}  className="paraStockDetails">Integration with</div>
<div style={{display:"flex",justifyContent:"space-around",marginLeft:"150px",}}>
<div style={{flex:"0.25"}}><img style={{width:"90px",height:"90px",marginLeft:"40px !important"}}  src={Master}/><span  style={{display:"block",fontSize:"30px"}}>MasterTrust</span></div>
<div style={{flex:"0.25"}}><img style={{width:"90px",height:"90px"}}  src={Zerodha}/> <span  style={{display:"block",fontSize:"30px"}}>Zerodha</span></div>
<div style={{flex:"0.25"}}><img style={{width:"90px",height:"90px"}}  src={Upstox}/> <span  style={{display:"block",fontSize:"30px"}}>Upstox</span></div>
<div style={{flex:"0.25"}}><img style={{width:"90px",height:"90px",marginLeft:"34px"}}  src={Angel}/> <span  style={{display:"block",fontSize:"30px"}}>Angel Broking</span></div>


</div>
</div>

    );
  }
}
export default integrate;
