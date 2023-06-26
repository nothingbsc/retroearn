import React from "react";

import SceneObject from "../../SceneObject";

import DeathStarBody from "../../../assets/images/deathStar/deathStar.png";

const DeathStar = React.memo(props => {
  return (
    <SceneObject
      name="Red Rock"
      transform={{
        position: props.transform.position,
        scale: { x: 900, y: 600 }
      }}
      imgUrl={DeathStarBody}
    />
  );
});

export default DeathStar;
