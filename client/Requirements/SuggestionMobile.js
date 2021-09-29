
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
const SuggestionMobile=()=>{
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
    

    return (
      <div style={{background:"#000000"}}  >
           
<div style={{paddingTop:"60px",marginLeft:"60px"}}  className="paraStockDetailsMobile">Suggestions</div>

<AppBar
        position="static"
        style={{ backgroundColor: "#292e35",height:"40px !important" }}
        color="transparent"
      >
        <Tabs
          value={value}
          style={{ backgroundColor: "#292e35",height:"40px !important" }}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="scrollable prevent tabs example"
          scrollButtons="off"
          indicatorColor="green"
        >
          <Tab label="Short-Term  " className={classes.newStyle1} />
          <Tab label="Mid-Term" className={classes.newStyle1} />
          <Tab label="Long-Term" className={classes.newStyle1} />
        </Tabs>
        </AppBar>
        <br/>
        <div>
<div style={{backgroundColor: "#292e35",width:"95vw",textAlign:"center",margin:"auto"}}>
 <img style={{margin:"30px 0px",width:"100px",height:"100px"}} src={Lock} alt="lock"/>
</div>
<a href="https://app.mycycles.in" target="_blank">
<div  className="buttonCheckedSSRMobile1"><span style={{display:"inline-block",padding:"26px 0px"}}>SIGN UP</span></div>
</a>
<a href="https://app.mycycles.in" target="_blank">

<div style={{marginBottom:"0px",paddingBottom:"20px"}} className="buttonCheckedSSRMobile"><span style={{display:"inline-block",paddingTop:"26px"}}>Register For Early Access</span></div>
</a>
</div>
     
      </div>

    );

}
export default SuggestionMobile;
