import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import List from "./Components/List/List";

function App() {
  const [groupValue, setgroupValue] = useState(
    getStateFromLocalStorage() || "status"
  );
  const [orderValue, setorderValue] = useState("title");

  const statusList = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
  const [userList, setUserList] = useState([]);
  const priorityList = [
    { name: "No priority", priority: 0 },
    { name: "Low", priority: 1 },
    { name: "Medium", priority: 2 },
    { name: "High", priority: 3 },
    { name: "Urgent", priority: 4 },
  ];

  const [ticketDetails, setticketDetails] = useState([]);

  const orderDataByValue = useCallback(
    async (cardsArray) => {
      if (orderValue === "priority") {
        cardsArray.sort((a, b) => a.priority - b.priority);
      } else if (orderValue === "title") {
        cardsArray.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          if (titleA < titleB) {
            return -1;
          } else if (titleA > titleB) {
            return 1;
          } else {
            return 0;
          }
        });
      }
      await setticketDetails(cardsArray);
    },
    [orderValue, setticketDetails]
  );

  function saveStateToLocalStorage(state) {
    localStorage.setItem("groupValue", JSON.stringify(state));
  }

  function getStateFromLocalStorage() {
    const storedState = localStorage.getItem("groupValue");
    if (storedState) {
      return JSON.parse(storedState);
    }
    return null;
  }

  useEffect(() => {
    saveStateToLocalStorage(groupValue);
    async function fetchData() {
      const response = await axios.get(
        "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
      );
      await refactorData(response);
    }
    fetchData();
    async function refactorData(response) {
      let ticketArray = [];
      let userArray = [];
      if (response.status === 200) {
        for (let i = 0; i < response.data.tickets.length; i++) {
          for (let j = 0; j < response.data.users.length; j++) {
            if (response.data.tickets[i].userId === response.data.users[j].id) {
              let ticketJson = {
                ...response.data.tickets[i],
                userObj: response.data.users[j],
              };
              ticketArray.push(ticketJson);
            }
          }
        }
        response.data.users.forEach((ele) => userArray.push(ele.name));
      }
      await setUserList(userArray);
      await setticketDetails(ticketArray);
      orderDataByValue(ticketArray);
    }
  }, [orderDataByValue, groupValue]);

  function handleGroupValue(value) {
    setgroupValue(value);
    console.log(value);
  }

  function handleOrderValue(value) {
    setorderValue(value);
    console.log(value);
  }

  return (
    <>
      <Navbar
        groupValue={groupValue}
        orderValue={orderValue}
        handleGroupValue={handleGroupValue}
        handleOrderValue={handleOrderValue}
      />
      <section className="board-details">
        <div className="board-details-list">
          {
            {
              status: (
                <>
                  {statusList.map((listItem) => {
                    return (
                      <List
                        groupValue="status"
                        orderValue={orderValue}
                        listTitle={listItem}
                        listIcon=""
                        statusList={statusList}
                        ticketDetails={ticketDetails}
                      />
                    );
                  })}
                </>
              ),
              user: (
                <>
                  {userList.map((listItem) => {
                    return (
                      <List
                        groupValue="user"
                        orderValue={orderValue}
                        listTitle={listItem}
                        listIcon=""
                        userList={userList}
                        ticketDetails={ticketDetails}
                      />
                    );
                  })}
                </>
              ),
              priority: (
                <>
                  {priorityList.map((listItem) => {
                    return (
                      <List
                        groupValue="priority"
                        orderValue={orderValue}
                        listTitle={listItem.priority}
                        listIcon=""
                        priorityList={priorityList}
                        ticketDetails={ticketDetails}
                      />
                    );
                  })}
                </>
              ),
            }[groupValue]
          }
        </div>
      </section>
    </>
  );
}

export default App;
