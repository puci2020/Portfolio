self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/mnt/d/Projekty/portfolio/src/components/Hero/Hero.js",
    _this = undefined;







var Hero = function Hero(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      row: true,
      nopadding: true,
      style: {
        background: 'transparent',
        margin: 0
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.LeftSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          main: true,
          center: true,
          children: ["Hello ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 17
          }, _this), "I'm Adam, ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, _this), "web developer"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
          children: "Currently a final year computer science student. I specialize in web technologies, I am a fast learner and like to take on new challenges. I aspire to become a Full Stack Developer."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: Cv,
          children: "Download CV"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, _this);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbIkhlcm8iLCJwcm9wcyIsImJhY2tncm91bmQiLCJtYXJnaW4iLCJDdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsc0JBQ1gsOERBQUMsNkRBQUQ7QUFBQSwyQkFDRSw4REFBQyw2REFBRDtBQUFTLFNBQUcsTUFBWjtBQUFhLGVBQVMsTUFBdEI7QUFBdUIsV0FBSyxFQUFFO0FBQUNDLGtCQUFVLEVBQUUsYUFBYjtBQUE0QkMsY0FBTSxFQUFFO0FBQXBDLE9BQTlCO0FBQUEsNkJBRUUsOERBQUMsb0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyxrRUFBRDtBQUFjLGNBQUksTUFBbEI7QUFBbUIsZ0JBQU0sTUFBekI7QUFBQSw0Q0FDUTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURSLDZCQUVZO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFRRSw4REFBQyxvRUFBRDtBQUFRLGNBQUksRUFBRUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURXO0FBQUEsQ0FBYjs7S0FBTUosSTtBQWtCTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMzQxZWM0ZjIwYjRlZDUyYzliNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtTZWN0aW9uLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlLCBXcmFwcGVyfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQge0xlZnRTZWN0aW9ufSBmcm9tICcuL0hlcm9TdHlsZXMnO1xuaW1wb3J0IHtDVn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cydcblxuXG5jb25zdCBIZXJvID0gKHByb3BzKSA9PiAoXG4gIDxXcmFwcGVyPlxuICAgIDxTZWN0aW9uIHJvdyBub3BhZGRpbmcgc3R5bGU9e3tiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBtYXJnaW46IDB9fT5cblxuICAgICAgPExlZnRTZWN0aW9uPlxuICAgICAgICA8U2VjdGlvblRpdGxlIG1haW4gY2VudGVyPlxuICAgICAgICAgIEhlbGxvIDxici8+XG4gICAgICAgICAgSSdtIEFkYW0sIDxici8+XG4gICAgICAgICAgd2ViIGRldmVsb3BlclxuICAgICAgICA8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgPFNlY3Rpb25UZXh0PkN1cnJlbnRseSBhIGZpbmFsIHllYXIgY29tcHV0ZXIgc2NpZW5jZSBzdHVkZW50LiBJIHNwZWNpYWxpemUgaW4gd2ViIHRlY2hub2xvZ2llcywgSSBhbSBhIGZhc3RcbiAgICAgICAgICBsZWFybmVyIGFuZCBsaWtlIHRvIHRha2Ugb24gbmV3IGNoYWxsZW5nZXMuIEkgYXNwaXJlIHRvIGJlY29tZSBhIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyLjwvU2VjdGlvblRleHQ+XG4gICAgICAgIDxCdXR0b24gaHJlZj17Q3Z9PkRvd25sb2FkIENWPC9CdXR0b24+XG4gICAgICA8L0xlZnRTZWN0aW9uPlxuICAgIDwvU2VjdGlvbj5cbiAgPC9XcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdLCJzb3VyY2VSb290IjoiIn0=