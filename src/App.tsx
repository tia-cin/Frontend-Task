import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import { History } from "./components/History";
import { Search } from "./components/Search";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";

export const App: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [current, setCurrent] = useState<any>();
  const [loading, setLoading] = useState<boolean>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    setLoading(false);
    searchUser(value);
    setHistory([...history, input]);
  };

  const searchUser = async (username: string) => {
    const request = await axios.get(`https://api.github.com/users/${username}`);
    const response = (await request.status) === 200 ? request.data : null;
    setCurrent(response);
    setLoading(true);
    setInput("");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/search"
              element={
                <Search
                  loading={loading}
                  current={current}
                  setInput={setInput}
                  handleSubmit={handleSubmit}
                  input={input}
                />
              }
            />
            <Route
              path="/history"
              element={
                <History
                  history={history}
                  setInput={setInput}
                  handleSubmit={handleSubmit}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
