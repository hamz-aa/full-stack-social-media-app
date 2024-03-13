import { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import axios from "axios";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const response = await axios.get(`/users?username=osama`);
    console.log(response);
    setUser(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                src={`${PF}post/3.jpeg`}
                className="profile-cover-img"
                alt=""
              />
              <img
                src={`${PF}person/7.jpeg`}
                className="profile-user-img"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">{user.username || ""}</h4>
              <span className="profile-info-desc">{user.desc || ""}</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed username="osama" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
