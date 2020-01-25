import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRedux } from "../../lib/redux";
import { Row, Col } from "antd";
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

  return (
    <div>
      <Row>
        <div onClick={userInfo}>
          <Col span={12}>col-12</Col>
        </div>
        <Col span={12}>col-12</Col>
      </Row>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
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
  // const res = await timeout(2200, { userName: "Morgan" });
  // console.log(res);
  return {
    userName: "res.userName",
    keywords: "test-key",
    description: "test-description",
    title: "template"
  };
};

export default withRedux(HomePage);
