import React from "react";

const Card = (props) => {
  const displayPeople = () => {
    return props.data.map((element) => {
      return (
        <div>
          <div>{element.name}</div>
          <div>{element.birthday}</div>
          <h4>My Meat Foods:</h4>
          {element.favoriteFoods.meats.map((food) => {
            return <div>{food}</div>;
          })}
        </div>
      );
    });
  };

  return (
    <div>
      <h2>The People:</h2>
      {displayPeople()};
    </div>
  );
};

export default Card;
