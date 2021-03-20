import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comments">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
      <a href="/">{props.link1}</a>
      <span>&nbsp;</span>
      <a href="/">{props.link2}</a>
    </div>
  );
};

export default CommentDetail;
