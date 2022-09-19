import React, { useEffect, useState } from "react";
import axios from "axios";

interface UserInfoProps {
  user: any;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const [repos, setRepos] = useState<Array<any>>([]);

  const getUserRepos = async () => {
    const req = await axios.get(user.repos_url);
    const res = (await req.status) === 200 ? req.data : null;
    setRepos(res);
  };

  getUserRepos();

  return (
    <div>
      <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
      <div>
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div>
        {repos.length > 1 &&
          repos.map((r: any, i: number) => (
            <div key={i}>
              <h5>{r.name}</h5>
              <p>{r.description}</p>
              <a href={r.html_url}>Visit</a>
            </div>
          ))}
      </div>
    </div>
  );
};