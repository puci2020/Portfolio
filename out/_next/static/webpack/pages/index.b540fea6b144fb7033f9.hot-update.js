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
  title: 'Flight Browser',
  description: "A simple application created for a college course credit. Allows you to search available flights by filling out a form and gives you the option to book a seat and add to cart. Additionally unit tests were written.",
  image: '/images/flightbrowser.png',
  tags: ['Angular', 'TypeScript', 'SASS'],
  source: 'https://github.com/puci2020/FlightBrowser',
  visit: 'https://puci2020.github.io/FlightBrowser/',
  id: 3
}];
var TimeLineData = [{
  year: 2017,
  text: 'Starting a degree in computer science'
}, {
  year: 2018,
  text: 'Starting the adventure with web applications'
}, {
  year: 2019,
  text: 'First steps with React.js'
}, {
  year: 2020,
  text: 'Internship as a Web Developer in Angular and .NET technologies'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsibG9nbyIsIkNWIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0IiwidGVjaG5vbG9naWVzIiwibmFtZSIsInRvb2xzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsSUFBSSxHQUFHLGlCQUFiO0FBRUEsSUFBTUMsRUFBRSxHQUFHLHFCQUFYO0FBRUEsSUFBTUMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBRSx3UkFGZjtBQUdFQyxPQUFLLEVBQUUsd0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUseUNBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxvQkFEVDtBQUVFQyxhQUFXLEVBQUUscVVBRmY7QUFHRUMsT0FBSyxFQUFFLDBCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFVBQUQsRUFBYSxVQUFiLENBSlI7QUFLRUMsUUFBTSxFQUFFLGdEQUxWO0FBTUVDLE9BQUssRUFBRSx5RUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVcsRUFBRSw2WUFGZjtBQUdFQyxPQUFLLEVBQUUsd0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsS0FBdkIsRUFBOEIsTUFBOUIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsd0NBTFY7QUFNRUMsT0FBSyxFQUFFLHNDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENB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RUFxQmhCO0FBQ0RJLElBQUUsRUFBRSxFQURIO0FBRURLLE1BQUksRUFBRSxLQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBckJnQixFQXlCaEI7QUFDREksSUFBRSxFQUFFLENBREg7QUFFREssTUFBSSxFQUFFLE9BRkw7QUFHRFQsT0FBSyxFQUFFO0FBSE4sQ0F6QmdCLEVBNkJoQjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsUUFGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQTdCZ0IsRUFpQ2hCO0FBQ0RJLElBQUUsRUFBRSxFQURIO0FBRURLLE1BQUksRUFBRSxRQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBakNnQixDQUFkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI1NDBmZWE2YjE0NGZiNzAzM2Y5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbG9nbyA9ICcvaW1hZ2VzL3dlYi5wbmcnO1xuXG5leHBvcnQgY29uc3QgQ1YgPSAnQWRhbV9QdWNpY2tpX0NWLnBkZic7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnTWVzc2FnZSBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluc3RhbnQgTWVzc2VuZ2VyIGFzIGEgUFdBIGFwcGxpY2F0aW9uLCBidWlsdCBvbiB0b3Agb2YgV2hhdHNBcHAuIEFsbG93cyB5b3UgdG8gY3JlYXRlIGEgcm9vbSB0aGF0IGNhbiBjb250YWluIG11bHRpcGxlIHBlb3BsZS4gU3VwcG9ydHMgYWRkaW5nIGF0dGFjaG1lbnRzLCBlbW9qaSBhbmQgY29udmVydGluZyBzcGVlY2ggdG8gdGV4dCB0byB3cml0ZSBtZXNzYWdlcy4gSW1wbGVtZW50cyBhdXRoZW50aWNhdGlvbiB3aXRoIEdvb2dsZSwgRmFjZWJvb2sgYW5kIGVtYWlsIGFkZHJlc3MuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL21lc3NhZ2VhcHAucG5nJyxcbiAgICB0YWdzOiBbJ1JlYWN0LmpzJywgJ0ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3B1Y2kyMDIwL01lc3NhZ2UtQXBwJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vbWVzc2FnZS1hcHAtYTMwZTQud2ViLmFwcC8nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdGdWRkaSBMYW5kaW5nIFBhZ2UnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgd2Vic2l0ZSBwcmVzZW50cyB0aGUgY29uY2VwdCBvZiBhIG1vYmlsZSBhcHBsaWNhdGlvbiB3aGVyZSBldmVyeW9uZSBjYW4gc2VsbCB0aGVpciBvd24gY3JvcHMgYW5kIGhhbmRpY3JhZnQgcHJvZHVjdHMuIFRoZW4gdXNlcnMgY2FuIGJ1eSB0aGVzZSBwcm9kdWN0cyBhdCBnb29kIHByaWNlcyBmb3IgZXZlcnlvbmUuIEl0IGluY2x1ZGVzIGEgY29udGFjdCBmb3JtIGluIGl0IGFuZCBhbHNvIGEgYmxvZyB3aGVyZSBuZXcgcG9zdHMgY2FuIGJlIGFkZGVkIGFmdGVyIGxvZ2dpbmcgaW4uIEl0IGlzIGF2YWlsYWJsZSBpbiB0d28gbGFuZ3VhZ2UgdmVyc2lvbnMuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2Z1ZGRpbGFuZGluZy5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QuanMnLCAnRmlyZWJhc2UnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vcHVjaTIwMjAvRnVkZGktTGFuZGluZy1QYWdlJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vcHVjaTIwMjAuZ2l0aHViLmlvL0Z1ZGRpLUxhbmRpbmctUGFnZS8jL0Z1ZGRpLUxhbmRpbmctUGFnZS9ob21lJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnS1VMIExhbmRpbmcgUGFnZScsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIHNpdGUgcHJvbW90ZXMgdGhlIDIwMjAgcmV1bmlvbiBldmVudCBmb3IgcHN5Y2hvbG9neSBncmFkdWF0ZXMgb2YgdGhlIENhdGhvbGljIFVuaXZlcnNpdHkgb2YgTHVibGluLiBJdCBoYXMgaW4gaXQgYSBnYWxsZXJ5IG9mIHBob3RvcyBmcm9tIHRoZSBwcmV2aW91cyBldmVudCBhbmQgYWxsb3dzIHlvdSB0byBzaWduIHVwIGZvciB0aGUgZXZlbnQgdGhyb3VnaCBhIGZvcm0uIFRoZSBhdmFpbGFibGUgYWRtaW4gcGFuZWwgYWxsb3dzIHlvdSB0byBjb250cm9sIHdobyBoYXMgc2lnbmVkIHVwIGFuZCBjaGVjayBvZmYgaWYgdGhleSBoYXZlIHBhaWQgdG8gYXR0ZW5kLiBJbiBhZGRpdGlvbiwgaXQgaXMgcG9zc2libGUgdG8gZXhwb3J0IHRoZSBsaXN0IGFzIGEgUERGIGFuZCBDU1YgZmlsZS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMva3Vsd2Vic2l0ZS5wbmcnLFxuICAgIHRhZ3M6IFsnSFRNTCcsICdKYXZhU2NyaXB0JywgJ1BIUCcsICdTQVNTJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3B1Y2kyMDIwL0tVTHdlYnNpdGUnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9rdWx3ZWJzaXRlLjAwMHdlYmhvc3RhcHAuY29tJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRmxpZ2h0IEJyb3dzZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2ltcGxlIGFwcGxpY2F0aW9uIGNyZWF0ZWQgZm9yIGEgY29sbGVnZSBjb3Vyc2UgY3JlZGl0LiBBbGxvd3MgeW91IHRvIHNlYXJjaCBhdmFpbGFibGUgZmxpZ2h0cyBieSBmaWxsaW5nIG91dCBhIGZvcm0gYW5kIGdpdmVzIHlvdSB0aGUgb3B0aW9uIHRvIGJvb2sgYSBzZWF0IGFuZCBhZGQgdG8gY2FydC4gQWRkaXRpb25hbGx5IHVuaXQgdGVzdHMgd2VyZSB3cml0dGVuLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9mbGlnaHRicm93c2VyLnBuZycsXG4gICAgdGFnczogWydBbmd1bGFyJywgJ1R5cGVTY3JpcHQnLCAnU0FTUyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wdWNpMjAyMC9GbGlnaHRCcm93c2VyJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vcHVjaTIwMjAuZ2l0aHViLmlvL0ZsaWdodEJyb3dzZXIvJyxcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHt5ZWFyOiAyMDE3LCB0ZXh0OiAnU3RhcnRpbmcgYSBkZWdyZWUgaW4gY29tcHV0ZXIgc2NpZW5jZScsfSxcbiAge3llYXI6IDIwMTgsIHRleHQ6ICdTdGFydGluZyB0aGUgYWR2ZW50dXJlIHdpdGggd2ViIGFwcGxpY2F0aW9ucycsfSxcbiAge3llYXI6IDIwMTksIHRleHQ6ICdGaXJzdCBzdGVwcyB3aXRoIFJlYWN0LmpzJyx9LFxuICB7eWVhcjogMjAyMCwgdGV4dDogJ0ludGVybnNoaXAgYXMgYSBXZWIgRGV2ZWxvcGVyIGluIEFuZ3VsYXIgYW5kIC5ORVQgdGVjaG5vbG9naWVzJyx9LFxuXG5dO1xuXG5leHBvcnQgY29uc3QgdGVjaG5vbG9naWVzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJSZWFjdC5qc1wiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9yZWFjdC5wbmcnXG4gIH0sIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIkFuZ3VsYXJcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvYW5ndWxhci5wbmcnXG4gIH0sIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIlJlZHV4XCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3JlZHV4LnBuZydcbiAgfSwge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwiSFRNTCA1XCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2h0bWwucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDUsXG4gICAgbmFtZTogXCJDU1MgM1wiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9jc3MucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDYsXG4gICAgbmFtZTogXCJTQVNTXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3Nhc3MucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDExLFxuICAgIG5hbWU6IFwiTEVTU1wiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9sZXNzLnBuZydcbiAgfSwge1xuICAgIGlkOiA3LFxuICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9qcy5wbmcnXG4gIH0sIHtcbiAgICBpZDogOCxcbiAgICBuYW1lOiBcIlR5cGVTY3JpcHRcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvdHMucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDEzLFxuICAgIG5hbWU6IFwiQVNQLk5FVCBDb3JlXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2FzcG5ldC5wbmcnXG4gIH0sIHtcbiAgICBpZDogOSxcbiAgICBuYW1lOiBcIkZpcmViYXNlXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2ZpcmViYXNlLnBuZydcbiAgfSwge1xuICAgIGlkOiAxMCxcbiAgICBuYW1lOiBcIlNRTFwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9zcWwucG5nJ1xuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHRvb2xzID0gW1xuICB7XG4gICAgaWQ6IDksXG4gICAgbmFtZTogXCJXZWJTdG9ybVwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy93ZWJzdG9ybS5wbmcnXG4gIH0sIHtcbiAgICBpZDogMTAsXG4gICAgbmFtZTogXCJWaXN1YWwgU3R1ZGlvIENvZGVcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvdnNjb2RlLnBuZydcbiAgfSwge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6IFwiUG9zdG1hblwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9wb3N0bWFuLnBuZydcbiAgfSwge1xuICAgIGlkOiA4LFxuICAgIG5hbWU6IFwiTlBNXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL25wbS5wbmcnXG4gIH0sIHtcbiAgICBpZDogMTEsXG4gICAgbmFtZTogXCJZYXJuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3lhcm4ucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDE0LFxuICAgIG5hbWU6IFwiR0lUXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2dpdC5wbmcnXG4gIH0sIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiBcIlNsYWNrXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3NsYWNrLnBuZydcbiAgfSwge1xuICAgIGlkOiA2LFxuICAgIG5hbWU6IFwiVHJlbGxvXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3RyZWxsby5wbmcnXG4gIH0sIHtcbiAgICBpZDogMTIsXG4gICAgbmFtZTogXCJVYnVudHVcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvdWJ1bnR1LnBuZydcbiAgfVxuXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==