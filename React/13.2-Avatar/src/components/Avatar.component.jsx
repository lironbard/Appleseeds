import "./avatar.styles.css";

const Avatar = ({ avatar }) => {
  return (
    <div className="avatar">
      <h4>
        {avatar.firstName}
        {avatar.lastName}
      </h4>
      <img src={avatar.image} alt="" />
    </div>
  );
};

export default Avatar;
