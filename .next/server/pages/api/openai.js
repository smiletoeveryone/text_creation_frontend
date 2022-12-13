"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/openai";
exports.ids = ["pages/api/openai"];
exports.modules = {

/***/ "openai-api":
/*!*****************************!*\
  !*** external "openai-api" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("openai-api");

/***/ }),

/***/ "(api)/./pages/api/openai.js":
/*!*****************************!*\
  !*** ./pages/api/openai.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst OpenAI = __webpack_require__(/*! openai-api */ \"openai-api\");\nconst openai = new OpenAI(process.env.OPENAI_API_KEY);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    // Promt values\n    const beforePromt = ``;\n    const afterPromt = ``;\n    const breakPoint = `\\n\\n'''\\n\\n`;\n    // Construct the prompt\n    let prompt = `${beforePromt} ${breakPoint} ${req.body.name} ${breakPoint} ${afterPromt}`;\n    // Log promt\n    console.log(prompt);\n    // Call OpenAI API\n    const gptResponse = await openai.complete({\n        engine: \"text-davinci-002\",\n        prompt: `${prompt}`,\n        maxTokens: 1500,\n        temperature: 0.7,\n        topP: 1,\n        presencePenalty: 0,\n        frequencyPenalty: 0.5,\n        bestOf: 1,\n        n: 1\n    });\n    res.status(200).json({\n        text: `${gptResponse.data.choices[0].text}`\n    });\n}); // model: \"text-davinci-002\",\n // prompt: \"Write a long form social media post based on this Content that will engage a reader into conversation, include a summary of the Content\",\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3BlbmFpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsOEJBQVksQ0FBQztBQUNwQyxNQUFNQyxNQUFNLEdBQUcsSUFBSUYsTUFBTSxDQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDO0FBRXJELGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLGVBQWU7SUFDZixNQUFNQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLE1BQU1DLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDckIsTUFBTUMsVUFBVSxHQUFHLENBQUMsV0FBVyxDQUFDO0lBRWhDLHVCQUF1QjtJQUN2QixJQUFJQyxNQUFNLEdBQUcsQ0FBQyxFQUFFSCxXQUFXLENBQUMsQ0FBQyxFQUFFRSxVQUFVLENBQUMsQ0FBQyxFQUFFSixHQUFHLENBQUNNLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsRUFBRUgsVUFBVSxDQUFDLENBQUMsRUFBRUQsVUFBVSxDQUFDLENBQUM7SUFFeEYsWUFBWTtJQUNaSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDLENBQUM7SUFFcEIsa0JBQWtCO0lBQ2xCLE1BQU1LLFdBQVcsR0FBRyxNQUFNZCxNQUFNLENBQUNlLFFBQVEsQ0FBQztRQUN4Q0MsTUFBTSxFQUFFLGtCQUFrQjtRQUMxQlAsTUFBTSxFQUFFLENBQUMsRUFBRUEsTUFBTSxDQUFDLENBQUM7UUFDbkJRLFNBQVMsRUFBRSxJQUFJO1FBQ2ZDLFdBQVcsRUFBRSxHQUFHO1FBQ2hCQyxJQUFJLEVBQUUsQ0FBQztRQUNQQyxlQUFlLEVBQUUsQ0FBQztRQUNsQkMsZ0JBQWdCLEVBQUUsR0FBRztRQUNyQkMsTUFBTSxFQUFFLENBQUM7UUFDVEMsQ0FBQyxFQUFFLENBQUM7S0FDTCxDQUFDO0lBRUZsQixHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxJQUFJLEVBQUUsQ0FBQyxFQUFFWixXQUFXLENBQUNhLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDRixJQUFJLENBQUMsQ0FBQztLQUFFLENBQUMsQ0FBQztDQUN2RSxFQUFDLENBQ0YsNkJBQTZCO0NBQzdCLHFKQUFxSiIsInNvdXJjZXMiOlsid2VicGFjazovL2dwdC0zLWFwcC8uL3BhZ2VzL2FwaS9vcGVuYWkuanM/OTc3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBPcGVuQUkgPSByZXF1aXJlKFwib3BlbmFpLWFwaVwiKTtcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkocHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgLy8gUHJvbXQgdmFsdWVzXG4gIGNvbnN0IGJlZm9yZVByb210ID0gYGA7XG4gIGNvbnN0IGFmdGVyUHJvbXQgPSBgYDtcbiAgY29uc3QgYnJlYWtQb2ludCA9IGBcXG5cXG4nJydcXG5cXG5gO1xuXG4gIC8vIENvbnN0cnVjdCB0aGUgcHJvbXB0XG4gIGxldCBwcm9tcHQgPSBgJHtiZWZvcmVQcm9tdH0gJHticmVha1BvaW50fSAke3JlcS5ib2R5Lm5hbWV9ICR7YnJlYWtQb2ludH0gJHthZnRlclByb210fWA7XG5cbiAgLy8gTG9nIHByb210XG4gIGNvbnNvbGUubG9nKHByb21wdCk7XG5cbiAgLy8gQ2FsbCBPcGVuQUkgQVBJXG4gIGNvbnN0IGdwdFJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmNvbXBsZXRlKHtcbiAgICBlbmdpbmU6IFwidGV4dC1kYXZpbmNpLTAwMlwiLFxuICAgIHByb21wdDogYCR7cHJvbXB0fWAsXG4gICAgbWF4VG9rZW5zOiAxNTAwLFxuICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4gICAgdG9wUDogMSxcbiAgICBwcmVzZW5jZVBlbmFsdHk6IDAsXG4gICAgZnJlcXVlbmN5UGVuYWx0eTogMC41LFxuICAgIGJlc3RPZjogMSxcbiAgICBuOiAxLFxuICB9KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRleHQ6IGAke2dwdFJlc3BvbnNlLmRhdGEuY2hvaWNlc1swXS50ZXh0fWAgfSk7XG59O1xuLy8gbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwMlwiLFxuLy8gcHJvbXB0OiBcIldyaXRlIGEgbG9uZyBmb3JtIHNvY2lhbCBtZWRpYSBwb3N0IGJhc2VkIG9uIHRoaXMgQ29udGVudCB0aGF0IHdpbGwgZW5nYWdlIGEgcmVhZGVyIGludG8gY29udmVyc2F0aW9uLCBpbmNsdWRlIGEgc3VtbWFyeSBvZiB0aGUgQ29udGVudFwiLFxuIl0sIm5hbWVzIjpbIk9wZW5BSSIsInJlcXVpcmUiLCJvcGVuYWkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJyZXEiLCJyZXMiLCJiZWZvcmVQcm9tdCIsImFmdGVyUHJvbXQiLCJicmVha1BvaW50IiwicHJvbXB0IiwiYm9keSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ3B0UmVzcG9uc2UiLCJjb21wbGV0ZSIsImVuZ2luZSIsIm1heFRva2VucyIsInRlbXBlcmF0dXJlIiwidG9wUCIsInByZXNlbmNlUGVuYWx0eSIsImZyZXF1ZW5jeVBlbmFsdHkiLCJiZXN0T2YiLCJuIiwic3RhdHVzIiwianNvbiIsInRleHQiLCJkYXRhIiwiY2hvaWNlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/openai.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/openai.js"));
module.exports = __webpack_exports__;

})();