import React from "react";
import { Link } from "react-router-dom";
import "./style/History.css";

interface HistoryProps {
  history: string[];
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, value: string) => void;
}

export const History: React.FC<HistoryProps> = ({
  history,
  setInput,
  handleSubmit,
}) => {
  return (
    <div className="page-container history-container">
      <h2>Recent searches</h2>
      <div>
        {history.map((h: string, i: number) => (
          <Link to="/search" key={i}>
            <form onSubmit={(e) => handleSubmit(e, h)}>
              <button onClick={(e) => setInput(h)}>{h}</button>
            </form>
          </Link>
        ))}
      </div>
    </div>
  );
};
