import React from 'react'
import { useSelector } from "react-redux";
import { userstate } from "./reducres/dataReducer";
import { userdata } from "./reducres/ApiReducer";
function Home() {
  const user = useSelector(userstate);
  const newuser = useSelector(userdata);
  return (
    <div>
     
      {user.map((item, index) => {
        return <h1 key={index}>{item.name}</h1>;
      })}
      <h1>{newuser}</h1>
    </div>
  );
}

export default Home