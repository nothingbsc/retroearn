import React from "react";
import SceneObject from "../../SceneObject";

import TwitterShareButton from "./TwitterShareButton";
import TelegramShareButton from "./TelegramShareButton";

const EndText = React.memo(props => (
  <SceneObject
    name="Join Us"
    transform={{
      position: props.transform.position,
      scale: { x: "auto", y: "auto" },
      rotation: props.transform.rotation
    }}
  >
    <TwitterShareButton />
    <TelegramShareButton />
    
    <a
      style={{ textDecoration: "none" }}
      href="#"
    >
      <h2 style={{ color: "#6B6B6B" }}>
        &gt;10% Tax
        <br />
      </h2>
      <h2 style={{ color: "#6B6B6B" }}>
        &gt;Play Retro Games
        <br />
      </h2>
      <h2 style={{ color: "#6B6B6B" }}>
        &gt;Earn Crypto
        <br />
      </h2>
    </a>

    <a style={{ textDecoration: "none" }} href="#">
      <h3 style={{ color: "white" }}>Buy</h3>
      <h3 style={{ color: "white" }}>Staking Dapp</h3>
    </a>
  </SceneObject>
));
export default EndText;
