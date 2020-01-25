import React from "react";
import StoneHeader from "../stone-header";
import StoneBody from "../stone-body";
import StoneFooter from "../stone-footer";

const StoneLayout = props => {
  return (
    <div>
      <StoneHeader></StoneHeader>
      <StoneBody> {props.children}</StoneBody>
      <StoneFooter></StoneFooter>
    </div>
  );
};
export default StoneLayout;
