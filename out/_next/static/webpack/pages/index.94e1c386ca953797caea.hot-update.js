self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logo": function() { return /* binding */ logo; },
/* harmony export */   "CV": function() { return /* binding */ CV; },
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; },
/* harmony export */   "technologies": function() { return /* binding */ technologies; },
/* harmony export */   "tools": function() { return /* binding */ tools; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var logo = '/images/web.png';
var CV = 'Adam_Pucicki_CV.pdf';
var projects = [{
  title: 'Message App',
  description: "Instant Messenger as a PWA application, built on top of WhatsApp. Allows you to create a room that can contain multiple people. Supports adding attachments, emoji and converting speech to text to write messages. Implements authentication with Google, Facebook and email address.",
  image: '/images/messageapp.png',
  tags: ['React.js', 'Firebase'],
  source: 'https://github.com/puci2020/Message-App',
  visit: 'https://message-app-a30e4.web.app/',
  id: 0
}, {
  title: 'Fuddi Landing Page',
  description: "This website presents the concept of a mobile application where everyone can sell their own crops and handicraft products. Then users can buy these products at good prices for everyone. It includes a contact form in it and also a blog where new posts can be added after logging in. It is available in two language versions.",
  image: '/images/fuddilanding.png',
  tags: ['React.js', 'Firebase'],
  source: 'https://github.com/puci2020/Fuddi-Landing-Page',
  visit: 'https://puci2020.github.io/Fuddi-Landing-Page/#/Fuddi-Landing-Page/home',
  id: 1
}, {
  title: 'KUL Landing Page',
  description: "The site promotes the 2020 reunion event for psychology graduates of the Catholic University of Lublin. It has in it a gallery of photos from the previous event and allows you to sign up for the event through a form. The available admin panel allows you to control who has signed up and check off if they have paid to attend. In addition, it is possible to export the list as a PDF and CSV file.",
  image: '/images/3.jpg',
  tags: ['HTML', 'JavaScript', 'PHP', 'SASS'],
  source: 'https://github.com/puci2020/Fuddi-Landing-Page',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'Unichat',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: '/images/4.jpg',
  tags: ['React', 'ChatEngine', 'Firebase'],
  source: 'https://github.com/puci2020/KULwebsite',
  visit: 'https://google.com',
  id: 3
}];
var TimeLineData = [{
  year: 2017,
  text: 'Started my journey'
}, {
  year: 2018,
  text: 'Worked as a freelance developer'
}, {
  year: 2019,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
  text: 'Started my own platform'
}];
var technologies = [{
  id: 1,
  name: "React.js",
  image: '/images/react.png'
}, {
  id: 2,
  name: "Angular",
  image: '/images/angular.png'
}, {
  id: 3,
  name: "Redux",
  image: '/images/redux.png'
}, {
  id: 4,
  name: "HTML 5",
  image: '/images/html.png'
}, {
  id: 5,
  name: "CSS 3",
  image: '/images/css.png'
}, {
  id: 6,
  name: "SASS",
  image: '/images/sass.png'
}, {
  id: 11,
  name: "LESS",
  image: '/images/less.png'
}, {
  id: 7,
  name: "JavaScript",
  image: '/images/js.png'
}, {
  id: 8,
  name: "TypeScript",
  image: '/images/ts.png'
}, {
  id: 13,
  name: "ASP.NET Core",
  image: '/images/aspnet.png'
}, {
  id: 9,
  name: "Firebase",
  image: '/images/firebase.png'
}, {
  id: 10,
  name: "SQL",
  image: '/images/sql.png'
}];
var tools = [{
  id: 9,
  name: "WebStorm",
  image: '/images/webstorm.png'
}, {
  id: 10,
  name: "Visual Studio Code",
  image: '/images/vscode.png'
}, {
  id: 5,
  name: "Postman",
  image: '/images/postman.png'
}, {
  id: 8,
  name: "NPM",
  image: '/images/npm.png'
}, {
  id: 11,
  name: "Yarn",
  image: '/images/yarn.png'
}, {
  id: 14,
  name: "GIT",
  image: '/images/git.png'
}, {
  id: 7,
  name: "Slack",
  image: '/images/slack.png'
}, {
  id: 6,
  name: "Trello",
  image: '/images/trello.png'
}, {
  id: 12,
  name: "Ubuntu",
  image: '/images/ubuntu.png'
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsibG9nbyIsIkNWIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0IiwidGVjaG5vbG9naWVzIiwibmFtZSIsInRvb2xzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsSUFBSSxHQUFHLGlCQUFiO0FBRUEsSUFBTUMsRUFBRSxHQUFHLHFCQUFYO0FBRUEsSUFBTUMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBRSx3UkFGZjtBQUdFQyxPQUFLLEVBQUUsd0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUseUNBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxvQkFEVDtBQUVFQyxhQUFXLEVBQUUscVVBRmY7QUFHRUMsT0FBSyxFQUFFLDBCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFVBQUQsRUFBYSxVQUFiLENBSlI7QUFLRUMsUUFBTSxFQUFFLGdEQUxWO0FBTUVDLE9BQUssRUFBRSx5RUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVcsRUFBRSw2WUFGZjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsWUFBVCxFQUF1QixLQUF2QixFQUE4QixNQUE5QixDQUpSO0FBS0VDLFFBQU0sRUFBRSxnREFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFTixPQUFLLEVBQUUsU0FEVDtBQUVFQyxhQUFXLEVBQUUsZ0lBRmY7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsd0NBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUJzQixDQUFqQjtBQXVDQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBQ0MsTUFBSSxFQUFFLElBQVA7QUFBYUMsTUFBSSxFQUFFO0FBQW5CLENBRDBCLEVBRTFCO0FBQUNELE1BQUksRUFBRSxJQUFQO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQUYwQixFQUcxQjtBQUFDRCxNQUFJLEVBQUUsSUFBUDtBQUFhQyxNQUFJLEVBQUU7QUFBbkIsQ0FIMEIsRUFJMUI7QUFBQ0QsTUFBSSxFQUFFLElBQVA7QUFBYUMsTUFBSSxFQUFFO0FBQW5CLENBSjBCLEVBSzFCO0FBQUNELE1BQUksRUFBRSxJQUFQO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQUwwQixDQUFyQjtBQVFBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUNFSixJQUFFLEVBQUUsQ0FETjtBQUVFSyxNQUFJLEVBQUUsVUFGUjtBQUdFVCxPQUFLLEVBQUU7QUFIVCxDQUQwQixFQUt2QjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsU0FGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQUx1QixFQVN2QjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsT0FGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQVR1QixFQWF2QjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsUUFGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQWJ1QixFQWlCdkI7QUFDREksSUFBRSxFQUFFLENBREg7QUFFREssTUFBSSxFQUFFLE9BRkw7QUFHRFQsT0FBSyxFQUFFO0FBSE4sQ0FqQnVCLEVBcUJ2QjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsTUFGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQXJCdUIsRUF5QnZCO0FBQ0RJLElBQUUsRUFBRSxFQURIO0FBRURLLE1BQUksRUFBRSxNQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBekJ1QixFQTZCdkI7QUFDREksSUFBRSxFQUFFLENBREg7QUFFREssTUFBSSxFQUFFLFlBRkw7QUFHRFQsT0FBSyxFQUFFO0FBSE4sQ0E3QnVCLEVBaUN2QjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsWUFGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQWpDdUIsRUFxQ3ZCO0FBQ0RJLElBQUUsRUFBRSxFQURIO0FBRURLLE1BQUksRUFBRSxjQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBckN1QixFQXlDdkI7QUFDREksSUFBRSxFQUFFLENBREg7QUFFREssTUFBSSxFQUFFLFVBRkw7QUFHRFQsT0FBSyxFQUFFO0FBSE4sQ0F6Q3VCLEVBNkN2QjtBQUNESSxJQUFFLEVBQUUsRUFESDtBQUVESyxNQUFJLEVBQUUsS0FGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQTdDdUIsQ0FBckI7QUFvREEsSUFBTVUsS0FBSyxHQUFHLENBQ25CO0FBQ0VOLElBQUUsRUFBRSxDQUROO0FBRUVLLE1BQUksRUFBRSxVQUZSO0FBR0VULE9BQUssRUFBRTtBQUhULENBRG1CLEVBS2hCO0FBQ0RJLElBQUUsRUFBRSxFQURIO0FBRURLLE1BQUksRUFBRSxvQkFGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQUxnQixFQVNoQjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsU0FGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQVRnQixFQWFoQjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsS0FGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQWJnQixFQWlCaEI7QUFDREksSUFBRSxFQUFFLEVBREg7QUFFREssTUFBSSxFQUFFLE1BRkw7QUFHRFQsT0FBSyxFQUFFO0FBSE4sQ0FqQmdCLEVBcUJoQjtBQUNESSxJQUFFLEVBQUUsRUFESDtBQUVESyxNQUFJLEVBQUUsS0FGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQXJCZ0IsRUF5QmhCO0FBQ0RJLElBQUUsRUFBRSxDQURIO0FBRURLLE1BQUksRUFBRSxPQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBekJnQixFQTZCaEI7QUFDREksSUFBRSxFQUFFLENBREg7QUFFREssTUFBSSxFQUFFLFFBRkw7QUFHRFQsT0FBSyxFQUFFO0FBSE4sQ0E3QmdCLEVBaUNoQjtBQUNESSxJQUFFLEVBQUUsRUFESDtBQUVESyxNQUFJLEVBQUUsUUFGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQWpDZ0IsQ0FBZCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NGUxYzM4NmNhOTUzNzk3Y2FlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxvZ28gPSAnL2ltYWdlcy93ZWIucG5nJztcblxuZXhwb3J0IGNvbnN0IENWID0gJ0FkYW1fUHVjaWNraV9DVi5wZGYnO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ01lc3NhZ2UgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJJbnN0YW50IE1lc3NlbmdlciBhcyBhIFBXQSBhcHBsaWNhdGlvbiwgYnVpbHQgb24gdG9wIG9mIFdoYXRzQXBwLiBBbGxvd3MgeW91IHRvIGNyZWF0ZSBhIHJvb20gdGhhdCBjYW4gY29udGFpbiBtdWx0aXBsZSBwZW9wbGUuIFN1cHBvcnRzIGFkZGluZyBhdHRhY2htZW50cywgZW1vamkgYW5kIGNvbnZlcnRpbmcgc3BlZWNoIHRvIHRleHQgdG8gd3JpdGUgbWVzc2FnZXMuIEltcGxlbWVudHMgYXV0aGVudGljYXRpb24gd2l0aCBHb29nbGUsIEZhY2Vib29rIGFuZCBlbWFpbCBhZGRyZXNzLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9tZXNzYWdlYXBwLnBuZycsXG4gICAgdGFnczogWydSZWFjdC5qcycsICdGaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wdWNpMjAyMC9NZXNzYWdlLUFwcCcsXG4gICAgdmlzaXQ6ICdodHRwczovL21lc3NhZ2UtYXBwLWEzMGU0LndlYi5hcHAvJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRnVkZGkgTGFuZGluZyBQYWdlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHdlYnNpdGUgcHJlc2VudHMgdGhlIGNvbmNlcHQgb2YgYSBtb2JpbGUgYXBwbGljYXRpb24gd2hlcmUgZXZlcnlvbmUgY2FuIHNlbGwgdGhlaXIgb3duIGNyb3BzIGFuZCBoYW5kaWNyYWZ0IHByb2R1Y3RzLiBUaGVuIHVzZXJzIGNhbiBidXkgdGhlc2UgcHJvZHVjdHMgYXQgZ29vZCBwcmljZXMgZm9yIGV2ZXJ5b25lLiBJdCBpbmNsdWRlcyBhIGNvbnRhY3QgZm9ybSBpbiBpdCBhbmQgYWxzbyBhIGJsb2cgd2hlcmUgbmV3IHBvc3RzIGNhbiBiZSBhZGRlZCBhZnRlciBsb2dnaW5nIGluLiBJdCBpcyBhdmFpbGFibGUgaW4gdHdvIGxhbmd1YWdlIHZlcnNpb25zLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9mdWRkaWxhbmRpbmcucG5nJyxcbiAgICB0YWdzOiBbJ1JlYWN0LmpzJywgJ0ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3B1Y2kyMDIwL0Z1ZGRpLUxhbmRpbmctUGFnZScsXG4gICAgdmlzaXQ6ICdodHRwczovL3B1Y2kyMDIwLmdpdGh1Yi5pby9GdWRkaS1MYW5kaW5nLVBhZ2UvIy9GdWRkaS1MYW5kaW5nLVBhZ2UvaG9tZScsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0tVTCBMYW5kaW5nIFBhZ2UnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBzaXRlIHByb21vdGVzIHRoZSAyMDIwIHJldW5pb24gZXZlbnQgZm9yIHBzeWNob2xvZ3kgZ3JhZHVhdGVzIG9mIHRoZSBDYXRob2xpYyBVbml2ZXJzaXR5IG9mIEx1Ymxpbi4gSXQgaGFzIGluIGl0IGEgZ2FsbGVyeSBvZiBwaG90b3MgZnJvbSB0aGUgcHJldmlvdXMgZXZlbnQgYW5kIGFsbG93cyB5b3UgdG8gc2lnbiB1cCBmb3IgdGhlIGV2ZW50IHRocm91Z2ggYSBmb3JtLiBUaGUgYXZhaWxhYmxlIGFkbWluIHBhbmVsIGFsbG93cyB5b3UgdG8gY29udHJvbCB3aG8gaGFzIHNpZ25lZCB1cCBhbmQgY2hlY2sgb2ZmIGlmIHRoZXkgaGF2ZSBwYWlkIHRvIGF0dGVuZC4gSW4gYWRkaXRpb24sIGl0IGlzIHBvc3NpYmxlIHRvIGV4cG9ydCB0aGUgbGlzdCBhcyBhIFBERiBhbmQgQ1NWIGZpbGUuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzMuanBnJyxcbiAgICB0YWdzOiBbJ0hUTUwnLCAnSmF2YVNjcmlwdCcsICdQSFAnLCAnU0FTUyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wdWNpMjAyMC9GdWRkaS1MYW5kaW5nLVBhZ2UnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVW5pY2hhdCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmlkZW8gdHV0b3JpYWwuIEluIHRoaXMgdmlkZW8sIHdlIHdpbGwgY3JlYXRlIGEgZnVsbCBSZWFsdGltZSBDaGF0IEFwcGxpY2F0aW9uXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzQuanBnJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0NoYXRFbmdpbmUnLCAnRmlyZWJhc2UnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vcHVjaTIwMjAvS1VMd2Vic2l0ZScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAzLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAge3llYXI6IDIwMTcsIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXknLH0sXG4gIHt5ZWFyOiAyMDE4LCB0ZXh0OiAnV29ya2VkIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlcicsfSxcbiAge3llYXI6IDIwMTksIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScsfSxcbiAge3llYXI6IDIwMjAsIHRleHQ6ICdTaGFyZWQgbXkgcHJvamVjdHMgd2l0aCB0aGUgd29ybGQnLH0sXG4gIHt5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RhcnRlZCBteSBvd24gcGxhdGZvcm0nLH0sXG5dO1xuXG5leHBvcnQgY29uc3QgdGVjaG5vbG9naWVzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJSZWFjdC5qc1wiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9yZWFjdC5wbmcnXG4gIH0sIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIkFuZ3VsYXJcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvYW5ndWxhci5wbmcnXG4gIH0sIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIlJlZHV4XCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3JlZHV4LnBuZydcbiAgfSwge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwiSFRNTCA1XCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2h0bWwucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDUsXG4gICAgbmFtZTogXCJDU1MgM1wiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9jc3MucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDYsXG4gICAgbmFtZTogXCJTQVNTXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3Nhc3MucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDExLFxuICAgIG5hbWU6IFwiTEVTU1wiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9sZXNzLnBuZydcbiAgfSwge1xuICAgIGlkOiA3LFxuICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9qcy5wbmcnXG4gIH0sIHtcbiAgICBpZDogOCxcbiAgICBuYW1lOiBcIlR5cGVTY3JpcHRcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvdHMucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDEzLFxuICAgIG5hbWU6IFwiQVNQLk5FVCBDb3JlXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2FzcG5ldC5wbmcnXG4gIH0sIHtcbiAgICBpZDogOSxcbiAgICBuYW1lOiBcIkZpcmViYXNlXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2ZpcmViYXNlLnBuZydcbiAgfSwge1xuICAgIGlkOiAxMCxcbiAgICBuYW1lOiBcIlNRTFwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9zcWwucG5nJ1xuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHRvb2xzID0gW1xuICB7XG4gICAgaWQ6IDksXG4gICAgbmFtZTogXCJXZWJTdG9ybVwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy93ZWJzdG9ybS5wbmcnXG4gIH0sIHtcbiAgICBpZDogMTAsXG4gICAgbmFtZTogXCJWaXN1YWwgU3R1ZGlvIENvZGVcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvdnNjb2RlLnBuZydcbiAgfSwge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6IFwiUG9zdG1hblwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9wb3N0bWFuLnBuZydcbiAgfSwge1xuICAgIGlkOiA4LFxuICAgIG5hbWU6IFwiTlBNXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL25wbS5wbmcnXG4gIH0sIHtcbiAgICBpZDogMTEsXG4gICAgbmFtZTogXCJZYXJuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3lhcm4ucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDE0LFxuICAgIG5hbWU6IFwiR0lUXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2dpdC5wbmcnXG4gIH0sIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiBcIlNsYWNrXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3NsYWNrLnBuZydcbiAgfSwge1xuICAgIGlkOiA2LFxuICAgIG5hbWU6IFwiVHJlbGxvXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3RyZWxsby5wbmcnXG4gIH0sIHtcbiAgICBpZDogMTIsXG4gICAgbmFtZTogXCJVYnVudHVcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvdWJ1bnR1LnBuZydcbiAgfVxuXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==