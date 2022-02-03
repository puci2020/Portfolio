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
  image: '/images/messageapp.jpeg',
  tags: ['React.js', 'Firebase'],
  source: 'https://github.com/puci2020/Message-App',
  visit: 'https://message-app-a30e4.web.app/',
  id: 0
}, {
  title: 'Fuddi Landing Page',
  description: "This website presents the concept of a mobile application where everyone can sell their own crops and handicraft products. Then users can buy these products at good prices for everyone. It includes a contact form in it and also a blog where new posts can be added after logging in. It is available in two language versions.",
  image: '/images/fuddilanding.jpeg',
  tags: ['React.js', 'Firebase'],
  source: 'https://github.com/puci2020/Fuddi-Landing-Page',
  visit: 'https://puci2020.github.io/Fuddi-Landing-Page/#/Fuddi-Landing-Page/home',
  id: 1
}, {
  title: 'KUL Landing Page',
  description: "The site promotes the 2020 reunion event for psychology graduates of the Catholic University of Lublin. It has in it a gallery of photos from the previous event and allows you to sign up for the event through a form. The available admin panel allows you to control who has signed up and check off if they have paid to attend. In addition, it is possible to export the list as a PDF and CSV file.",
  image: '/images/kulwebsite.jpeg',
  tags: ['HTML', 'JavaScript', 'PHP', 'SASS'],
  source: 'https://github.com/puci2020/KULwebsite',
  visit: 'https://kulwebsite.000webhostapp.com',
  id: 2
}, {
  title: 'Flight Browser',
  description: "A simple application created for a college course credit. Allows you to search available flights by filling out a form and gives you the option to book a seat and add to cart. Additionally unit tests were written.",
  image: '/images/flightbrowser.jpeg',
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
  image: '/images/angular.svg'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsibG9nbyIsIkNWIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0IiwidGVjaG5vbG9naWVzIiwibmFtZSIsInRvb2xzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsSUFBSSxHQUFHLGlCQUFiO0FBRUEsSUFBTUMsRUFBRSxHQUFHLHFCQUFYO0FBRUEsSUFBTUMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBRSx3UkFGZjtBQUdFQyxPQUFLLEVBQUUseUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUseUNBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxvQkFEVDtBQUVFQyxhQUFXLEVBQUUscVVBRmY7QUFHRUMsT0FBSyxFQUFFLDJCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFVBQUQsRUFBYSxVQUFiLENBSlI7QUFLRUMsUUFBTSxFQUFFLGdEQUxWO0FBTUVDLE9BQUssRUFBRSx5RUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVcsRUFBRSw2WUFGZjtBQUdFQyxPQUFLLEVBQUUseUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsS0FBdkIsRUFBOEIsTUFBOUIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsd0NBTFY7QUFNRUMsT0FBSyxFQUFFLHNDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLGdCQURUO0FBRUVDLGFBQVcsRUFBRSx1TkFGZjtBQUdFQyxPQUFLLEVBQUUsNEJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsU0FBRCxFQUFZLFlBQVosRUFBMEIsTUFBMUIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsMkNBTFY7QUFNRUMsT0FBSyxFQUFFLDJDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUJzQixDQUFqQjtBQXVDQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBQ0MsTUFBSSxFQUFFLElBQVA7QUFBYUMsTUFBSSxFQUFFO0FBQW5CLENBRDBCLEVBRTFCO0FBQUNELE1BQUksRUFBRSxJQUFQO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQUYwQixFQUcxQjtBQUFDRCxNQUFJLEVBQUUsSUFBUDtBQUFhQyxNQUFJLEVBQUU7QUFBbkIsQ0FIMEIsRUFJMUI7QUFBQ0QsTUFBSSxFQUFFLElBQVA7QUFBYUMsTUFBSSxFQUFFO0FBQW5CLENBSjBCLENBQXJCO0FBUUEsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQ0VKLElBQUUsRUFBRSxDQUROO0FBRUVLLE1BQUksRUFBRSxVQUZSO0FBR0VULE9BQUssRUFBRTtBQUhULENBRDBCLEVBS3ZCO0FBQ0RJLElBQUUsRUFBRSxDQURIO0FBRURLLE1BQUksRUFBRSxTQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBTHVCLEVBU3ZCO0FBQ0RJLElBQUUsRUFBRSxDQURIO0FBRURLLE1BQUksRUFBRSxPQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBVHVCLEVBYXZCO0FBQ0RJLElBQUUsRUFBRSxDQURIO0FBRURLLE1BQUksRUFBRSxRQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBYnVCLEVBaUJ2QjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsT0FGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQWpCdUIsRUFxQnZCO0FBQ0RJLElBQUUsRUFBRSxDQURIO0FBRURLLE1BQUksRUFBRSxNQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBckJ1QixFQXlCdkI7QUFDREksSUFBRSxFQUFFLEVBREg7QUFFREssTUFBSSxFQUFFLE1BRkw7QUFHRFQsT0FBSyxFQUFFO0FBSE4sQ0F6QnVCLEVBNkJ2QjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsWUFGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQTdCdUIsRUFpQ3ZCO0FBQ0RJLElBQUUsRUFBRSxDQURIO0FBRURLLE1BQUksRUFBRSxZQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBakN1QixFQXFDdkI7QUFDREksSUFBRSxFQUFFLEVBREg7QUFFREssTUFBSSxFQUFFLGNBRkw7QUFHRFQsT0FBSyxFQUFFO0FBSE4sQ0FyQ3VCLEVBeUN2QjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsVUFGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQXpDdUIsRUE2Q3ZCO0FBQ0RJLElBQUUsRUFBRSxFQURIO0FBRURLLE1BQUksRUFBRSxLQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBN0N1QixDQUFyQjtBQW9EQSxJQUFNVSxLQUFLLEdBQUcsQ0FDbkI7QUFDRU4sSUFBRSxFQUFFLENBRE47QUFFRUssTUFBSSxFQUFFLFVBRlI7QUFHRVQsT0FBSyxFQUFFO0FBSFQsQ0FEbUIsRUFLaEI7QUFDREksSUFBRSxFQUFFLEVBREg7QUFFREssTUFBSSxFQUFFLG9CQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBTGdCLEVBU2hCO0FBQ0RJLElBQUUsRUFBRSxDQURIO0FBRURLLE1BQUksRUFBRSxTQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBVGdCLEVBYWhCO0FBQ0RJLElBQUUsRUFBRSxDQURIO0FBRURLLE1BQUksRUFBRSxLQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBYmdCLEVBaUJoQjtBQUNESSxJQUFFLEVBQUUsRUFESDtBQUVESyxNQUFJLEVBQUUsTUFGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQWpCZ0IsRUFxQmhCO0FBQ0RJLElBQUUsRUFBRSxFQURIO0FBRURLLE1BQUksRUFBRSxLQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBckJnQixFQXlCaEI7QUFDREksSUFBRSxFQUFFLENBREg7QUFFREssTUFBSSxFQUFFLE9BRkw7QUFHRFQsT0FBSyxFQUFFO0FBSE4sQ0F6QmdCLEVBNkJoQjtBQUNESSxJQUFFLEVBQUUsQ0FESDtBQUVESyxNQUFJLEVBQUUsUUFGTDtBQUdEVCxPQUFLLEVBQUU7QUFITixDQTdCZ0IsRUFpQ2hCO0FBQ0RJLElBQUUsRUFBRSxFQURIO0FBRURLLE1BQUksRUFBRSxRQUZMO0FBR0RULE9BQUssRUFBRTtBQUhOLENBakNnQixDQUFkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIwMTk1ZWY1NDZjYTIyNTA0YzRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbG9nbyA9ICcvaW1hZ2VzL3dlYi5wbmcnO1xuXG5leHBvcnQgY29uc3QgQ1YgPSAnQWRhbV9QdWNpY2tpX0NWLnBkZic7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnTWVzc2FnZSBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluc3RhbnQgTWVzc2VuZ2VyIGFzIGEgUFdBIGFwcGxpY2F0aW9uLCBidWlsdCBvbiB0b3Agb2YgV2hhdHNBcHAuIEFsbG93cyB5b3UgdG8gY3JlYXRlIGEgcm9vbSB0aGF0IGNhbiBjb250YWluIG11bHRpcGxlIHBlb3BsZS4gU3VwcG9ydHMgYWRkaW5nIGF0dGFjaG1lbnRzLCBlbW9qaSBhbmQgY29udmVydGluZyBzcGVlY2ggdG8gdGV4dCB0byB3cml0ZSBtZXNzYWdlcy4gSW1wbGVtZW50cyBhdXRoZW50aWNhdGlvbiB3aXRoIEdvb2dsZSwgRmFjZWJvb2sgYW5kIGVtYWlsIGFkZHJlc3MuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL21lc3NhZ2VhcHAuanBlZycsXG4gICAgdGFnczogWydSZWFjdC5qcycsICdGaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wdWNpMjAyMC9NZXNzYWdlLUFwcCcsXG4gICAgdmlzaXQ6ICdodHRwczovL21lc3NhZ2UtYXBwLWEzMGU0LndlYi5hcHAvJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRnVkZGkgTGFuZGluZyBQYWdlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHdlYnNpdGUgcHJlc2VudHMgdGhlIGNvbmNlcHQgb2YgYSBtb2JpbGUgYXBwbGljYXRpb24gd2hlcmUgZXZlcnlvbmUgY2FuIHNlbGwgdGhlaXIgb3duIGNyb3BzIGFuZCBoYW5kaWNyYWZ0IHByb2R1Y3RzLiBUaGVuIHVzZXJzIGNhbiBidXkgdGhlc2UgcHJvZHVjdHMgYXQgZ29vZCBwcmljZXMgZm9yIGV2ZXJ5b25lLiBJdCBpbmNsdWRlcyBhIGNvbnRhY3QgZm9ybSBpbiBpdCBhbmQgYWxzbyBhIGJsb2cgd2hlcmUgbmV3IHBvc3RzIGNhbiBiZSBhZGRlZCBhZnRlciBsb2dnaW5nIGluLiBJdCBpcyBhdmFpbGFibGUgaW4gdHdvIGxhbmd1YWdlIHZlcnNpb25zLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9mdWRkaWxhbmRpbmcuanBlZycsXG4gICAgdGFnczogWydSZWFjdC5qcycsICdGaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wdWNpMjAyMC9GdWRkaS1MYW5kaW5nLVBhZ2UnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9wdWNpMjAyMC5naXRodWIuaW8vRnVkZGktTGFuZGluZy1QYWdlLyMvRnVkZGktTGFuZGluZy1QYWdlL2hvbWUnLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdLVUwgTGFuZGluZyBQYWdlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgc2l0ZSBwcm9tb3RlcyB0aGUgMjAyMCByZXVuaW9uIGV2ZW50IGZvciBwc3ljaG9sb2d5IGdyYWR1YXRlcyBvZiB0aGUgQ2F0aG9saWMgVW5pdmVyc2l0eSBvZiBMdWJsaW4uIEl0IGhhcyBpbiBpdCBhIGdhbGxlcnkgb2YgcGhvdG9zIGZyb20gdGhlIHByZXZpb3VzIGV2ZW50IGFuZCBhbGxvd3MgeW91IHRvIHNpZ24gdXAgZm9yIHRoZSBldmVudCB0aHJvdWdoIGEgZm9ybS4gVGhlIGF2YWlsYWJsZSBhZG1pbiBwYW5lbCBhbGxvd3MgeW91IHRvIGNvbnRyb2wgd2hvIGhhcyBzaWduZWQgdXAgYW5kIGNoZWNrIG9mZiBpZiB0aGV5IGhhdmUgcGFpZCB0byBhdHRlbmQuIEluIGFkZGl0aW9uLCBpdCBpcyBwb3NzaWJsZSB0byBleHBvcnQgdGhlIGxpc3QgYXMgYSBQREYgYW5kIENTViBmaWxlLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9rdWx3ZWJzaXRlLmpwZWcnLFxuICAgIHRhZ3M6IFsnSFRNTCcsICdKYXZhU2NyaXB0JywgJ1BIUCcsICdTQVNTJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3B1Y2kyMDIwL0tVTHdlYnNpdGUnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9rdWx3ZWJzaXRlLjAwMHdlYmhvc3RhcHAuY29tJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRmxpZ2h0IEJyb3dzZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2ltcGxlIGFwcGxpY2F0aW9uIGNyZWF0ZWQgZm9yIGEgY29sbGVnZSBjb3Vyc2UgY3JlZGl0LiBBbGxvd3MgeW91IHRvIHNlYXJjaCBhdmFpbGFibGUgZmxpZ2h0cyBieSBmaWxsaW5nIG91dCBhIGZvcm0gYW5kIGdpdmVzIHlvdSB0aGUgb3B0aW9uIHRvIGJvb2sgYSBzZWF0IGFuZCBhZGQgdG8gY2FydC4gQWRkaXRpb25hbGx5IHVuaXQgdGVzdHMgd2VyZSB3cml0dGVuLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9mbGlnaHRicm93c2VyLmpwZWcnLFxuICAgIHRhZ3M6IFsnQW5ndWxhcicsICdUeXBlU2NyaXB0JywgJ1NBU1MnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vcHVjaTIwMjAvRmxpZ2h0QnJvd3NlcicsXG4gICAgdmlzaXQ6ICdodHRwczovL3B1Y2kyMDIwLmdpdGh1Yi5pby9GbGlnaHRCcm93c2VyLycsXG4gICAgaWQ6IDMsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7eWVhcjogMjAxNywgdGV4dDogJ1N0YXJ0aW5nIGEgZGVncmVlIGluIGNvbXB1dGVyIHNjaWVuY2UnLH0sXG4gIHt5ZWFyOiAyMDE4LCB0ZXh0OiAnU3RhcnRpbmcgdGhlIGFkdmVudHVyZSB3aXRoIHdlYiBhcHBsaWNhdGlvbnMnLH0sXG4gIHt5ZWFyOiAyMDE5LCB0ZXh0OiAnRmlyc3Qgc3RlcHMgd2l0aCBSZWFjdC5qcycsfSxcbiAge3llYXI6IDIwMjAsIHRleHQ6ICdJbnRlcm5zaGlwIGFzIGEgV2ViIERldmVsb3BlciBpbiBBbmd1bGFyIGFuZCAuTkVUIHRlY2hub2xvZ2llcycsfSxcblxuXTtcblxuZXhwb3J0IGNvbnN0IHRlY2hub2xvZ2llcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiUmVhY3QuanNcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvcmVhY3QucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCJBbmd1bGFyXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2FuZ3VsYXIuc3ZnJ1xuICB9LCB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogXCJSZWR1eFwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9yZWR1eC5wbmcnXG4gIH0sIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiBcIkhUTUwgNVwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9odG1sLnBuZydcbiAgfSwge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6IFwiQ1NTIDNcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvY3NzLnBuZydcbiAgfSwge1xuICAgIGlkOiA2LFxuICAgIG5hbWU6IFwiU0FTU1wiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9zYXNzLnBuZydcbiAgfSwge1xuICAgIGlkOiAxMSxcbiAgICBuYW1lOiBcIkxFU1NcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvbGVzcy5wbmcnXG4gIH0sIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvanMucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDgsXG4gICAgbmFtZTogXCJUeXBlU2NyaXB0XCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3RzLnBuZydcbiAgfSwge1xuICAgIGlkOiAxMyxcbiAgICBuYW1lOiBcIkFTUC5ORVQgQ29yZVwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9hc3BuZXQucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDksXG4gICAgbmFtZTogXCJGaXJlYmFzZVwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9maXJlYmFzZS5wbmcnXG4gIH0sIHtcbiAgICBpZDogMTAsXG4gICAgbmFtZTogXCJTUUxcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvc3FsLnBuZydcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB0b29scyA9IFtcbiAge1xuICAgIGlkOiA5LFxuICAgIG5hbWU6IFwiV2ViU3Rvcm1cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvd2Vic3Rvcm0ucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDEwLFxuICAgIG5hbWU6IFwiVmlzdWFsIFN0dWRpbyBDb2RlXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3ZzY29kZS5wbmcnXG4gIH0sIHtcbiAgICBpZDogNSxcbiAgICBuYW1lOiBcIlBvc3RtYW5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvcG9zdG1hbi5wbmcnXG4gIH0sIHtcbiAgICBpZDogOCxcbiAgICBuYW1lOiBcIk5QTVwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9ucG0ucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDExLFxuICAgIG5hbWU6IFwiWWFyblwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy95YXJuLnBuZydcbiAgfSwge1xuICAgIGlkOiAxNCxcbiAgICBuYW1lOiBcIkdJVFwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9naXQucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDcsXG4gICAgbmFtZTogXCJTbGFja1wiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9zbGFjay5wbmcnXG4gIH0sIHtcbiAgICBpZDogNixcbiAgICBuYW1lOiBcIlRyZWxsb1wiLFxuICAgIGltYWdlOiAnL2ltYWdlcy90cmVsbG8ucG5nJ1xuICB9LCB7XG4gICAgaWQ6IDEyLFxuICAgIG5hbWU6IFwiVWJ1bnR1XCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3VidW50dS5wbmcnXG4gIH1cbl1cbiJdLCJzb3VyY2VSb290IjoiIn0=