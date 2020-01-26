import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRedux } from "../../lib/redux";
import { Row, Col, Card, Icon, Avatar } from "antd";
import ReactEcharts from "echarts-for-react";
import "../../../public/js/china";
import "./index.less";
import { get } from "../../lib/request";
import { getAllProvince, gelAllCityData } from "../../lib/common";

const { Meta } = Card;
const initOption = obj => {
  let option = {
    title: {
      left: "center"
    },
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["确诊病例", "疑似病例", "死亡病例", "治愈病例"]
    },
    visualMap: {
      min: 0,
      max: obj,
      left: "left",
      top: "bottom",
      text: ["高", "低"], // 文本，默认为数值文本
      calculable: true
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center",
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "确诊病例",
        type: "map",
        mapType: "china",
        roam: false,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data: [
          { name: "北京", value: Math.round(Math.random() * 1000) },
          { name: "天津", value: Math.round(Math.random() * 1000) },
          { name: "上海", value: Math.round(Math.random() * 1000) },
          { name: "重庆", value: Math.round(Math.random() * 1000) },
          { name: "河北", value: Math.round(Math.random() * 1000) },
          { name: "河南", value: Math.round(Math.random() * 1000) },
          { name: "云南", value: Math.round(Math.random() * 1000) },
          { name: "辽宁", value: Math.round(Math.random() * 1000) },
          { name: "黑龙江", value: Math.round(Math.random() * 1000) },
          { name: "湖南", value: Math.round(Math.random() * 1000) },
          { name: "安徽", value: Math.round(Math.random() * 1000) },
          { name: "山东", value: Math.round(Math.random() * 1000) },
          // { name: "新疆", value: Math.round(Math.random() * 1000) },
          { name: "江苏", value: Math.round(Math.random() * 1000) },
          { name: "浙江", value: Math.round(Math.random() * 1000) },
          { name: "江西", value: Math.round(Math.random() * 1000) },
          { name: "湖北", value: Math.round(Math.random() * 1000) },
          { name: "广西壮族自治区", value: Math.round(Math.random() * 1000) },
          { name: "甘肃", value: Math.round(Math.random() * 1000) },
          { name: "山西", value: Math.round(Math.random() * 1000) },
          { name: "内蒙古", value: Math.round(Math.random() * 1000) },
          { name: "陕西", value: Math.round(Math.random() * 1000) },
          { name: "吉林", value: Math.round(Math.random() * 1000) },
          { name: "福建", value: Math.round(Math.random() * 1000) },
          { name: "贵州", value: Math.round(Math.random() * 1000) },
          { name: "广东", value: Math.round(Math.random() * 1000) },
          { name: "青海", value: Math.round(Math.random() * 1000) },
          { name: "西藏", value: Math.round(Math.random() * 1000) },
          { name: "四川", value: Math.round(Math.random() * 1000) },
          { name: "宁夏", value: Math.round(Math.random() * 1000) },
          { name: "海南", value: Math.round(Math.random() * 1000) },
          { name: "台湾", value: Math.round(Math.random() * 1000) },
          { name: "香港", value: Math.round(Math.random() * 1000) },
          { name: "澳门", value: Math.round(Math.random() * 1000) }
        ]
      },
      {
        name: "疑似病例",
        type: "map",
        mapType: "china",
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data: [
          { name: "北京", value: Math.round(Math.random() * 1000) },
          { name: "天津", value: Math.round(Math.random() * 1000) },
          { name: "上海", value: Math.round(Math.random() * 1000) },
          { name: "重庆", value: Math.round(Math.random() * 1000) },
          { name: "河北", value: Math.round(Math.random() * 1000) },
          { name: "安徽", value: Math.round(Math.random() * 1000) },
          // { name: "新疆", value: Math.round(Math.random() * 1000) },
          { name: "浙江", value: Math.round(Math.random() * 1000) },
          { name: "江西", value: Math.round(Math.random() * 1000) },
          { name: "山西", value: Math.round(Math.random() * 1000) },
          { name: "内蒙古", value: Math.round(Math.random() * 1000) },
          { name: "吉林", value: Math.round(Math.random() * 1000) },
          { name: "福建", value: Math.round(Math.random() * 1000) },
          { name: "广东", value: Math.round(Math.random() * 1000) },
          { name: "西藏", value: Math.round(Math.random() * 1000) },
          { name: "四川", value: Math.round(Math.random() * 1000) },
          { name: "宁夏", value: Math.round(Math.random() * 1000) },
          { name: "香港", value: Math.round(Math.random() * 1000) },
          { name: "澳门", value: Math.round(Math.random() * 1000) }
        ]
      },
      {
        name: "死亡病例",
        type: "map",
        mapType: "china",
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data: [
          { name: "北京", value: Math.round(Math.random() * 1000) },
          { name: "天津", value: Math.round(Math.random() * 1000) },
          { name: "上海", value: Math.round(Math.random() * 1000) },
          { name: "广东", value: Math.round(Math.random() * 1000) },
          { name: "台湾", value: Math.round(Math.random() * 1000) },
          { name: "香港", value: Math.round(Math.random() * 1000) },
          { name: "澳门", value: Math.round(Math.random() * 1000) }
        ]
      },
      {
        name: "治愈病例",
        type: "map",
        mapType: "china",
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data: [
          { name: "北京", value: Math.round(Math.random() * 1000) },
          { name: "天津", value: Math.round(Math.random() * 1000) },
          { name: "上海", value: Math.round(Math.random() * 1000) },
          { name: "广东", value: Math.round(Math.random() * 1000) },
          { name: "台湾", value: Math.round(Math.random() * 1000) },
          { name: "香港", value: Math.round(Math.random() * 1000) },
          { name: "澳门", value: Math.round(Math.random() * 1000) }
        ]
      }
    ]
  };
  return option;
};
const HomePage = props => {
  const [loading, setLoading] = useState(true);
  const [virusInfo, setVirusInfo] = useState("");
  const [echartOption, setEchartOption] = useState(initOption(0));
  useEffect(() => {
    const firstGet = async () => {
      userInfo();
      // console.log("ffff", await gelAllCityData());
      const res = await get("/api/overall");
      if (res.data.success) {
        setVirusInfo(res.data.results[0]);
        setEchartOption(await gelAllCityData());
        setLoading(false);
      }
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
  function formatDate(object) {
    var date = new Date(object);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    //  return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
    return (
      year +
      "-" +
      (String(month).length > 1 ? month : "0" + month) +
      "-" +
      (String(day).length > 1 ? day : "0" + day) +
      " " +
      (String(hour).length > 1 ? hour : "0" + hour) +
      ":" +
      (String(minute).length > 1 ? minute : "0" + minute) +
      ":" +
      (String(second).length > 1 ? second : "0" + second)
    );
  }

  return (
    <div className="home_wrap">
      <Row>
        <Col span={4}>
          <Card loading={loading}>
            <Meta title="疫情简介" />
            <p className="info_item">
              <Icon type="bug"></Icon>
              <span className="title">🦠病毒名称：</span>
              {virusInfo.virus}
            </p>
            <p className="info_item">
              <Icon type="compass"></Icon> <span className="title">源头：</span>
              {virusInfo.infectSource}
            </p>
            <p className="info_item">
              <Icon type="apartment"></Icon>
              <span className="title">传播途径：</span>
              {virusInfo.passWay}
            </p>
            <p className="info_item">
              <Icon type="question"></Icon>
              <span className="title">疑似病例：</span>
              {virusInfo.suspect}
            </p>
            <p className="info_item">
              <Icon type="medicine-box"></Icon>
              <span className="title">确诊病例：</span>
              {virusInfo.confirmed}
            </p>
            <p className="info_item">
              <Icon type="frown"></Icon>
              <span className="title">死亡病例：</span>
              {virusInfo.death}
            </p>
            <p className="info_item">
              <Icon type="heart"></Icon>
              <span className="title">治愈人数：</span>
              {virusInfo.cured}
            </p>
            <p className="info_item">
              <Icon type="compass"></Icon>
              <span className="title">更新时间：</span>
              {formatDate(virusInfo.updateTime)}
            </p>
          </Card>
        </Col>
        <Col span={20}>
          <ReactEcharts
            option={echartOption}
            className="echart_wrap"
            style={{ height: "100%" }}
          ></ReactEcharts>
        </Col>
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
  // const res1 = await timeout(2200, { userName: "Morgan" });
  // console.log(res1);
  // console.log(res.data);
  return {
    userName: "res.userName",
    keywords: "test-key",
    description: "test-description",
    title: "stone-epidemic"
  };
};

export default withRedux(HomePage);
