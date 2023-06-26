import React from "react";
import SceneObject from "../../SceneObject";

const visibleRange = [0, 8050];
const LotrEnvironmentLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="Lotr Environment Layer">
      <SceneObject
        name="GRASS"
        color="#16993d"
        transform={{ position: { x: -2000, y: 0 }, scale: { x: 5786, y: 270 } }}
      />
      <SceneObject
        name="GRASS"
        color="#16993d"
        transform={{
          position: { x: 3701, y: 66 },
          scale: { x: 240, y: 140 },
          rotation: 45
        }}
      />
    </SceneObject>
  );
});

export default LotrEnvironmentLayer;
