import React from "react";
import Emptybox from "../Resources/empty-box.svg";
function Emptystate() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "150px",
      }}
    >
      <img src={Emptybox} alt="emptybox" />
      <div
        style={{
          color: "white",
        }}
      >
        <div
          style={{ fontWeight: "600", fontSize: "20px", marginLeft: "68px" }}
        >
          No Data Yet
        </div>
        <div
          style={{
            opacity: "50%",
            fontWeight: "400",
            fontSize: "16px",
            marginLeft: "10px",
          }}
        >
          Go back and try a different stock
        </div>
      </div>
    </div>
  );
}

export default Emptystate;
