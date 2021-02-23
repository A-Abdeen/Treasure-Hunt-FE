import React from "react";
import { useSelector } from "react-redux";
import Thing from "./Thing";

const ThingList = () => {
  const things = useSelector((state) => state.thingReducer.things);

  const thingList = things.map((thing) => (
    <Thing key={thing.id} thing={thing} />
  ));

  return (
    <div className="container">
      <div className="row">{thingList}</div>
    </div>
  );
};

export default ThingList;
