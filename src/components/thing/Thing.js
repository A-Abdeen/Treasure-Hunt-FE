import React from "react";
import { ItemWrapper } from "../../styles.js";

const Thing = (props) => {
  const thing = props.thing;
  return (
    <ItemWrapper className="col-4">
      <p>{thing.name}</p>
    </ItemWrapper>
  );
};

export default Thing;
