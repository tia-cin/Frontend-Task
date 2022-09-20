import React from "react";
import { useLocation } from "react-router-dom";
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
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e, input)}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Joe Doe"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" />
          <small>Please click or "enter" </small>
        </form>
      </div>
      <div>
        {loading ? (
          <UserInfo user={current} />
        ) : loading !== undefined ? (
          <h3>Loading...</h3>
        ) : null}
      </div>
    </div>
  );
};
