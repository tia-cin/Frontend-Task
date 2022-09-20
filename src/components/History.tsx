import React from "react";
import { Link } from "react-router-dom";

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
    <div>
      {history.map((h: string, i: number) => (
        <Link to="/search" key={i}>
          <form onSubmit={(e) => handleSubmit(e, h)}>
            <input type="submit" value={h} onClick={(e) => setInput(h)} />
          </form>
        </Link>
      ))}
    </div>
  );
};
