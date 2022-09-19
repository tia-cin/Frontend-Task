import React from "react";
import { UserInfo } from "./UserInfo";

interface SearchProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  current: any;
}

export const Search: React.FC<SearchProps> = ({
  setInput,
  handleSubmit,
  input,
  current,
}) => {
  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Joe Doe"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
      <div>{current && <UserInfo user={current} />}</div>
    </div>
  );
};
