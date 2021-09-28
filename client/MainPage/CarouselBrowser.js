import React from "react";
import { Carousel, CarouselItem } from "ui-neumorphism";

import img from "../Resources/buy and sell singals.png";
import img1 from "../Resources/curated content.png";
import img2 from "../Resources/stop loss.png";
import img3 from "../Resources/indian markets.png";
import img4 from "../Resources/flexible investments.png";
import img5 from "../Resources/recommendations .png";
import img6 from "../Resources/multiple watchlist.png";
import CarousalDetails from "./CarousalDetailsBrowser";
const CarouselBrowser = () => {
  return (
    <div className="parent">
      <Carousel dark cycle height={550} >
        <CarouselItem style={{ backgroundColor: "#05c232", padding: "100px 0px" }}>
          <CarousalDetails

            imgsrc={img4}
            sub="Key Features"
            title="Flexible Investments"
            description="Equity recommendations short, medium & long term "
          />
        </CarouselItem>
        <CarouselItem style={{ backgroundColor: "#05c232" }}>
          <CarousalDetails
            imgsrc={img}
            className="ind"
            sub="Key Feature"
            title="Buy & Sell Signals"
            description="Based on demand and supply in the market. "
          />
        </CarouselItem>
        <CarouselItem style={{ backgroundColor: "#05c232" }}>
          <CarousalDetails
            imgsrc={img3}
            // className="img-3"
            sub="Key Feature"
            title="Indian Markets"
            description="All traded securities above 10 in NSE & BSE. "
          />
        </CarouselItem>
        <CarouselItem style={{ backgroundColor: "#05c232" }}>
          <CarousalDetails
            imgsrc={img2}
            sub="Key Feature"
            title="Stop-Loss"
            description="Manage risks with our stop-loss feature "
          />
        </CarouselItem>
        <CarouselItem style={{ backgroundColor: "#05c232" }}>
          <CarousalDetails
            imgsrc={img1}
            sub="Key Feature"
            title="Curated Content"
            description="Learn from the Investing legends "
          />
        </CarouselItem>
        <CarouselItem style={{ backgroundColor: "#05c232" }}>
          <CarousalDetails
            imgsrc={img5}
            sub="Key Feature"
            title="Recommendations"
            description="Handpicked stocks with proven performance in a glance "
          />
        </CarouselItem>
        <CarouselItem style={{ backgroundColor: "#05c232" }}>
          <CarousalDetails
            imgsrc={img6}
            sub="Key Feature"
            title="Multiple Watchlists"
            description="Track and categorise as many stocks as you want "
          />
        </CarouselItem>
      </Carousel>
    </div>
  );
};
export default CarouselBrowser;
