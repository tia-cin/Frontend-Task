import React from "react";
import "./style/Home.css";

export const Home: React.FC = () => {
  return (
    <main className="home-container">
      <h1>
        Frontend Task <small>by Cintia Arce</small>
      </h1>
      <p>
        On the "search" page you can search any user from github. <br />
        While in "history", you will find all your results you get from "search"
      </p>
    </main>
  );
};
