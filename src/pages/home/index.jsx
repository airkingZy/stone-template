import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRedux } from "../../lib/redux";
import { Button } from "antd";
import Router from "next/router";
const HomePage = props => {
  useEffect(() => {
    const firstGet = async () => {
      userInfo();
    };
    firstGet();
    return componentWillUnmount;
  }, []);
  function componentWillUnmount() {
    // 组件销毁时你要执行的代码
    console.log("组件销毁？");
  }
  function userInfo() {
    console.log("组件完成");
  }
  function backHome() {
    Router.push("/");
  }
  return (
    <div>
      <div>
        <Button type="primary" onClick={backHome}>
          回到首页
        </Button>
      </div>
    </div>
  );
};

HomePage.getInitialProps = async ({ reduxStore }) => {
  // Tick the time once, so we'll have a
  // valid time before first render
  // const { dispatch } = reduxStore;
  // dispatch({
  //   name: "得到的"
  // });
};
export default withRedux(HomePage);
