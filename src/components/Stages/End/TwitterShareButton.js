import React from "react";

import TwitterIcon from "../../../assets/images/twitter/twitter.png";

const TwitterShareButton = React.memo(props => {


  return (
    <img
      name="TwitterShareButton"
      style={{ cursor: "pointer" }}
      onClick={() =>
        window.open(
          `https://twitter.com/retroearn`
        )
      }
      alt="Twitter Icon"
      src={TwitterIcon}
      width="150"
    />
  );
});

export default TwitterShareButton;
