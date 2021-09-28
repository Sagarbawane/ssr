
import  React,{ Component, useEffect,useState } from 'react';
import axios from "axios";
import server from "../Resources/backend-server.config";
import greenStar from "../Resources/green_star.svg"
import redStar from "../Resources/red_star.svg"
import yellowStar from "../Resources/Yellow_star.svg"
import greyStar from "../Resources/grey_star.svg"
import { Link } from "react-router-dom";
import { Card, Alert, ProgressCircular } from "ui-neumorphism";
import { Modal } from "react-bootstrap";
import { CardContent, Body2, Button } from "ui-neumorphism";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import  Rectangle   from '../Resources/Rectangle 144.svg';
import  Lock   from '../Resources/lock.svg';







import "../Resources/stock.css";




import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    newStyle: {
      backgroundColor: "#14141C",
      color: "#fff",
      "&.Mui-selected": {
        backgroundColor: "#14141C",
        color: "#fff",
        borderBottom: "2px solid #05C232",
      },
    },
    newStyle1: {
      backgroundColor: "#292e35",
      color: "#fff",
      fontSize:"25px",
      "&.Mui-selected": {
        backgroundColor: "#292e35",
        color: "#fff",
        fontSize:"20px",
        borderBottom: "2px solid #05C232",
      },
    },
    customTwo: {
      borderBottom: "2px solid #fff",
    },
  });

   const newRecommend = `
  {
    recommendData(recommendFilter:{
      category:"all_buy",
    })
    {
      _id
      scrip_code
      company_name
      price
      exchange
      category
      strategy
      daily_stop_loss
      weekly_stop_loss
      monthly_stop_loss
      IBD
    }
  }
  `

  const nyseSellRecommend = `
  {
    nyseRecommendData(nyseRecommendFilter:{
      category:"all_sell",
      offSet:0
    })
    {
      _id
      scrip_code
      company_name
      price
      exchange
      category
      strategy
      IBD
    }
  }
  `
const Suggestion=()=>{
    const classes = useStyles();
    const [indiabuydata, setindiabuyData] = useState([]);
  const [indiaselldata, setindiasellData] = useState([]);
    const [value, setValue] = React.useState(0);
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
              <Box>
                <Typography>{children}</Typography>
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
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      useEffect(() => {
        const getIndiabuy = () => {
            axios
              .get(`${server.graphqlQueryURL}${newRecommend}`)
              .then((response) => {
                  console.log(response)
                const recommendData = response.data.data.recommendData;
    
                setindiabuyData(recommendData);
               
              })
              .catch((err) => {
                console.log(err.response);
              });
          };
          const getIndiasell = () => {
            axios
              .get(`${server.graphqlQueryURL}${nyseSellRecommend}`)
              .then((response) => {
               
                const recommendData = response.data.data.nyseRecommendData;
                setindiasellData(recommendData);
              
              })
              .catch((err) => {
                console.log(err.response);
              });
          };
          getIndiabuy ()
          getIndiasell()
    
      }, []);

    return (
      <div style={{background:"#000000"}}  >
           <div style={{padding:"60px 0px 0px 0px",marginLeft:"60px"}}  className="paraStockDetails">Suggestion</div>
           <div style={{marginLeft:"60px",color: "rgba(255, 255, 255, 0.5)"}}  className="paraStockDetails">Curated list of stocks</div>
           <AppBar
                position="static"
                style={{ backgroundColor: "#14141C",width:"90vw",margin:"auto", }}
                color="transparent"
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="fullWidth"
                  aria-label="scrollable prevent tabs example"
                  scrollButtons="off"
                  indicatorColor="green"
                >
                  <Tab label="Buy  " className={classes.newStyle} />
                  <Tab label="Sell" className={classes.newStyle} />
                  <Tab label="Reversal" className={classes.newStyle} />
                </Tabs>
              </AppBar>
             
                  <div style={{display:"flex",justifyContent:"space-around",width:"90vw",margin:"auto",zIndex:0,paddingTop:"40px"}}>
                  <div style={{flex:"0.3",}}>
                          <div
            style={{
              paddingTop: 10,
            }}
          >
            {indiabuydata && indiabuydata.sort(function(a,b){
                return b.IBD-a.IBD
              }).slice(0,3).map((row, i) => {


                return (
                  <Card dark className="mt-2" key={i}>

                      <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{flex:"0.4",padding:"15px 5px 15px 15px"}}>
                        <span
                          style={{
                            textTransform: "capitalize",
                            color: "white",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "10px",
                          }}
                        >
                                  {row.company_name.length>10?`${row.company_name
.substring(0,10)}...`:`${row.company_name
}`}


                        
                          <ArrowForwardIosIcon
                            style={{
                              color: "#e1e1e1",
                              marginLeft: "10px",
                              fontSize: "18px",
                             textAlign:"center",
                            }}
                          />
                        
                        </span>
                        </div>

                        <div style={{flex:"0.6",padding:"15px 2px 15px 5px"}}>
                        <div style={{textAlign:"right",marginRight:"5px",}}><span  className="cmsRating"style={{marginRight:"25px"}}> CRS Score -<img style={{marginLeft:"5px",marginTop:"-3px",width:"15px",height:"15px"}} src={row.IBD>=80?greenStar:row.IBD<80 && row.IBD>=60?yellowStar:row.IBD<60 && row.IBD>=1?redStar:greyStar} alt="img"/><span className="cmsRating" style={{marginLeft:"5px",}}>{row.IBD}{row.IBD?"/100":"N/A"}</span></span>                              
                        </div>
                        </div>


                      </div>

                    
                    <div className="d-flex justify-content-left align-items-left pb-4">
                      <div className="script-name">
                        <span className="script-name-para" style={{color:"#ffffff"}}>
                          {row.price !== 0
                            ? `${
                              
                                  ` ₹${row.price}`
                                  
                              }`
                            : "-"}
                        </span>{" "}
                        <br />
                        <br />
                        <span style={{color:"#ffffff"}} className="script-name-para1">Stop-Loss</span>
                      </div>
                      <div className="data-script-one">
                        <Link to={`https://mycycles.in/stock-details/${row.scrip_code}`}>
                          <Alert
                            style={{
                              backgroundColor: "transparent",
                              border: "1px solid  #18B13F",
                              width:"70px",
                              height:"40px",
                              boxSizing: "border-box",
                              borderRadius: "4px",
                            }}
                            outlined
                            className="no-padding d-block check-one"
                          >
                            <span
                              className="buy-btn"
                              style={{ fontWeight: "8" }}
                            >
                              BUY
                            </span>
                          </Alert>
                        </Link>

                        <span style={{ fontSize: "14px",color:"#ffffff" }}>
                          {row.daily_stop_loss !== 0
                            ? `${
                               
                                   ` ₹${row.daily_stop_loss}`
                                
                              }`
                            : "-"}
                        </span>
                      </div>{" "}
                      <div className="data-script">
                        <Link
to={`https://mycycles.in/mid-stock-details/${row.scrip_code}`}
                        >
                          <Alert
                            style={{
                              backgroundColor: "transparent",
                              border: "1px solid  #18B13F",
                              width:"70px",
                              height:"40px",
                              boxSizing: "border-box",
                              borderRadius: "4px",
                            }}
                            outlined
                            className="no-padding d-block check-one"
                          >
                            <span
                              className="buy-btn"
                              style={{ fontWeight: "10" }}
                            >
                              BUY
                            </span>
                          </Alert>
                        </Link>

                        <span style={{ fontSize: "14px",color:"#ffffff" }}>
                          {row.weekly_stop_loss !== 0
                            ? `${
                               
                                   ` ₹${row.weekly_stop_loss}`
                               
                              }`
                            : "-"}
                        </span>
                      </div>
                      <div className="data-script">
                        <Link
                          to={`https://mycycles.in/long-stock-details/${row.scrip_code}`}
                        >
                          <Alert
                            style={{
                              backgroundColor: "transparent",
                              border: "1px solid  #18B13F",
                             width:"70px",
                             height:"40px",
                              borderRadius: "4px",
                            }}
                            outlined
                            className="no-padding d-block check-one"
                          >
                            <span
                              className="buy-btn"
                              style={{ fontWeight: "10" }}
                            >
                              BUY
                            </span>
                          </Alert>
                        </Link>

                        <span style={{ fontSize: "14px",color:"#ffffff" }}>
                          {row.monthly_stop_loss !== 0
                            ? `${
                                
                                   ` ₹${row.monthly_stop_loss}`
                                 
                              }`
                            : "-"}
                        </span>
                      </div>{" "}
                    </div>
                  </Card>
                );
              })}{" "}

          </div>
                          </div> 
                          <div style={{flex:"0.3"}}>
                          <div
            style={{
              paddingTop: 10,
            }}
          >
             
            {indiaselldata && indiaselldata.sort(function(a,b){
                return b.IBD-a.IBD
              }).slice(0,3).map((row, i) => {
                

                        return (
                          <Card dark className="mt-2" key={i}>

<div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{flex:"0.4",padding:"15px 5px 15px 15px"}}>
                        <span
                          style={{
                            textTransform: "capitalize",
                            color: "white",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "20px",
                          }}
                        >
                                  {row.company_name.length>10?`${row.company_name
.substring(0,10)}...`:`${row.company_name
}`}
                          <ArrowForwardIosIcon
                            style={{
                              color: "#e1e1e1",
                              marginLeft: "10px",
                              fontSize: "18px",
                            }}
                          />
                        </span>
                        </div>
                        <div style={{flex:"0.6",padding:"15px 2px 15px 5px"}}>
                        <div style={{textAlign:"right",marginRight:"5px",}}><span  className="cmsRating"style={{marginRight:"25px"}}> CRS Score -<img style={{marginLeft:"5px",marginTop:"-3px",width:"15px",height:"15px"}} src={row.IBD>=80?greenStar:row.IBD<80 && row.IBD>=60?yellowStar:row.IBD<60 && row.IBD>=1?redStar:greyStar} alt="img"/><span className="cmsRating" style={{marginLeft:"5px",}}>{row.IBD}{row.IBD?"/100":"N/A"}</span></span>                              
                        </div>
                        </div>


                      </div>
                            <div className="d-flex justify-content-left align-items-center pb-4">
                              <div className="script-name">
                                <span className="script-name-para" style={{color:"#ffffff"}}>
                                  {row.price >= 0
                                    ? `${
                                        
                                           ` ₹${row.price}`
                                          
                                      }`
                                    : row.price === 0
                                    ? "-"
                                    : "N/A"}
                                </span>{" "}
                                <br />
                                <br />
                                <span className="script-name-para1" style={{color:"#ffffff"}}>
                                  Stop-Loss
                                </span>
                              </div>
                              <div className="data-script-one">
                                <Link
to={`https://mycycles.in/stock-details/${row.scrip_code}`}
                                >
                                  <Alert
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "1px solid    #EA5E4B",
                                      boxSizing: "border-box",
                                      width:"70px",
                                      height:"40px",
                                      borderRadius: "4px",
                                    }}
                                    outlined
                                    className="no-padding d-block check-one"
                                  >
                                    <span
                                      className="sell-btn"
                                      style={{ fontWeight: "10" }}
                                    >
                                      SELL
                                    </span>
                                  </Alert>
                                </Link>

                                {<span style={{ fontSize: "14px",color:"#ffffff" }}>-</span>}
                              </div>{" "}
                              <div className="data-script">
                                <Link
                                  to={`https://mycycles.in/mid-stock-details/${row.scrip_code}`}
                                >
                                  <Alert
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "1px solid    #EA5E4B",
                                      boxSizing: "border-box",
                                      width:"70px",
                                      height:"40px",
                                      borderRadius: "4px",
                                    }}
                                    outlined
                                    className="no-padding d-block check-one"
                                  >
                                    <span
                                      className="sell-btn"
                                      style={{ fontWeight: "10" }}
                                    >
                                      SELL
                                    </span>
                                  </Alert>
                                </Link>

                                {<span style={{ fontSize: "14px",color:"#ffffff" }}>-</span>}
                              </div>
                              <div className="data-script">
                                <Link
to={`https://mycycles.in/long-stock-details/${row.scrip_code}`}
                                >
                                  <Alert
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "1px solid    #EA5E4B",
                                      boxSizing: "border-box",
                                      width:"70px",
                                      height:"40px",
                                      borderRadius: "4px",
                                    }}
                                    outlined
                                    className="no-padding d-block check-one"
                                  >
                                    <span
                                      className="sell-btn"
                                      style={{ fontWeight: "10" }}
                                    >
                                      SELL
                                    </span>
                                  </Alert>
                                </Link>
                                {<span style={{ fontSize: "14px",color:"#ffffff" }}>-</span>}
                              </div>{" "}
                            </div>{" "}
                          </Card>
                        );
                      })}{" "}

          </div>
                          </div> 
                      <div style={{flex:"0.35"}}>
                   
                      <div
            style={{
              paddingTop: 10,
            }}
          >
            <div
             
            >
              <Card dark className="mt-2">
              <div
                  classname="card"
                  style={{
                    paddingTop: 8,
                    paddingLeft: 2,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h5 style={{ paddingTop: 1, paddingLeft: 15, color: "#fff" }}>
                    Short term
                  </h5>{" "}
                 
                    <ArrowForwardIosIcon
                      size={24}
                      style={{ color: "#e1e1e1", marginLeft: "4px" }}
                    />
                 
                </div>
                <div style={{ color: "#858E9D", paddingLeft: 15 }}>
                  Reversals that occur on a daily basis
                </div>
                <CardContent style={{ paddingBottom: "1px" }}>
                  <Body2>
                    <div
                      style={{
                        padding:"3px 15px 0px 15px",
                        
                        backgroundColor: "#373A44",
                        zIndex: "-1",
                        color:"rgba(255,255,255,0.6)" 
                      }}
                    >
                      If a company's short term status has changed from Buy to
                      Sell or from Sell to buy, you can buy it.
                    </div>
                  </Body2>
                </CardContent>
              </Card>
            </div>
            <div
             
             
            >
              <Card dark className="mt-2">
                <div
                  classname="card"
                  style={{
                    paddingTop:0,
                    paddingLeft: 2,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h5 style={{ paddingTop: 5, paddingLeft: 15, color: "#fff" }}>
                    Medium term
                  </h5>{" "}
                 
                    <ArrowForwardIosIcon
                      size={24}
                      style={{ color: "#e1e1e1", marginLeft: "4px" }}
                    />
                 
                </div>
                <div style={{ color: "#858E9D", paddingLeft: 15 }}>
                  Reversals that occur on a weekly basis
                </div>
                <CardContent style={{ paddingBottom: "1px" }}>
                  <Body2>
                    <div
                      style={{
                        padding:"3px 15px",
                        backgroundColor: "#373A44",
                        zIndex: "-1",
                        color:"rgba(255,255,255,0.6)" 
                      }}
                    >
                      If a company's medium  status has changed from last
                      week's Buy to Sell or from Sell to buy, you.... 
                    </div>
                  </Body2>
                </CardContent>
              </Card>
            </div>
            <div
             
             style={{marginTop:"5px"}}
            >
              <Card dark style={{ marginBottom: "70px" }}>
                <div
                  classname="card"
                  style={{
                    paddingTop: 8,
                    paddingLeft: 2,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h5 style={{ paddingTop: 5, paddingLeft: 15, color: "#fff" }}>
                    Long term
                  </h5>{" "}
                 
                    <ArrowForwardIosIcon
                      size={24}
                      style={{ color: "#e1e1e1", marginLeft: "4px" }}
                    />
                
                </div>
                <div style={{ color: "#858E9D", paddingLeft: 15 }}>
                  Reversals that occur on a monthly basis
                </div>
                <CardContent style={{ paddingBottom: "1px" }}>
                  <Body2>
                    <div style={{ padding: "3px 15px 0px 15px", backgroundColor: "#373A44", color:"rgba(255,255,255,0.6)"  }}>
                      If a company's long term status has changed from last
                      month's Buy to Sell or from Sell to buy, you ...
                    </div>
                  </Body2>
                </CardContent>
              </Card>

            </div>
          </div>

                      </div>
                  </div>
             
             
            <div style={{  marginTop:"-100px auto 0px auto",height:"10vh",zIndex:"1",paddingBottom:"500px"}}>
 <div style={{display:"flex",justifyContent:"space-around",width:"90vw",margin:"-300px auto 50px auto",zIndex:2}}>
                
              <Card  className="mt-2" style={{width:"100vw",height:"40vh",backgroundImage: `url(${Rectangle})`}}>
               <div style={{textAlign:"center"}}>
                   <img src={Lock} alt="lock"/>
               </div>
               <div style={{textAlign:"center"}}>
               <a href="https://mycycles.in" target="_blank">
               <div className="buttonCheckedSSRSuggestion"><span style={{display:"inline-block",paddingTop:"16px"}}>SIGN UP</span></div>
               </a>
               </div>
               <div style={{textAlign:"center"}}>
               <a href="https://mycycles.in" target="_blank">
               <div  className="buttonCheckedSSRSuggestion1"><span style={{display:"inline-block",paddingTop:"16px",}}>REGISTER FOR EARLY ACCESS</span></div>
               </a>
               </div>
              </Card>

            </div>
            </div>
             

     
      </div>

    );

}
export default Suggestion;
