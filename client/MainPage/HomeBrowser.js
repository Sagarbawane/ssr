import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Button, H6 } from "ui-neumorphism";

import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserView, MobileView } from "react-device-detect";
import LandingHeader from "./LandingHeaderBrowser";
import Andriod from "../Resources/Group 1033.svg";
import Stock from "../Resources/image 68.png";
import LandingHeaderMobile from "./LandingHeaderMobile";
import Master from "../Resources/mastertrust.svg";
import Zerodha from "../Resources/zerodha.svg";
import Angel from "../Resources/angel.svg";
import Upstox from "../Resources/upstock.svg";
import StopLoss from "../Resources/STOPLOSS_ICON.svg";
import GROWTH_ICON from "../Resources/GROWTH_ICON.svg";
import Decision from "../Resources/decision-making-2 1.svg";
import Book from "../Resources/Group 227.svg";
// import Back from "../../resources/Ellipse 28.svg";
import Quote from "../Resources/double-quotes.png";
// import DownloadButtonDown from "./DownloadButtonDown";
// import CarouselBrowser from "./CarouselBrowser";
import LandingFooter from "../Requirements/Footer";
import LandingFooterMobile from "../Requirements/FooterMobile";

// import Internet from "../Internet";

const useStyles = makeStyles({
  newStyle: {
    backgroundColor: "#ffffff",
    color: "#000000",
    border: "1px solid #ffffff",
    borderRadius: "40px",
    "&.Mui-selected": {
      backgroundColor: "#05C232",
      color: "#fff",
      border: "1px solid #ffffff",
      borderRadius: "40px",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ color: "white" }}>
          <Typography style={{ color: "white" }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const HomeB = () => {
  const [selected, setSelected] = useState("FREE");
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
    <BrowserView>
    <div style={{ backgroundColor: "#ffffff" }}>
      <LandingHeader cycle={"#cycle"} price={"#price"} />
     <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "160px 0px 0px 0px",

        }}
      >
        <div
          className="col-sm-6 "
          style={{ marginLeft: "110px", marginTop: "60px" }}
        >
          <span className="mainHeading">
            Invest better with intelligent buy and sell signals which suit your
            investment needs
          </span>

          <p className="subHeading">
            One stop destination for long term investment signals based on
            time-tested demand and supply determining algorithms, along with
            risk management to give you a holistic investment experience
          </p>
        </div>
        <div className="col-sm-5.5 " style={{ marginTop: "30px", height: "58vh" }}>
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "-80px", marginTop: "20px" }}>
              <img src={Stock} alt="stock" height="300px" width="300px"></img>
            </div>
            <div style={{ marginLeft: "-250px", marginTop: "0px"}}>
              <img src={Andriod} alt="andriod" height="500px" width="500px"></img>
            </div>
          </div>
        </div>

      </div>

      <div style={{ background: "#F1F1F1", }}>
        <div className="heading2" style={{ paddingTop: "100px" }}>
          Why Cycle ?
        </div>

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
              <div className="whyCycleMainText" style={{padding:"30px 10px 5px 10px"}}>
                Learn from Experts <br />
                about investing
              </div>

        
        </div>
    
</div>

               </div>
      </div>
      </div>

 
      {/* <CarouselBrowser /> */}

      <div style={{ background: " #F1F1F1" }} id="cycle">
        <div className="heading2" style={{ padding: "100px 0px 60px 0px" }}>
          How To Use Cycle
        </div>

        <div style={{ width: "88vw", margin: "auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "0px 0px 30px 0px",
            }}
          >

            <div
              style={{
                background: " #FFFFFF",
                borderRadius: "4px",
                height: "220px",
                flex: "0.45",
              }}
            >
              <a target="_blank" href="">
                <div className="sectionHeading" >
                  <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                  <span style={{ padding: "0px 18px " }}>Philosophy</span>
                </div>
                <div className="sectionSubHeading" >
                  Explore the logic behind the signals and get to know our
                  investment style{" "}
                </div>
              </a>
            </div>

            <div
              style={{
                background: " #FFFFFF",
                borderRadius: "4px",
                height: "220px",
                flex: "0.45",
              }}
            >
              <a target="_blank" href="">
                <div className="sectionHeading">
                  <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                  <span style={{ padding: " 0px 18px" }}>
                    {" "}
                    What does Timelines Signify
                  </span>
                </div>

                <div className="sectionSubHeading">
                  Understand what does short - mid and long term signals actually
                  mean and what timeframes are the operating upon{" "}
                </div>
              </a>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-around", padding: "0px 0px 30px 0px", }}>
            <div
              style={{
                background: " #FFFFFF",
                borderRadius: "4px",
                height: "220px",
                flex: "0.45",
              }}
            >
              <a target="_blank" href="">
                <div className="sectionHeading">
                  <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                  <span style={{ padding: " 0px 18px" }}>
                    Short-Term Investor
                  </span>
                </div>
                <div className="sectionSubHeading">
                  Learn how to use the cycle app as a short term investor looking
                  for 2 months to 1 year returns{" "}
                </div>
              </a>
            </div>
            <div
              style={{
                background: " #FFFFFF",
                borderRadius: "4px",
                height: "220px",
                flex: "0.45",
              }}
            >
              <a target="_blank" href="">
                <div className="sectionHeading">
                  <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                  <span style={{ padding: " 0px 18px" }}>
                    {" "}
                    How to use Stop-Loss ?
                  </span>
                </div>
                <div className="sectionSubHeading">
                  With every “BUY” signal in cycle we give a stop loss to protect
                  you from heavy losses, learn how to use it to your benefit{" "}
                </div>
              </a>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-around", padding: "0px 0px 30px 0px", }}>
            <div
              style={{
                background: " #FFFFFF",
                borderRadius: "4px",
                height: "220px",
                flex: "0.45",
              }}
            >
              <a target="_blank" href="">
                <div className="sectionHeading">
                  <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                  <span style={{ padding: " 0px 18px" }}>Long-Term Investor</span>
                </div>
                <div className="sectionSubHeading">
                  Learn how to use the cycle app as a long term investor looking
                  to make returns in more than 2 years
                </div>
              </a>
            </div>
            <div
              style={{
                background: " #FFFFFF",
                borderRadius: "4px",
                height: "220px",
                flex: "0.45",
              }}
            >
             <a target="_blank" href="">
                <div className="sectionHeading">
                  <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                  <span style={{ padding: " 0px 18px" }}> Suggestions</span>
                </div>
                <div className="sectionSubHeading">
                  Learn how to use the Suggestions in the cycle app to your best
                  advantage, maximize profits and minimize losses{" "}
                </div>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", padding: "0px 0px 130px 0px", }}>
            <div
              style={{
                background: " #FFFFFF",
                borderRadius: "4px",
                height: "220px",
                flex: "0.45",
              }}
            >
             <a target="_blank" href="">
                <div className="sectionHeading">
                  <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                  <span style={{ padding: " 0px 18px" }}>  What is Reversal ?</span>
                </div>
                <div className="sectionSubHeading">
                  Understand the signal change from buy to sell or vice versa  for different timeframes.
                </div>
              </a>
            </div>
            <div
              style={{
                background: " #FFFFFF",
                borderRadius: "4px",
                height: "220px",
                flex: "0.45",
              }}
            >
             <a target="_blank" href="">
                <div className="sectionHeading">
                  <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                  <span style={{ padding: " 0px 18px" }}>                        Cycle Relative Strength   (CRS Score)       </span>
                </div>
                <div className="sectionSubHeading">
                The CRS Rating tracks a particular stock's performance.

                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div style={{ marginBottom: "50px" }} id="price">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            className="heading2"
            style={{ paddingTop: "100px", flex: "0.7" }}
          >
            Subscription Plans
          </div>
          {console.log("value", value)}
          <div
            className="heading2"
            style={{ paddingTop: "100px", flex: "0.15" }}
          >
            <AppBar
              position="static"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #ffffff",
                borderRadius: "40px",
                width: "90%",
                marginLeft: "32px",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                scrollButtons="off"
                variant="fullWidth"
                aria-label="scrollable prevent tabs example"
                indicatorColor=""
              >
                <Tab
                  {...a11yProps(0)}
                  label={
                    <div
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "22px",
                      }}
                    >
                      <span>Monthly</span>
                    </div>
                  }
                  className={classes.newStyle}
                />

                <Tab
                  {...a11yProps(1)}
                  label={
                    <div
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "22px",
                      }}
                    >
                      <span>Yearly</span>
                    </div>
                  }
                  className={classes.newStyle}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}></TabPanel>
            <TabPanel value={value} index={1}></TabPanel>
          </div>
          <div
            className="heading2"
            style={{ paddingTop: "100px", flex: "0.0.8" }}
          ></div>
        </div>

        <div style={{ width: "75vw", margin: "auto", paddingTop: "40px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "6px",
              padding: "0px 0px 0px 0px",
            }}
          >
            <div
              onClick={() => {
                setSelected("FREE");
              }}
              style={{
                flex: "0.3",
                marginleft: "10px",
              }}
              className={selected === "FREE" ? "selectedPlan" : "notSelected"}
            >
              <div className="userType">FREE</div>
              <div
                style={{
                  color: "#000000",

                  padding: "20px 0px 50px 0px ",
                  textAlign: "center",
                }}
              >
                <span className="userPrice">₹</span>{" "}
                <span className="userPrice">0</span>
              </div>

              <div className="plan">Watchlist - 1</div>
              <div className="plan">Stocks per Watchlist - 10</div>
              <div className="plan">Stock Recommendations - N/A</div>

            </div>
            <div
              onClick={() => {
                setSelected("PRO");
              }}
              style={{
                flex: "0.3",
              }}
              className={selected === "PRO" ? "selectedPlan" : "notSelected"}
            >
              <div className="userType">PRO</div>
              <div
                style={{
                  color: "#000000",

                  padding: "20px 0px 50px 0px ",
                  textAlign: "center",
                }}
              >
                <span className="userPrice">₹</span>{" "}
                <span className="userPrice">{value === 0 ? 999 : 9999}</span>
                <span className="userPeriod">
                  {value === 0 ? "/ monthly" : "/ yearly"}
                </span>
              </div>

              <div className="plan">Watchlist - 5</div>
              <div className="plan">Stocks per Watchlist - 50</div>
              <div className="plan">Stock Recommendations - 1 Country</div>

            </div>
            <div
              onClick={() => {
                setSelected("INTERNATIONAL");
              }}
              style={{
                flex: "0.3",
              }}
              className={
                selected === "INTERNATIONAL" ? "selectedPlan" : "notSelected"
              }
            >
              <div className="userType">INTERNATIONAL</div>
              <div
                style={{
                  color: "#000000",

                  padding: "20px 0px 50px 0px ",
                  textAlign: "center",
                }}
              >
                <span className="userPrice">₹</span>{" "}
                <span className="userPrice">{value === 0 ? 1999 : 19999}</span>
                <span className="userPeriod">
                  {value === 0 ? "/ monthly" : "/ yearly"}
                </span>
              </div>

              <div className="plan">Watchlist - 5</div>
              <div className="plan">Stocks per Watchlist - 50</div>
              <div
                className="plan1"
                style={{ padding: "18px 20px 80px 20px", lineHeight: "30px", marginLeft: "11px" }}
              >
                Stock Recommendations - Mutiple Countries
              </div>

            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", padding: "70px 0px 0px 0px ", }}>
            <Link to="/main">
              <div className="userPlanButton">
                <span style={{ color: "#ffffff" }}> Get Started</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
     
      <div style={{ marginBottom: "50px" }}>
        <div className="heading2" style={{ paddingTop: "100px" }}>
          Integration With
        </div>

        <div style={{display:"flex",justifyContent:"space-around",marginLeft:"150px",}}>
<div style={{flex:"0.25"}}><img style={{width:"90px",height:"90px",marginLeft:"40px !important"}}  src={Master}/><span  style={{display:"block",fontSize:"30px"}}>MasterTrust</span></div>
<div style={{flex:"0.25"}}><img style={{width:"90px",height:"90px"}}  src={Zerodha}/> <span  style={{display:"block",fontSize:"30px"}}>Zerodha</span></div>
<div style={{flex:"0.25"}}><img style={{width:"90px",height:"90px"}}  src={Upstox}/> <span  style={{display:"block",fontSize:"30px"}}>Upstox</span></div>
<div style={{flex:"0.25"}}><img style={{width:"90px",height:"90px",marginLeft:"34px"}}  src={Angel}/> <span  style={{display:"block",fontSize:"30px"}}>Angel Broking</span></div>


</div>
      </div>

      <div style={{ margin: "50px 0px 100px 0px" }}>
        <div className="heading2">Customer Reviews</div>
        <div className="customerReviewBox" style={{ marginBottom: " 100px" }}>
          <div className="reviewSymbol">
            <img
              src={Quote}
              style={{ width: "55px", marginLeft: "140px", marginTop: "50px" }}
            />
          </div>
          <div className="reviewContain">
            Congratulations !! Always have enjoyed shopping experience at
            Pratha. Some unique Pieces. Currently wearing an emrald ring. I
            bought Years Ago.
          </div>

          <div className="reviewName">-Seema Shirali</div>
        </div>

      </div>
 
      <LandingFooter />
    </div>
    </BrowserView>
  
   <MobileView>
   <div style={{fontSize:"500px !important"}} className="heading2">Customer Reviews</div>
  </MobileView>

   
    </div>
  );
};
export default HomeB;