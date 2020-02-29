import React from "react";
import Comment from "../Comment";
import "./styles.css";

function Post({ data }) {
    return (
      <div className="container">
        <div className="profile-content">
          <img src={data.author.avatar}/>
          <div className="profile-data">
            <p className="name">{data.author.name}</p>
            <p className="date">{data.date}</p>
          </div>
        </div>
        <p className="content">{data.content}</p>
        <p className="line-divisor"></p>
        <ul>
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
        </ul>
      </div>
    );
}

export default Post;