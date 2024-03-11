import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
              <h4 className="profile-info-name">Hamza Ahmed</h4>
              <span className="profile-info-desc">Hello my friends!</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
