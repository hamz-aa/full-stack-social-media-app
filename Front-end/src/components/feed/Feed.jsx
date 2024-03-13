import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("posts/timeline/65b7801f1940ed3a320844ca");
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {posts.map((p) => (
          <Post post={p} key={p._id} />
        ))}
      </div>
    </div>
  );
}
