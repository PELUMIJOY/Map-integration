import React from "react";
import Done from "../../asset/Done.svg";
import mapview from "./Riderrequestaccepted.module.css";

const Riderrequestaccepted = () => {
  return (
    <div className={mapview.doneRQ}>
      <div className={mapview.Done}>
        <img src={Done} alt="approved logo" />
        <p className={mapview.doneRequest}>Request Accepted</p>
        <p className={mapview.donep}>
          You've Accepted to pick up{" "}
          <span className={mapview.doneinnerp}>Collins Nwachukwu </span> request
        </p>
        <button className={mapview.doneBtn}>Done</button>
      </div>
    </div>
  );
};

export default Riderrequestaccepted;
