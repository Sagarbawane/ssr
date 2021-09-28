import React from "react";

const CarousalDetails = (props) => {
  return (
    <div className="container mx-auto parent " >
      <div className="row">
        <div className=" col-sm-4 col-md-6  " >
          {" "}

          <div className="objective1-heading"><span style={{}}>{props.title}</span></div>
          <br />
          <div className="objective1-para pt30"><p style={{}}>{props.description}</p></div>
        </div>
        <div className=" col-sm-4 col-md-6 " >
          <img
            className=" img-fluid carousal-img"
            src={props.imgsrc}
            alt="Gilly"
          />
        </div>
      </div>
    </div>
  );
};
export default CarousalDetails;
