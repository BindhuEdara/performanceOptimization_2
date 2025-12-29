import React from "react";

  const Data = React.memo(() => {

    console.log("heavy data rendered");
    let total = 0;
    for (let i = 0; i < 100000000; i++){
      total+=i
    }

  return (
    <div style={{ padding: "20px", border: "2px solid red" }}>
      <h2>Heavy Data</h2>
      <p>This is a heavy UI section</p>
    </div>
  )
  })


export default Data
