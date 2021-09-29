import React, { useState } from "react";

import { Link } from "react-router-dom";

import DownloadButtonDown from "./DownloadButtonMobile";
import Logo from "../Resources/Cycle_black 1.svg";
import LogoWhite from "../Resources/Cycle_plain 1.svg";
import Bar from "../Resources/menu-2 1.svg";

import { Card, Button } from "ui-neumorphism";
// import DownloadButton from "./DownloadButton";
const LandingHeader=(props) =>{
  const [selected, setSelected] = useState("PRICE");
  const [open, setOpen] = useState(false);
  return (
    <div style={{ backgroundColor: "#ffffff" }}>

      <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "20px" }}>
        <div style={{ flex: "0.5" }}>
          <div style={{ display: "flex", paddingTop: "20px" }}>
            <div
              onClick={() => {
                setOpen(true)
              }}
              style={{
                flex: "0.1",
                alignItems: "center",
                marginLeft:"10px"
              }}>
              <img src={Bar} alt="Logo" />

            </div>
            <div style={{
              flex: "0.1",
              marginLeft:"10px"
            }}>
              <img src={Logo} alt="Logo" style={{ width: "110px", height: "110px", marginLeft: "5px", marginTop: "-43px", }} />

            </div>
          </div>

        </div>

        <div style={{ flex: "0.3" }}></div>


        <div className="navButtonMobile"  >
              <Link to="/main" className="navButtonTextMobile" style={{ color: "#ffffff" }}>
                LOGIN
              </Link>
            </div>

      </div>
      <div style={{ flex: "0.3" }}>



</div>
      {
        open ? (
          <div style={{ width: "100vh", height: "130vh", background: "#000000", marginTop: "-120px", zIndex: "9999999999", overflow: open ? "hidden" : "", position: open ? "fixed" : "" }}>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
              <div style={{ flex: "0.3", marginTop: "-40px" }}> <img src={LogoWhite} alt="Logo" style={{ width: "130px", height: "130px" }} /></div>
              <div onClick={() => {

                setOpen(false)
              }} style={{ flex: "0.45", color: "#ffffff", textAlign: "left", fontSize: "30px" }}>x</div>


            </div>
            <a target="_blank" href="https://bit.ly/getcycleapp"><div className="navBarLoginMobile">Login</div></a>

            <div style={{ background: " #121212" }}>
              <br />

              <a href={props.whyCycle}><div style={{}} onClick={() => {

                setOpen(false)
              }} className="navBarAllMobile">Why cycle ?</div></a>
              <br />
             
             
              <a href={props.cycle}><div onClick={() => {

                setOpen(false)
              }} className="navBarAllMobile">How to use cycle</div></a>
              <br />
              <a href={props.price}><div onClick={() => {

                setOpen(false)
              }} className="navBarAllMobile">Pricing</div></a>
              <br />
              <a href={props.integrate}><div onClick={() => {

                setOpen(false)
              }} className="navBarAllMobile">Integration with</div></a>
              <br />
              <a href={props.customer}><div onClick={() => {

                setOpen(false)
              }} className="navBarAllMobile">Customer Reviews</div></a>
              <br />
              <div className="navBarAllMobile"> <DownloadButtonDown /></div>
              <br />

            </div>

          </div >) : (
          <></>
        )
      }


    </div >
  );
}
export default LandingHeader