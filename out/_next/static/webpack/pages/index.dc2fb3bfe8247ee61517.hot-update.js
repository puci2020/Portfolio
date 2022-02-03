self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/mnt/d/Projekty/portfolio/src/components/TimeLine/TimeLine.js",
    _this = undefined,
    _s = $RefreshSig$();





var TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

var Timeline = function Timeline() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var scroll = function scroll(node, left) {
    return node.scrollTo({
      left: left,
      behavior: 'smooth'
    });
  };

  var handleClick = function handleClick(e, i) {
    e.preventDefault();

    if (carouselRef.current) {
      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleResize = function handleResize() {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      style: {
        paddingTop: 38
      },
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "My adventure with programming started back in high school. Then I learned the basics of C++, PHP, SQL and JavaScript. In college I started to be interested in Frontend and I try to constantly develop my technical skills by learning new technologies to become a Full Stack Developer in the future."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
            "final": index === TOTAL_CAROUSEL_COUNT - 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
              index: index,
              id: "carousel__item-".concat(index),
              active: activeItem,
              onClick: function onClick(e) {
                return handleClick(e, index);
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
                children: [item.year, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                  width: "208",
                  height: "6",
                  viewBox: "0 0 208 6",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                    fill: "url(#paint0_linear)",
                    fillOpacity: "0.33"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                      id: "paint0_linear",
                      x1: "-4.30412e-10",
                      y1: "0.5",
                      x2: "208",
                      y2: "0.500295",
                      gradientUnits: "userSpaceOnUse",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        stopColor: "white"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        offset: "0.79478",
                        stopColor: "white",
                        stopOpacity: "0"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: function onClick(e) {
            return handleClick(e, index);
          },
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s(Timeline, "qE2Y7awmqdFA9rYczLkhjQwwAdI=");

_c = Timeline;
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

var _c;

$RefreshReg$(_c, "Timeline");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiXSwibmFtZXMiOlsiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsInVzZVN0YXRlIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhZGRpbmdUb3AiLCJpdGVtIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBV0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxxRUFBN0I7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNlQywrQ0FBUSxDQUFDLENBQUQsQ0FEdkI7QUFBQSxNQUNkQyxVQURjO0FBQUEsTUFDRkMsYUFERTs7QUFFckIsTUFBTUMsV0FBVyxHQUFHQyw2Q0FBTSxFQUExQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDN0IsV0FBT0QsSUFBSSxDQUFDRSxRQUFMLENBQWM7QUFBRUQsVUFBSSxFQUFKQSxJQUFGO0FBQVFFLGNBQVEsRUFBRTtBQUFsQixLQUFkLENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBSUMs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QUE7QUFBQTtBQUFBO0FBQUEsYUF6REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2RFMsQ0FqR1g7O0dBQU1yQixROztLQUFBQSxRO0FBbUdJLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRjMmZiM2JmZTgyNDdlZTYxNTE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ2Fyb3VzZWxCdXR0b24sXG4gIENhcm91c2VsQnV0dG9uRG90LFxuICBDYXJvdXNlbEJ1dHRvbnMsXG4gIENhcm91c2VsQ29udGFpbmVyLFxuICBDYXJvdXNlbEl0ZW0sXG4gIENhcm91c2VsSXRlbUltZyxcbiAgQ2Fyb3VzZWxJdGVtVGV4dCxcbiAgQ2Fyb3VzZWxJdGVtVGl0bGUsXG4gIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxufSBmcm9tICcuL1RpbWVMaW5lU3R5bGVzJztcbmltcG9ydCB7U2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGV9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7VGltZUxpbmVEYXRhfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNyAqIChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aCkpO1xuXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKiBUaW1lTGluZURhdGEubGVuZ3RoKTtcblxuICAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAvLyAvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBpZD1cImFib3V0XCI+XG4gICAgICA8U2VjdGlvbkRpdmlkZXIvPlxuICAgICAgPFNlY3Rpb25UaXRsZSBzdHlsZT17e3BhZGRpbmdUb3A6IDM4fX0+QWJvdXQgTWU8L1NlY3Rpb25UaXRsZT5cbiAgICAgIDxTZWN0aW9uVGV4dD5NeSBhZHZlbnR1cmUgd2l0aCBwcm9ncmFtbWluZyBzdGFydGVkIGJhY2sgaW4gaGlnaCBzY2hvb2wuIFRoZW4gSSBsZWFybmVkIHRoZSBiYXNpY3Mgb2YgQysrLCBQSFAsIFNRTCBhbmQgSmF2YVNjcmlwdC4gSW4gY29sbGVnZSBJIHN0YXJ0ZWQgdG8gYmUgaW50ZXJlc3RlZCBpbiBGcm9udGVuZCBhbmQgSSB0cnkgdG8gY29uc3RhbnRseSBkZXZlbG9wIG15IHRlY2huaWNhbCBza2lsbHMgYnkgbGVhcm5pbmcgbmV3IHRlY2hub2xvZ2llcyB0byBiZWNvbWUgYSBGdWxsIFN0YWNrIERldmVsb3BlciBpbiB0aGUgZnV0dXJlLjwvU2VjdGlvblRleHQ+XG4gICAgICA8Q2Fyb3VzZWxDb250YWluZXIgcmVmPXtjYXJvdXNlbFJlZn0gb25TY3JvbGw9e2hhbmRsZVNjcm9sbH0+XG4gICAgICAgIDw+XG4gICAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIGtleT17aW5kZXh9IGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfT5cbiAgICAgICAgICAgICAgPENhcm91c2VsSXRlbSBpbmRleD17aW5kZXh9IGlkPXtgY2Fyb3VzZWxfX2l0ZW0tJHtpbmRleH1gfSBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX0+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ueWVhcn1cbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1JbWdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDggNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9XCIwLjMzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCItNC4zMDQxMmUtMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDI9XCIyMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCIwLjUwMDI5NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAuNzk0NzhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BPcGFjaXR5PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtSW1nPlxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XG5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGV4dD57aXRlbS50ZXh0fTwvQ2Fyb3VzZWxJdGVtVGV4dD5cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICA8L0Nhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxuICAgICAgPENhcm91c2VsQnV0dG9ucz5cbiAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+KFxuICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbiBrZXk9e2luZGV4fSBpbmRleD17aW5kZXh9IGFjdGl2ZT17YWN0aXZlSXRlbX0gb25DbGljaz17KGUpPT5oYW5kbGVDbGljayhlLCBpbmRleCl9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbkRvdCBhY3RpdmU9e2FjdGl2ZUl0ZW19Lz5cbiAgICAgICAgICA8L0Nhcm91c2VsQnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWxCdXR0b25zPlxuICAgICAgPFNlY3Rpb25EaXZpZGVyLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==