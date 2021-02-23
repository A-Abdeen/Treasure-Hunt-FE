import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Treasure from "./Treasure";

const TreasureList = () => {
  const treasures = useSelector((state) => state.thingReducer.treasures);
  const user = useSelector((state) => state.authReducer.user);
  if (user) {
    const treasureList = treasures.map((treasure) => (
      <Treasure key={treasure.id} treasure={treasure} />
    ));

    return (
      <div className="container">
        <div className="row">{treasureList}</div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default TreasureList;
