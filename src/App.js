import React from "react";

import Header from "./component/Header";
import Main from "./component/Main";
import data from "./component/data";

function App(){
  const travelData = data.map( item =>{
    return <Main 
      key = {item.id}
      item = {item}
    />
  })

  return(
    <>
      <Header />
      <div className="main-cont">
        {travelData}
      </div>
    </>
  )
}

export default App