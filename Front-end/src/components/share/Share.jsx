import { useContext, useRef, useState } from "react";
import "./share.css";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id.$oid,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            className="share-profile-img"
            alt=""
          />
          <input
            type="text"
            className="share-input"
            placeholder={"What's in your mind " + user.username + "?"}
            ref={desc}
          />
        </div>
        <hr className="share-hr" />
        <form className="share-bottom" onSubmit={submitHandler}>
          <div className="share-options">
            <label htmlFor="file" className="share-option">
              <PermMedia className="share-icon" htmlColor="tomato" />
              <span className="share-option-text">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                name=""
                id="file"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="share-option">
              <Label className="share-icon" htmlColor="blue" />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <Room className="share-icon" htmlColor="green" />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotions className="share-icon" htmlColor="goldenrod" />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>
          <button className="share-button" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
