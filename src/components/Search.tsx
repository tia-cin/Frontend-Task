import React from "react";
import "./style/Search.css";
import { UserInfo } from "./UserInfo";

interface SearchProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, value: string) => void;
  input: string;
  current: any;
  loading: boolean | undefined;
}

export const Search: React.FC<SearchProps> = ({
  setInput,
  handleSubmit,
  input,
  current,
  loading,
}) => {
  return (
    <div className="page-container search-container">
      <div>
        <form onSubmit={(e) => handleSubmit(e, input)}>
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit"></button>
        </form>
      </div>
      <div>
        {loading ? (
          <UserInfo user={current} />
        ) : loading !== undefined ? (
          <span className="loader"></span>
        ) : null}
      </div>
    </div>
  );
};
