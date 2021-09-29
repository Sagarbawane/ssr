import React from 'react';
import {renderToString} from "react-dom/server";
import {renderRoutes} from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import routes from '../client/routes';
import {Provider} from 'react-redux';
import Helmet from "react-helmet"



export function template(path, store) {
  const jsx = renderToString(
    <Provider store={store}>
        <StaticRouter context={{}} location={path}>
          <div>{renderRoutes(routes)}</div>
        </StaticRouter>
    </Provider>
    
  )
  const helmet = Helmet.renderStatic()
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
    <style>
    .separatorBrowser {
      display: flex;
      align-items: center;
      text-align: left;
      background: #373A44;
      height:1px;
      font-size:13px ;
    }
    
    .separatorBrowser::before,
    .separatorBrowser::after {
      content: '';
      flex: 1;
      
    }
    
    .separatorBrowser:not(:empty)::before {
      margin-right: 1em;
    }
    
    .separatorBrowser:not(:empty)::after {
      margin-left: 40em;
      
    }
    .stockDetailsUpdateBrowser{
    padding-top:5px;
    padding-bottom: 7px;
    
    
    
    font-family: Graphik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 26px;
  
  color: #FFFFFF;
  
  
    
    
    }
    .stockDetailsUpdateSubBrowser{
      display:block;
      
    
    
    font-family: Graphik;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height */
  
  
  color: rgba(255, 255, 255, 0.8);
  
    
    
    }
  
    .mainBlockTableBuyBrowser{
      display:flex;
      border-left:2px solid  #18B13F ;
      justify-content:space-around;
      background: #373A44;
      height:6vh;
      padding-top:5px;
    
    }
    .mainBlockTableSellBrowser{
      display:flex;
        border-left:2px solid #EA5E4B;
      
      justify-content:space-around;
      background: #373A44;
      height:6vh;
      padding-top:5px;
    
    }
    .buyTableContainBrowser{
      flex:0.3;
      color:white;
      padding:10px 0px;
      text-align:center
    }
    .headingStock{
      color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 18px;
    padding: 12px 10px 12px 100px;
    }
    .headingStockOne{
      color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 18px;
    padding: 12px 100px 12px 120px;
    }
  
  .stockDetailsHeading{
    color:#E1E1E1;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
  
    margin-top: 10px;
      margin-bottom:20px;
      font-family: Open Sans, sans-serif
    
    
  }
  
    
    .paraStockDetails{
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 31px;
      margin:20px;
  
    } 
  
    .buttonBuyStock{
      
        flex: 0.3;
        align-items: center;
  
        width: 150px !important;
        height: 40px;
        
        
        background: #18B13F;
        border-radius: 4px;
        color: #ffffff;
        border: none;
        font-weight: normal;
        font-size: 20;
        margin-left: 5px;
    
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 10px;
    }
  
    .buttonSellStock{
      
  
      width: 150px !important;
      height: 40px;
      
      
      background:#EA5E4B;
      border-radius: 4px;
      color: #ffffff;
      border: none;
      font-weight: normal;
      font-size: 20;
      
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 10px;
    }
    .buttonHoldStock{
      width: 150px !important;
      height: 40px;
      
      
      background:    #F8D42B;
      border-radius: 4px;
      color: #ffffff;
      border: none;
      font-weight: normal;
      font-size: 20;
  
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 10px;
    }
    .brokerButtonStocks{
  
  
      width: 240px ;
      height: 40px;
      background:#18B13F;
      border-radius: 8;
      color: #ffffff;
      border: none;
      
      font-size: 14;
  
      text-align: center;
      margin-top: 30px;
      
      
  
    }
  
    .modelStockDetails{
      
        position: fixed;
        bottom: 30vh;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        z-index: 999999;
        width: 464px;
        height: 400px;
        background: #FFFFFF;
        border-radius: 8px;
  
        color: white;
        padding-left:20px;
        padding-right:20px; 
      
    }
    
    body {
      overflow-x: hidden;
  
    }
    
    .use-text {
      padding-left: 15px;
      padding-bottom: 10px;
    }
    .heading {
      text-decoration: none;
      color: #e1e1e1;
      width: 128px;
      /* height: 39.5px; */
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 38px;
      padding-left: 10px;
      padding-top: 10px;
    }
    /* .gridContainer {
      padding-left: "50px";
      padding-right: "50px";
    } */
    .text-top {
      color: rgb(225, 225, 225);
      /* margin-left: 35px; */
      font-weight: 800;
    }
    .how-to {
      padding: 12px;
    }
    .back-color {
      border-bottom: 0.3px solid lightgray;
    }
    .back-color:last-child {
      border-bottom: none;
    }
    /* faq */
    .accordion-button:not(.collapsed) {
      color: #fff;
      background-color: #292e35;
    }
    .accordion-button {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 1rem 1.25rem;
      font-size: 1rem;
      color: #fff;
      background-color: transparent;
      border: none;
      border-radius: 0;
      overflow-anchor: none;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
        border-radius 0.15s ease;
    }
    .accordion-button:focus {
      z-index: 3;
      border-color: #292e35;
      outline: 0;
      box-shadow: 0 0 0 0.25rem #292e35;
    }
    hr:not([size]) {
      height: 10px;
    }
    /* faq */
    .check-one-search:hover:before {
      background-color: red;
    }
    .accordion-button::after {
      flex-shrink: 0;
      width: 1.25rem;
      height: 1.25rem;
      margin-left: auto;
      content: "";
      /* background-image: url("../Resources/arrow-down.svg"); */
      background-size: 1rem;
      transition: transform 0.2s ease-in-out;
      margin-right: -10px;
    }
    .input-check:before {
      z-index: 2;
      height: 20px;
      width: 20px;
      margin: auto;
      vertical-align: -webkit-baseline-middle;
      /* border-right: 2px solid transparent; */
      /* border-bottom: 2px solid transparent; */
    }
    
    .input-check:before,
    .input-check:after {
      content: "";
      height: 20px;
      width: 20px;
      margin: auto;
      vertical-align: -webkit-baseline-middle;
    }
    
    .input-check:after {
      height: 20px;
      width: 20px;
      margin: auto;
      vertical-align: -webkit-baseline-middle;
      border-right: 2px solid var(--text-color);
      border-bottom: 2px solid var(--text-color);
    }
    
    .input-check:before,
    .input-check:after {
      content: "";
      height: 20px;
      width: 20px;
      margin: auto;
      vertical-align: -webkit-baseline-middle;
      position: absolute;
      pointer-events: none;
    }
    .check-one {
      font-weight: 1000;
      padding: 8px !important;
      margin-bottom: 10px !important;
    }
    .well {
      background: #eeefff;
      padding: 15px;
    }
    .feature-list-bottom {
      border-bottom: 0.3px solid #888888;
    }
    .feature-text-para-first {
      font-size: 20px;
      margin-bottom: 3px;
    }
    .feature-text-para-two {
      font-size: 13px;
      color: lightgray;
      padding-right: 9px;
    }
    .feature-text-para-two-two {
      font-size: 15px;
      color: lightgray;
      margin: auto;
      margin-top: -15px;
      /* margin-left: 1px; */
      font-weight: 900;
    }
    .align-center {
      align-items: center;
    }
    .buy-btn {
      color: #1bf000;
      font-size: 14px;
    }
    
    .sell-btn {
      color: #ea5e4b;
      font-size: 14px;
    }
    .upgrade-btn{
      color: #1bf000;
      font-size: 12px;
      padding:8px 14px;
    
      margin-left: 10px;
    }
    .buy-btn-use {
      color: #1bf000;
      padding: 15px;
    }
    
    .sell-btn-use {
      color: #bf0000;
      padding: 15px;
    }
    
    .hold-btn {
      color: #ffcc00;
      font-size: 14px;
    }
    .hold-btn-dash {
      color: #fff;
      font-size: 17px;
    }
    
    .table-item-name {
      min-width: 5em;
      max-width: 5em;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    
    .table-item-data {
      justify-content: center;
      max-width: 6em;
      min-width: 6em;
    }
    
    .table-item-delete {
      max-width: 2em;
      padding-right: 1em !important;
      padding-left: 0 !important;
    }
    
    .no-padding {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    
    .tab {
      background: transparent;
      padding: 5px 15px;
      color: #1122ff;
      border: none;
      cursor: pointer;
    }
    
    .tab-content {
      padding: 15px 5px;
    }
    
    .tab.active {
      background: #fff;
      color: #000;
      border: 1px solid #ddd;
    }
    
    .nav-tabs {
      margin-top: 10px;
    }
    
    .add-tab-button {
      background: none;
      border: none;
    }
    
    .edit-mode-button {
      background: #1122ff;
      color: #fff;
    }
    
    #price-container {
      max-width: 4rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    #stop-loss-container {
      max-width: 5rem;
      /* border: solid 2px white; */
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .small-info-container {
      /* text-align: center; */
      display: flex;
      margin-top: 30px;
    }
    
    .spacing-horizontal {
      /* margin-left:0.5em;
      margin-right: 0.5em; */
      width: 5rem;
      height: 1rem;
      display: inline-block;
    }
    
    .spacing-first {
      margin-left: 0;
    }
    
    .save-button {
      background: green;
      color: #fff;
    }
    
    .edit-tab-name {
      background: #1122ff;
      color: #fff;
    }
    .profile-style {
      margin-left: 20px;
      margin-right: 20px;
    }
    .card-profile {
      background-color: #fff;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 4px 0 rgba(0, 0, 0, 0.19);
      border-radius: 12px;
    }
    .profile-first-style {
      float: left;
      margin: 40px 5px 5px 20px;
    }
    .profilePicture {
      position: relative;
      margin-left: 50%;
    }
    
    .profilePictureWrapper {
      margin: 0px auto 0px;
      width: 28%;
      text-align: center;
      padding: 13px;
      min-height: 150px;
      max-height: 170px;
      position: relative;
    }
    .profilePictureWrapper img {
      width: 100%;
      border-radius: 12px;
    }
    .profilePicBtn {
      position: absolute;
      right: -6px;
      bottom: -7px;
    }
    .profilePicBtn button {
      border: none;
      background: none;
      color: #ad4341;
    }
    .edit-style-img {
      display: none;
    }
    .profile-edit-btn {
      border: none;
      background: transparent;
      color: #e1e1e1;
    }
    .icon-only-btn {
      border-radius: 50%;
      border: 2px solid;
      align-items: center;
    }
    .university-like {
      font-size: 18px;
      position: absolute;
      right: 20px;
      margin-top: -10px;
      color: #6c757d;
    }
    /* Header Start */
    .header-text {
      color: white;
    }
    .header-text-head {
      color: white;
    }
    .header-dark {
      background-color: #292e35;
      border-top: 1px solid #fff5;
    }
    .unformat {
      text-decoration: none;
      color: inherit;
    }
    /* Header Finish */
    ._28vIk._2nMGC,
    ._3KQfR._9VJ2s,
    ._qCt7a._1e8rA,
    ._2TuLn._1Vkyx,
    ._2So3v._BClU8 {
      background-color: #292e35;
    }
    ._1gluf {
      background: #292e35;
    }
    ._2VbRb {
      padding: var(--padding-top) var(--padding-right) var(--padding-bottom)
        var(--padding-left);
      padding-top: 12px;
      padding-left: 20px;
    }
    ._2VbRb._fyVEY {
      /* --text-color: var(--error); */
      color: #bf0000;
    }
    ._2VbRb._3FTCi {
      /* --text-color: var(--success); */
      color: #1bf000;
    }
    ._1g9-Z,
    ._2Tfgb {
      padding: 10px;
    }
    .one {
      margin: 20px;
    }
    a:hover {
      text-decoration: none !important;
    }
    button:focus {
      outline-style: none !important;
    }
    .university-img {
      border-radius: 12px;
      width: 400px;
      height: 200px;
    }
    .university-para {
      text-align: justify;
      margin: 0;
    }
    .university-another {
      text-align: justify;
      margin-bottom: -7px;
    }
    
    .card-main {
      background-color: #292e35;
      box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 20%), 0 0px 0px 0 rgb(0 0 0 / 19%);
      border-radius: 10px;
      width: 99.5%;
      padding: 10px;
      border: none;
      margin-top: 5px;
      margin-bottom: 5px;
      color: #ffffff;
    }
    input:focus {
      outline-style: none;
    }
    .main-input-style {
      border: none;
      width: 92%;
      margin-left: 40px;
      margin-top: -2px;
      background-color: #292e35;
      color: #ffffff;
    }
    .main-search-count {
      position: absolute;
      right: 24px;
      margin-top: -22px;
    }
    .main-search-count-browser {
      position: absolute;
      left: 70%;
      margin-top: -22px;
    }
    .style-arrow {
      position: absolute;
      padding: 3px;
      color: #ffffff;
    }
    .first-icon {
      font-size: 17px;
      color: grey;
      margin-left: -5px;
    }
    .first-icon-one {
      font-size: 20px;
      color: #d3d3ce;
      margin-top: 10px;
    }
    
    /* login form style */
    .login-btn {
      padding: 10px 20px 10px 20px;
      margin-top: -8px;
      margin-left: 12px;
      border-radius: 4px;
    }
    .login-input {
      padding: 10px;
      width: 100%;
    }
    .card-main-search {
      -webkit-box-shadow: 3px 3px 5px 6px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
      -moz-box-shadow: 3px 3px 5px 6px #ccc; /* Firefox 3.5 - 3.6 */
      box-shadow: -2px -2px 5px 4px #ccc;
      border-radius: 10px;
      width: 100%;
      padding: 10px;
      border: none;
      margin-top: 20px;
      display: flex;
    }
    .main-search-div {
      width: 100%;
      text-align: initial;
      font-size: 14px;
      margin: 10px;
      font-weight: 800;
    }
    .main-search-div2 {
      text-align: end;
      width: 25%;
    }
    .main-search-div3 {
      width: 75%;
      text-align: initial;
      font-size: 14px;
      margin-left: 10px;
      font-weight: 800;
    }
    .reversalName-search {
      
      text-align: initial;
      
    }
    .reversalPrice-search{
      
      text-align: initial;
     
    }
    .reversalStopLoss-search{
    
      text-align: initial;
      
    }
    .main-img-style {
      margin-top: 50px;
    }
    .img1-fluid {
      width: 100%;
      height: auto;
    }
    .img2-fluid {
      width: 100%;
      height: auto;
    }
    .check-all {
      margin: 10px;
      width: 20px;
      height: 20px;
    }
    /* not-found page css start*/
    .cspio-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 600px;
      border-radius: 2px;
      -moz-background-clip: padding;
      -webkit-background-clip: padding-box;
      background-clip: padding-box;
      background-color: transparent;
    }
    #cspio-headline {
      font-family: "Pacifico";
      font-weight: 400;
      font-size: 48px;
      color: #ffffff;
      line-height: 50px;
      text-align: center;
    }
    .cspio-head1 {
      font-size: 80px;
    }
    #cspio-description {
      text-align: center;
    }
    .notfoundi,
    .notfoundi p {
      font-family: Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.5em;
      color: #ffffff;
    }
    #cspio-socialprofiles {
      text-align: center;
      margin-top: 10px;
      color: #fff;
    }
    #cspio-socialprofiles .btn {
      border: solid 1px #ad4143;
      color: #fff;
      background: none;
      font-size: 16px;
      padding: 2% 3%;
      margin: 0 0 0px 0;
    }
    #cspio-socialprofiles .btn:hover {
      border: solid 1px #ad4143;
      color: black;
      background: #ad4143;
      -webkit-transition: 0.5s;
      transition: 0.5s;
    }
    #cspio-socialprofiles Link {
      color: #ffffff;
      text-decoration: none;
    }
    /* not-found page css end*/
    /* ui experiment start*/
    .watchlist-div-browser {
      padding: 8px 60px !important;
      max-width: 8rem;
      min-width: 8rem;
    }
    .watch-div-browser {
      padding: 8px 16px !important;
    }
    .watch-div2-browser {
      padding: 8px 16px !important;
    }
    
    .watch-div {
      padding: 8px 16px !important;
    }
    .watch-div2 {
      padding: 8px 16px !important;
    }
    .script-name-com {
      padding: 8px 16px !important;
      font-size: 1em;
      text-transform: capitalize;
    }
    .data-script {
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 20px;
    }
    .data-script-one {
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 10px;
    }
    .data-script-one-recom {
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 16px;
    }
    .script-name {
      max-width: 8em;
      min-width: 8em;
    }
    .script-name-para {
      padding: 8px 16px !important;
      font-size: 15px;
      position: absolute;
      
    }
    .script-name-para1 {
      padding: 8px 16px !important;
      font-size: 15px;
    }
    
    .watchlist-div1 {
      padding: 8px 26px !important;
      max-width: 8rem;
      min-width: 8rem;
    }
    .watch-div1 {
      padding: 8px 25px !important;
    }
    .watch-div21 {
      padding: 8px 25px !important;
    }
    .qr-heading {
      font-family: Montesserat;
      font-weight: 900;
      padding: 10px;
      font-size: 36px;
      letter-spacing: -0.5px;
      line-height: 39px;
      white-space: pre-line;
    }
    .qr-ui {
      font-family: Montesserat;
      font-size: 20px;
      padding-left: 20px;
    }
    .qr-li {
      font-family: Montesserat;
      font-size: 18px;
      list-style-type: disc;
      font-family: gilroy-regular;
    
      color: rgb(36, 38, 40);
      letter-spacing: 0.5px;
      line-height: 24.6px;
    }
    .login-check1 {
      display: flex;
      flex-direction: row;
      padding-top: 5%;
      align-items: flex-start;
    }
    .login-check2 {
      display: flex;
      flex-direction: row;
    
      align-items: flex-start;
    }
    .browser-header {
      padding: 10px;
      margin-top: 20px;
    }
    .browser-header-profile {
      position: absolute;
      right: 20px;
    }
    .buy-btn-browser {
      color: #1bf000;
      font-size: 14px;
    }
    
    .sell-btn-browser { 
      color:#bf0000;
      font-size: 14px;
    }
    .buy-btn-use {
      color: #1bf000;
      padding: 15px;
    }
    
    .sell-btn-use {
      color: #ea5e4b;
      padding: 15px;
    }
    
    .hold-btn-browser {
      color: #ffcc00;
      font-size: 12px;
    }
    .hold-btn-dash-browser {
      color: #fff;
      font-size: 17px;
    }
    .data-script-one-browser {
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 10px;
    }
    .data-script1-browser {
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 43px;
    }
    .download-btn {
      text-transform: capitalize;
      padding:20px 10px;
      
      /* margin-left: 80px; */
    }
    .social-footer {
      padding: 1rem;
      background: #8a8a8a;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      flex-direction: row;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
    
    .social-footer .social-footer-icons li:last-of-type {
      margin-right: 0;
    }
    .social-footer .social-footer-icons .fa:hover {
      color: #4a4a4a;
      transition: color 0.3s ease-in;
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    .social-footer .social-footer-icons .fa {
      font-size: 1.3rem;
      color: #fefefe;
    }
    
    /* ui experimet ui end */
    /* responsive  */
    
    @media only screen and (max-width:1800 px) {
     
      .recommendationModel {
    
        position: "fixed";
        bottom: "35vh";
        left: 0;
        right: 0;
        margin-left: "auto";
        margin-right: "65vh";
        z-index: "999999";
        background: "#292e35";
        width: "300px";
        height: "270px";
    
    
        border-radius: "8px";
    
        color: "white";
        padding-left: "20px";
        padding-right: "20px";
        text-align: "center";
        
    
      }
    }
    
    @media only screen and (max-width: 1000px) {
      .data-script1-browser {
        text-align: center;
        margin-top: 2px;
        max-width: 5em;
        min-width: 5em;
        margin-left: 25px;
      }
    }
    @media only screen and (max-width: 1100px) {
      .watch-div1 {
        padding: 8px 13px !important;
      }
      .watch-div21 {
        padding: 8px 5px !important;
      }
    
      .data-script-one-browser {
        margin-left: 0px;
        max-width: 3em;
        min-width: 4em;
      }
      .data-script1-browser {
        text-align: center;
        margin-top: 2px;
        max-width: 5em;
        min-width: 5em;
        margin-left: 25px;
      }
    }
    @media only screen and (max-width: 967px) {
      .watch-div1 {
        padding: 8px 13px !important;
      }
      .watch-div21 {
        padding: 8px 5px !important;
      }
    
      .data-script-one-browser {
        margin-left: 0px;
        max-width: 3em;
        min-width: 4em;
      }
      .data-script1-browser {
        text-align: center;
        margin-top: 2px;
        max-width: 2em;
        min-width: 3em;
        margin-left: 10px;
      }
    }
    @media only screen and (max-width: 900px) {
      .watch-div1 {
        padding: 8px 13px !important;
      }
      .watch-div21 {
        padding: 8px 13px !important;
      }
    
      .data-script-one-browser {
        margin-left: 0px;
        max-width: 3em;
        min-width: 4em;
      }
      .data-script1-browser {
        text-align: center;
        margin-top: 2px;
        max-width: 2em;
        min-width: 3em;
        margin-left: 10px;
      }
    }
    
    @media only screen and (max-width: 790px) {
      .browser-header-search {
        margin-left: 20px;
      }
      .watchlist-div1 {
        padding: 8px 26px !important;
        max-width: 8rem;
        min-width: 8rem;
      }
      .watch-div1 {
        padding: 8px 25px !important;
      }
      .watch-div21 {
        padding: 8px 25px !important;
      }
      .data-script-one-browser {
        margin-left: 18px;
        max-width: 5em;
        min-width: 5em;
      }
      .data-script1-browser {
        text-align: center;
        margin-top: 2px;
        max-width: 5em;
        min-width: 5em;
        margin-left: 36px;
      }
    }
    @media only screen and (max-width: 768px) {
      .watch-div1 {
        padding: 8px 13px !important;
      }
      .watch-div21 {
        padding: 8px 5px !important;
      }
    
      .data-script-one-browser {
        margin-left: 0px;
        max-width: 3em;
        min-width: 4em;
      }
      .data-script1-browser {
        text-align: center;
        margin-top: 2px;
        max-width: 2em;
        min-width: 3em;
        margin-left: 10px;
      }
    }
    @media only screen and (max-width: 600px) {
      .premium {
        margin-top: 100px;
      }
      .currentCountry {
        margin-left: 38px;
      }
      .countryHeader {
        width: "100px";
      }
      .headerSpace {
        margin-left: 30px;
      }
      .crossSpace {
        right: 20px;
      }
      .browser-header-profile {
        bottom: 0px;
        top: -3px;
      }
      .browser-header-search {
        margin-left: 10px;
      }
      .watch-div1 {
        padding: 8px 18px !important;
      }
      .watch-div21 {
        padding: 8px 18px !important;
      }
      .data-script-one-browser {
        margin-left: 10px;
        max-width: 5em;
        min-width: 5em;
      }
    
      .data-script1-browser {
        max-width: 5em;
        min-width: 5em;
        margin-left: 27px;
      }
      .download-btn {
        /* text-transform: capitalize;
        padding: 30px; */
        margin-left: 80px;
      }
    }
    @media only screen and (max-width: 480px) {
      .profilePictureWrapper {
        width: 75%;
      }
      .university-img {
        width: 150px;
        height: 120px;
      }
      /* i.fas.fa-times.first-icon {
        display: none;
      } */
      .profile-name {
        font-size: 22px;
      }
      .img2-fluid {
        width: 187%;
        height: 340px;
        margin-left: -95px;
      }
      .watch-div1 {
        padding: 8px 9px !important;
      }
      .data-script1-browser {
        text-align: center;
        margin-top: 2px;
    
        margin-left: 22px;
      }
    }
    @media only screen and (max-width: 420px) {
      .premium {
        margin-top: 80px;
      }
      .currentCountry {
        margin-left: 42px;
      }
      .countryHeader {
        width: "100px";
      }
      .headerSpace {
        margin-left: 70px;
      }
      .crossSpace {
        right: 30px;
      }
      .university-details {
        margin-left: 15px;
      }
      .watchlist-div {
        max-width: 7rem;
        min-width: 7rem;
      }
      .watch-div2 {
        padding: 0px !important;
        margin-left: 10px;
      }
      .university-like {
        font-size: 18px;
        right: 10px;
      }
    
      .profile-name {
        font-size: 18px;
      }
      .img2-fluid {
        margin-left: -85px;
        width: 220%;
      }
      .data-script {
        margin-left: 15px;
      }
    
      .script-name {
        max-width: 7em;
        min-width: 7em;
      }
      .data-script1-browser {
        text-align: center;
        margin-top: 2px;
    
        margin-left: 22px;
      }
    }
    
    @media only screen and (max-width: 375px) {
      .premium {
        margin-top: 80px;
      }
      .currentCountry {
        margin-left: 38px;
      }
      .countryHeader {
        width: "100px";
      }
      .headerSpace {
        margin-left: 50px;
      }
      .crossSpace {
        right: 30px;
      }
      .buy-btn-use {
        padding: 10px;
      }
      .watchlist-div {
        max-width: 6rem;
        min-width: 6rem;
      }
      .watch-div {
        padding: 0px !important;
        margin-left: 18px;
      }
      .watch-div2 {
        margin-left: 18px;
      }
      .sell-btn-use {
        padding: 10px;
      }
      .profile-first-style {
        margin: 30px 5px 5px 20px;
      }
      .profile-name {
        font-size: 18px;
      }
      .img2-fluid {
        margin-left: -113px;
        width: 315%;
      }
      .profilePicBtn {
        bottom: 15px;
      }
      .university-head-change {
        font-size: 20px;
      }
      .university-para {
        font-size: 13px;
      }
      .university-like {
        font-size: 15px;
        right: 3px;
      }
      .login-btn {
        padding: 10px 10px 10px 10px;
        margin-left: 9px;
      }
      .main-input-style {
        width: 92%;
        margin-left: 35px;
      }
      .script-name {
        max-width: 6.4em;
        min-width: 6.4em;
      }
      .script-name-recom {
        max-width: 6.4em;
        min-width: 7.4em;
      }
      .data-script {
        max-width: 4.5em;
        min-width: 4.5em;
      }
      .data-script-one {
        max-width: 4.5em;
        min-width: 4.5em;
      }
      .data-script-one-browser {
        text-align: center;
        margin-top: 2px;
    
        margin-left: 10px;
      }
    }
    
    @media only screen and (max-width: 360px) {
      .premium {
        margin-top: 80px;
      }
      .currentCountry {
        margin-left: 35px;
      }
      .countryHeader {
        width: "100px";
      }
      .headerSpace {
        margin-left: 35px;
      }
      .crossSpace {
        right: 30px;
      }
      .watch-div {
        margin-left: 13px;
      }
      .watch-div2 {
        margin-left: 13px;
      }
      .data-script {
        max-width: 4em;
        min-width: 4em;
        margin-left: 15px;
      }
      .data-script-one {
        max-width: 4em;
        min-width: 4em;
        margin-left: -13px;
      }
    }
    @media only screen and (max-width: 320px) {
      .cross{
        position: fixed;
        top:"100px";
        right:"30px"
      }
      .premium {
        margin-top: 50px;
      }
      .currentCountry {
        margin-left: 30px;
      }
      .countryHeader {
        width: "100px";
      }
      .headerSpace {
        margin-left: 35px;
      }
      .crossSpace {
        right: 10px;
      }
      .watchlist-div {
        max-width: 4rem;
        min-width: 4rem;
      }
      .watch-div {
        margin-left: 10px;
      }
      .watch-div2 {
        margin-left: 10px;
      }
      .one {
        margin: 10px;
      }
      .profilePicture {
        margin-left: 51%;
      }
      .profilePictureWrapper img {
        margin-top: 15px;
      }
      .university-img {
        width: 120px;
        height: 105px;
      }
      .university-like {
        font-size: 13px;
        right: 7px;
      }
      .university-details {
        margin-left: 10px;
      }
      .university-para {
        font-size: 12px;
      }
      .university-head-change {
        font-size: 18px;
      }
      .login-btn {
        padding: 4px 6px 4px 6px;
      }
      .login-input {
        /* padding: 4px; */
        justify-content: center;
      }
      .profile-first-style {
        margin: 45px 5px 5px 20px;
      }
      .how-to {
        padding: 9px;
      }
      .profile-name {
        font-size: 16px;
      }
      .img2-fluid {
        margin-left: -88px;
        width: 400%;
        height: 268px;
      }
      .data-script {
        max-width: 3.8em;
        min-width: 3.8em;
        margin-left: 15px;
      }
    
      .data-script1-browser {
        max-width: 3.8em;
        min-width: 3.8em;
        margin-left: 6px;
      }
    }
    /* table stock */
    .fl-table td,
    .fl-table th {
      text-align: left;
      padding: 8px;
    }
    
    .fl-table td {
      /* border-right: 1px solid #f8f8f8; */
      font-size: 12px;
      text-align: left;
    }
    
    .fl-table thead th {
      color: #19191b;
      background: #19191b;
    }
    
    .fl-table thead th:nth-child(odd) {
      color: #19191b;
      background: #19191b;
    }
    
    .fl-table tr:nth-child(even) {
      background: #19191b;
    }
    
    .card-div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
    .main-search-checkbox {
      height: 20px;
      width: 17px;
      margin-top: 12px;
      color: grey;
    }
    
    .login-check {
      display: flex;
      flex-direction: row;
      padding-top: 10%;
      align-items: flex-start;
    }
    .back-arrow {
      display: flex;
      align-items: center;
      padding-left: 11px;
    }
    .back-arrow1 {
      display: flex;
      align-items: center;
    }
    #dropdown1 {
      background-color: #292e35;
      /* border-color: #292e35; */
    }
    div.dropdown-menu.show {
      background-color: red;
    }
    #dropdown1:hover {
      background-color: #292e35;
      border-color: #292e35;
    }
    #dropdown2 {
      background-color: #292e35;
      border-left: #292e35;
      border-right: #292e35;
      border-bottom: #292e35;
      border-top: #292e35;
    }
    #dropdown:focus {
      background-color: #292e35;
      border-color: #292e35 !important;
    }
    .drop-card {
      border: 5px solid #292e35;
    }
    .data-script1 {
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 43px;
    }
    
    /*RECOMENDATION*/
    
    .recommendationModel {
      /* -webkit-background: rgba(255, 255, 255, 0.1);
      -o-background: rgba(255, 255, 255, 0.1);
      -moz-background: rgba(255, 255, 255, 0.1);
      box-shadow: inset 20.2667px -20.2667px 20.2667px rgba(194, 194, 194, 0.1),
        inset -20.2667px 20.2667px 20.2667px rgba(255, 255, 255, 0.1);
      -webkit-box-shadow: inset 20.2667px -20.2667px 20.2667px rgba(194, 194, 194, 0.1),
        inset -20.2667px 20.2667px 20.2667px rgba(255, 255, 255, 0.1);
      -o-box-shadow: inset 20.2667px -20.2667px 20.2667px rgba(194, 194, 194, 0.1),
        inset -20.2667px 20.2667px 20.2667px rgba(255, 255, 255, 0.1);
      -moz-box-shadow: inset 20.2667px -20.2667px 20.2667px rgba(194, 194, 194, 0.1),
        inset -20.2667px 20.2667px 20.2667px rgba(255, 255, 255, 0.1);
      -webkit-backdrop-filter: blur(53.504px);
      backdrop-filter: blur(53.504px);
      -o-backdrop-filter: blur(53.504px);
      -moz-backdrop-filter: blur(53.504px); */
      /* Note: backdrop-filter has minimal browser support */
      
    
        position: "fixed";
        bottom: "35vh";
        left: 0;
        right: 0;
        margin-left: "auto";
        margin-right: "65vh";
        z-index: "999999";
        background: "#292e35";
        width: "300px";
        height: "270px";
    
    
        border-radius: "8px";
    
        color: "white";
        padding-left: "20px";
        padding-right: "20px";
        text-align: "center";
        
    
      
    
    }
    .reversel {
      overflow-y: scroll;
    }
    /* .onHeader{
    
      color: #fff;
      font-weight: bold;
    } */
    
    .navbar .onHeader {
      color: #fff;
      font-weight: bold;
    }
    
    .navbar a:active,
    .navbar a:hover,
    .navbar a:focus {
      text-decoration: none;
      outline: none;
      color:"grey !important"
    }
    a{
      color:"white"
    }
    .newStyle{
      color:white
    }
    .newStyle::selection{
      color:"white";
      border-bottom: 2px solid #98c9a4,
    }
    .suggestionText{
     
      color:white;
      opacity:97%;
    
    }
    
    .renewalText{
      flex: 0.4;
       font-weight: 500;
      font-size: 26px;
      line-height: 29px;
      text-align: left;
    margin-top:"10px";
    margin-Bottom:"10px";
      color: #FFFFFF
    
    }
    .renewalSubText{
      margin-top:"10px  !important";
    margin-Bottom:"10px   !important";
      flex: 0.4;
       font-weight: 500;
      font-size: 26px;
      line-height: 29px;
      text-align: right;
    
    
      color: rgba(255,255,255,0.8)
    }
    .renewalTextMobileView{
      flex: 0.4;
       font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      text-align: left;
    margin-top:"10px";
    margin-Bottom:"10px";
      color: #FFFFFF
    
    }
    .renewalSubTextMobileView{
      margin-top:"10px  !important";
    margin-Bottom:"10px   !important";
      flex: 0.4;
       font-weight: normal;
      font-size: 14px;
      line-height: 15px;
      text-align: right;
    
    
      color: rgba(255,255,255,0.8)
    }
    .center-separator {
      display: flex;
    line-height: 1em;
    color: gray;
    }
    
    .center-separator::before, .center-separator::after {
      content: '';
      display: inline-block;
      flex-grow: 1;
      margin-top: 0.5em;
      background: gray;
      height: 1px;
      margin-right: 10px;
      margin-left: 10px;
    }
    
    .center-separatorMobile {
      display: flex;
    line-height: 0.5em;
    color: gray;
    }
    
    .center-separatorMobile::before, .center-separatorMobile::after {
      content: '';
      display: inline-block;
      flex-grow: 1;
      margin-top: 0.5em;
      background: gray;
      height: 1px;
      margin-right: 10px;
      margin-left: 10px;    
    }
.watchlistHowtoUseCycle{
    
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    /* or 112% */
    
    
    color: #FFFFFF;
    
    
    }
    
    .stockDetailsUpdate{
      font-family: Graphik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 10px;
    padding-top:5px;
    padding-bottom: 7px;
    
    
    color: #FFFFFF;
    
    
    
    }
    .stockDetailsUpdateSub{
      display:block;
      font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    margin-top:10px;
    padding : 0;
    margin : 0;
    line-height :20px ;
    
    
    
    /* identical to box height */
    
    
    color: rgba(255, 255, 255, 0.8);
    
    
    
    
    }
    .cmsRating{
      font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    /* identical to box height */
    
    
    color: rgba(255, 255, 255, 0.8);
    
    }
    
    
    .separator {
      display: flex;
      align-items: center;
      text-align: left;
      background: black;
      height:1px;
      font-size:13px ;
    }
    
    .separator::before,
    .separator::after {
      content: '';
      flex: 1;
      
    }
    
    .separator:not(:empty)::before {
      margin-right: 1em;
    }
    
    .separator:not(:empty)::after {
      margin-left: 22em;
      
    }
    .mainBlockTableBuy{
      display:flex;
      border-left:2px solid  #18B13F ;
      justify-content:space-around;
      background: #373A44;
      height:6vh;
      padding-top:5px;
    
    }
    .mainBlockTableSell{
      display:flex;
        border-left:2px solid #EA5E4B;
      
      justify-content:space-around;
      background: #373A44;
      height:6vh;
      padding-top:5px;
    
    }
    .buyTableContain{
      flex:0.3;
      color:white;
      padding:7px 0px;
      text-align:center
    }
    .watchlistName{
      text-transform: capitalize;
      color: white;
      font-weight: 500;
       font-size: 0.9em;
       line-height: 20px;
    
    }
    .cmsRatingMobile{
    font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9em;
    line-height: 15px;
    /* identical to box height */
    
    
    color: rgba(255, 255, 255, 0.8);
    
    }
    .crossMobile{
      font-Size:0.9em;
    }
    .countryMobile{
      margin-left:0px;                               background-color: rgba(255, 255, 255, 0.14);
                                      padding: 4px 6px;
                                      border-radius: 4px;
                                      font-size:0.8em;
    }
    
    @media only screen and (max-width: 362px) {
      .mainBlockTableBuy{
        height:8vh;
        padding-top:6px;
      
      }
      .mainBlockTableSell{
    
        height:8vh;
        padding-top:6px;
      
      }
      .separator:not(:empty)::after {
        margin-left: 18em;
        
      }
      .buyTableContain{
        flex:0.3;
        color:white;
        padding:7px 0px;  
        text-align:center;
        font-size: 15px;
      }
    } 
    
    @media only screen and (max-width: 376px) {
      .mainBlockTableBuy{
        height:8vh;
        padding-top:6px;
      
      }
      .mainBlockTableSell{
    
        height:8vh;
        padding-top:6px;
      
      }
      .separator:not(:empty)::after {
        margin-left: 18em;
        
      }
      .buyTableContain{
        flex:0.3;
        color:white;
        padding:7px 0px;  
        text-align:center;
        font-size: 15px;
      }
      .watchlistName{
        text-transform: capitalize;
        color: white;
        font-weight: 500;
         font-size: 0.8em;
         line-height: 20px;
    
    }
    .cmsRatingMobile{
      font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8em;
    line-height: 15px;
    /* identical to box height */
    
    
    color: rgba(255, 255, 255, 0.8);
    
    }
    .crossMobile{
      font-size:0.8em
    }
    .countryMobile{
      margin-left:3px;                               background-color: rgba(255, 255, 255, 0.14);
                                      padding: 4px 6px;
                                      border-radius: 4px;
                                      font-size:0.8em;
    }
    
    
    } 
    
  
    .separatorBrowser {
      display: flex;
      align-items: center;
      text-align: left;
      background: #373A44;
      height:1px;
      font-size:13px ;
    }
    
    .separatorBrowser::before,
    .separatorBrowser::after {
      content: '';
      flex: 1;
      
    }
    
    .separatorBrowser:not(:empty)::before {
      margin-right: 1em;
    }
    
    .separatorBrowser:not(:empty)::after {
      margin-left: 40em;
      
    }
    .stockDetailsUpdateBrowser{
    padding-top:5px;
    padding-bottom: 7px;
    
    
    
    font-family: Graphik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 26px;
  
  color: #FFFFFF;
  
  
    
    
    }
    .stockDetailsUpdateSubBrowser{
      display:block;
      
    
    
    font-family: Graphik;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height */
  
  
  color: rgba(255, 255, 255, 0.6);
  
    
    
    }
  
    .mainBlockTableBuyBrowser{
      display:flex;
      border-left:2px solid  #18B13F ;
      justify-content:space-around;
      background: #373A44;
      height:6vh;
      padding-top:5px;
    
    }
    .mainBlockTableSellBrowser{
      display:flex;
        border-left:2px solid #EA5E4B;
      
      justify-content:space-around;
      background: #373A44;
      height:6vh;
      padding-top:5px;
    
    }
    .buyTableContainBrowser{
      flex:0.3;
      color:white;
      padding:10px 0px;
      text-align:center
    }
    .headingStock{
      color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 18px;
    padding: 12px 10px 12px 100px;
    }
    .headingStockOne{
      color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 18px;
    padding: 12px 100px 12px 120px;
    }
  
  .stockDetailsHeading{
    color:#E1E1E1;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
  
    margin-top: 10px;
      margin-bottom:20px;
      font-family: Open Sans, sans-serif
    
    
  }
  
    
     .paraStockDetails{
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 31px;
      margin:20px;
  
    } 
  
    .buttonBuyStock{
      
        flex: 0.3;
        align-items: center;
  
        width: 150px !important;
        height: 40px;
        
        
        background: #18B13F;
        border-radius: 4px;
        color: #ffffff;
        border: none;
        font-weight: normal;
        font-size: 20;
        margin-left: 5px;
    
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 10px;
    }
  
    .buttonSellStock{
      
  
      width: 150px !important;
      height: 40px;
      
      
      background:#EA5E4B;
      border-radius: 4px;
      color: #ffffff;
      border: none;
      font-weight: normal;
      font-size: 20;
      
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 10px;
    }
    .buttonHoldStock{
      width: 150px !important;
      height: 40px;
      
      
      background:    #F8D42B;
      border-radius: 4px;
      color: #ffffff;
      border: none;
      font-weight: normal;
      font-size: 20;
  
      text-align: center;
      margin-top: 2px;
      max-width: 5em;
      min-width: 5em;
      margin-left: 10px;
    }
    .brokerButtonStocks{
  
  
      width: 240px ;
      height: 40px;
      background:#18B13F;
      border-radius: 8;
      color: #ffffff;
      border: none;
      
      font-size: 14;
  
      text-align: center;
      margin-top: 30px;
      
      
  
    }
  
    .modelStockDetails{
      
        position: fixed;
        bottom: 30vh;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        z-index: 999999;
        width: 464px;
        height: 400px;
        background: #FFFFFF;
        border-radius: 8px;
  
        color: white;
        padding-left:20px;
        padding-right:20px; 
      
    }
    
    
    .hr {
      display: block;
      height: 1px;
      border: 0;
      border-bottom: 2px solid rgba(54, 71, 42, 0.58);
      padding: 0;
      width: 80%;
    }
    .footer-img {
      position: relative;
    }
    .footer-clr {
      background: rgba(5, 10, 6, 0.93);
      mix-blend-mode: normal;
    }
    .footerTitle {
      font-size: 18px;
      text-align: right;
      margin-top: 10px;
      margin-left: 10px;
      color: white;
    }
    .footer-list {
      position: relative;
      font-size: 14px;
      left: -25px;
      top: 2px;
      line-height: 1.8;
    }
    .footer-list-one {
      position: relative;
      font-size: 16px;
      left: -35px;
      top: 2px;
      line-height: 1.8;
    }
    .footer-icon {
      position: relative;
      top: 6px;
      right: 10px;
    
      color: #36472a;
    }
    .footer-icon:hover,
    .footer-phone:hover,
    .footer-social-icon:hover,
    .play-iconf:hover {
      color: rgb(179, 231, 137);
    }
    .footer-phone {
      position: relative;
    
      right: 10px;
      color: #36472a;
    }
    
    .logo-class {
      display: flex;
      flex-flow: row;
      margin-left: 60px;
    }
    .footer-social-icon {
      color: #36472a;
    }
    .title {
      font-family: Graphik;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 26px;
      text-align: justify;
    
      color: #ffffff;
    }
    .play-iconf {
      border: 1px solid #36472a;
      padding: 10px 10px 10px 10px;
      box-sizing: border-box;
      position: relative;
      color: #36472a;
      box-sizing: border-box;
      top: 10px;
      left: 0px;
    }
    .clogo {
      width: 50px;
      height: 50px;
    }
    .footer-sub {
      background: rgba(5, 10, 6, 0.93);
      mix-blend-mode: normal;
      padding-top: 30px;
    }
    .icon-div {
      display: flex;
      grid-gap: 10px;
    }
    
    @media (max-width: 1080px) {
      .title {
        margin-left: 35px;
      }
      .footer-list-one {
        left: -4px;
      }
    }
    
    @media (max-width: 992px) {
      .logo-class {
        margin-left: 15px;
      }
      .title {
        margin-left: 40px;
      }
      .footer-list,
      .footer-list-one {
        left: 0;
      }
      .titlefooter {
        margin-left: 30px;
      }
    }
    @media (max-width: 760px) {
      .logo-class {
        margin-left: 40px;
      }
      .title {
        margin-left: 45px;
        margin-top: 35px;
      }
      .titlefooter {
        margin-left: 46px;
        margin-top: 25px;
      }
      .cycle-product {
        text-align: left;
      }
      .footer-list-one {
        left: -14px;
      }
      .footer-list {
        left: -4px;
      }
      .blog-footer {
        margin-left: 10px;
        margin-top: 20px;
      }
      .blog-footer-one {
        margin-left: 10px;
      }
      address.check-address {
        width: 70%;
      }
    }
    .companyAddress {
      font-style: normal;
      font-weight: 300;
      font-size: 21px;
      line-height: 31px;
    
      color: rgba(255, 255, 255, 0.8);
    }
    .footer-copyright {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 18px;
      /* identical to box height */
    
      color: rgba(255, 255, 255, 0.6);
    }
    
    .playstoreButton {
      display: flex;
      justify-content: space-between;
     
      width: 180px;
      height: 50px;
      align-items: right;
    
      background: #ffffff;
      box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.3),
        1px 1px 2px rgba(224, 224, 224, 0.5),
        inset 1px -1px 2px rgba(224, 224, 224, 0.2),
        inset -1px 1px 2px rgba(224, 224, 224, 0.2),
        inset 1px 1px 2px rgba(255, 255, 255, 0.9),
        inset -1px -1px 3px rgba(224, 224, 224, 0.9);
      border-radius: 8px;
    }
    .google {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
     display:block;
    
    
      color: rgba(0, 0, 0, 0.9);
    }
    .subGoogle {
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
    
      
    
      color: rgba(22, 10, 10, 0.8);
    }
    .checkedMain{
      margin-left:46px;
padding:10px 0px
    }
    .checkedSSR{
       
    font-family: Graphik;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 22px;
    /* identical to box height */
    
    
    

margin-left:38px !important;

color: rgba(255, 255, 255, 0.6);
    }
    .buttonCheckedSSR{
      font-family: Graphik;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 22px;

color: #FFFFFF;
width:500px;
height:50px;
background: #18B13F;
box-shadow: -1px -1px 2px rgba(28, 205, 73, 0.3), 1px 1px 2px rgba(20, 149, 53, 0.5), inset 1px -1px 2px rgba(20, 149, 53, 0.2), inset -1px 1px 2px rgba(20, 149, 53, 0.2), inset 1px 1px 2px rgba(28, 205, 73, 0.9), inset -1px -1px 3px rgba(20, 149, 53, 0.9);
border-radius: 8px;
text-align:center;
margin:80px auto;

    }

    .buttonCheckedSSRSuggestion1{
      font-family: Graphik;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 22px;

color: #FFFFFF;
width:500px;
height:50px;
background: #18B13F;
box-shadow: -1px -1px 2px rgba(28, 205, 73, 0.3), 1px 1px 2px rgba(20, 149, 53, 0.5), inset 1px -1px 2px rgba(20, 149, 53, 0.2), inset -1px 1px 2px rgba(20, 149, 53, 0.2), inset 1px 1px 2px rgba(28, 205, 73, 0.9), inset -1px -1px 3px rgba(20, 149, 53, 0.9);
border-radius: 8px;
text-align:center;
margin:10px auto 80px auto;
    }
    .buttonCheckedSSRSuggestion1Footer{
      font-family: Graphik;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 22px;

color: #FFFFFF;
width:200px;
height:50px;
background: #18B13F;
box-shadow: -1px -1px 2px rgba(28, 205, 73, 0.3), 1px 1px 2px rgba(20, 149, 53, 0.5), inset 1px -1px 2px rgba(20, 149, 53, 0.2), inset -1px 1px 2px rgba(20, 149, 53, 0.2), inset 1px 1px 2px rgba(28, 205, 73, 0.9), inset -1px -1px 3px rgba(20, 149, 53, 0.9);
border-radius: 8px;
text-align:center;

    }
    .buttonCheckedSSRSuggestion{
      font-family: Graphik;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 22px;
      
      color: #18B13F;
      
border: 1px solid #18B13F;
box-sizing: border-box;
box-shadow: inset 1px -1px 2px rgba(20, 149, 53, 0.2), inset -1px 1px 2px rgba(20, 149, 53, 0.2), inset 1px 1px 2px rgba(28, 205, 73, 0.9), inset -1px -1px 3px rgba(20, 149, 53, 0.9);
filter: drop-shadow(-1px -1px 2px rgba(28, 205, 73, 0.3)) drop-shadow(1px 1px 2px rgba(20, 149, 53, 0.5));
border-radius: 8px;
width:500px;
height:50px;

border-radius: 8px;
text-align:center;
margin:80px auto 20px auto;
    }
    


    .paraStockDetailsMobile{
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: 35px;
      line-height: 31px;
      margin:40px 40px;
  
    } 
    .stockDetailsUpdateBrowserMobile{
      padding-top:5px;
      padding-bottom: 7px;
      
      
      
      font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 26px;
    
    color: #FFFFFF;
    
    
      
      
      }
      .stockDetailsUpdateSubBrowserMobile{
        display:block;
        
      
      
      font-family: Graphik;
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 26px;
    /* identical to box height */
    
    
    color: rgba(255, 255, 255, 0.8);
    
      
      
      }
    

    .checkedMainMobile{
      margin-left:56px;
padding:10px 0px
    }
    .checkedSSRMobile{
       
    font-family: Graphik;
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 22px;
    /* identical to box height */
    
    
    

margin-left:38px !important;

color: rgba(255, 255, 255, 0.6);
    }
    .buttonCheckedSSRMobile{
      font-family: Graphik;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 22px;

color: #FFFFFF;
width:900px;
height:80px;
background: #18B13F;
box-shadow: -1px -1px 2px rgba(28, 205, 73, 0.3), 1px 1px 2px rgba(20, 149, 53, 0.5), inset 1px -1px 2px rgba(20, 149, 53, 0.2), inset -1px 1px 2px rgba(20, 149, 53, 0.2), inset 1px 1px 2px rgba(28, 205, 73, 0.9), inset -1px -1px 3px rgba(20, 149, 53, 0.9);
border-radius: 8px;
text-align:center;
margin:50px 40px ;


    }
    .buttonCheckedSSRMobileFooter{
      font-family: Graphik;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 22px;

color: #FFFFFF;
width:300px !important;
height:80px;
background: #18B13F;
box-shadow: -1px -1px 2px rgba(28, 205, 73, 0.3), 1px 1px 2px rgba(20, 149, 53, 0.5), inset 1px -1px 2px rgba(20, 149, 53, 0.2), inset -1px 1px 2px rgba(20, 149, 53, 0.2), inset 1px 1px 2px rgba(28, 205, 73, 0.9), inset -1px -1px 3px rgba(20, 149, 53, 0.9);
border-radius: 8px;
text-align:center;



    }
    .buttonCheckedSSRMobile1{
      border: 1px solid #000000;
box-sizing: border-box;
box-shadow: inset 1px -1px 2px rgba(20, 149, 53, 0.2), inset -1px 1px 2px rgba(20, 149, 53, 0.2), inset 1px 1px 2px rgba(28, 205, 73, 0.9), inset -1px -1px 3px rgba(20, 149, 53, 0.9);
filter: drop-shadow(-1px -1px 2px rgba(28, 205, 73, 0.3)) drop-shadow(1px 1px 2px rgba(20, 149, 53, 0.5));
border-radius: 8px;
font-family: Graphik;
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 22px;

color: #18B13F;

width:900px;
height:80px;

text-align:center;
margin:50px 40px ;


    }

    .mobilessrHeading{
      font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 27px;

color: #FFFFFF;

      div-decoration: none;

    
      margin-left: 30px;
      margin-top: 30px;
    
    
    }
    .mobilessrHeadingRuppes{
      font-family: Poppins;
      font-style: normal;
      font-weight: 300;
      font-size: 38px;
      line-height: 24px;
      
      color: rgba(255, 255, 255, 0.6);
      
            
          margin:40px 30px 30px

    }
    .watchlistHowtoUseCyclessrMobile{
    
      font-style: normal;
      font-weight: normal;
      font-size: 26px;
      line-height: 18px;
      /* or 112% */
      
      
      color: #FFFFFF;
      
      
      }
      .hr {
        display: block;
        height: 1px;
        border: 0;
        border-bottom: 2px solid rgba(54, 71, 42, 0.58);
        padding: 0;
        width: 80%;
      
      }
      .footer-img {
        position: relative;
      }
      .footer-clr {
        background: rgba(5, 10, 6, 0.93);
        mix-blend-mode: normal;
      }
      .footerTitle {
        font-size: 18px;
        text-align: right;
        margin-top: 10px;
        margin-left: 10px;
        color: white;
      
      }
      .footer-list {
        position: relative;
        font-size: 14px;
        left: -25px;
        top:2px;
        line-height: 1.8;
      }
      .footer-list-one {
        position: relative;
        font-size: 16px;
        left: -35px;
        top: 2px;
        line-height: 1.8;
      }
      .footer-icon {
        position: relative;
        top: 6px;
        right: 10px;
      
        color: #36472A;
      }
      .footer-icon:hover,.footer-phone:hover,.footer-social-icon:hover,.play-iconf:hover{
        color: rgb(179, 231, 137);
      
      }
      .footer-phone {
        position: relative;
      
        right: 10px;
        color: #36472A;
      }
      
      .logo-class {
        display: flex;
      justify-content: left;
      margin-top:"10px";
      margin-left:"10px"
      
      }
      .address{
        display: flex;
        justify-content: center;
        margin-top:"10px";
        align-items:"center"
      }
      .footer-social-icon{
        color: #36472A;
       
      }
      .title{
        font-size: 18px;
        font-weight: 400;
      }
      .play-iconf{
        border: 1px solid #36472A;
        padding: 10px 10px 10px 10px;
        box-sizing: border-box;
        position: relative;
        color: #36472A;
        box-sizing: border-box;
        top: 10px;
        left: 0px;
      
      }
      .clogo {
        width: 50px;
        height: 50px;
      
      }
      .footer-sub {
        background: rgba(5, 10, 6, 0.93);
        mix-blend-mode: normal;
        padding-top: 30px;
      }
      .icon-div{
        display: flex;
        grid-gap: 10px;
      }
      .titleFooter {
        font-style: normal;
      font-weight: normal;
      font-size: 26px;
      line-height: 15px;
      text-align: justify;
      
      color: #FFFFFF;
      margin:30px 0px 30px 40px
      }
      .companyAddressMobile{
      
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 24px;
      
      color: rgba(255, 255, 255, 0.8);
      
      }
      
      .playstoreButtonMobile{
        
        background: #FFFFFF;
        box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.3), 1px 1px 2px rgba(224, 224, 224, 0.5), inset 1px -1px 2px rgba(224, 224, 224, 0.2), inset -1px 1px 2px rgba(224, 224, 224, 0.2), inset 1px 1px 2px rgba(255, 255, 255, 0.9), inset -1px -1px 3px rgba(224, 224, 224, 0.9);
        border-radius: 8px;

        display: flex;
        justify-content: space-between;
       margin-top: 25px;
       width: 40%;
       height: 5vh;
      align-items:right;
      
      
      background: #FFFFFF;
      box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.3), 1px 1px 2px rgba(224, 224, 224, 0.5), inset 1px -1px 2px rgba(224, 224, 224, 0.2), inset -1px 1px 2px rgba(224, 224, 224, 0.2), inset 1px 1px 2px rgba(255, 255, 255, 0.9), inset -1px -1px 3px rgba(224, 224, 224, 0.9);
      border-radius: 8px;
      }
      .googleMobile {
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 15px;
      
        color: rgba(0, 0, 0, 0.9);
      }
      .subGoogleMobile {
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 15px;
      
        color: rgba(22, 10, 10, 0.8);
      }
      .footerssrHeading{
        font-family: Graphik;
font-style: normal;
font-weight: 500;
font-size: 21px;
line-height: 26px;
text-align: justify;

color: #FFFFFF;

      }
      .footerssrHeadingSub{
        font-family: Graphik;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 26px;
text-align: justify;

color: #18B13F;

      }
      .footerssrHeadingDash{
        font-family: Graphik;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 26px;
text-align: justify;
margin:0px 8px 0px 4px;

color: #ffffff;

      }

.footerssrLinks{
  font-family: Graphik;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 22px;
text-align: justify;

color: #AFAFAF;

}
.footerssrHeadingDashLinks{
  font-family: Graphik;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 26px;
text-align: justify;
margin:0px 8px 0px 4px;

color: #AFAFAF;

}
.footerssrAddress{
  font-family: Graphik;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 22px;
text-align: justify;

color: #AFAFAF;

}
.crsScoressr{
  font-family: Graphik;
font-style: normal;
font-weight: normal;
font-size: 52px;
line-height: 101px;
display:block;
padding:0px 0px 0px 0px;
color: #FFFFFF;


}
.crsScoressrSub{
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 38px;
line-height:1px;
display:inline-block;
padding:0px;
color: rgba(255, 255, 255, 0.5);

}
.crsScoreActual{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 44px;
  line-height: 72px;
 
  color: rgba(255, 255, 255, 0.5);
  
}
.crsScoressrMain{
  font-family: Graphik;
font-style: normal;
font-weight: normal;
font-size: 52px;
line-height: 101px;
display:block;
marginLeft:30px;
color: #FFFFFF;
padding:px 0px 20px 0px;

}
.crsScoressrDash{
width:0px !important;
height:43vh;
margin:auto;
border: 1px solid #ffffff;
text-align:center;


}
.suggestionImageBlur{

}
.suggestionImageBlock{
z-index:999999999999;  

}
.whyCycleMain {
  background: #FFFFFF;
  height:45vh;
  width:20vw;
  border-radius: 80px;
  text-align:center;
}
.customerReviewBox{

    width: 83vw;
    margin: auto;
    background: #F1F1F1;
    height: 40vh;

}
.vl {
  border-left: 2px solid #ffffff ;
  height: 200px;
  
  
  margin-left: -3px;
 
}
.vlMobile {
  border-left: 2px solid  rgba(255, 255, 255, 0.5) ;
  height:10vh;
  
  
  margin:auto;
 
}
@media (min-height: 750px) {
  .whyCycleMain {
    height: 35vh;
  }
  .vl {
    border-left: 2px solid #ffffff ;
    height: 230px;
    
    
    margin-left: -3px;
   
  }
}
@media (min-height: 800px) {
  .whyCycleMain {
    height: 25vh;
  }
}
@media (max-height: 800px) {
  .customerReviewBox{

    width: 85vw;
    margin: auto;
    background: #F1F1F1;
    height: 50vh;

}

}
.whyCycleMainText {
  font-family: Graphik;
  font-style: normal;
  font-weight: 550;
  font-size: 23px;
  line-height: 24px;
  

  color: #000000;
}
.whyCycleMainText1 {
  font-family: Graphik;
  font-style: normal;
  font-weight: 550;
  font-size: 23px;
  line-height: 27px;
  text-align: center;

  color: #000000;
  margin-top: 30px;
  padding: 20px 20px 15px 10px !important;
}
.mainHeading {
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 46px;
  
}
.subHeading {
  margin-top: 40px;
  color: rgba(0, 0, 0, 0.8);
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
}
.heading {
  text-align: left;
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 53px;

  margin-left: 183px;
}
.heading2 {
  text-align: left;
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 53px;

  margin-left: 150px;
  padding: 50px 0px;
}
.sectionHeading {
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 27px;
  padding: 50px 0px 18px 0px;
}
.sectionSubHeading {
  color: rgba(0, 0, 0, 0.8);
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 27px;
  padding: 10px 20px 50px 20px;
}
.userType {
  text-align: center;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 31px;
  padding: 60px 0px 40px 0px;
}
.selectedPlan {
  background: rgba(24, 177, 63, 0.2);

  border-radius: 4px;
  border-top: 10px solid #18b13f;
  border-left: 1px solid #18b13f;
  border-right: 1px solid #18b13f;
  border-bottom: 1px solid #18b13f;
}
.notSelected {
  background: #ffffff;
  border-radius: 4px;
  border-top: 10px solid #18b13f;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.userPrice {
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 44px;
}
.userPeriod {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 44px;
}
.plan {
  color: rgba(0, 0, 0, 0.9);
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 22px;
  padding: 20px 0px 12px 0px;
  margin-left: 30px;
}
.plan1 {
  color: rgba(0, 0, 0, 0.9);
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 40px;
  padding: 20px 0px 12px 0px;
  margin-left: 14px;
}
.userPlanButton {
  width: 420px;
  border-radius: 8px;
  height: 70px;
  background: #18b13f;
  align-items: center;
  padding-top: 19px;

  text-align: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 35px;

  color: #ffffff;
}
.subName {
  font-family: Graphik;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 35px;
  text-align: center;

  color: #000000;
}

.reviewContain {
  margin-top: 30px;
  font-family: Times New Roman;
  font-style: italic;
  font-weight: normal;
  font-size: 30px;
  margin-left: 120px;
  margin-right: 120px;
  line-height: 40px;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  
}
.reviewName {
  margin-top: 40px;
  font-family: Tomorrow;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 41px;
  /* identical to box height */
  width: 80%;
  text-align: right;
  padding: 30px 0px;

  color: rgba(0, 0, 0, 0.8);
}
@media (max-height: 750px) {
  .reviewName {
    margin-top: 30px;

    font-size: 2.5rem;

    text-align: right;
    padding: 25px 0px;

    color: rgba(0, 0, 0, 0.8);
  }
}

.whyCycleMain {
  flex: 0.23;
  width: 20vw !important;
  height: 34vh;
  align-items: center;
  text-align: center;

  background: rgba(255, 255, 255, 1);
  
  box-sizing: border-box;
  border-radius: 70px;
}
.customerReviewBox{

    width: 83vw;
    margin: auto;
    background: #F1F1F1;
    height: 40vh;

}
@media (max-height: 800px) {
  .whyCycleMain {
    height: 45vh;
  }
}
@media (max-height: 800px) {
  .customerReviewBox{

    width: 85vw;
    margin: auto;
    background: #F1F1F1;
    height: 50vh;

}
}


.selectedOption {
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  padding: 10px 20px;
  border-bottom: 4px solid #18b13f;
}

.notSelectedOption {
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  padding: 10px 20px;
}
.navButton {
  width: 120px;
  height: 50px;
  background: #18b13f;
  border: 1px solid #18b13f;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 10px 20px;
}

.navButtonText {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;

  color: #fcfcfc;
}

.objective1-div {
  display: flex;
  flex-flow: row;
  row-gap: 2;
  overflow: auto;
}
.objective1 {
  width: 100%;
}
.parent {
  position: relative;
}
.row{
  display: flex;
  justify-content: space-between;
}
.objective1-heading {
  margin-top:70px;


  font-style: normal;
font-weight: 600 !important;
font-size: 60px !important;
line-height: 60px;

color: #ffffff !important;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16) !important;

}
.objective1-para {
  width: 100%;
  font-family: Graphik;
  font-style: normal;
  font-weight: normal;
  font-size: 36px !important;
  line-height: 40px !important;
  
  color: #FFFFFF;
  
}
.pt60 {
  padding-top: 60px;
}
.pt40 {
  padding-top: 40px;
}
.pt20 {
  padding-top: 140px;
  color: black;

}

.carousal-img {
  width: auto;
  height: 23rem;
  float: right;
}

.ind {
  width: 15%;
  height: auto;
}
@media only screen and (max-width: 600px) {
  .carousal-img {
    float: none;
    margin: auto;
    margin-left: 23%;
  }
  .objective1-div {
    padding-top: 20px;
  }
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 31rem;
  height: auto;
  border-radius: 50%;
  transition: transform 0.5s;
}
.carousal-img:hover {
  transform: scale(1.01);
}

.distance{
  padding:100px 30px;
}

@media (max-height: 800px) {
  .distance{
    padding: 45px 30px 0px 30px;
  }

}
@media (max-height: 750px) {
  .distance{
    padding: 20px 30px 0px 30px;
  }

}
@media (max-height: 900px) {
  .distance{
    padding: 80px 30px 0px 30px;
  }

}
@media (max-height: 850px) {
  .distance{
    padding: 60px 30px 0px 30px;
  }

}
@media (max-height: 670px) {
  .distance{
    padding: 50px 30px 0px 30px;
  }

}
.mainHeadingMobile {
  font-style: normal;
  font-weight: 400;
  font-size: 55px;
  line-height: 60px;
  /* or 114% */
 
  color: #000000;
}
.subHeadingMobile {
  margin-top: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  /* or 131% */
  margin-top:17px !important ;

  color: rgba(0, 0, 0, 0.7);
}
.heading {
  text-align: left;
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 53px;

  margin-left: 183px;
}
.HeadingSSRMobile{
  font-style: normal;
  font-weight: 600;
  font-size: 220px !important;
  line-height: 22px;
  /* identical to box height */

  color: #000000;

  margin-left: 30px;
  padding: 30px 0px 20px 0px;
}
.headingMobile {
  font-style: normal;
  font-weight: 600;
  font-size: 22px !important;
  line-height: 22px;
  /* identical to box height */

  color: #000000;

  margin-left: 30px;
  padding: 30px 0px 20px 0px;
}
.sectionHeadingMobile {
  font-style: normal;
  font-weight: 500;
  font-size: 31px;
  line-height: 30px;

  color: #000000;

  padding: 25px 0px 4px 0px;
}
.sectionSubHeadingMobile {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 27px;

  color: #000000;

  padding: 8px 20px 5px 20px;
}
.userTypeMobile {
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height */

  color: #000000;
  margin-left: 7px;

  padding: 10px 0px 10px 10px;
}
.selectedPlanMobile {
  width:800px;
  height: 180px;

  background: rgba(24, 177, 63, 0.2);
  border: 1px solid #18b13f;
  box-sizing: border-box;
  border-radius: 8px;
}
.notSelectedMobile {
  width: 800px;
  height: 180px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 8px;
}
.userPrice {
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 44px;
}
.userPeriodMobile {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 15px;
  text-align: center;

  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
}
.planMobile {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 15px;
  text-align: left;

  color: rgba(0, 0, 0, 0.8);

  padding: 10px 0px 12px 0px;
  margin-left: 15px;
}
.plan1 {
  color: rgba(0, 0, 0, 0.9);
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 22px;
  padding: 20px 0px 12px 0px;
  margin-left: 5px;
}
.userPlanButtonMobile {
  width: 80vw;
  height: 60px;

  background: #18b13f;
  box-shadow: -1px -1px 2px rgba(28, 205, 73, 0.3),
    1px 1px 2px rgba(20, 149, 53, 0.5),
    inset 1px -1px 2px rgba(20, 149, 53, 0.2),
    inset -1px 1px 2px rgba(20, 149, 53, 0.2),
    inset 1px 1px 2px rgba(28, 205, 73, 0.9),
    inset -1px -1px 3px rgba(20, 149, 53, 0.9);
  border-radius: 8px;
  align-items: center;
  padding-top: 19px;

  text-align: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 35px;
  padding-bottom: 19px;
  color: #ffffff;
}
.subName {
  font-family: Graphik;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 35px;
  text-align: center;

  color: #000000;
}

.reviewContainMobile {
  padding-bottom: "10px";
  font-family: Times New Roman;
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: rgba(0, 0, 0, 0.8);
}
.reviewNameMobile {
  padding-top: 45px;
  font-family: Tomorrow;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 17px;
  text-align: right;

  color: rgba(0, 0, 0, 0.8);
}

.whyCycleMainMobile {
  flex: 0.4;
  width: 10vw !important;
  height: 20vh !important;
  align-items: center;

  background: #ffffff;
 
  box-sizing: border-box;
  border-radius: 30px;
  text-align:center
}
.whyCycleMainTextMobile {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 28px;
  text-align: center;

  color: #000000;

  margin-top: 40px;
  padding: 8px 20px !important;
}
.whyCycleMainText1Mobile {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  text-align: center;

  color: #000000;
  margin-top: 40px;
  padding: 20px 20px !important;
}


.navButton {
  width: 120px;
  height: 50px;
  background: #18b13f;
  border: 1px solid #18b13f;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 10px 20px;
}

.navButtonText {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;

  color: #fcfcfc;
}
.navBarLoginMobile {
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 30px;
  /* identical to box height */
  margin-left: 50px;
  margin-bottom: 20px;

  color: #ffffff;
}
.navBarAllMobile {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 30px;
  /* identical to box height */

  padding: "70px 0px";
  color: rgba(255, 255, 255, 0.8);
}
.appbarWidth{
  width:85%
}

@media only screen and (max-width: 4100px) {
  .reviewNameMobile {
    padding-top: 37px;
    padding-bottom: 100px;
  }
  .reviewContainMobile {
    padding-bottom: "10px";

    font-size: 20px;
    line-height: 21px;
  }
  .whyCycleMainMobile {
    flex: 0.42;
    width: 182px;
    height: 195.87px;
  }
  .whyCycleMainTextMobile {
    margin-top: 30px;
    padding: 8px 20px !important;
  }
}

.navButtonMobile {
  width: 80px;
  height: 40px;
  align-items: center;
  background: #18b13f;
  border: 1px solid #18b13f;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 7px 20px 10px 13px;
  text-align: center;
  margin-top: 9px;
}

.navButtonTextMobile {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  

  color: #fcfcfc;
}
.crsScoressrMobile{
  font-family: Graphik;
font-style: normal;
font-weight: 500;
font-size: 44px;
line-height: 0px;
display:block;
color: #FFFFFF;



}
.crsScoressrMobileSub{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height:0px !important;
  
  color: rgba(255, 255, 255, 0.5);
  
}
.crsScoressrActualMobile{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 124px;
  
  color: rgba(255, 255, 255, 0.5);
  
}
.crsScoressrMobile{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 124px;
  
  color: #FFFFFF;
  
}


</style>
</head>
<body>

    <link rel="stylesheet" href="../client/components/Resources/style.css">
    <link rel="stylesheet" href="../client/components/Resources/stock.css">


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous">

      ${helmet.title.toString()}
      ${helmet.meta.toString()}
    </head>
    <body>
      <div id="root">
        ${jsx}
      </div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
      crossorigin="anonymous"></script>
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" 
      integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" 
      crossorigin="anonymous"></script>
      
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" 
      integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" 
      crossorigin="anonymous"></script>
      <script src="client.bundle.js"></script>


    </body>
  </html>


  `
} 