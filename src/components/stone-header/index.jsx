import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";
import { Row, Col, Menu, Icon } from "antd";
const { SubMenu } = Menu;
import MenuList from "../../lib/menu.js";
import Router from "next/router";
const StoneHeader = () => {
  const dispatch = useDispatch();
  const handleClick = (e, num) => {
    changeCurrent(num).then(() => {
      Router.push(e.url);
    });
  };
  const changeCurrent = async num => {
    await dispatch({
      type: "CHANGECURRENT",
      current: num
    });
  };
  useEffect(() => {
    const firstGet = async () => {
      // 做你想做的事情
    };
    firstGet();
  }, []);
  // const [current, setCurrent] = useState("0");
  const initMenu = obj => {
    return (
      <Menu selectedKeys={[current]} mode="horizontal">
        {obj.map((item, index) => {
          return (
            <Menu.Item
              key={index}
              className="stone-menu-item"
              onClick={() => handleClick(item, index)}
            >
              <Icon type={item.icon} />
              {item.name}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };
  const current = useSelector(state => state.current);
  return (
    <div className="stone-header">
      <Row>
        <Col span={12}>
          <div className="logo">
            <img src="/images/logo.jpg" alt="my image" />
            <span className="title">Stone Epidemic</span>
          </div>
        </Col>
        <Col span={12}>{initMenu(MenuList)}</Col>
      </Row>
    </div>
  );
};
export default StoneHeader;
