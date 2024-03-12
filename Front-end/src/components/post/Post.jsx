import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`users/${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={user.profilePicture || PF + "person/noAvatar.png"}
              className="post-profile-img"
              alt=""
            />
            <span className="post-username">{user.username}</span>
            <span className="post-date">{format(post.createdAt)}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img src={PF + post.img} className="post-img" alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img
              src={`${PF}like.png`}
              className="like-icon"
              onClick={likeHandler}
              alt=""
            />
            <img
              src={`${PF}heart.png`}
              className="like-icon"
              onClick={likeHandler}
              alt=""
            />
            <span className="post-like-counter">{like} people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
