import React, { Component, useEffect,useState } from 'react';
import axios from "axios";
import {  Card,  } from "ui-neumorphism";
import { Helmet } from 'react-helmet';
import Info from "../Resources/info.svg"
import { Link } from "react-router-dom";
import EmptyState from "../Requirements/EmptyState";
import SuggestionMobile from "../Requirements/SuggestionMobile"
import IconGreen from "../Resources/keystat_green.svg";
import IconYellow from "../Resources/keystat_orange.svg";
import Master from "../Resources/mastertrust.svg";
import Zerodha from "../Resources/zerodha.svg";
import Angel from "../Resources/angel.svg";
import Upstox from "../Resources/upstock.svg";
import Lock from "../Resources/padlock.svg"
import {
  ComposedChart,
  Cell,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


import Moment from "moment";
import { BrowserView, MobileView } from "react-device-detect";
import Footer from "../Requirements/Footer";
import CrsScore from "../Requirements/CrsScore";
import Suggestion from "../Requirements/Suggestion";
import WhyCycle from "../Requirements/WhyCycle";



import FooterMobile from "../Requirements/FooterMobile";

import Integrate from "../Requirements/Integrate";


import "../Resources/stock.css";
import IconRed from "../Resources/keystat_red.svg";
import server from "../Resources/backend-server.config";
import BrowserHeader from "../Requirements/BrowserHeader";
import BrowserMobileHeader from "../Requirements/BrowserMobileHeader";

import Checked from "../Resources/checked-2 2.svg"



import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Time from "../utils/Time";
import BrowserHeaderMobile from '../Requirements/BrowserMobileHeader';

const getSingleTicker = (label) => {

  const stringifiedTerm = JSON.stringify(label);
  const oneQuery = `
{
  signalsUsingCompanyName(signalFilter: {trading_symbol:${stringifiedTerm}}){
    _id
    scrip_code
    company_name
    price
    BSE_code
    trading_symbol
    exchange
    IBD
    daily{
      hhpc_strat{
        status
        stop_loss
        signal_history_v2 {
          buy {
            first_date
            first_close
            last_date
            last_close
            returns
            signal
          }
          sell{
            first_date
            first_close
            last_date
            last_close
            returns
            signal
          }
          wait{
            first_date
            first_close
            last_date
            last_close
            returns
            signal
          }
        }
        properties {
          pm_all {
            percentile
            rank
            icon_flag
          }
          pm_industry{
            percentile
            rank
            icon_flag
          }
          return {
            return_val
              display_flag
          }
          rise_fall
        }
      }

      bb_strat{
        status
        stop_loss
      }
    }
    weekly{
      hhpc_strat{
        status
        stop_loss
        signal_history_v2 {
          buy {
            first_date
            first_close
            last_date
            last_close
            returns
            signal
          }
          sell{
            first_date
            first_close
            last_date
            last_close
            returns
            signal
          }
          wait{
            first_date
            first_close
            last_date
            last_close
            returns
            signal
          }
        }
        properties {
          pm_all {
            percentile
            rank
            icon_flag
          }
          pm_industry{
            percentile
            rank
            icon_flag
          }
          return {
            return_val
              display_flag
          }
          rise_fall
        }
      }
      bb_strat{
        status
        stop_loss
      }
    }
    monthly{
      hhpc_strat{
        status
        stop_loss
        signal_history_v2 {
          buy {
            first_date
            first_close
            last_date
            last_close
            returns
            signal
          }
          sell{
            first_date
            first_close
            last_date
            last_close
            returns
            signal
          }
          wait{
            first_date
            first_close
            last_date
            last_close
            returns
            signal
          }
        }
        properties {
          pm_all {
            percentile
            rank
            icon_flag
          }
          pm_industry{
            percentile
            rank
            icon_flag
          }
          return {
            return_val
              display_flag
          }
          rise_fall
        }
      }
      bb_strat{
        status
        stop_loss
      }
    }
  }
}
`;
  return oneQuery;
};

const OverdivStyle = {
  divDecoration: "none",
  color: "#E1E1E1",
  marginTop: "10px",
  marginBottom: "20px",
  fontFamily: "Open Sans, sans-serif",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "20px",
};


const useStyles = makeStyles({
  newStyle: {
    backgroundColor: "#14141C",
    color: "#fff",
    "&.Mui-selected": {
      backgroundColor:"#14141C",
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

const Post=(props)=>{
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [tableData,setTableData]=useState([])
  const [DailyAllData,setDailyAllData]=useState([])
  const [WeeklyAllData,setWeeklyAllData]=useState([])
  const [MonthlyAllData,setMonthlyAllData]=useState([])
  const [TableDailyPlot,setTableDailyPlot]=useState([])
  const [TableWeeklyPlot,setTableWeeklyPlot]=useState([])

  const [TableMonthlyPlot,setTableMonthlyPlot]=useState([])

const [TableDailyMax,setTableDailyMax]=useState()
const [TableWeeklyMax,setTableWeeklyMax]=useState()
const [TableMonthlyMax,setTableMonthlyMax]=useState()







  const label=props && props.match.params.label
  const [showData, setShowData] = useState({});
const [value, setValue] = React.useState(0);
const [value1, setValue1] = React.useState(0);

  

  
  useEffect(()=>{
    const getData=()=>{
      
      axios
      .get(`${server.graphqlQueryURL}${getSingleTicker(label)}`)
      .then((result) => {
       
        const data = result.data.data.signalsUsingCompanyName;

        if (data.length) {
          var mydata = data.map((k) => {
          
            if (k.trading_symbol == label.toUpperCase()) {
              setShowData(k);
              setLoaded(true)
              return k;
            }
          });
        }
      })
      .catch((err) => {
        if (err === TypeError) {
          console.log("No companies found");
        }
      });
  };
  const getGraphData=()=>{
    
    axios
    .get(`${server.graphqlQueryURL}${getSingleTicker(label)}`)
    .then((result) => {
    
      const buyDaily = result.data.data.signalsUsingCompanyName[0].daily.hhpc_strat.signal_history_v2.buy
     
      const sellDaily = result.data.data.signalsUsingCompanyName[0].daily.hhpc_strat.signal_history_v2.sell
      const holdDaily = result.data.data.signalsUsingCompanyName[0].daily.hhpc_strat.signal_history_v2.wait
    

      const buyWeekly = result.data.data.signalsUsingCompanyName[0].weekly.hhpc_strat.signal_history_v2.buy
      const sellWeekly = result.data.data.signalsUsingCompanyName[0].weekly.hhpc_strat.signal_history_v2.sell
      const holdWeekly = result.data.data.signalsUsingCompanyName[0].weekly.hhpc_strat.signal_history_v2.wait
      const buyMonthly = result.data.data.signalsUsingCompanyName[0].monthly.hhpc_strat.signal_history_v2.buy
      const sellMonthly = result.data.data.signalsUsingCompanyName[0].monthly.hhpc_strat.signal_history_v2.sell
      const holdMonthly = result.data.data.signalsUsingCompanyName[0].monthly.hhpc_strat.signal_history_v2.wait
      
      if (buyDaily.length || sellDaily.length || holdDaily.length) {
       setDailyAllData([...buyDaily,...sellDaily,...holdDaily])
        
          
        
      }
      if (buyWeekly.length || sellWeekly.length || holdWeekly.length) {
        setWeeklyAllData([...buyWeekly,...sellWeekly,...holdWeekly])
        
          
        
      }
      if (buyMonthly.length || sellMonthly.length || holdMonthly.length) {
       
        setMonthlyAllData([...buyMonthly,...sellMonthly,...holdMonthly])
          
        
      }
    })
    .catch((err) => {
      if (err === TypeError) {
        console.log("No companies found");
      }
    });
};

  
getData()
getGraphData()
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  


  const getTableData=()=>{
    showData&&showData
  }
useEffect(()=>{
 
  const dailyTableData=()=>{
    if (DailyAllData && DailyAllData){
     
    const soretedDaily=DailyAllData.sort((a, b) =>{
      if (a.first_date > b.first_date)
      return 1;
    if (a.first_date < b.first_date)
      return -1;
   
    return 0;

    
     

        }    
        )
        const newArray= [...soretedDaily]
        const soretedDailyPrice=newArray.sort((a, b) =>{
       
        return a.first_close-b.first_close
        })

       if(soretedDailyPrice.length){
       
        
        
  
  setTableDailyMax((soretedDailyPrice.length && soretedDailyPrice[soretedDailyPrice.length-1].first_close))
       }

        if (soretedDaily.length && soretedDaily){
          const dailySorted= soretedDaily.map((ele)=>{
            console.log(typeof(ele.first_date))
            if(typeof(ele.first_date)==="string"){
           
              return {...ele,first_date: Moment(ele.first_date).format("DD-MM-YYYY")}
           
            }
          return ele
           
          })
          

          setTableDailyPlot(dailySorted)
       
        }
       

    }
  }
 

  const weeklyTableData=()=>{
    if (WeeklyAllData && WeeklyAllData){
     
    const soretedWeekly=WeeklyAllData.sort((a, b) =>{
      if (a.first_date > b.first_date)
      return 1;
    if (a.first_date < b.first_date)
      return -1;
   
    return 0;
     

        }    
        )
        const newArray= [...soretedWeekly]
        const soretedWeeklyPrice=newArray.sort((a, b) =>{
       
        return a.first_close-b.first_close
        })

       if(soretedWeeklyPrice.length){
       
        
        
  
  setTableWeeklyMax((soretedWeeklyPrice.length && soretedWeeklyPrice[soretedWeeklyPrice.length-1].first_close))
       }

        if (soretedWeekly.length && soretedWeekly){
          const weeklySorted= soretedWeekly.map((ele)=>{
          
            if(typeof(ele.first_date)==="string"){
           
              return {...ele,first_date: Moment(ele.first_date).format("DD-MM-YYYY")}
           
            }
          return ele
           
          })
          

          setTableWeeklyPlot(weeklySorted)
       
        }


    }
  }
  const monthlyTableData=()=>{
    if (MonthlyAllData && MonthlyAllData){
     
    const soretedMonthly=MonthlyAllData.sort((a, b) =>{
      if (a.first_date > b.first_date)
      return 1;
    if (a.first_date < b.first_date)
      return -1;
   
    return 0;
      // return Moment(b.first_date).format("YYYY-MM-DD").diff(a.first_date).format("YYYY-MM-DD")

        }    
        )
        const newArray= [...soretedMonthly]
        const soretedMonthlyPrice=newArray.sort((a, b) =>{
       
        return a.first_close-b.first_close
        })

       if(soretedMonthlyPrice.length){
       
        
        
  
  setTableMonthlyMax((soretedMonthlyPrice.length && soretedMonthlyPrice[soretedMonthlyPrice.length-1].first_close))
       }

        if (soretedMonthly && soretedMonthly){
          const monthlySorted= soretedMonthly.map((ele)=>{
           
            if(typeof(ele.first_date)==="string"){
           
              return {...ele,first_date: Moment(ele.first_date).format("DD-MM-YYYY")}
           
            }
          return ele
           
          })
          

          setTableMonthlyPlot(monthlySorted)
       
        }


    }
  }
  dailyTableData()
  weeklyTableData()
  monthlyTableData()

},[DailyAllData,WeeklyAllData,MonthlyAllData])

  const data = [
    {
      name: 'Page d',
      
      pv: 2800,
    },
    {
      name: 'Page d',
      pv:3400,
    },
    {
      name: 'Page p',
      pv: 2200,
      
    },
    {
      
      name: 'Page h',
      pv: 2100,
     
    },
    {
      name: 'Page E',

      pv: 4800,
    },
    {
      
      name: 'Page n',
      pv: 3800,
    },
    {
      name: 'Page G',
      
      pv: 4300,
      
    },
    {
      
      name: 'Page h',
      pv: 2100,
     
    },
    {
      name: 'Page E',

      pv: 4800,
    },
    {
      
      name: 'Page n',
      pv: 3800,
    },
    {
      name: 'Page G',
      
      pv: 4300,
      
    },
    {
      
      name: 'Page h',
      pv: 2100,
     
    },
    {
      name: 'Page E',

      pv: 4800,
    },
    {
      
      name: 'Page n',
      pv: 3800,
    },
    {
      name: 'Page G',
      
      pv: 4300,
      
    },
  ];
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
  

  return (
    <div  style={{height:"auto"}}>
      <BrowserView>
    <div  style={{background:"#000000",height:"auto"}}>
              <Helmet
      title={`${label} share price,${label} stock price`}
      titleTemplate={label ? `%s | Invest or Buy ${label} Industries Share or Stock Online` : null}
      meta={[
        {
          name: `robots`,
          content: `index`
        },
        {
          name: `description`,
          content: `${label} Share Price - Buy or Invest ${label} with India’s Leading Brokerage Platform with mycycles.in.Get todays Live Stock Price for ${label} with Performance, Fundamentals, Market Cap, Share holding, financial report, company profile, annual report, quarterly results, profit and loss, and mor ... `
        },
        {
          property: `og:locale`,
          content: `en_US `,
        },

        {
          property: `og:title`,
          content: `${label} share price,${label} stock price  | Invest or Buy ${label} Industries Share or Stock Online`,
        },
        {
          property: `og:description`,
          content:  `${label} Share Price - Buy or Invest ${label} with India’s Leading Brokerage Platform with mycycles.in.Get todays Live Stock Price for ${label} with Performance, Fundamentals, Market Cap, Share holding, financial report, company profile, annual report, quarterly results, profit and loss, and mor ... `,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://mycycles.in/${label}`,
        },
        {
          property: `og:site_name`,
          content: `mycycles.in`,
        },
        // {
        //   property: `og:image`,
        //   content: `website`,
        // },
        {
          itemprop: `name`,
          content:  `${label} share price,${label} stock price  | Invest or Buy ${label} Industries Share or Stock Online`,
        },
        {
          name: `description`,
          content:  `${label} Share Price - Buy or Invest ${label} with India’s Leading Brokerage Platform with mycycles.in.Get todays Live Stock Price for ${label} with Performance, Fundamentals, Market Cap, Share holding, financial report, company profile, annual report, quarterly results, profit and loss, and mor ... `,
        },
        // {
        //   itemprop: `image`,
        //   content:  `${label} share price,${label} stock price  | Invest or Buy ${label} Industries Share or Stock Online`,
        // },

        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: `summary_large_image`,
        },

        {
          name: `twitter:title`,
          content:   `${label} Share Price - Buy or Invest ${label} with India’s Leading Brokerage Platform with mycycles.in.Get todays Live Stock Price for ${label} with Performance, Fundamentals, Market Cap, Share holding, financial report, company profile, annual report, quarterly results, profit and loss, and mor ... `
        },
        {
          name: `twitter:description`,
          content:   `${label} Share Price - Buy or Invest ${label} with India’s Leading Brokerage Platform with mycycles.in.Get todays Live Stock Price for ${label} with Performance, Fundamentals, Market Cap, Share holding, financial report, company profile, annual report, quarterly results, profit and loss, and mor ... `
        },
        {
          name: `twitter:creator`,
          content: `@iam_clearmind`,
        },
        {
          name: `twitter:site`,
          content: `@iam_clearmind`,
        },

      ]}
    />

<BrowserHeader/>





             <div style={{ marginTop: "50px",margin:"auto" ,background:"#000000 !important" }}>
            <div style={{padding:"120px 0px 0px 0px",marginLeft:"60px"}}  className="paraStockDetails">              {showData ? (
                <div >{showData.company_name}</div>
              ) : null}
</div>
              <br />

              <AppBar
                position="static"
                style={{ backgroundColor: "#14141C",width:"90vw",margin:"auto" }}
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
                  <Tab label="Short-Term  " className={classes.newStyle} />
                  <Tab label="Mid-Term" className={classes.newStyle} />
                  <Tab label="Long-Term" className={classes.newStyle} />
                </Tabs>
              </AppBar>

              <br />
              
              <TabPanel value={value} index={0}>
                <div>



                {loaded && showData !== undefined ? (<>
                  <div>
{showData.daily.hhpc_strat.status === "" &&
showData.daily.hhpc_strat.properties.pm_all.icon_flag ===
  null &&
showData.daily.hhpc_strat.properties.pm_industry
  .icon_flag === null &&
showData.daily.hhpc_strat.signal_history.buy.length ===
  0 &&
showData.daily.hhpc_strat.signal_history.sell.length ===
  0 ? (
  <div>
    <EmptyState />
  </div>
) : (
  <div>
    <div
      
      style={{
        display:"flex",
        justifyContent:"space-around",
        marginLeft: "20px",
        marginRight: "10px",
      }}
    >
      <div style={{flex:"0.5"}}>

      {showData.daily.hhpc_strat.properties.pm_all
        .icon_flag === null &&
      showData.daily.hhpc_strat.properties.pm_industry
        .icon_flag === null ? (
        <div style={{padding:"60px 0px 0px 0px",marginLeft:"60px"}} className="paraStockDetails">Key Statistics</div>
      ) : null}
      {showData.daily.hhpc_strat.properties.pm_all
        .icon_flag !== null ||
      showData.daily.hhpc_strat.properties.pm_industry
        .icon_flag !== null ? (
        <>
          <div style={{padding:"60px 0px 0px 0px",marginLeft:"60px"}} className="paraStockDetails">Key Statistics</div>
          {showData &&
          showData.daily.hhpc_strat.properties.pm_all
            .rank < 400 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingLeft: "60px",
                paddingBottom: "10px",
              }}
            >
              <div
                style={{
                  flex: "0.08",
                  paddingTop: "-4px",
                }}
              >
                <img
                  style={{ marginTop: "8px" }}
                  src={IconGreen}
                  alt="vector"
                />
              </div>
              <div
                style={{
                  flex: "0.92",
                  paddingBottom: "7px",
                }}
              >
                <div className="stockDetailsUpdateBrowser  ">
                  {" "}
                  +
                  {showData &&
                    showData.daily.hhpc_strat.properties
                      .return.return_val}
                  % Returns{" "}
                </div>
                <span className="stockDetailsUpdateSubBrowser  ">
                  Has given very good returns over the
                  last 6 months
                </span>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank > 400 &&
            showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank < 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconYellow}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    {showData &&
                    showData.daily.hhpc_strat.properties
                      .return.return_val < 0
                      ? ""
                      : "+"}
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .return.return_val}
                    % Returns{" "}
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    {showData &&
                    showData.daily.hhpc_strat.properties
                      .return.return_val < 0
                      ? "Has given negative returns over the                                           last 6 months"
                      : "Has given average returns over the last                                           last 6 months"}
                  </span>
                </div>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank > 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconRed}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    {showData &&
                    showData.daily.hhpc_strat.properties
                      .return.return_val < 0
                      ? ""
                      : "+"}
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .return.return_val}
                    % Returns{" "}
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    {showData &&
                    showData.daily.hhpc_strat.properties
                      .return.return_val < 0
                      ? "Has given negative returns over the                                           last 6 months"
                      : "Has given below average returns over the                                           last 6 months"}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="stockDetailsUpdateBrowser  ">
              <></>
            </div>
          )}
          {showData &&
          showData.daily.hhpc_strat.properties.pm_all
            .rank < 400 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingLeft: "60px",
                paddingBottom: "10px",
              }}
            >
              <div style={{ flex: "0.08" }}>
                <img
                  style={{ marginTop: "8px" }}
                  src={IconGreen}
                  alt="vector"
                />
              </div>
              <div
                style={{
                  flex: "0.92",
                  paddingBottom: "7px",
                }}
              >
                <div className="stockDetailsUpdateBrowser  ">
                  Ranked #
                  {showData &&
                    showData.daily.hhpc_strat.properties
                      .pm_all.rank}
                </div>
                <span className="stockDetailsUpdateSubBrowser  ">
                  Among the top performers in the                                           last 6 months
                </span>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank > 400 &&
            showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank < 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconYellow}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    Ranked #
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .pm_all.rank}
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    Among the medicore performers in the
                    last 6 months
                  </span>
                </div>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank > 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconRed}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    Ranked #
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .pm_all.rank}
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    Among the Bottom performers in the
                    last 6 months
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="stockDetailsUpdateBrowser  ">
              <></>
            </div>
          )}

          {showData &&
          showData.daily.hhpc_strat.properties.pm_all
            .percentile < 20 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingLeft: "60px",
                paddingBottom: "10px",
              }}
            >
              <div style={{ flex: "0.08" }}>
                <img
                  style={{ marginTop: "8px" }}
                  src={IconGreen}
                  alt="vector"
                />
              </div>
              <div
                style={{
                  flex: "0.92",
                  paddingBottom: "7px",
                }}
              >
                <div className="stockDetailsUpdateBrowser  ">
                  Top
                  {showData &&
                    showData.daily.hhpc_strat.properties
                      .pm_all.percentile}
                  % Investments
                </div>
                <span className="stockDetailsUpdateSubBrowser  ">
                  Among the best investments in the                                           last 6 months
                </span>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .percentile > 20 &&
            showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .percentile < 60 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconYellow}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .pm_all.percentile}
                    % Stocks Performed Better
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    Among the medicore investments in
                    the                                           last 6 months
                  </span>
                </div>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .percentile > 60 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconRed}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .pm_all.percentile}
                    % Stocks Performed Better
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    Among the bad investments in the
                    last 6 months
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="stockDetailsUpdateBrowser  ">
              <></>
            </div>
          )}
        </>
      ) : (
        <div
          style={{
            opacity: "50%",
            fontWeight: "600",
            fontSize: "16px",
            color: "white",
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          No showData Available
        </div>
      )}
</div>
<div style={{flex:"0.4"}}>
<ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={TableDailyPlot && TableDailyPlot}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
        <CartesianGrid strokeDasharray="6 6" fill="#0000"
              
              />
          <XAxis dataKey="first_date" stroke="#ffffff"  />
          <YAxis type="number" stroke="#ffffff" domain={[0, parseInt(TableDailyMax) +20 ]}/>
          <Tooltip />
         
          <Bar dataKey="first_close" barSize={20}  >
          {
  TableDailyPlot.map((ele, index) => (
    <Cell fill={ele.signal==="Buy"?" #18B13F":ele.signal==="Sell"?"#EA5E4B":ele.signal==="Wait"?"#F8D42B":""}/> //red
))}
          </Bar>
         
          <Line type="monotone" dataKey="first_close" fill="#ffffff" stroke="#ffffff" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
</div> 



    </div>

  </div>
)}
</div>
<div style={{padding:"50px 70px"}}>
  
<a target="_blank" href="https://mycycles.in/how-to-use-cycle">

<div style={{ display: "flex",backgroundColor: "#14141C", flexDirection: "space-around", margin: "auto" }}>
  <div style={{ flex: "0.1" ,paddingTop:"12px"}}>
    <img style={{ marginLeft: "30px" }} src={Info} alt="Info" />
  </div>
  <div style={{ flex: "0.9",paddingTop:"12px",paddingBottom:"10px" }}>
    <span className="watchlistHowtoUseCycle">
    Short-Term Investor -
    </span>                       <span style={{ color: "rgba(255,255,255,0.8)" }} className="watchlistHowtoUseCycle">Learn how to use the cycle app as a short term investor looking for 2 months to 1 year returns</span>
   
  </div>
</div>

</a>



</div>

 

                 
                    
                </>):(<></>)}


                </div>
              </TabPanel>

              <TabPanel value={value} index={1}>
              <div>
{loaded && showData !== undefined ? (<>
  <div>
{showData.weekly.hhpc_strat.status === "" &&
showData.weekly.hhpc_strat.properties.pm_all.icon_flag ===
null &&
showData.weekly.hhpc_strat.properties.pm_industry
.icon_flag === null &&
showData.weekly.hhpc_strat.signal_history.buy.length ===
0 &&
showData.weekly.hhpc_strat.signal_history.sell.length ===
0 ? (
<div>
<EmptyState />
</div>
) : (
<div>
<div

style={{
  display:"flex",
  justifyContent:"space-around",
marginLeft: "10px",
marginRight: "10px",
}}
>
  <div style={{flex:"0.5"}}>
  {showData.weekly.hhpc_strat.properties.pm_all
        .icon_flag === null &&
      showData.weekly.hhpc_strat.properties.pm_industry
        .icon_flag === null ? (
        <div style={{padding:"60px 0px 0px 0px",marginLeft:"60px"}} className="paraStockDetails">Key Statistics</div>
      ) : null}
      {showData.weekly.hhpc_strat.properties.pm_all
        .icon_flag !== null ||
      showData.weekly.hhpc_strat.properties.pm_industry
        .icon_flag !== null ? (
        <>
          <div style={{padding:"60px 0px 0px 0px",marginLeft:"60px"}} className="paraStockDetails">Key Statistics</div>
          {showData &&
          showData.weekly.hhpc_strat.properties.pm_all
            .rank < 400 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingLeft: "60px",
                paddingBottom: "10px",
              }}
            >
              <div
                style={{
                  flex: "0.08",
                  paddingTop: "-4px",
                }}
              >
                <img
                  style={{ marginTop: "8px" }}
                  src={IconGreen}
                  alt="vector"
                />
              </div>
              <div
                style={{
                  flex: "0.92",
                  paddingBottom: "7px",
                }}
              >
                <div className="stockDetailsUpdateBrowser  ">
                  {" "}
                  +
                  {showData &&
                    showData.weekly.hhpc_strat.properties
                      .return.return_val}
                  % Returns{" "}
                </div>
                <span className="stockDetailsUpdateSubBrowser  ">
                  Has given very good returns over the
                  last 2 years
                </span>
              </div>
            </div>
          ) : showData &&
            showData.weekly.hhpc_strat.properties.pm_all
              .rank > 400 &&
            showData &&
            showData.weekly.hhpc_strat.properties.pm_all
              .rank < 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconYellow}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    {showData &&
                    showData.weekly.hhpc_strat.properties
                      .return.return_val < 0
                      ? ""
                      : "+"}
                    {showData &&
                      showData.weekly.hhpc_strat.properties
                        .return.return_val}
                    % Returns{" "}
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    {showData &&
                    showData.weekly.hhpc_strat.properties
                      .return.return_val < 0
                      ? "Has given negative returns over the                                           last 2 years"
                      : "Has given average returns over the last                                           last 2 years"}
                  </span>
                </div>
              </div>
            </div>
          ) : showData &&
            showData.weekly.hhpc_strat.properties.pm_all
              .rank > 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconRed}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    {showData &&
                    showData.weekly.hhpc_strat.properties
                      .return.return_val < 0
                      ? ""
                      : "+"}
                    {showData &&
                      showData.weekly.hhpc_strat.properties
                        .return.return_val}
                    % Returns{" "}
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    {showData &&
                    showData.weekly.hhpc_strat.properties
                      .return.return_val < 0
                      ? "Has given negative returns over the                                           last 2 years"
                      : "Has given below average returns over the                                           last 2 years"}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="stockDetailsUpdateBrowser  ">
              <></>
            </div>
          )}
          {showData &&
          showData.weekly.hhpc_strat.properties.pm_all
            .rank < 400 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingLeft: "60px",
                paddingBottom: "10px",
              }}
            >
              <div style={{ flex: "0.08" }}>
                <img
                  style={{ marginTop: "8px" }}
                  src={IconGreen}
                  alt="vector"
                />
              </div>
              <div
                style={{
                  flex: "0.92",
                  paddingBottom: "7px",
                }}
              >
                <div className="stockDetailsUpdateBrowser  ">
                  Ranked #
                  {showData &&
                    showData.weekly.hhpc_strat.properties
                      .pm_all.rank}
                </div>
                <span className="stockDetailsUpdateSubBrowser  ">
                  Among the top performers in the                                           last 2 years
                </span>
              </div>
            </div>
          ) : showData &&
            showData.weekly.hhpc_strat.properties.pm_all
              .rank > 400 &&
            showData &&
            showData.weekly.hhpc_strat.properties.pm_all
              .rank < 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconYellow}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    Ranked #
                    {showData &&
                      showData.weekly.hhpc_strat.properties
                        .pm_all.rank}
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    Among the medicore performers in the
                    last 2 years
                  </span>
                </div>
              </div>
            </div>
          ) : showData &&
            showData.weekly.hhpc_strat.properties.pm_all
              .rank > 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconRed}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    Ranked #
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .pm_all.rank}
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    Among the Bottom performers in the
                    last 2 years
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="stockDetailsUpdateBrowser  ">
              <></>
            </div>
          )}

          {showData &&
          showData.weekly.hhpc_strat.properties.pm_all
            .percentile < 20 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingLeft: "60px",
                paddingBottom: "10px",
              }}
            >
              <div style={{ flex: "0.08" }}>
                <img
                  style={{ marginTop: "8px" }}
                  src={IconGreen}
                  alt="vector"
                />
              </div>
              <div
                style={{
                  flex: "0.92",
                  paddingBottom: "7px",
                }}
              >
                <div className="stockDetailsUpdateBrowser  ">
                  Top
                  {showData &&
                    showData.weekly.hhpc_strat.properties
                      .pm_all.percentile}
                  % Investments
                </div>
                <span className="stockDetailsUpdateSubBrowser  ">
                  Among the best investments in the                                           last 2 years
                </span>
              </div>
            </div>
          ) : showData &&
            showData.weekly.hhpc_strat.properties.pm_all
              .percentile > 20 &&
            showData &&
            showData.weekly.hhpc_strat.properties.pm_all
              .percentile < 60 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconYellow}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    {showData &&
                      showData.weekly.hhpc_strat.properties
                        .pm_all.percentile}
                    % Stocks Performed Better
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    Among the medicore investments in
                    the                                           last 2 years
                  </span>
                </div>
              </div>
            </div>
          ) : showData &&
            showData.weekly.hhpc_strat.properties.pm_all
              .percentile > 60 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "60px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px" }}
                    src={IconRed}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowser  ">
                    {showData &&
                      showData.weekly.hhpc_strat.properties
                        .pm_all.percentile}
                    % Stocks Performed Better
                  </div>
                  <span className="stockDetailsUpdateSubBrowser  ">
                    Among the bad investments in the
                    last 2 years
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="stockDetailsUpdateBrowser  ">
              <></>
            </div>
          )}
        </>
      ) : (
        <div
          style={{
            opacity: "50%",
            fontWeight: "600",
            fontSize: "16px",
            color: "white",
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          No showData Available
        </div>
      )}
</div>
<div style={{flex:"0.4"}}>
  


     

         


      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={TableWeeklyPlot && TableWeeklyPlot}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
        <CartesianGrid strokeDasharray="6 6" fill="#0000"
              
              />
          <XAxis dataKey="first_date" stroke="#ffffff"  />
          <YAxis type="number" stroke="#ffffff" domain={[0, parseInt(TableWeeklyMax) + 20]}/>
          <Tooltip />
         
          <Bar dataKey="first_close" barSize={20}  >
          {
  TableWeeklyPlot.map((ele, index) => (
    <Cell fill={ele.signal==="Buy"?" #18B13F":ele.signal==="Sell"?"#EA5E4B":ele.signal==="Wait"?"#F8D42B":""}/> //red
))}
          </Bar>
         
          <Line type="monotone" dataKey="first_close" fill="#ffffff" stroke="#ffffff" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
</div>


</div>
</div>
)}


</div>
<div style={{padding:"50px 70px"}}>
<a target="_blank" href="https://mycycles.in/how-to-use-cycle">

<div style={{ display: "flex",backgroundColor: "#14141C", flexDirection: "space-around", margin: "auto" }}>
  <div style={{ flex: "0.1" ,paddingTop:"12px"}}>
    <img style={{ marginLeft: "30px" }} src={Info} alt="Info" />
  </div>
  <div style={{ flex: "0.9",paddingTop:"12px",paddingBottom:"10px"  }}>
    <span className="watchlistHowtoUseCycle">
    Long-Term Investor -
    </span>
    <span style={{ color: "rgba(255,255,255,0.8)" }} className="watchlistHowtoUseCycle">Learn how to use the cycle app as a long term investor looking to make returns in more than 2 years</span>

  </div>
</div>

</a>



</div>
 
 
    
</>):(<></>)}

</div>

              </TabPanel>
              <TabPanel value={value} index={2}>
              <div>

{loaded && showData !== undefined ? (<>
  <div>
{showData.monthly.hhpc_strat.status === "" &&
showData.monthly.hhpc_strat.properties.pm_all.icon_flag ===
null &&
showData.monthly.hhpc_strat.properties.pm_industry
.icon_flag === null &&
showData.monthly.hhpc_strat.signal_history.buy.length ===
0 &&
showData.monthly.hhpc_strat.signal_history.sell.length ===
0 ? (
<div>
<EmptyState />
</div>
) : (
<div>
<div

style={{
  display:"flex",
  justifyContent:"space-around",
marginLeft: "10px",
marginRight: "10px",
}}
>
  <div style={{flex:"0.5"}}>
{showData.monthly.hhpc_strat.properties.pm_all
.icon_flag === null &&
showData.monthly.hhpc_strat.properties.pm_industry
.icon_flag === null ? (
<div style={{padding:"60px 0px 0px 0px",marginLeft:"60px"}} className="paraStockDetails">Key Statistics</div>
) : null}
{showData.monthly.hhpc_strat.properties.pm_all
.icon_flag !== null ||
showData.monthly.hhpc_strat.properties.pm_industry
.icon_flag !== null ? (
<>
<div style={{padding:"60px 0px 0px 0px",marginLeft:"60px"}} className="paraStockDetails">Key Statistics</div>
{showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank < 400 ? (
<div
style={{
display: "flex",
justifyContent: "space-around",
paddingLeft: "60px",
paddingBottom: "10px",
}}
>
<div
style={{
  flex: "0.08",
  paddingTop: "-4px",
}}
>
<img
  style={{ marginTop: "8px" }}
  src={IconGreen}
  alt="vector"
/>
</div>
<div
style={{
  flex: "0.92",
  paddingBottom: "7px",
}}
>
<div  className="stockDetailsUpdateBrowser  ">
  {" "}
  +
  {showData &&
    showData.monthly.hhpc_strat.properties
      .return.return_val}
  % Returns{" "}
</div>
<span className="stockDetailsUpdateSubBrowser  ">
  Has given very good returns over the
  last 5 years
</span>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank > 400 &&
showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank < 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "60px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px" }}
    src={IconYellow}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div  className="stockDetailsUpdateBrowser  ">
    {showData &&
    showData.monthly.hhpc_strat.properties
      .return.return_val < 0
      ? ""
      : "+"}
    {showData &&
      showData.monthly.hhpc_strat.properties
        .return.return_val}
    % Returns{" "}
  </div>
  <span className="stockDetailsUpdateSubBrowser  ">
    {showData &&
    showData.monthly.hhpc_strat.properties
      .return.return_val < 0
      ? "Has given negative returns over the                                           last 5 years"
      : "Has given average returns over the last                                           last 5 years"}
  </span>
</div>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank > 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "60px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px" }}
    src={IconRed}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div  className="stockDetailsUpdateBrowser  ">
    {showData &&
    showData.monthly.hhpc_strat.properties
      .return.return_val < 0
      ? ""
      : "+"}
    {showData &&
      showData.monthly.hhpc_strat.properties
        .return.return_val}
    % Returns{" "}
  </div>
  <span className="stockDetailsUpdateSubBrowser  ">
    {showData &&
    showData.monthly.hhpc_strat.properties
      .return.return_val < 0
      ? "Has given negative returns over the                                           last 5 years"
      : "Has given below average returns over the                                           last 5 years"}
  </span>
</div>
</div>
</div>
) : (
<div className="stockDetailsUpdateBrowser  ">
<></>
</div>
)}
{showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank < 400 ? (
<div
style={{
display: "flex",
justifyContent: "space-around",
paddingLeft: "60px",
paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
<img
  style={{ marginTop: "8px" }}
  src={IconGreen}
  alt="vector"
/>
</div>
<div
style={{
  flex: "0.92",
  paddingBottom: "7px",
}}
>
<div className="stockDetailsUpdateBrowser  ">
  Ranked #
  {showData &&
    showData.monthly.hhpc_strat.properties
      .pm_all.rank}
</div>
<span className="stockDetailsUpdateSubBrowser  ">
  Among the top performers in the                                           last 6 months
</span>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank > 400 &&
showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank < 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "60px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px" }}
    src={IconYellow}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowser  ">
    Ranked #
    {showData &&
      showData.monthly.hhpc_strat.properties
        .pm_all.rank}
  </div>
  <span className="stockDetailsUpdateSubBrowser  ">
    Among the medicore performers in the
    last 5 years
  </span>
</div>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank > 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "60px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px" }}
    src={IconRed}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowser  ">
    Ranked #
    {showData &&
      showData.monthly.hhpc_strat.properties
        .pm_all.rank}
  </div>
  <span className="stockDetailsUpdateSubBrowser  ">
    Among the Bottom performers in the
    last 5 years
  </span>
</div>
</div>
</div>
) : (
<div className="stockDetailsUpdateBrowser  ">
<></>
</div>
)}

{showData &&
showData.monthly.hhpc_strat.properties.pm_all
.percentile < 20 ? (
<div
style={{
display: "flex",
justifyContent: "space-around",
paddingLeft: "60px",
paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
<img
  style={{ marginTop: "8px" }}
  src={IconGreen}
  alt="vector"
/>
</div>
<div
style={{
  flex: "0.92",
  paddingBottom: "7px",
}}
>
<div className="stockDetailsUpdateBrowser  ">
  Top
  {showData &&
    showData.monthly.hhpc_strat.properties
      .pm_all.percentile}
  % Investments
</div>
<span className="stockDetailsUpdateSubBrowser  ">
  Among the best investments in the                                           last 6 months
</span>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.percentile > 20 &&
showData &&
showData.monthly.hhpc_strat.properties.pm_all
.percentile < 60 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "60px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px" }}
    src={IconYellow}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowser  ">
    {showData &&
      showData.monthly.hhpc_strat.properties
        .pm_all.percentile}
    % Stocks Performed Better
  </div>
  <span className="stockDetailsUpdateSubBrowser  ">
    Among the medicore investments in
    the                                           last 5 years
  </span>
</div>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.percentile > 60 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "60px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px" }}
    src={IconRed}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowser  ">
    {showData &&
      showData.monthly.hhpc_strat.properties
        .pm_all.percentile}
    % Stocks Performed Better
  </div>
  <span className="stockDetailsUpdateSubBrowser  ">
    Among the bad investments in the
    last 5 years
  </span>
</div>
</div>
</div>
) : (
<div className="stockDetailsUpdateBrowser  ">
<></>
</div>
)}
</>
) : (
<div
style={{
opacity: "50%",
fontWeight: "600",
fontSize: "16px",
color: "white",
marginLeft: "20px",
marginTop: "10px",
}}
>
No showData Available
</div>
)}
</div>
<div style={{flex:"0.4"}}>
<ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={TableMonthlyPlot && TableMonthlyPlot}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
        <CartesianGrid strokeDasharray="3 3" fill="#0000"
              
              />
          <XAxis dataKey="first_date" stroke="#ffffff"  />
          <YAxis type="number" stroke="#ffffff" domain={[0, parseInt(TableMonthlyMax)+20]}/>
          <Tooltip />
         
          <Bar dataKey="first_close" barSize={20}  >
          {
  TableMonthlyPlot.map((ele, index) => (
    <Cell fill={ele.signal==="Buy"?" #18B13F":ele.signal==="Sell"?"#EA5E4B":ele.signal==="Wait"?"#F8D42B":""}/> //red
))}
          </Bar>
         
          <Line type="monotone" dataKey="first_close" fill="#ffffff" stroke="#ffffff" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
</div>

</div>
</div>
)}
</div>
<div style={{padding:"50px 70px"}}>
<a target="_blank" href="https://mycycles.in/how-to-use-cycle">

<div style={{ display: "flex",backgroundColor:"#14141C", flexDirection: "space-around",margin:"auto"  }}>
  <div style={{ flex: "0.1" ,paddingTop:"12px"}}>
    <img style={{ marginLeft: "30px" }} src={Info} alt="Info" />
  </div>
  <div style={{ flex: "0.9",paddingTop:"12px",paddingBottom:"10px" }}>
    <span className="watchlistHowtoUseCycle">
    Long-Term Investor -
    </span>
    <span style={{ color: "rgba(255,255,255,0.8)" }} className="watchlistHowtoUseCycle">Learn how to use the cycle app as a long term investor looking to make returns in more than 2 years</span>

  </div>
</div>

</a>





</div>
 
    
</>):(<></>)}

</div>

              </TabPanel>


            </div> 
          


      <WhyCycle/>

      <CrsScore crs={showData &&showData.IBD}/>
      <Suggestion/>
      <Integrate />
      <Footer/>
</div>
</BrowserView>
        {/* ------------------------------------------------------------mobile View------------------------------------------------------------*/}

<MobileView>
<div  >
              <Helmet
      title={`${label} share price,${label} stock price`}
      titleTemplate={label ? `%s | Invest or Buy ${label} Industries Share or Stock Online` : null}
      meta={[
        {
          name: `robots`,
          content: `index`
        },
        {
          name: `description`,
          content: `${label} Share Price - Buy or Invest ${label} with India’s Leading Brokerage Platform with mycycles.in.Get todays Live Stock Price for ${label} with Performance, Fundamentals, Market Cap, Share holding, financial report, company profile, annual report, quarterly results, profit and loss, and mor ... `
        },
        {
          property: `og:locale`,
          content: `en_US `,
        },

        {
          property: `og:title`,
          content: `${label} share price,${label} stock price  | Invest or Buy ${label} Industries Share or Stock Online`,
        },
        {
          property: `og:description`,
          content:  `${label} Share Price - Buy or Invest ${label} with India’s Leading Brokerage Platform with mycycles.in.Get todays Live Stock Price for ${label} with Performance, Fundamentals, Market Cap, Share holding, financial report, company profile, annual report, quarterly results, profit and loss, and mor ... `,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://mycycles.in/${label}`,
        },
        {
          property: `og:site_name`,
          content: `mycycles.in`,
        },
        // {
        //   property: `og:image`,
        //   content: `website`,
        // },
        {
          itemprop: `name`,
          content:  `${label} share price,${label} stock price  | Invest or Buy ${label} Industries Share or Stock Online`,
        },
        {
          name: `description`,
          content:  `${label} Share Price - Buy or Invest ${label} with India’s Leading Brokerage Platform with mycycles.in.Get todays Live Stock Price for ${label} with Performance, Fundamentals, Market Cap, Share holding, financial report, company profile, annual report, quarterly results, profit and loss, and mor ... `,
        },
        // {
        //   itemprop: `image`,
        //   content:  `${label} share price,${label} stock price  | Invest or Buy ${label} Industries Share or Stock Online`,
        // },

        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: `summary_large_image`,
        },

        {
          name: `twitter:title`,
          content:   `${label} Share Price - Buy or Invest ${label} with India’s Leading Brokerage Platform with mycycles.in.Get todays Live Stock Price for ${label} with Performance, Fundamentals, Market Cap, Share holding, financial report, company profile, annual report, quarterly results, profit and loss, and mor ... `
        },
        {
          name: `twitter:description`,
          content:   `${label} Share Price - Buy or Invest ${label} with India’s Leading Brokerage Platform with mycycles.in.Get todays Live Stock Price for ${label} with Performance, Fundamentals, Market Cap, Share holding, financial report, company profile, annual report, quarterly results, profit and loss, and mor ... `
        },
        {
          name: `twitter:creator`,
          content: `@iam_clearmind`,
        },
        {
          name: `twitter:site`,
          content: `@iam_clearmind`,
        },

      ]}
    />

</div>
<div style={{backgroundColor:"black",height:"auto"}}>

<div style={{ backgroundColor:"#212529 !important",padding: 12, paddingBottom: 10, alignItems: "center" }}>
 

{showData ? (

                <div className="mobilessrHeading" >{showData.company_name}</div>
              ) : null}
             
{showData ? (
                <div className="mobilessrHeadingRuppes" >₹{showData.price}</div>
              ) : null}

        </div>
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
        <TabPanel value={value} index={0}>
                <div>
                  
                <a target="_blank" href="https://mycycles.in/how-to-use-cycle">

<div style={{ display: "flex",backgroundColor: "#292e35", flexDirection: "space-around", margin: "auto" }}>
  <div style={{ flex: "0.1" ,paddingTop:"12px",alignItems:"flex-end"}}>
    <img style={{ marginLeft:"50px",width:"30px",height:"30px" }} src={Info} alt="Info" />
  </div>
  <div style={{ flex: "0.9",paddingTop:"12px",paddingBottom:"10px" }}>
    <span className="watchlistHowtoUseCyclessrMobile">
    Short-Term Investor -
    </span>                       <span style={{ color: "rgba(255,255,255,0.8)" }} className="watchlistHowtoUseCyclessrMobile">Learn how to use the cycle app as a short term investor looking for 2 months to 1 year returns</span>
    {/* <div className="watchlistHowtoUseCycle" style={{ background: "#2E94F1CC" ,borderRadius:"10%",display:"inline-block",height:"auto",width:"15vw",textAlign:"center"}} > more  </div> */}
  </div>
</div>

</a>


                {loaded && showData !== undefined ? (<>
                  <div style={{background:"#212529 !important"}}>
{showData.daily.hhpc_strat.status === "" &&
showData.daily.hhpc_strat.properties.pm_all.icon_flag ===
  null &&
showData.daily.hhpc_strat.properties.pm_industry
  .icon_flag === null &&
showData.daily.hhpc_strat.signal_history.buy.length ===
  0 &&
showData.daily.hhpc_strat.signal_history.sell.length ===
  0 ? (
  <div>
    <EmptyState />
  </div>
) : (
  <div>
    <div
      
      style={{
        margin:"0px 27px"
      }}
    >
      {showData.daily.hhpc_strat.properties.pm_all
        .icon_flag === null &&
      showData.daily.hhpc_strat.properties.pm_industry
        .icon_flag === null ? (
        <div      style={{
          margin:"0px 10px !important"
        }}
   className="paraStockDetailsMobile">Key Statistics</div>
      ) : null}
      {showData.daily.hhpc_strat.properties.pm_all
        .icon_flag !== null ||
      showData.daily.hhpc_strat.properties.pm_industry
        .icon_flag !== null ? (
        < >
          <div              
 className="paraStockDetailsMobile">Key Statistics</div>
        
          {showData &&
          showData.daily.hhpc_strat.properties.pm_all
            .rank < 400 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",

                paddingLeft: "30px",
                paddingBottom: "10px",
              }}
            >
              <div
                style={{
                  flex: "0.08",
                  paddingTop: "-4px",
                }}
              >
                <img
                  style={{ marginTop: "8px",width:"30px",height:"30px" }}
                  src={IconGreen}
                  alt="vector"
                />
              </div>
              <div
                style={{
                  flex: "0.92",
                  paddingBottom: "7px",
                }}
              >
                <div className="stockDetailsUpdateBrowserMobile  ">
                  {" "}
                  +
                  {showData &&
                    showData.daily.hhpc_strat.properties
                      .return.return_val}
                  % Returns{" "}
                </div>
                <span className="stockDetailsUpdateSubBrowserMobile  ">
                  Has given very good returns over the
                  last 6 months
                </span>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank > 400 &&
            showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank < 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "30px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px",width:"30px",height:"30px" }}
                    src={IconYellow}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowserMobile  ">
                    {showData &&
                    showData.daily.hhpc_strat.properties
                      .return.return_val < 0
                      ? ""
                      : "+"}
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .return.return_val}
                    % Returns{" "}
                  </div>
                  <span className="stockDetailsUpdateSubBrowserMobile  ">
                    {showData &&
                    showData.daily.hhpc_strat.properties
                      .return.return_val < 0
                      ? "Has given negative returns over the                                           last 6 months"
                      : "Has given average returns over the last                                           last 6 months"}
                  </span>
                </div>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank > 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "30px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px",width:"30px",height:"30px" }}
                    src={IconRed}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowserMobile  ">
                    {showData &&
                    showData.daily.hhpc_strat.properties
                      .return.return_val < 0
                      ? ""
                      : "+"}
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .return.return_val}
                    % Returns{" "}
                  </div>
                  <span className="stockDetailsUpdateSubBrowserMobile  ">
                    {showData &&
                    showData.daily.hhpc_strat.properties
                      .return.return_val < 0
                      ? "Has given negative returns over the                                           last 6 months"
                      : "Has given below average returns over the                                           last 6 months"}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="stockDetailsUpdateBrowserMobile  ">
              <></>
            </div>
          )}
          {showData &&
          showData.daily.hhpc_strat.properties.pm_all
            .rank < 400 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingLeft: "30px",
                paddingBottom: "10px",
              }}
            >
              <div style={{ flex: "0.08" }}>
                <img
                  style={{ marginTop: "8px",width:"30px",height:"30px" }}
                  src={IconGreen}
                  alt="vector"
                />
              </div>
              <div
                style={{
                  flex: "0.92",
                  paddingBottom: "7px",
                }}
              >
                <div className="stockDetailsUpdateBrowserMobile  ">
                  Ranked #
                  {showData &&
                    showData.daily.hhpc_strat.properties
                      .pm_all.rank}
                </div>
                <span className="stockDetailsUpdateSubBrowserMobile  ">
                  Among the top performers in the                                           last 6 months
                </span>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank > 400 &&
            showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank < 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "30px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px",width:"30px",height:"30px" }}
                    src={IconYellow}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowserMobile  ">
                    Ranked #
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .pm_all.rank}
                  </div>
                  <span className="stockDetailsUpdateSubBrowserMobile  ">
                    Among the medicore performers in the
                    last 6 months
                  </span>
                </div>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .rank > 1700 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "30px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px",width:"30px",height:"30px" }}
                    src={IconRed}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowserMobile  ">
                    Ranked #
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .pm_all.rank}
                  </div>
                  <span className="stockDetailsUpdateSubBrowserMobile  ">
                    Among the Bottom performers in the
                    last 6 months
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="stockDetailsUpdateBrowserMobile  ">
              <></>
            </div>
          )}

          {showData &&
          showData.daily.hhpc_strat.properties.pm_all
            .percentile < 20 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingLeft: "30px",
                paddingBottom: "10px",
              }}
            >
              <div style={{ flex: "0.08" }}>
                <img
                  style={{ marginTop: "8px",width:"30px",height:"30px" }}
                  src={IconGreen}
                  alt="vector"
                />
              </div>
              <div
                style={{
                  flex: "0.92",
                  paddingBottom: "7px",
                }}
              >
                <div className="stockDetailsUpdateBrowserMobile  ">
                  Top
                  {showData &&
                    showData.daily.hhpc_strat.properties
                      .pm_all.percentile}
                  % Investments
                </div>
                <span className="stockDetailsUpdateSubBrowserMobile  ">
                  Among the best investments in the                                           last 6 months
                </span>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .percentile > 20 &&
            showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .percentile < 60 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "30px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px",width:"30px",height:"30px" }}
                    src={IconYellow}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowserMobile  ">
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .pm_all.percentile}
                    % Stocks Performed Better
                  </div>
                  <span className="stockDetailsUpdateSubBrowserMobile  ">
                    Among the medicore investments in
                    the                                           last 6 months
                  </span>
                </div>
              </div>
            </div>
          ) : showData &&
            showData.daily.hhpc_strat.properties.pm_all
              .percentile > 60 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "30px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: "0.08" }}>
                  <img
                    style={{ marginTop: "8px",width:"30px",height:"30px" }}
                    src={IconRed}
                    alt="vector"
                  />
                </div>
                <div
                  style={{
                    flex: "0.92",
                    paddingBottom: "7px",
                  }}
                >
                  <div className="stockDetailsUpdateBrowserMobile  ">
                    {showData &&
                      showData.daily.hhpc_strat.properties
                        .pm_all.percentile}
                    % Stocks Performed Better
                  </div>
                  <span className="stockDetailsUpdateSubBrowserMobile  ">
                    Among the bad investments in the
                    last 6 months
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="stockDetailsUpdateBrowserMobile  ">
              <></>
            </div>
          )}
        </>
      ) : (
        <div
          style={{
            opacity: "50%",
            fontWeight: "600",
            fontSize: "16px",
            color: "white",
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          No showData Available
        </div>
      )}




    </div>
  </div>
)}
</div>

 

                 
                    
                </>):(<></>)}
               
                <div  
                style={{
                  margin:"0px 10px !important"
                  }}            
className="paraStockDetailsMobile">Past Signal Performance</div>
                     <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={TableDailyPlot && TableDailyPlot}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
        <CartesianGrid strokeDasharray="6 6" fill="#0000"
              
              />
          <XAxis dataKey="first_date" stroke="#ffffff" fill="#ffffff" />
          <YAxis type="number" stroke="#ffffff" domain={[0, parseInt(TableDailyMax) +20 ]} fill="#ffffff" />
          <Tooltip />
         
          <Bar dataKey="first_close" barSize={20}  >
          {
  TableDailyPlot.map((ele, index) => (
    <Cell fill={ele.signal==="Buy"?" #18B13F":ele.signal==="Sell"?"#EA5E4B":ele.signal==="Wait"?"#F8D42B":""}/> //red
))}
          </Bar>
         
          <Line type="monotone" dataKey="first_close" fill="#ffffff" stroke="#ffffff" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
                

                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
<div>
  
<a target="_blank" href="https://mycycles.in/how-to-use-cycle">

<div style={{ display: "flex",backgroundColor: "#292e35", flexDirection: "space-around", margin: "auto" }}>
<div style={{ flex: "0.1" ,paddingTop:"12px",alignItems:"flex-end"}}>
<img style={{ marginLeft:"50px",width:"30px",height:"30px" }} src={Info} alt="Info" />
</div>
<div style={{ flex: "0.9",paddingTop:"12px",paddingBottom:"10px" }}>
<span className="watchlistHowtoUseCyclessrMobile">
What does Timelines Signify? -
</span>                       <span style={{ color: "rgba(255,255,255,0.8)" }} className="watchlistHowtoUseCyclessrMobile">Understand what does short - mid and long term signals actually mean and what timeframes are the operating upon</span>
{/* <div className="watchlistHowtoUseCycle" style={{ background: "#2E94F1CC" ,borderRadius:"10%",display:"inline-block",height:"auto",width:"15vw",textAlign:"center"}} > more  </div> */}
</div>
</div>

</a>


{loaded && showData !== undefined ? (<>
  <div>
{showData.weekly.hhpc_strat.status === "" &&
showData.weekly.hhpc_strat.properties.pm_all.icon_flag ===
null &&
showData.weekly.hhpc_strat.properties.pm_industry
.icon_flag === null &&
showData.weekly.hhpc_strat.signal_history.buy.length ===
0 &&
showData.weekly.hhpc_strat.signal_history.sell.length ===
0 ? (
<div>
<EmptyState />
</div>
) : (
<div>
<div

style={{
margin:"0px 27px"
}}
>
{showData.weekly.hhpc_strat.properties.pm_all
.icon_flag === null &&
showData.weekly.hhpc_strat.properties.pm_industry
.icon_flag === null ? (
<div      style={{
margin:"0px 10px !important"
}}
className="paraStockDetailsMobile">Key Statistics</div>
) : null}
{showData.weekly.hhpc_strat.properties.pm_all
.icon_flag !== null ||
showData.weekly.hhpc_strat.properties.pm_industry
.icon_flag !== null ? (
< >
<div              
className="paraStockDetailsMobile">Key Statistics</div>

{showData &&
showData.weekly.hhpc_strat.properties.pm_all
.rank < 400 ? (
<div
style={{
display: "flex",
justifyContent: "space-around",

paddingLeft: "30px",
paddingBottom: "10px",
}}
>
<div
style={{
  flex: "0.08",
  paddingTop: "-4px",
}}
>
<img
  style={{ marginTop: "8px",width:"30px",height:"30px" }}
  src={IconGreen}
  alt="vector"
/>
</div>
<div
style={{
  flex: "0.92",
  paddingBottom: "7px",
}}
>
<div className="stockDetailsUpdateBrowserMobile  ">
  {" "}
  +
  {showData &&
    showData.weekly.hhpc_strat.properties
      .return.return_val}
  % Returns{" "}
</div>
<span className="stockDetailsUpdateSubBrowserMobile  ">
  Has given very good returns over the
  last 2 years
</span>
</div>
</div>
) : showData &&
showData.weekly.hhpc_strat.properties.pm_all
.rank > 400 &&
showData &&
showData.weekly.hhpc_strat.properties.pm_all
.rank < 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconYellow}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    {showData &&
    showData.weekly.hhpc_strat.properties
      .return.return_val < 0
      ? ""
      : "+"}
    {showData &&
      showData.weekly.hhpc_strat.properties
        .return.return_val}
    % Returns{" "}
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    {showData &&
    showData.weekly.hhpc_strat.properties
      .return.return_val < 0
      ? "Has given negative returns over the                                           last 2 years"
      : "Has given average returns over the last                                           last 2 years"}
  </span>
</div>
</div>
</div>
) : showData &&
showData.weekly.hhpc_strat.properties.pm_all
.rank > 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconRed}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    {showData &&
    showData.weekly.hhpc_strat.properties
      .return.return_val < 0
      ? ""
      : "+"}
    {showData &&
      showData.weekly.hhpc_strat.properties
        .return.return_val}
    % Returns{" "}
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    {showData &&
    showData.weekly.hhpc_strat.properties
      .return.return_val < 0
      ? "Has given negative returns over the                                           last 2 years"
      : "Has given below average returns over the                                           last 2 years"}
  </span>
</div>
</div>
</div>
) : (
<div className="stockDetailsUpdateBrowserMobile  ">
<></>
</div>
)}
{showData &&
showData.weekly.hhpc_strat.properties.pm_all
.rank < 400 ? (
<div
style={{
display: "flex",
justifyContent: "space-around",
paddingLeft: "30px",
paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
<img
  style={{ marginTop: "8px",width:"30px",height:"30px" }}
  src={IconGreen}
  alt="vector"
/>
</div>
<div
style={{
  flex: "0.92",
  paddingBottom: "7px",
}}
>
<div className="stockDetailsUpdateBrowserMobile  ">
  Ranked #
  {showData &&
    showData.weekly.hhpc_strat.properties
      .pm_all.rank}
</div>
<span className="stockDetailsUpdateSubBrowserMobile  ">
  Among the top performers in the                                           last 2 years
</span>
</div>
</div>
) : showData &&
showData.weekly.hhpc_strat.properties.pm_all
.rank > 400 &&
showData &&
showData.weekly.hhpc_strat.properties.pm_all
.rank < 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconYellow}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    Ranked #
    {showData &&
      showData.weekly.hhpc_strat.properties
        .pm_all.rank}
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    Among the medicore performers in the
    last 2 years
  </span>
</div>
</div>
</div>
) : showData &&
showData.weekly.hhpc_strat.properties.pm_all
.rank > 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconRed}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    Ranked #
    {showData &&
      showData.weekly.hhpc_strat.properties
        .pm_all.rank}
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    Among the Bottom performers in the
    last 2 years
  </span>
</div>
</div>
</div>
) : (
<div className="stockDetailsUpdateBrowserMobile  ">
<></>
</div>
)}

{showData &&
showData.weekly.hhpc_strat.properties.pm_all
.percentile < 20 ? (
<div
style={{
display: "flex",
justifyContent: "space-around",
paddingLeft: "30px",
paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
<img
  style={{ marginTop: "8px",width:"30px",height:"30px" }}
  src={IconGreen}
  alt="vector"
/>
</div>
<div
style={{
  flex: "0.92",
  paddingBottom: "7px",
}}
>
<div className="stockDetailsUpdateBrowserMobile  ">
  Top
  {showData &&
    showData.weekly.hhpc_strat.properties
      .pm_all.percentile}
  % Investments
</div>
<span className="stockDetailsUpdateSubBrowserMobile  ">
  Among the best investments in the                                           last 2 years
</span>
</div>
</div>
) : showData &&
showData.weekly.hhpc_strat.properties.pm_all
.percentile > 20 &&
showData &&
showData.weekly.hhpc_strat.properties.pm_all
.percentile < 60 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconYellow}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    {showData &&
      showData.weekly.hhpc_strat.properties
        .pm_all.percentile}
    % Stocks Performed Better
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    Among the medicore investments in
    the                                           last 2 years
  </span>
</div>
</div>
</div>
) : showData &&
showData.weekly.hhpc_strat.properties.pm_all
.percentile > 60 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconRed}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    {showData &&
      showData.weekly.hhpc_strat.properties
        .pm_all.percentile}
    % Stocks Performed Better
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    Among the bad investments in the
    last 2 years
  </span>
</div>
</div>
</div>
) : (
<div className="stockDetailsUpdateBrowserMobile  ">
<></>
</div>
)}
</>
) : (
<div
style={{
opacity: "50%",
fontWeight: "600",
fontSize: "16px",
color: "white",
marginLeft: "20px",
marginTop: "10px",
}}
>
No showData Available
</div>
)}




</div>
</div>
)}
</div>



 
    
</>):(<></>)}
<div  
                style={{
                  margin:"0px 10px !important"
                  }}            
className="paraStockDetailsMobile">Past Signal Performance</div>
<ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={TableWeeklyPlot && TableWeeklyPlot}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
        <CartesianGrid strokeDasharray="6 6" fill="#0000"
              
              />
          <XAxis dataKey="first_date" stroke="#ffffff"  />
          <YAxis type="number" stroke="#ffffff" domain={[0, parseInt(TableWeeklyMax) +20 ]}/>
          <Tooltip />
         
          <Bar dataKey="first_close" barSize={20}  >
          {
  TableWeeklyPlot.map((ele, index) => (
    <Cell fill={ele.signal==="Buy"?" #18B13F":ele.signal==="Sell"?"#EA5E4B":ele.signal==="Wait"?"#F8D42B":""}/> //red
))}
          </Bar>
         
          <Line type="monotone" dataKey="first_close" fill="#ffffff" stroke="#ffffff" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
                

                


</div>
</TabPanel>
<TabPanel value={value} index={2}>
<div>
  
<a target="_blank" href="https://mycycles.in/how-to-use-cycle">

<div style={{ display: "flex",backgroundColor: "#292e35", flexDirection: "space-around", margin: "auto" }}>
<div style={{ flex: "0.1" ,paddingTop:"12px",alignItems:"flex-end"}}>
<img style={{ marginLeft:"50px",width:"30px",height:"30px" }} src={Info} alt="Info" />
</div>
<div style={{ flex: "0.9",paddingTop:"12px",paddingBottom:"10px" }}>
<span className="watchlistHowtoUseCyclessrMobile">
Long-Term Investor -
 
</span>                       <span style={{ color: "rgba(255,255,255,0.8)" }} className="watchlistHowtoUseCyclessrMobile">                      Learn how to use the cycle app as a long term investor looking to make returns in more than 2 years</span>
{/* <div className="watchlistHowtoUseCycle" style={{ background: "#2E94F1CC" ,borderRadius:"10%",display:"inline-block",height:"auto",width:"15vw",textAlign:"center"}} > more  </div> */}
</div>
</div>

</a>


{loaded && showData !== undefined ? (<>
  <div>
{showData.monthly.hhpc_strat.status === "" &&
showData.monthly.hhpc_strat.properties.pm_all.icon_flag ===
null &&
showData.monthly.hhpc_strat.properties.pm_industry
.icon_flag === null &&
showData.monthly.hhpc_strat.signal_history.buy.length ===
0 &&
showData.monthly.hhpc_strat.signal_history.sell.length ===
0 ? (
<div>
<EmptyState />
</div>
) : (
<div>
<div

style={{
margin:"0px 27px"
}}
>
{showData.monthly.hhpc_strat.properties.pm_all
.icon_flag === null &&
showData.monthly.hhpc_strat.properties.pm_industry
.icon_flag === null ? (
<div      style={{
margin:"0px 10px !important"
}}
className="paraStockDetailsMobile">Key Statistics</div>
) : null}
{showData.monthly.hhpc_strat.properties.pm_all
.icon_flag !== null ||
showData.monthly.hhpc_strat.properties.pm_industry
.icon_flag !== null ? (
< >
<div              
className="paraStockDetailsMobile">Key Statistics</div>

{showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank < 400 ? (
<div
style={{
display: "flex",
justifyContent: "space-around",

paddingLeft: "30px",
paddingBottom: "10px",
}}
>
<div
style={{
  flex: "0.08",
  paddingTop: "-4px",
}}
>
<img
  style={{ marginTop: "8px",width:"30px",height:"30px" }}
  src={IconGreen}
  alt="vector"
/>
</div>
<div
style={{
  flex: "0.92",
  paddingBottom: "7px",
}}
>
<div className="stockDetailsUpdateBrowserMobile  ">
  {" "}
  +
  {showData &&
    showData.monthly.hhpc_strat.properties
      .return.return_val}
  % Returns{" "}
</div>
<span className="stockDetailsUpdateSubBrowserMobile  ">
  Has given very good returns over the
  last 5 years
</span>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank > 400 &&
showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank < 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconYellow}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    {showData &&
    showData.monthly.hhpc_strat.properties
      .return.return_val < 0
      ? ""
      : "+"}
    {showData &&
      showData.monthly.hhpc_strat.properties
        .return.return_val}
    % Returns{" "}
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    {showData &&
    showData.monthly.hhpc_strat.properties
      .return.return_val < 0
      ? "Has given negative returns over the                                           last 5 years"
      : "Has given average returns over the last                                           last 5 years"}
  </span>
</div>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank > 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconRed}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    {showData &&
    showData.monthly.hhpc_strat.properties
      .return.return_val < 0
      ? ""
      : "+"}
    {showData &&
      showData.monthly.hhpc_strat.properties
        .return.return_val}
    % Returns{" "}
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    {showData &&
    showData.monthly.hhpc_strat.properties
      .return.return_val < 0
      ? "Has given negative returns over the                                           last 5 years"
      : "Has given below average returns over the                                           last 5 years"}
  </span>
</div>
</div>
</div>
) : (
<div className="stockDetailsUpdateBrowserMobile  ">
<></>
</div>
)}
{showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank < 400 ? (
<div
style={{
display: "flex",
justifyContent: "space-around",
paddingLeft: "30px",
paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
<img
  style={{ marginTop: "8px",width:"30px",height:"30px" }}
  src={IconGreen}
  alt="vector"
/>
</div>
<div
style={{
  flex: "0.92",
  paddingBottom: "7px",
}}
>
<div className="stockDetailsUpdateBrowserMobile  ">
  Ranked #
  {showData &&
    showData.monthly.hhpc_strat.properties
      .pm_all.rank}
</div>
<span className="stockDetailsUpdateSubBrowserMobile  ">
  Among the top performers in the                                           last 5 years
</span>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank > 400 &&
showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank < 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconYellow}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    Ranked #
    {showData &&
      showData.monthly.hhpc_strat.properties
        .pm_all.rank}
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    Among the medicore performers in the
    last 5 years
  </span>
</div>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.rank > 1700 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconRed}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    Ranked #
    {showData &&
      showData.monthly.hhpc_strat.properties
        .pm_all.rank}
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    Among the Bottom performers in the
    last 5 years
  </span>
</div>
</div>
</div>
) : (
<div className="stockDetailsUpdateBrowserMobile  ">
<></>
</div>
)}

{showData &&
showData.monthly.hhpc_strat.properties.pm_all
.percentile < 20 ? (
<div
style={{
display: "flex",
justifyContent: "space-around",
paddingLeft: "30px",
paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
<img
  style={{ marginTop: "8px",width:"30px",height:"30px" }}
  src={IconGreen}
  alt="vector"
/>
</div>
<div
style={{
  flex: "0.92",
  paddingBottom: "7px",
}}
>
<div className="stockDetailsUpdateBrowserMobile  ">
  Top
  {showData &&
    showData.monthly.hhpc_strat.properties
      .pm_all.percentile}
  % Investments
</div>
<span className="stockDetailsUpdateSubBrowserMobile  ">
  Among the best investments in the                                           last 5 years
</span>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.percentile > 20 &&
showData &&
showData.monthly.hhpc_strat.properties.pm_all
.percentile < 60 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconYellow}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    {showData &&
      showData.monthly.hhpc_strat.properties
        .pm_all.percentile}
    % Stocks Performed Better
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    Among the medicore investments in
    the                                           last 5 years
  </span>
</div>
</div>
</div>
) : showData &&
showData.monthly.hhpc_strat.properties.pm_all
.percentile > 60 ? (
<div>
<div
style={{
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "30px",
  paddingBottom: "10px",
}}
>
<div style={{ flex: "0.08" }}>
  <img
    style={{ marginTop: "8px",width:"30px",height:"30px" }}
    src={IconRed}
    alt="vector"
  />
</div>
<div
  style={{
    flex: "0.92",
    paddingBottom: "7px",
  }}
>
  <div className="stockDetailsUpdateBrowserMobile  ">
    {showData &&
      showData.monthly.hhpc_strat.properties
        .pm_all.percentile}
    % Stocks Performed Better
  </div>
  <span className="stockDetailsUpdateSubBrowserMobile  ">
    Among the bad investments in the
    last 5 years
  </span>
</div>
</div>
</div>
) : (
<div className="stockDetailsUpdateBrowserMobile  ">
<></>
</div>
)}
</>
) : (
<div
style={{
opacity: "50%",
fontWeight: "600",
fontSize: "16px",
color: "white",
marginLeft: "20px",
marginTop: "10px",
}}
>
No showData Available
</div>
)}




</div>
</div>
)}
</div>



 
    
</>):(<></>)}



<div  
                style={{
                  margin:"0px 10px !important"
                  }}            
className="paraStockDetailsMobile">Past Signal Performance</div>
                      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={TableMonthlyPlot && TableMonthlyPlot}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
        <CartesianGrid strokeDasharray="6 6" fill="#0000"
              
              />
          <XAxis dataKey="first_date" stroke="#ffffff" />
          <YAxis type="number" stroke="#ffffff" domain={[0, parseInt(TableMonthlyMax) +20 ]}/>
          <Tooltip />
         
          <Bar dataKey="first_close" barSize={20}  >
          {
  TableMonthlyPlot.map((ele, index) => (
    <Cell fill={ele.signal==="Buy"?" #18B13F":ele.signal==="Sell"?"#EA5E4B":ele.signal==="Wait"?"#F8D42B":""}/> //red
))}
          </Bar>
         
          <Line type="monotone" dataKey="first_close" fill="#ffffff" stroke="#ffffff" dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
                

                </div>
</TabPanel>




              <div style={{background:"#000000"}}>
<div style={{marginLeft:"60px",paddingTop:"40px"}} className="paraStockDetailsMobile">Why Cycle ?</div>

<div className="checkedMainMobile"> <img style={{width:"30px",height:"30px"}} src={Checked} alt="checked"/> <span className="checkedSSRMobile">Helps in decision making</span></div>
<div className="checkedMainMobile"> <img style={{width:"30px",height:"30px"}} src={Checked} alt="checked"/> <span className="checkedSSRMobile">Free and paid plans available</span></div>
<div className="checkedMainMobile"> <img style={{width:"30px",height:"30px"}}  src={Checked} alt="checked"/> <span className="checkedSSRMobile">Flexible Investment short, mid and long</span></div>
<div className="checkedMainMobile"> <img style={{width:"30px",height:"30px"}}  src={Checked} alt="checked"/> <span className="checkedSSRMobile">Risk Management</span></div>
<div className="checkedMainMobile"> <img style={{width:"30px",height:"30px"}}  src={Checked} alt="checked"/> <span className="checkedSSRMobile">Learn from experts</span></div>
<div style={{paddingBottom:"40px !important",height:"8vh"}}>
<div  className="buttonCheckedSSRMobile"><span style={{display:"inline-block",paddingTop:"26px",}}>REGISTER FOR EARLY ACCESS</span></div>
</div>


</div>

              <div style={{background:"#ffffff",paddingBottom:"50px"}}> 
<div style={{color:"#000000",paddingTop:"60px",marginLeft:"60px"}}  className="paraStockDetailsMobile">Integration with</div>

<div style={{display:"flex",justifyContent:"space-around",marginLeft:"15px",}}>
<div style={{flex:"0.2"}}><img style={{width:"90px",height:"90px",marginLeft:"34px"}}  src={Master}/><span  style={{display:"block",fontSize:"30px"}}>MasterTrust</span></div>
<div style={{flex:"0.2"}}><img style={{width:"90px",height:"90px"}}  src={Zerodha}/> <span  style={{display:"block",fontSize:"30px"}}>Zerodha</span></div>
<div style={{flex:"0.2"}}><img style={{width:"90px",height:"90px"}}  src={Upstox}/> <span  style={{display:"block",fontSize:"30px"}}>Upstox</span></div>
<div style={{flex:"0.2"}}><img style={{width:"90px",height:"90px",marginLeft:"34px"}}  src={Angel}/> <span  style={{display:"block",fontSize:"30px"}}>Angel Broking</span></div>


</div>



</div>
<div style={{paddingBottom:"50px",}}> 
<SuggestionMobile/>
<FooterMobile/>
</div>


</div>
</MobileView>
</div>

  )
}

export default {component:Post}



