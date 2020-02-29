import React from  "react";
import "./styles.css";

function Comment({ data }) {
  return (
    <li>
      <div className="content">
        <img src={data.author.avatar} />
        <div>
          <span>
            <span className="label">{data.author.name}</span> {data.content}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Comment;