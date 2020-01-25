import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRedux } from "../../lib/redux";
import { Button } from "antd";
import Router from "next/router";
const useCounter = () => {
  const count = useSelector(state => state.name);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({
      type: "CHANGENAME",
      name: `${count}/sb`
    });
    Router.push("/");
  };

  return { increment, count };
};

const HomePage = props => {
  const { increment, count } = useCounter();
  useEffect(() => {
    const firstGet = async () => {
      document.title = ` ${count} times`;
      // document.title = ` ${count22} times`;
      // setCount(count22 + "sb");
      // 做你想做的事情
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

  return (
    <div>
      <p>{count}</p>
      <Button type="primary" onClick={increment}>
        跳转
      </Button>
      <p>{props.username}</p>
    </div>
  );
};
const timeout = (ms, result) => {
  return new Promise(resolve => setTimeout(() => resolve(result), ms));
};
HomePage.getInitialProps = async ({ reduxStore }) => {
  // Tick the time once, so we'll have a
  // valid time before first render

  // const { dispatch } = reduxStore;
  // dispatch({
  //   name: "得到的"
  // });
  return await timeout(200, { userName: "Morgan" });
};
export default withRedux(HomePage);
