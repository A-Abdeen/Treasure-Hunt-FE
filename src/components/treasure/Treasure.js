import React from "react";
import { ItemWrapper } from "../../styles";

const Treasure = (props) => {
  const treasure = props.treasure;
  return (
    <ItemWrapper className="col-4">
      <p>{treasure.name}</p>
    </ItemWrapper>
  );
};

export default Treasure;
