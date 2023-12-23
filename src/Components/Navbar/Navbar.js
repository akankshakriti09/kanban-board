import React, { useState } from "react";
import filterIcon from "../../static/Images/Filter.svg";
import downArrowIcon from "../../static/Images/DownArrow.svg";
import "./Navbar.css";

export default function Navbar(props) {
  const [Filter, setFilter] = useState(false);

  function handleDisplayFilter(e) {
    setFilter(!Filter);
    if (e.target.value !== undefined) {
      props.handleGroupValue(e.target.value);
    }
  }
  function handleOrderingValue(e) {
    setFilter(!Filter);
    if (e.target.value !== undefined) {
      props.handleOrderValue(e.target.value);
    }
  }

  return (
    <>
      <section className="nav">
        <div className="nav_container">
          <div style={{padding:"0.7rem 0.8rem"}}>
            <div className="nav-disp-btn" onClick={handleDisplayFilter}>
              <div className="nav-disp-icon navr-disp-filter">
                <img src={filterIcon} alt="icon" />
              </div>
              <div className="nav-disp-heading">Display</div>
              <div className="nav-disp-icon nav-disp-drop">
                <img src={downArrowIcon} alt="icon" />
              </div>
            </div>
            <div
              className={
                Filter
                  ? "nav-disp-dropdown nav-disp-dropdown-show"
                  : "nav-disp-dropdown"
              }
            >
              <div className="nav-disp-filters">
                <div className="nav-dropdown-category">Grouping</div>
                <div className="nav-dropdown-selector">
                  <select
                    value={props.groupValue}
                    onChange={handleDisplayFilter}
                    className="nav-selector"
                    name="grouping"
                    id=""
                  >
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
              </div>
              <div className="nav-disp-filters">
                <div className="nav-dropdown-category">Ordering</div>
                <div className="nav-dropdown-selector">
                  <select
                    value={props.orderValue}
                    onChange={handleOrderingValue}
                    className="nav-selector"
                    name="grouping"
                    id=""
                  >
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
