import React from "react";

import "./Card.css";

import NoPriority from "../../static/Images/NoPriority.svg";
import LowPriority from "../../static/Images/LowPriority.svg";
import MediumPriority from "../../static/Images/MediumPriority.svg";
import HighPriority from "../../static/Images/HighPriority.svg";
import UrgentPriority from "../../static/Images/UrgentPriority.svg";

export default function Card(props) {
  return (
    <>
      <div className="card_container">
        <div className="card-id-wrapper">
          <div className="card-id">{props.cardDetails.id}</div>
          <div className="card-profile">
            <div className="card-profile-initial">
              {props.cardDetails.userObj.name[0]}
              {props.cardDetails.userObj.name[1]}
            </div>
            <div
              className={
                props.cardDetails.userObj.available
                  ? "card-profile-initial-available card-profile-initial-available-true"
                  : "card-profile-initial-available"
              }
            ></div>
          </div>
        </div>
        <div className="card-title">{props.cardDetails.title}</div>
        <div className="card-tag">
          {
            {
              0: (
                <div className="card-tag-icon">
                  <img src={NoPriority} alt="NoPriority" /> 
                </div>
              ),
              1: (
                <div className="card-tag-icon">
                  <img src={LowPriority} alt="LowPriority" /> 
                </div>
              ),
              2: (
                <div className="card-tag-icon">
                  <img src={MediumPriority} alt="MediumPriority" /> 
                </div>
              ),
              3: (
                <div className="card-tag-icon">
                  <img src={HighPriority} alt="HighPriority" /> 
                </div>
              ),
              4: (
                <div className="card-tag-icon">
                  <img src={UrgentPriority} alt="UrgentPriority" /> 
                </div>
              ),
            }[props.cardDetails.priority]
          }

          {props.cardDetails.tag.map((tag) => {
            return (
              <div className="card-tag-box">
                <div className="card-tag-title">{tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
