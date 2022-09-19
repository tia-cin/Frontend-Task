import React, { useState } from "react";

interface SearchProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Search: React.FC<SearchProps> = ({ setInput, handleSubmit }) => {
  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Joe Doe"
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
