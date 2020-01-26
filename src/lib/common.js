import { get } from "./request";

const getAllProvince = async () => {
  return await get("api/provinceName");
};
const fncTest = async () => {
  gelAllCityData();
};
//遍历查询全部城市
const gelAllCityData = async () => {
  let option = {
    title: {
      left: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: function(params) {
        var res = params.name + "<br/>";
        var myseries = option.series;
        for (var i = 0; i < myseries.length; i++) {
          for (var j = 0; j < myseries[i].data.length; j++) {
            if (myseries[i].data[j].name == params.name) {
              res +=
                myseries[i].name + " : " + myseries[i].data[j].value + "</br>";
            }
          }
        }
        return res;
      }
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["确诊病例", "疑似病例", "死亡病例", "治愈病例"]
    },
    visualMap: {
      min: 0,
      max: 0,
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
        data: []
      },
      {
        name: "疑似病例",
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
        data: []
      },
      {
        name: "死亡病例",
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
        data: []
      },
      {
        name: "治愈病例",
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
        data: []
      }
    ]
  };
  const ooo = await getAllProvince();
  const provinceName = ooo.data.results;
  for (const item of provinceName) {
    const res = await get(`api/province?province=${item}`);
    const data = res.data.results[res.data.results.length - 1];
    const num = option.visualMap.max;
    option.visualMap.max =
      num +
      data.confirmedCount +
      data.suspectedCount +
      data.deadCount +
      data.curedCount;
    if (data.confirmedCount > 0) {
      option.series[0].data.push({
        name: data.provinceShortName,
        value: data.confirmedCount
      });
    }
    if (data.suspectedCount > 0) {
      option.series[1].data.push({
        name: data.provinceShortName,
        value: data.suspectedCount
      });
    }
    if (data.deadCount > 0) {
      option.series[2].data.push({
        name: data.provinceShortName,
        value: data.deadCount
      });
    }
    if (data.curedCount > 0) {
      option.series[3].data.push({
        name: data.provinceShortName,
        value: data.curedCount
      });
    }
  }
  console.log("option", option);
  return option;
};
module.exports = { getAllProvince, fncTest, gelAllCityData };
