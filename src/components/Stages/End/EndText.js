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
    
    <div
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
    </div>

    <div>
      <a style={{ textDecoration: "none" }} href="https://pancakeswap.finance/swap?outputCurrency=00xe3b9707cdA7f0bd85Ac5CE9f91131d61f247620A">
        <h3 style={{ color: "white" }}>Buy</h3> 
      </a>
      <a style={{ textDecoration: "none" }} href="https://pools.westakeit.com/bsc/0xe3b9707cda7f0bd85ac5ce9f91131d61f247620a">
        <h3 style={{ color: "white" }}>Staking Dapp</h3> 
      </a>
    </div>
  </SceneObject>
));
export default EndText;
