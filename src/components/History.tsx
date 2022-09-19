import React from "react";
import { Link } from "react-router-dom";

interface HistoryProps {
  history: string[];
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export const History: React.FC<HistoryProps> = ({ history, setInput }) => {
  return (
    <div>
      {history.map((h) => (
        <Link to="/">
          <button onClick={(e) => setInput(h)}>{h}</button>
        </Link>
      ))}
    </div>
  );
};
