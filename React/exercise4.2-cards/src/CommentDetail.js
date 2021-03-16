import React from "react";
import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div className="comments">
      <a href="/" className="avatar">
        <img alt="image" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          LALALA
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice post!</div>
      </div>
      <a href="/">{props.link1}</a>
      <span>&nbsp;</span>
      <a href="/">{props.link2}</a>
    </div>
  );
};

export default CommentDetail;
