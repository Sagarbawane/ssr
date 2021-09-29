import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, H6 } from "ui-neumorphism";

import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Master from "../Resources/mastertrust.svg";
import Zerodha from "../Resources/zerodha.svg";
import Angel from "../Resources/angel.svg";
import Upstox from "../Resources/upstock.svg";
 import LandingHeader from "./LandingHeaderMobile";
import Andriod from "../Resources/Group 1033.svg";
import Stock from "../Resources/mobileImage1.svg";
// import Master from "../../resources/mastertrust_logo 1.svg";
// import Upstock from "../../resources/upstock.svg";

import StopLoss from "../Resources/STOPLOSS_ICON.svg";
import GROWTH_ICON from "../Resources/GROWTH_ICON.svg";
import Decision from "../Resources/decision-making-2 1.svg";
import Book from "../Resources/Group 227.svg";
// import Back from "../../resources/Ellipse 28.svg";
import Quote from "../Resources/double-quotes.png";
// import DownloadButtonDown from "./DownloadButtonDown";
// import CarouselMobile from "../Carousal/CarouselMobile";
import FooterMobileSSR from "../Requirements/FooterMobile";
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


const HomeMobileSSR = () => {
  const [selected, setSelected] = useState("FREE");
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    < div style={{ body: "#ffffff !important" }
    }>
<div style={{ background: "#F1F1F1" }} ></div>
      <LandingHeader cycle={"#cycle"} price={"#price"} feature={"#feature"} why={"#whyCycle"} integrate={"#integrate"} customer={"#customer"} />


       <div style={{ background: "#F1F1F1" }} id="whyCycle"></div>
       <div style={{ background: "#ffffff", padding: "20px 4px 30px 0px" }} >
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.4", marginTop: "32px", marginLeft: "100px" }}>
            <img src={Stock} alt="stock" style={{width: "25vh", height: "25vh" }}  ></img>
          </div>
          <div
            style={{ flex: "0.4", marginLeft: "-280px",marginTop:"60px" }}
          >
            <img src={Andriod} alt="andriod" style={{ width: "30vh", height: "30vh" }} ></img>
          </div>
        </div>

        <div style={{ flex: "0.5", marginLeft: "14px", width: "90vw", marginTop: "-40px", padding: "16px 8px 16px 8px", }}>
          <span className="mainHeadingMobile">
            Invest better with intelligent buy and sell signals which suit your
            investment needs
          </span>
          <p className="subHeadingMobile">
            One stop destination for long term investment signals based on
            time-tested demand and supply determining algorithms, along with
            risk management to give you a holistic investment experience
          </p>
        </div>
      </div>
     
      <div style={{ background: "#F1F1F1" }} id="whyCycle">
      <div style={{color:"#000000",paddingTop:"30px",marginLeft:"60px"}}  className="paraStockDetailsMobile"></div>
     
     <div style={{color:"#000000",paddingTop:"30px",marginLeft:"60px"}}  className="paraStockDetailsMobile">Why Cycle</div>


        <div style={{ width: "100vw", margin: "auto", }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "25px 0px 25px 0px",


            }}
          >
              
            <div className="whyCycleMainMobile" >

              <img src={Decision} alt="stoploss" style={{ width: "13vw", height: "13vh", }} />
              <div className="whyCycleMainTextMobile" style={{ marginTop: "2px" }}>Helps in making better investment Decisions</div>

            </div>
            <div className="whyCycleMainMobile" >
              <img src={StopLoss} alt="stoploss" style={{ width: "13vw", height: "13vh",  }} />
              <div className="whyCycleMainTextMobile" style={{ marginTop: "2px" }}> Stoploss feature that helps to prevent losses</div>
            </div>


          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "10px 0px 100px 0px",


            }}
          >

            <div className="whyCycleMainMobile" >
              <img src={GROWTH_ICON} alt="stoploss" style={{ width: "10vw", height: "10vh", marginTop: "10px", }} />
              <div className="whyCycleMainTextMobile" style={{ marginTop: "2px" }}>Flexible short, mid & long term Investments </div>
            </div>
            <div className="whyCycleMainMobile">

              <img src={Book} alt="stoploss" style={{ width: "10vw", height: "10vh", marginTop: "10px",  }} />
              <div className="whyCycleMainTextMobile" style={{ marginTop: "2px" }}>Learn from Experts about investing</div>
            </div>
          </div>
        </div>
      </div>

<div style={{ background: "#ffffff" }} id="price">
<div style={{color:"#000000",paddingTop:"30px",marginLeft:"60px"}}  className="paraStockDetailsMobile"></div>
     
     <div style={{color:"#000000",paddingTop:"30px",marginLeft:"60px"}}  className="paraStockDetailsMobile">Subscription Plans</div>


<div style={{ paddingTop: "7px", }}>
  <AppBar
    position="static"
    style={{
      backgroundColor: "#ffffff",
      border: "1px solid #ffffff",
      borderRadius: "40px",
      width: "85%",
      margin: "auto",
      height:"50vh !important"
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
              fontSize: "25px",
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
              fontSize: "25px",
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


<div style={{ width: "100vw", margin: " 10px auto", paddingTop: "15px", }}>

  <div
    onClick={() => {
      setSelected("FREE");
    }}
    style={{
      margin: "auto"


    }}
    className={selected === "FREE" ? "selectedPlanMobile" : "notSelectedMobile"}
  >
    <br />
    <span style={{fontSize: "30px"}} className="userTypeMobile" >FREE</span>

    <br />
    <br />



    <span className="planMobile">Watchlist - 1</span>
    <br />
    <span className="planMobile">Stocks per Watchlist - 10</span>
    <br />
    <span className="planMobile">Stock Recommendations - N/A</span>
    <br />


  </div>
  <br />
  <div
    onClick={() => {
      setSelected("PRO");
    }}
    style={{
      margin: "auto"
    }}
    className={selected === "PRO" ? "selectedPlanMobile" : "notSelectedMobile"}
  >
    <br />
    <span style={{fontSize: "30px"}} className="userTypeMobile"> {value === 0 ? "PRO - ₹999" : "PRO - ₹9999"}</span>  <span className="userPeriodMobile">{value === 0 ? "/ monthly" : "/ yearly"}</span>

    <br />
    <br />
    <span className="planMobile">Watchlist - 5</span>
    <br />
    <span className="planMobile">Stocks per Watchlist - 50</span>
    <br />
    <span className="planMobile">Stock Recommendations - 1 Country</span>
    <br />

  </div>
  <br />
  <div
    onClick={() => {
      setSelected("INTERNATIONAL");
    }}
    style={{
      margin: "auto"
    }}
    className={
      selected === "INTERNATIONAL" ? "selectedPlanMobile" : "notSelectedMobile"
    }
  >
    <br />
    <span style={{fontSize: "30px"}} className="userTypeMobile"> {value === 0 ? "INTERNATIONAL - ₹ 1999 " : "INTERNATIONAL - ₹ 19999"}</span>   <span className="userPeriodMobile">{value === 0 ? "/ monthly" : "/ yearly"}</span>
    <br />
    <br />
    <span className="planMobile">Watchlist - 5</span>
    <br />
    <span className="planMobile">Stocks per Watchlist - 50 </span>
    <br />
    <span className="planMobile"  >
      Stock Recommendations - Mutiple Countries
    </span>
    <br />
    <br />


  </div>
  </div>


  <br />

  <div style={{ display: "flex", justifyContent: "center", margin: "auto" }} className="userPlanButtonMobile">
    <Link to="/main">

      <span style={{ color: "#ffffff" }}> Get Started</span>

    </Link>

    <br />
    <br />

  </div>
</div>
 
        <br />
      <div style={{ backgroundColor: "#f1f1f1 !important" }} id="cycle">
      <div style={{color:"#000000",paddingTop:"30px",marginLeft:"60px"}}  className="paraStockDetailsMobile"></div>
     
      <div style={{color:"#000000",paddingTop:"30px",marginLeft:"60px"}}  className="paraStockDetailsMobile">How to use cycle ?</div>
        <div style={{ width: "100vw", margin: "auto", padding: "0px 0px 40px 0px", }}>

          <div
            style={{
              background: "#f1f1f1 ",
              borderRadius: "4px",
              height: "130px",
              width: "90vw",
              padding: "0px 0px 0px 0px",
              margin: "12px auto ",

            }}
          >
            <Link to="/how-to-use-cycle">
              <div className="sectionHeadingMobile">
                <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                <span style={{ padding: "0px 18px " }}>Philosophy</span>
              </div>
              <div className="sectionSubHeadingMobile">
                Explore the logic behind the signals and get to know our
                investment style{" "}
              </div>
            </Link>
          </div>

          <div
            style={{
                background: "#f1f1f1 ",
              borderRadius: "4px",
              height: "130px",
              width: "90vw",
              margin: "12px auto",
            }}
          >
            <Link to="/how-to-use-cycle">
              <div className="sectionHeadingMobile">
                <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                <span style={{ padding: "0px 18px " }}>  What does Timelines Signify</span>
              </div>
              <div className="sectionSubHeadingMobile">
                Understand what does short - mid and long term signals actually
                mean and what timeframes are the operating upon
              </div>
            </Link>
          </div>

          <div
            style={{
                background: "#f1f1f1 ",
              borderRadius: "4px",
              height: "130px",
              width: "90vw",
              margin: "12px auto",
            }}
          >
            <Link to="/how-to-use-cycle">
              <div className="sectionHeadingMobile">
                <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                <span style={{ padding: "0px 18px " }}>   Short-Term Investor</span>
              </div>
              <div className="sectionSubHeadingMobile">
                Learn how to use the cycle app as a short term investor looking
                for 2 months to 1 year returns{" "}
              </div>
            </Link>
          </div>

          <div
            style={{
                background: "#f1f1f1 ",
              borderRadius: "4px",
              height: "130px",
              width: "90vw",
              margin: "12px auto",

            }}
          >
            <Link to="/how-to-use-cycle">
              <div className="sectionHeadingMobile">
                <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                <span style={{ padding: "0px 18px " }}>                  How to use Stop-Loss ?</span>
              </div>
              <div className="sectionSubHeadingMobile">
                With every “BUY” signal in cycle we give a stop loss to protect
                you from heavy losses, learn how to use it to your benefit
              </div>
            </Link>
          </div>

          <div
            style={{
                background: "#f1f1f1 ",
              borderRadius: "4px",
              height: "130px",
              width: "90vw",
              margin: "12px auto",
            }}
          >
            <Link to="/how-to-use-cycle">
              <div className="sectionHeadingMobile">
                <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                <span style={{ padding: "0px 18px " }}>  Long-Term Investor</span>
              </div>
              <div className="sectionSubHeadingMobile">
                Learn how to use the cycle app as a long term investor looking
                to make returns in more than 2 years
              </div>
            </Link>
          </div>

          <div
            style={{
                background: "#f1f1f1 ",
              borderRadius: "4px",
              height: "130px",
              width: "90vw",
              margin: "12px auto",

            }}
          >
            <Link to="/how-to-use-cycle">
              <div className="sectionHeadingMobile">
                <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                <span style={{ padding: "0px 18px " }}>Suggestions</span>
              </div>
              <div className="sectionSubHeadingMobile">
                Learn how to use the Suggestions in the cycle app to your best
                advantage, maximize profits and minimize losses
              </div>
            </Link>
          </div>
          <div
            style={{
                background: "#f1f1f1 ",
              borderRadius: "4px",
              height: "130px",
              width: "90vw",
              margin: "12px auto",
              paddingBottom: "30px"
            }}
          >
            <Link to="/how-to-use-cycle">
              <div className="sectionHeadingMobile">
                <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                <span style={{ padding: "0px 18px " }}>What is Reversal ?</span>
              </div>
              <div className="sectionSubHeadingMobile">
                Understand the signal change from buy to sell or vice versa  for different timeframes.
              </div>
            </Link>
          </div>
          <div
            style={{
                background: "#f1f1f1 ",
              borderRadius: "4px",
              height: "130px",
              width: "90vw",
              margin: "12px auto",
              paddingBottom: "30px"
            }}
          >
                    <Link to="/how-to-use-cycle">
                <div className="sectionHeadingMobile">
                  <span style={{ borderLeft: "5px solid #18B13F" }}></span>{" "}
                  <span style={{ padding: " 0px 18px" }}>                        Cycle Relative Strength   (CRS Score)       </span>
                </div>
                <div className="sectionSubHeadingMobile">
                The CRS Rating tracks a particular stock's performance.

                </div>
              </Link>

          </div>

          <div style={{ background: "#ffffff" }} id="customer">
          <div style={{color:"#000000",paddingTop:"30px",marginLeft:"60px"}}  className="paraStockDetailsMobile">Customer Reviews</div>
          <br />
          <div
            style={{
              width: "100vw",
              margin: "auto",
              background: "#F1F1F1",
              height: "20vh",
            }}
          >
            <div className="reviewSymbolMobile" style={{ paddingLeft: "30px" }}>
              <img
                src={Quote}
                style={{ width: "35px", marginLeft: "30px", margin: "40px 0px 30px 0px" }}
              />
            </div>

            <div style={{
              width: "80vw",
              margin: "auto",
              background: "#F1F1F1",
              height: "5vh",
            }} className="reviewContainMobile">
              Congratulations !! Always have enjoyed shopping experience at
              Pratha. Some unique Pieces. Currently wearing an emrald ring. I
              bought Years Ago.


            </div>
            <br />
            <div style={{
              width: "90vw",
              margin: "auto",

            }} className="reviewNameMobile">-Seema Shirali</div>
            <br />
          </div>

        </div>





        </div>
        <div style={{ background: "#ffffff" }} id="integrate">
         
          <div style={{color:"#000000",paddingTop:"30px",marginLeft:"60px"}}  className="paraStockDetailsMobile">Integration with</div>

<div style={{display:"flex",justifyContent:"space-around",marginLeft:"15px",paddingBottom:"50px"}}>
<div style={{flex:"0.2"}}><img style={{width:"90px",height:"90px",marginLeft:"34px"}}  src={Master}/><span  style={{display:"block",fontSize:"30px"}}>MasterTrust</span></div>
<div style={{flex:"0.2"}}><img style={{width:"90px",height:"90px"}}  src={Zerodha}/> <span  style={{display:"block",fontSize:"30px"}}>Zerodha</span></div>
<div style={{flex:"0.2"}}><img style={{width:"90px",height:"90px"}}  src={Upstox}/> <span  style={{display:"block",fontSize:"30px"}}>Upstox</span></div>
<div style={{flex:"0.2"}}><img style={{width:"90px",height:"90px",marginLeft:"34px"}}  src={Angel}/> <span  style={{display:"block",fontSize:"30px"}}>Angel Broking</span></div>
<br/>

</div>
        </div>
        <FooterMobileSSR/>
      </div>

 
    </div >
  );
};
export default HomeMobileSSR;
