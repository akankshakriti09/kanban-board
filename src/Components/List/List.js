import React from 'react'

import BacklogIcon from "../../static/Images/Backlog.svg";
import TodoIcon from "../../static/Images/Todo.svg";
import InProgressIcon from "../../static/Images/InProgress.svg";
import DoneIcon from "../../static/Images/Done.svg";
import CancelledIcon from "../../static/Images/Cancelled.svg";
import cardIcon1 from "../../static/Images/cardIcon1.svg";
import cardIcon2 from "../../static/Images/cardIcon2.svg";
import cardIcon3 from "../../static/Images/cardIcon3.svg";
import cardIcon4 from "../../static/Images/cardIcon4.svg";
import cardIcon5 from "../../static/Images/cardIcon5.svg";

import './List.css'
import Card from '../Card/Card'

let cardCount = 0;

export default function List(props) {
  return (
    <>
        <div className="list_container">
            <div className="list-header">
            <div className="list-header-left">
            {
                        {
                            'status' : <>{
                                {
                                    'Backlog': <div className="list-icon">
                                    <img src={BacklogIcon} alt="BacklogIcon" />    
                                    </div>,
                                    'Todo': <div className="list-icon">
                                    <img src={TodoIcon} alt="TodoIcon" />                                      
                                    </div>,
                                    'In progress': <div className="list-icon">
                                    <img src={InProgressIcon} alt="InProgressIcon" />                                     
                                    </div>,
                                    'Done': <div className="list-icon">
                                    <img src={DoneIcon} alt="DoneIcon" />                                     
                                    </div>,
                                    'Cancelled': <div className="list-icon">
                                    <img src={CancelledIcon} alt="CancelledIcon" />                                     
                                    </div>
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
                                {
                                    0: <div className="card-tag-icon"><img src={cardIcon1} alt="cardIcon1" /> </div>,
                                    1: <div className="card-tag-icon"><img src={cardIcon2} alt="cardIcon2" /> </div>,
                                    2: <div className="card-tag-icon"><img src={cardIcon3} alt="cardIcon3" /> </div>,
                                    3: <div className="card-tag-icon"><img src={cardIcon4} alt="cardIcon4" /> </div>,
                                    4: <div className="card-tag-icon"><img src={cardIcon5} alt="cardIcon5" /> </div>                                    
                                }[props.listTitle]
                            } </>
                        }[props.groupValue]
                    }
                    

                    <div className="list-title">
                        {
                            {
                                'priority' : <>{
                                                props.priorityList
                                                    ? props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority === props.listTitle
                                                        ? <>{priorityProperty.name}</>
                                                        : null
                                                    ))
                                                    : null
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="list-sum">{cardCount}</div>
                </div>
                <div className="list-header-right">
                    <div className="list-add-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"/></svg>
                    </div>
                    <div className="list-option-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z"/></svg>
                    </div>
                </div>
            </div>

            <div className="list-card-items">
                {
                    props.ticketDetails.map(ticket => {
                        if(ticket.status === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.priority === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        return null
                    }, cardCount = 0)
                    
                }
            </div>

        </div>
    </>
  )
}