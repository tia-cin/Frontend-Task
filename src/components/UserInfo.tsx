import React, { useState } from "react";
import "./style/UserInfo.css";
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

  console.log(user);

  return (
    <section>
      <div className="user-info">
        <h2>
          {user.name}
          <small>{user.login}</small>
        </h2>
        <p>{user.bio}</p>
      </div>
      <div className="user-avatar">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div className="user-repos">
        {repos.length > 1 &&
          repos.map((r: any, i: number) => (
            <div key={i}>
              <h5>{r.name}</h5>
              <p>{r.description}</p>
              <a href={r.html_url}>Visit</a>
            </div>
          ))}
      </div>
    </section>
  );
};
