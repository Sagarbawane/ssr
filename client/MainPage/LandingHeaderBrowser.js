import React, { useState } from "react";

import { Link } from "react-router-dom";
// import "../../component/style.css";
import DownloadButtonDown from "./DownloadButtonBrowser";
import Logo from "../Resources/Cycle_black 1.svg";

import { Card, Button } from "ui-neumorphism";

const  LandingHeader=(props) =>{
  const [selected, setSelected] = useState("PRICE");
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "20px",
        }}
      >
        <div style={{ flex: 0.2 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "14px",
            }}
          >
            <div
              style={{
                color: "#000000",
              }}
            >
              <img src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
        <div style={{ flex: 0.1 }}></div>
        <div style={{ flex: 0.1 }}></div>
        <div style={{ flex: 0.54 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingTop: "20px",
            }}
          >
            <div
              onClick={() => {
                setSelected("PRICE");
              }}
              className={
                selected === "PRICE" ? "selectedOption" : "notSelectedOption"
              }
            >
              <a
                href={props.price}
                style={{ textDecoration: "none", color: "#000000" }}
              >
                Pricing
              </a>
            </div>
            <div
              onClick={() => {
                setSelected("USE");
              }}
              className={
                selected === "USE" ? "selectedOption" : "notSelectedOption"
              }
            >
              <a
                href={props.cycle}
                style={{ textDecoration: "none", color: "#000000" }}
              >
                How to use cycle
              </a>
            </div>{" "}
            <div
              onClick={() => {
                setSelected("DOWNLOAD");
              }}
              className={
                selected === "DOWNLOAD" ? "selectedOption" : "notSelectedOption"
              }

            >
              <span style={{ textDecoration: "none", color: "#000000" }}>
                <DownloadButtonDown />
              </span>
            </div>
            <div className="navButton" >
              <Link to="/main" className="navButtonText" style={{ color: "#ffffff" }}>
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingHeader