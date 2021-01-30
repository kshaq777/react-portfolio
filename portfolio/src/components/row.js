import React from "react";

function Row(props) {
  return <div className={"row " + props.rowStyle} {...props} />;
}

export default Row;
