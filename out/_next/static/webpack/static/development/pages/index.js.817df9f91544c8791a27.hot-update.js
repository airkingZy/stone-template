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






var _jsxFileName = "/Users/zy/project/stone-store/src/pages/index/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var option = {
  title: {
    text: "堆叠区域图"
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985"
      }
    }
  },
  legend: {
    data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [{
    type: "category",
    boundaryGap: false,
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  }],
  yAxis: [{
    type: "value"
  }],
  series: [{
    name: "邮件营销",
    type: "line",
    stack: "总量",
    areaStyle: {},
    data: [120, 132, 101, 134, 90, 230, 210]
  }, {
    name: "联盟广告",
    type: "line",
    stack: "总量",
    areaStyle: {},
    data: [220, 182, 191, 234, 290, 330, 310]
  }, {
    name: "视频广告",
    type: "line",
    stack: "总量",
    areaStyle: {},
    data: [150, 232, 201, 154, 190, 330, 410]
  }, {
    name: "直接访问",
    type: "line",
    stack: "总量",
    areaStyle: {},
    data: [320, 332, 301, 334, 390, 330, 320]
  }, {
    name: "搜索引擎",
    type: "line",
    stack: "总量",
    label: {
      normal: {
        show: true,
        position: "top"
      }
    },
    areaStyle: {},
    data: [820, 932, 901, 934, 1290, 1330, 1320]
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
      lineNumber: 107
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    onClick: userInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "col-12")), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "col-12")), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "col-8"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "col-8"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "col-8")), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "col-6"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "col-6"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "col-6"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "col-6")));
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
//# sourceMappingURL=index.js.817df9f91544c8791a27.hot-update.js.map