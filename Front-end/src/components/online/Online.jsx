import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbar-friend">
      <div className="rightbar-profile-img-container">
        <img
          src={user.profilePicture}
          alt=""
          className="rightbar-profile-img"
        />
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar-username">{user.username}</span>
    </li>
  );
}
