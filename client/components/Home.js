import React, { Component } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import HomeBrowser from "../MainPage/HomeBrowser"
import HomeMobileSSR from "../MainPage/HomeMobile"

const Home=()=>{
 
  
    return (
      <>
      <MobileView>
    
    <HomeMobileSSR/>
      
      </MobileView>
      <BrowserView>
       <HomeBrowser/>
      </BrowserView>
     
      
      </>
      
    );
  
}

export default {
  component: Home
};