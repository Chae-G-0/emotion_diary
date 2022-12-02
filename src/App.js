import { useReducer, useRef } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

function App() {
  const reducer = (state, action) => {
    let newState = [];
    switch (action.type) {
      case "INIT": {
        return action.data;
      }
      case "CREATE": {
        const newItem = {
          ...action.data,
        };
        newState = [newItem, ...state];
        break;
      }
      case "REMOVE":
        {
          newState = state.filter((it) => it.id !== action.targetId);
          break;
        }
      case "EDIT": {
        newState = state.map((it) => it.id === action.data.id ? { ...action.data } : it)
        break;
        }
        defualt: return state;
    }
    return newState;
  };

  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);
  // CREATE

  const onCreate = (date, content, emotion) => {
    dispatch({})
  }

  // REMOVE

  // EDIT

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
