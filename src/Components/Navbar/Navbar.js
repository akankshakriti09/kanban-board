import React, {useState} from 'react'
import filterIcon from '../../static/Images/Filter.svg'
import downArrowIcon from '../../static/Images/DownArrow.svg'

import './Navbar.css'

export default function Navbar() {
    const [Filter, setFilter] = useState(false);

    function handleDisplayFilter(){
        setFilter(!Filter);
    }
  return (
    <>
        <section className="nav">
            <div className="nav_container">
                <div>
                    <div className="nav-disp-btn" onClick={handleDisplayFilter}>
                        <div className="nav-disp-icon navr-disp-filter">
                            <img src={filterIcon} alt="icon" />
                        </div>
                        <div className="nav-disp-heading">
                            Display
                        </div>
                        <div className="nav-disp-icon nav-disp-drop">
                            <img src={downArrowIcon} alt="icon" />
                        </div>
                    </div>
                    <div className={Filter ? "nav-disp-dropdown nav-disp-dropdown-show" : "nav-disp-dropdown"}>
                        <div className="nav-disp-filters">
                            <div className="nav-dropdown-category">
                                Grouping
                            </div>
                            <div className="nav-dropdown-selector">
                                <select onChange={handleDisplayFilter} className='nav-selector' name="grouping" id="">
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        <div className="nav-disp-filters">
                            <div className="nav-dropdown-category">
                                Ordering
                            </div>
                            <div className="nav-dropdown-selector">
                                <select className='nav-selector' name="grouping" id="">
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
  )
}