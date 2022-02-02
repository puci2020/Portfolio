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
  image: '/images/kulwebsite.png',
  tags: ['HTML', 'JavaScript', 'PHP', 'SASS'],
  source: 'https://github.com/puci2020/KULwebsite',
  visit: 'https://kulwebsite.000webhostapp.com',
  id: 2
}, {
  title: 'Unichat',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: '/images/3.jpg',
  tags: ['React', 'ChatEngine', 'Firebase'],
  source: 'https://github.com/puci2020/KULwebsite',
  visit: 'https://kulwebsite.000webhostapp.com/',
  id: 3
}];
var TimeLineData = [{
  year: 2017,
  text: 'Started '
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsibG9nbyIsIkNWIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0IiwidGVjaG5vbG9naWVzIiwibmFtZSIsInRvb2xzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsSUFBSSxHQUFHLGlCQUFiO0FBRUEsSUFBTUMsRUFBRSxHQUFHLHFCQUFYO0FBRUEsSUFBTUMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBRSx3UkFGZjtBQUdFQyxPQUFLLEVBQUUsd0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUseUNBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxvQkFEVDtBQUVFQyxhQUFXLEVBQUUscVVBRmY7QUFHRUMsT0FBSyxFQUFFLDBCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFVBQUQsRUFBYSxVQUFiLENBSlI7QUFLRUMsUUFBTSxFQUFFLGdEQUxWO0FBTUVDLE9BQUssRUFBRSx5RUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVcsRUFBRSw2WUFGZjtBQUdFQyxPQUFLLEVBQUUsd0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsS0FBdkIsRUFBOEIsTUFBOUIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsd0NBTFY7QUFNRUMsT0FBSyxFQUFFLHNDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENB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QURIO0FBRURLLE1BQUksRUFBRSxNQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBakJnQixFQXFCaEI7QUFDREksSUFBRSxFQUFFLEVBREg7QUFFREssTUFBSSxFQUFFLEtBRkw7QUFHRFQsT0FBSyxFQUFFO0FBSE4sQ0FyQmdCLEVBeUJoQjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsT0FGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQXpCZ0IsRUE2QmhCO0FBQ0RJLElBQUUsRUFBRSxDQURIO0FBRURLLE1BQUksRUFBRSxRQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBN0JnQixFQWlDaEI7QUFDREksSUFBRSxFQUFFLEVBREg7QUFFREssTUFBSSxFQUFFLFFBRkw7QUFHRFQsT0FBSyxFQUFFO0FBSE4sQ0FqQ2dCLENBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTcxOTBlZGUzNTY5ZWEzNTg0YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBsb2dvID0gJy9pbWFnZXMvd2ViLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBDViA9ICdBZGFtX1B1Y2lja2lfQ1YucGRmJztcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdNZXNzYWdlIEFwcCcsXG4gICAgZGVzY3JpcHRpb246IFwiSW5zdGFudCBNZXNzZW5nZXIgYXMgYSBQV0EgYXBwbGljYXRpb24sIGJ1aWx0IG9uIHRvcCBvZiBXaGF0c0FwcC4gQWxsb3dzIHlvdSB0byBjcmVhdGUgYSByb29tIHRoYXQgY2FuIGNvbnRhaW4gbXVsdGlwbGUgcGVvcGxlLiBTdXBwb3J0cyBhZGRpbmcgYXR0YWNobWVudHMsIGVtb2ppIGFuZCBjb252ZXJ0aW5nIHNwZWVjaCB0byB0ZXh0IHRvIHdyaXRlIG1lc3NhZ2VzLiBJbXBsZW1lbnRzIGF1dGhlbnRpY2F0aW9uIHdpdGggR29vZ2xlLCBGYWNlYm9vayBhbmQgZW1haWwgYWRkcmVzcy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvbWVzc2FnZWFwcC5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QuanMnLCAnRmlyZWJhc2UnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vcHVjaTIwMjAvTWVzc2FnZS1BcHAnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9tZXNzYWdlLWFwcC1hMzBlNC53ZWIuYXBwLycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0Z1ZGRpIExhbmRpbmcgUGFnZScsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyB3ZWJzaXRlIHByZXNlbnRzIHRoZSBjb25jZXB0IG9mIGEgbW9iaWxlIGFwcGxpY2F0aW9uIHdoZXJlIGV2ZXJ5b25lIGNhbiBzZWxsIHRoZWlyIG93biBjcm9wcyBhbmQgaGFuZGljcmFmdCBwcm9kdWN0cy4gVGhlbiB1c2VycyBjYW4gYnV5IHRoZXNlIHByb2R1Y3RzIGF0IGdvb2QgcHJpY2VzIGZvciBldmVyeW9uZS4gSXQgaW5jbHVkZXMgYSBjb250YWN0IGZvcm0gaW4gaXQgYW5kIGFsc28gYSBibG9nIHdoZXJlIG5ldyBwb3N0cyBjYW4gYmUgYWRkZWQgYWZ0ZXIgbG9nZ2luZyBpbi4gSXQgaXMgYXZhaWxhYmxlIGluIHR3byBsYW5ndWFnZSB2ZXJzaW9ucy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvZnVkZGlsYW5kaW5nLnBuZycsXG4gICAgdGFnczogWydSZWFjdC5qcycsICdGaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wdWNpMjAyMC9GdWRkaS1MYW5kaW5nLVBhZ2UnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9wdWNpMjAyMC5naXRodWIuaW8vRnVkZGktTGFuZGluZy1QYWdlLyMvRnVkZGktTGFuZGluZy1QYWdlL2hvbWUnLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdLVUwgTGFuZGluZyBQYWdlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgc2l0ZSBwcm9tb3RlcyB0aGUgMjAyMCByZXVuaW9uIGV2ZW50IGZvciBwc3ljaG9sb2d5IGdyYWR1YXRlcyBvZiB0aGUgQ2F0aG9saWMgVW5pdmVyc2l0eSBvZiBMdWJsaW4uIEl0IGhhcyBpbiBpdCBhIGdhbGxlcnkgb2YgcGhvdG9zIGZyb20gdGhlIHByZXZpb3VzIGV2ZW50IGFuZCBhbGxvd3MgeW91IHRvIHNpZ24gdXAgZm9yIHRoZSBldmVudCB0aHJvdWdoIGEgZm9ybS4gVGhlIGF2YWlsYWJsZSBhZG1pbiBwYW5lbCBhbGxvd3MgeW91IHRvIGNvbnRyb2wgd2hvIGhhcyBzaWduZWQgdXAgYW5kIGNoZWNrIG9mZiBpZiB0aGV5IGhhdmUgcGFpZCB0byBhdHRlbmQuIEluIGFkZGl0aW9uLCBpdCBpcyBwb3NzaWJsZSB0byBleHBvcnQgdGhlIGxpc3QgYXMgYSBQREYgYW5kIENTViBmaWxlLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9rdWx3ZWJzaXRlLnBuZycsXG4gICAgdGFnczogWydIVE1MJywgJ0phdmFTY3JpcHQnLCAnUEhQJywgJ1NBU1MnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vcHVjaTIwMjAvS1VMd2Vic2l0ZScsXG4gICAgdmlzaXQ6ICdodHRwczovL2t1bHdlYnNpdGUuMDAwd2ViaG9zdGFwcC5jb20nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdVbmljaGF0JyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyB2aWRlbyB0dXRvcmlhbC4gSW4gdGhpcyB2aWRlbywgd2Ugd2lsbCBjcmVhdGUgYSBmdWxsIFJlYWx0aW1lIENoYXQgQXBwbGljYXRpb25cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvMy5qcGcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnQ2hhdEVuZ2luZScsICdGaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wdWNpMjAyMC9LVUx3ZWJzaXRlJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8va3Vsd2Vic2l0ZS4wMDB3ZWJob3N0YXBwLmNvbS8nLFxuICAgIGlkOiAzLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAge3llYXI6IDIwMTcsIHRleHQ6ICdTdGFydGVkICcsfSxcbiAge3llYXI6IDIwMTgsIHRleHQ6ICdXb3JrZWQgYXMgYSBmcmVlbGFuY2UgZGV2ZWxvcGVyJyx9LFxuICB7eWVhcjogMjAxOSwgdGV4dDogJ0ZvdW5kZWQgSmF2YVNjcmlwdCBNYXN0ZXJ5Jyx9LFxuICB7eWVhcjogMjAyMCwgdGV4dDogJ1NoYXJlZCBteSBwcm9qZWN0cyB3aXRoIHRoZSB3b3JsZCcsfSxcbiAge3llYXI6IDIwMjEsIHRleHQ6ICdTdGFydGVkIG15IG93biBwbGF0Zm9ybScsfSxcbl07XG5cbmV4cG9ydCBjb25zdCB0ZWNobm9sb2dpZXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIlJlYWN0LmpzXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3JlYWN0LnBuZydcbiAgfSwge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiQW5ndWxhclwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9hbmd1bGFyLnBuZydcbiAgfSwge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6IFwiUmVkdXhcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvcmVkdXgucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogXCJIVE1MIDVcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvaHRtbC5wbmcnXG4gIH0sIHtcbiAgICBpZDogNSxcbiAgICBuYW1lOiBcIkNTUyAzXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2Nzcy5wbmcnXG4gIH0sIHtcbiAgICBpZDogNixcbiAgICBuYW1lOiBcIlNBU1NcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvc2Fzcy5wbmcnXG4gIH0sIHtcbiAgICBpZDogMTEsXG4gICAgbmFtZTogXCJMRVNTXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2xlc3MucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDcsXG4gICAgbmFtZTogXCJKYXZhU2NyaXB0XCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2pzLnBuZydcbiAgfSwge1xuICAgIGlkOiA4LFxuICAgIG5hbWU6IFwiVHlwZVNjcmlwdFwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy90cy5wbmcnXG4gIH0sIHtcbiAgICBpZDogMTMsXG4gICAgbmFtZTogXCJBU1AuTkVUIENvcmVcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvYXNwbmV0LnBuZydcbiAgfSwge1xuICAgIGlkOiA5LFxuICAgIG5hbWU6IFwiRmlyZWJhc2VcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvZmlyZWJhc2UucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDEwLFxuICAgIG5hbWU6IFwiU1FMXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3NxbC5wbmcnXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgdG9vbHMgPSBbXG4gIHtcbiAgICBpZDogOSxcbiAgICBuYW1lOiBcIldlYlN0b3JtXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3dlYnN0b3JtLnBuZydcbiAgfSwge1xuICAgIGlkOiAxMCxcbiAgICBuYW1lOiBcIlZpc3VhbCBTdHVkaW8gQ29kZVwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy92c2NvZGUucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDUsXG4gICAgbmFtZTogXCJQb3N0bWFuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3Bvc3RtYW4ucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDgsXG4gICAgbmFtZTogXCJOUE1cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvbnBtLnBuZydcbiAgfSwge1xuICAgIGlkOiAxMSxcbiAgICBuYW1lOiBcIllhcm5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMveWFybi5wbmcnXG4gIH0sIHtcbiAgICBpZDogMTQsXG4gICAgbmFtZTogXCJHSVRcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvZ2l0LnBuZydcbiAgfSwge1xuICAgIGlkOiA3LFxuICAgIG5hbWU6IFwiU2xhY2tcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvc2xhY2sucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDYsXG4gICAgbmFtZTogXCJUcmVsbG9cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvdHJlbGxvLnBuZydcbiAgfSwge1xuICAgIGlkOiAxMixcbiAgICBuYW1lOiBcIlVidW50dVwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy91YnVudHUucG5nJ1xuICB9XG5dXG4iXSwic291cmNlUm9vdCI6IiJ9