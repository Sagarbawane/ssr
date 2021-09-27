import React from "react";


import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import CycleLogo from "../Resources/Cycle_plain.png";


import Location from "../Resources/location-pin 1.png";
import Call from "../Resources/call (3) 1.png";
import facebook from "../Resources/fb1.svg";
import twitter from "../Resources/twiter.svg";
import instagram from "../Resources/insta.svg";
import linkedin from "../Resources/linkdin.svg";
import Playstore from "../Resources/playstore 1.png";
class footerMobile extends React.Component {


  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <br />
        <div className="logo-class" style={{paddingTop:"50px"}}>
          <Link className="footer-img" to="/"></Link>
          <Link to="/">
            <img
              src={CycleLogo}
              style={{ width: "150px",marginLeft:"20px" }}
              alt="cyclelogo"
            />
          </Link>
        </div>
        <Link to="/" >
          {" "}
          <h5 className="titleFooter " style={{ paddingTop: "14px" }}>

            Links

          </h5>
        </Link>

        <Link to="/term-and-condition">
          {" "}
          <h5 className="titleFooter " style={{ color: "rgba(255, 255, 255, 0.8)" }}>

            Terms & Conditions{" "}

          </h5>
        </Link>

        <Link to="/refund-and-cancellation">
          {" "}
          <h5 className="titleFooter " style={{ color: "rgba(255, 255, 255, 0.8)" }}>

            Refund & Return Policy{" "}

          </h5>
        </Link>

        <Link to="/privacy-policy">
          {" "}
          <h5 className="titleFooter " style={{ color: "rgba(255, 255, 255, 0.8)" }}>

            Privacy Policy{" "}

          </h5>
        </Link>



        <Link to="/contact-us">
          {" "}
          <h5 className="titleFooter " style={{ paddingTop: "14px" }}>

            Contact Us

          </h5>
        </Link>

        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: "20px",
            marginLeft: "25px",
            marginTop: "30px",
          }}
        >
          <div style={{ flex: "0.05", paddingLeft: "15px" }}>
            <img style={{ width: "30px", height: "30px" }} src={Location} alt="location" />
          </div>
          <div style={{ flex: "0.85", paddingRight: "15px" }} className="companyAddressMobile">

            1st floor,Above Industial Bank Opp Lane NO.4,North Main
            Road,Koregaon Park,Pune-411001 Maharastra

          </div>

        </div>

        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: "12px",
            marginLeft: "25px",
            marginTop: "25px",
          }}
        >
          <div style={{ flex: "0.05", paddingLeft: "15px" }}>
            <img src={Call} style={{ width: "30px", height: "30px" }} alt="location" />
          </div>
          <div style={{ flex: "0.89", }} className="companyAddressMobile">

            <span >
              <a
                className="companyAddressMobile"
                style={{
                  color: "rgba(255,255,255,0.8)",

                }}
                href="tel:020 29510916"
              >
                020 29510916
              </a>
            </span>          <span

              style={{ fontSize: "12px", marginLeft: "10px" }}
            >
              <a style={{ color: "rgba(255,255,255,0.8)", }} href="tel:+91 9372810916" className="companyAddressMobile">
                +91 9372810916
              </a>
            </span>

          </div>

        </div>


        <Link to="/contact-us">
          {" "}
          <h5 className="titleFooter " style={{ paddingTop: "14px" }}>

            Connect With Us

          </h5>
        </Link>

        <div
          style={{
            textAlign: "left",
            marginLeft: "26px",
            paddingTop: "5px",


          }}
        >
          <section>
            <a

              class="btn btn-floating m-1"
              href="https://www.facebook.com/iamclearmind"
              role="button"
            >
              <img
                src={facebook}
                alt="facebook"
                style={{ width: "20px", marginRight: "-12px" }}
              />
            </a>

            <a
              class="btn btn-floating m-1"
              href="https://twitter.com/iam_clearmind"
              role="button"
            >
              <img
                src={twitter}
                alt="twitter"
                style={{ width: "30px", marginRight: "-12px" }}
              />
            </a>

            <a
              class="btn btn-floating m-1"
              href="https://www.instagram.com/iamclearmind/"
              role="button"
            >
              <img
                src={instagram}
                alt="instagram"
                style={{ width: "30px", marginRight: "-12px" }}
              />
            </a>

            <a
              class="btn  btn-floating m-1"
              href="https://www.linkedin.com/company/iamclearmind/"
              role="button"
            >
              <img
                src={linkedin}
                alt="linkedin"
                style={{ width: "30px" }}
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.iamclearmind.cycle">
              <span className="playstoreButtonMobile">
                <div style={{ flex: "0.2", marginTop: "18px", marginLeft: "15px" }}><img style={{width:"50px",height:"50px"}} src={Playstore} alt="img"></img></div>
                <div style={{ flex: "0.8", marginTop: "25px", marginLeft: "10px" }}>
                  <span className="subGoogleMobile">ANDROID APP ON</span>
                  <br />
                  <span className="googleMobile"> Google Play</span>
                </div>
              </span>
            </a>
          </section>
        </div>


        <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.3)", width: "85vw", margin: "auto", marginTop: "30px" }}></div>

        <div
          style={{
            textAlign: "center",
            margin: "auto",
            padding: "30px 0px",
            color: "white"

          }}
        >
          &copy; 2021 Clearmind. All rights reserved
        </div>




      </div>
    );
  }
}
export default footerMobile;
