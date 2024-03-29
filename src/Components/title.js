import React from "react";
import PropTypes from "prop-types";

function Title(props) {
  return <h1>{props.title}</h1>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
