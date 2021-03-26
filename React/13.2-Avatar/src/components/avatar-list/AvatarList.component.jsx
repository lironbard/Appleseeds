import "./avatar-list.styles.css";
import Avatar from "../Avatar.component";
import React from "react";

const AvatarList = ({ data }) => {
  console.log(data);
  return (
    <div className="avatar-container">
      {data.map((avatar, i) => {
        return (
          <React.Fragment key={avatar.id}>
            <Avatar avatar={avatar} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AvatarList;
