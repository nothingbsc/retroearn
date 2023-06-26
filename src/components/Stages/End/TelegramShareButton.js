import React from "react";

import TelegramIcon from "../../../assets/images/telegram/telegram.png";

const TelegramShareButton = React.memo(props => {

  return (
    <img
      name="TelegramShareButton"
      style={{ cursor: "pointer" }}
      onClick={() =>
        window.open(
          `https://web.telegram.org`,
        )
      }
      alt="Twitter Icon"
      src={TelegramIcon}
      width="100"
    />
  );
});

export default TelegramShareButton;
