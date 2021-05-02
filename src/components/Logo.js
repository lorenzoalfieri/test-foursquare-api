import React from "react";
import PropTypes from "prop-types";

const Logo = ({ className, onClick }) => {
  let srcLogo = "izicap-logo-white.png";

  return (
    <img
      style={{ cursor: "pointer" }}
      onClick={onClick}
      className={className}
      src={srcLogo}
      alt=""
    />
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Logo;
