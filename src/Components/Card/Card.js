import React from "react";

import "./Card.css";

import cardIcon1 from "../../static/Images/cardIcon1.svg";
import cardIcon2 from "../../static/Images/cardIcon2.svg";
import cardIcon3 from "../../static/Images/cardIcon3.svg";
import cardIcon4 from "../../static/Images/cardIcon4.svg";
import cardIcon5 from "../../static/Images/cardIcon5.svg";

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
                  <img src={cardIcon1} alt="cardIcon1" /> 
                </div>
              ),
              1: (
                <div className="card-tag-icon">
                  <img src={cardIcon2} alt="cardIcon2" /> 
                </div>
              ),
              2: (
                <div className="card-tag-icon">
                  <img src={cardIcon3} alt="cardIcon3" /> 
                </div>
              ),
              3: (
                <div className="card-tag-icon">
                  <img src={cardIcon4} alt="cardIcon4" /> 
                </div>
              ),
              4: (
                <div className="card-tag-icon">
                  <img src={cardIcon5} alt="cardIcon5" /> 
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
