import React, { useState } from "react";
import GetDetails from "./components/GetDetails";
import SendDetails from "./components/SendDetails";

function App() {
  const [details, setDetails] = useState([]);

  function addDetails(newDetail) {
    setDetails(prevDetails => {
      return [...prevDetails, newDetail];
    });
  }

  return (
    <div className="App">
      <SendDetails onAdd={addDetails} />
      {details.map((dataItem, index) => {
        return (
          <GetDetails
            key={index}
            id={index}
            name={dataItem.name}
            email={dataItem.email}
            website={dataItem.website}
            gender={dataItem.gender}
          />
        );
      })}
    </div>
  );
}

export default App;
