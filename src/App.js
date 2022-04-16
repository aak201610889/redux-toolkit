import React, { useState } from 'react'
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./reducres/counterReducer";
import { themingState, themeAction } from "./reducres/themeReducer";
import { AddAction, userstate } from "./reducres/dataReducer";
import Home from './Home';

function App() {
  const count = useSelector(selectCount)
  const theming = useSelector(themingState);
  const user = useSelector(userstate);
  const dispatch = useDispatch();


  const [Newuser, setNewuser] = useState({name:''})
  const adding = (Newuser) => {
    dispatch(AddAction(Newuser))
    setNewuser('')
  }
  

  return (
    <div className={theming ? "Appblack" : "App"}>
      <Home/>
      <button onClick={() => dispatch(themeAction())}>change</button>
      <h1>{count}</h1>
      <input type="text" onChange={(e) => setNewuser({name:e.target.value})} />

      <button onClick={()=>adding(Newuser)}>adding</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

    </div>
  );
}

export default App;
