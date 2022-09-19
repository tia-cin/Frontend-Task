import React, { useState, useReducer } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import { History } from "./components/History";
import { Search } from "./components/Search";
import { Navbar } from "./components/Navbar";

export const App: React.FC = () => {
  const [history, setHistory] = useState<Array<string>>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchUser(input);
    setHistory([...history, input]);
  };

  const searchUser = async (username: string) => {
    const request = await axios.get(`https://api.github.com/users/${username}`);
    const response = (await request.status) === 200 ? request.data : null;
    console.log(response);
  };

  console.log("====================================");
  console.log(history);
  console.log("====================================");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Search
                setInput={setInput}
                handleSubmit={handleSubmit}
                input={input}
              />
            }
          />
          <Route
            path="/history"
            element={<History history={history} setInput={setInput} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
