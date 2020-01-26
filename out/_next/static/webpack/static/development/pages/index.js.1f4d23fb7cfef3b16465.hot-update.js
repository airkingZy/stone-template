webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/redux */ "./src/lib/redux.js");
/* harmony import */ var echarts_for_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! echarts-for-react */ "./node_modules/echarts-for-react/lib/index.js");
/* harmony import */ var echarts_for_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(echarts_for_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_js_china__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/js/china */ "./public/js/china.js");
/* harmony import */ var _public_js_china__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_js_china__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/zy/project/stone-store/src/pages/index/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var option = {
  title: {
    text: "stone传播",
    subtext: "纯属虚构",
    left: "center"
  },
  tooltip: {
    trigger: "item"
  },
  legend: {
    orient: "vertical",
    left: "left" // data: ["iphone3", "iphone4", "iphone5"]

  },
  visualMap: {
    min: 0,
    max: 2500,
    left: "left",
    top: "bottom",
    text: ["高", "低"],
    // 文本，默认为数值文本
    calculable: true
  },
  toolbox: {
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
      mark: {
        show: true
      },
      dataView: {
        show: true,
        readOnly: false
      },
      restore: {
        show: true
      },
      saveAsImage: {
        show: true
      }
    }
  },
  series: [{
    name: "iphone3",
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
    data: [{
      name: "北京",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "天津",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "上海",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "重庆",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "河北",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "河南",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "云南",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "辽宁",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "黑龙江",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "湖南",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "安徽",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "山东",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "新疆",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "江苏",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "浙江",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "江西",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "湖北",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "广西",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "甘肃",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "山西",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "内蒙古",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "陕西",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "吉林",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "福建",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "贵州",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "广东",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "青海",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "西藏",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "四川",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "宁夏",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "海南",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "台湾",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "香港",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "澳门",
      value: Math.round(Math.random() * 1000)
    }]
  }, {
    name: "iphone4",
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
    data: [{
      name: "北京",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "天津",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "上海",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "重庆",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "河北",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "安徽",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "新疆",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "浙江",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "江西",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "山西",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "内蒙古",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "吉林",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "福建",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "广东",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "西藏",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "四川",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "宁夏",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "香港",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "澳门",
      value: Math.round(Math.random() * 1000)
    }]
  }, {
    name: "iphone5",
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
    data: [{
      name: "北京",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "天津",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "上海",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "广东",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "台湾",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "香港",
      value: Math.round(Math.random() * 1000)
    }, {
      name: "澳门",
      value: Math.round(Math.random() * 1000)
    }]
  }]
};

var HomePage = function HomePage(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var firstGet = function firstGet() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.async(function firstGet$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
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

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx(echarts_for_react__WEBPACK_IMPORTED_MODULE_9___default.a, {
    option: option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }))));
};

var timeout = function timeout(ms, result) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
    return setTimeout(function () {
      return resolve(result);
    }, ms);
  });
};

HomePage.getInitialProps = function _callee(_ref) {
  var reduxStore;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          reduxStore = _ref.reduxStore;
          return _context2.abrupt("return", {
            userName: "res.userName",
            keywords: "test-key",
            description: "test-description",
            title: "stone-epidemic"
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_redux__WEBPACK_IMPORTED_MODULE_8__["withRedux"])(HomePage));

/***/ })

})
//# sourceMappingURL=index.js.1f4d23fb7cfef3b16465.hot-update.js.map