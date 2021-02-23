import React from "react";
import { useSelector } from "react-redux";
import Treasure from "./Treasure";

const TreasureList = () => {
  const treasures = useSelector((state) => state.treasures.treasures);

  const treasureList = treasures.map((treasure) => (
    <Treasure key={treasure.id} treasure={treasure} />
  ));

  return (
    <div className="container">
      <div className="row">{treasureList}</div>
    </div>
  );
};

export default TreasureList;
