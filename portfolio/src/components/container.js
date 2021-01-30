import React from "react";

function Container(props) {
  return <div className={`${props.fluid ? "container-fluid " + props.class : "container " + props.class}`}>{props.children}</div>;

}

export default Container;
