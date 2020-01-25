import React from "react";
import "./index.less";
const StoneBody = props => {
  return (
    <div className="stone-body">
      <h1>body</h1>
      {props.children}
    </div>
  );
};
export default StoneBody;
