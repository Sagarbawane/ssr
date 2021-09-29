import React from "react";

import Iframe from "react-iframe";
import CycleLogo from "../Resources/Cycle_plain.png";

import facebook from "../Resources/fb1.svg";
import twitter from "../Resources/twiter.svg";
import instagram from "../Resources/insta.svg";
import linkedin from "../Resources/linkdin.svg";
import AppStore from "../Resources/app-store 1.svg";

import Playstore from "../Resources/playstore 1.png";
import { Facebook } from "@material-ui/icons";
class footer extends React.Component {
  handlePageChange() {
    window.location.href = (
      <Iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1st%20floor,Above%20Industial%20Bank%20Opp%20Lane%20NO.4,North%20Main%20Road,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Koregaon%20Park,Pune-411001%20Maharastra%20+(ClearMind)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
    );
  }

  render() {
    return (
      <div style={{ backgroundColor: " #000000" }}>
        {/* <div style={{margin:"auto",width:"90vw",padding:"40px 0px 0px 0px"}}>
          <span className="footerssrHeading">Commercials: </span><span className="footerssrHeadingSub">best penny stocks to buy now </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">blue chip stocks  </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">bluish stock </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub"> common stock</span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">hot stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">indian stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best penny stocks to buy now </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">blue chip stocks  </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">bluish stock </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub"> common stock</span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">hot stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">indian stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best penny stocks to buy now </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">blue chip stocks  </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">bluish stock </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub"> common stock</span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">hot stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">indian stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span>
        </div>
        <div style={{margin:"auto",width:"90vw",padding:"20px 0px 0px 0px"}}>
          <span className="footerssrHeading">Branded: </span><span className="footerssrHeadingSub">best penny stocks to buy now </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">blue chip stocks  </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">bluish stock </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub"> common stock</span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">hot stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">indian stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best penny stocks to buy now </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">blue chip stocks  </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">bluish stock </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub"> common stock</span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">hot stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">indian stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best penny stocks to buy now </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">blue chip stocks  </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">bluish stock </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub"> common stock</span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">hot stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">indian stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span>
        </div>
        <div style={{margin:"auto",width:"90vw",padding:"20px 0px 0px 0px"}}>
          <span className="footerssrHeading">Informational: </span><span className="footerssrHeadingSub">best penny stocks to buy now </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">blue chip stocks  </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">bluish stock </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub"> common stock</span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">hot stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">indian stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best penny stocks to buy now </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">blue chip stocks  </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">bluish stock </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub"> common stock</span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">hot stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">indian stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best penny stocks to buy now </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">blue chip stocks  </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">bluish stock </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub"> common stock</span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">hot stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">indian stocks </span><span className="footerssrHeadingDash">|</span><span className="footerssrHeadingSub">best stock to buy as a beginner </span><span className="footerssrHeadingDash">|</span>
        </div> */}

        <div style={{margin:"auto",width:"90vw",padding:"30px 0px 0px 0px"}}>
          <span className="footerssrLinks">Terms & Conditions </span> <span className="footerssrHeadingDashLinks">|</span> <span className="footerssrLinks">   Refund & Return Policy</span> <span className="footerssrHeadingDashLinks">|</span> <span className="footerssrLinks">   Privacy Policy</span> 
        </div>
        <div style={{margin:"auto",width:"90vw",padding:"20px 0px 0px 0px"}}>
         <span className="footerssrHeading">Contact Us - </span> <span className="footerssrAddress">1st floor, Above Industial Bank Opp Lane No.4, North Main Road, Koregaon Park, Pune- 411001 Maharastra | 020 29510916 +91 9372810916 </span>
        </div>
       
        <div style={{display:"flex",justifyContent:"space-around",width:"90vw",padding:"30px 0px 20px 0px"}}>
<div style={{flex:"0.1",marginTop:"10px"}}>
  <img src={CycleLogo} style={{width:"100px",height:"40px"}} alt="cycle"/>
</div>
<div style={{flex:"0.2"}}>
<div style={{textAlign:"center"}}>
               <a href="https://mycycles.in" target="_blank">
               <div  className="buttonCheckedSSRSuggestion1Footer"><span style={{display:"inline-block",paddingTop:"16px",}}>Download Now</span></div>
               </a>
               </div>
</div>

{/* <div style={{flex:"0.1"}}>
         <a target="_blank" href="https://play.google.com/store/apps/details?id=com.iamclearmind.cycle">
            <div className="playstoreButton">

              <div style={{ flex: "0.3", marginTop: "9px", marginLeft: "15px" }}><img style={{width:"32px",height:"32px"}} src={Playstore}></img></div>
               <div style={{ flex: "0.7", marginTop:"3px" }}>
                 <span  className="subGoogle"> ANDROID APP ON </span>
               <span style={{marginTop:"-5px"}} className="google"> Google Play</span>
              </div>

            </div>
           </a>
</div>
<div style={{flex:"0.1"}}>
         <a target="_blank" href="https://play.google.com/store/apps/details?id=com.iamclearmind.cycle">
            <div className="playstoreButton">

              <div style={{ flex: "0.3", marginTop: "9px", marginLeft: "15px" }}><img style={{width:"32px",height:"32px"}} src={AppStore}></img></div>
               <div style={{ flex: "0.7", marginTop:"3px" }}>
               <span className="subGoogle">IOS APP ON</span>
               <span style={{marginTop:"-5px"}} className="google">App Store</span>
              </div>

            </div>
           </a>
</div> */}

<div style={{flex:"0.25"}}>
<div className="footerssrHeading">Connect with Us</div>
<a target="_blank" href="https://www.facebook.com/iamclearmind">
<img style={{marginRight:"8px"}}src={facebook} alt="fb"/>
</a>
<a target="_blank" href="https://www.instagram.com/iamclearmind/">
 <img style={{marginRight:"8px"}} src={instagram} alt="insta"/> 
 </a>
 <a target="_blank" href="https://www.linkedin.com/company/iamclearmind/">
 <img style={{marginRight:"8px"}} src={linkedin} alt="link"/> 
 </a>
 <a target="_blank" href="https://twitter.com/iam_clearmind"> 
 <img style={{marginRight:"5px"}} src={twitter} alt="twi"/>
 </a>
</div>
        </div>
        <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.3)", width: "85vw", margin: "auto", marginTop: "50px" }}></div>
<div
  className="footer-copyright text-center py-3"
  style={{ marginTop: "10px" }}
>
    @2021Copyright:iamclearmind.com

</div>

        </div>
    
    );
  }
}
export default footer;


