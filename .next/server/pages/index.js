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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ \"@heroicons/react/solid\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Home() {\n    // React Hooks\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        text: \"\"\n    });\n    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // Fetch data from API\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (search) {\n                setIsLoading(true);\n                const res = await fetch(`/api/openai`, {\n                    body: JSON.stringify({\n                        name: search\n                    }),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    method: \"POST\"\n                });\n                const data = await res.json();\n                setData(data);\n                setIsLoading(false);\n            }\n        };\n        fetchData();\n    }, [\n        search\n    ]);\n    // What we want to render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" My Awesome GPT-3 App \"\n                    }, void 0, false, {\n                        fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gradient-to-r from-pink-100 to-blue-300 min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col justify-center max-w-3xl w-full align-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl text-center font-extrabold text-slate-800 drop-shadow sm:text-5xl mb-1\",\n                            children: \"it is a text transformer created by Scott...\"\n                        }, void 0, false, {\n                            fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"block text-sm text-center font-medium text-gray-500\",\n                            children: \"Here you can write the topics what you like .\"\n                        }, void 0, false, {\n                            fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center relative backdrop-filter overflow-hidden mb-6 max-w w-full rounded-md ring-1 ring-black ring-opacity-0 p-4 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    className: \"max-w shadow-sm min-h-64 block w-full focus:ring-pink-500 focus:border-pink-500 sm:text-sm border border-gray-300 rounded-md\",\n                                    type: \"textarea\",\n                                    value: query,\n                                    onChange: (event)=>setQuery(event.target.value),\n                                    placeholder: \"please leave your words here for text creation.....\",\n                                    defaultValue: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"inline-flex mt-5 items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\",\n                                    type: \"button\",\n                                    onClick: ()=>setSearch(query),\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-5 p-5 text-sm text-gray-900 border-t-2 border-slate-200 \",\n                                    children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"Loading ...\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 28\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \" \",\n                                            data.text,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 53\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fiftycentsjj/Downloads/text_creation_frontend/pages/index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNrQjtBQUNPO0FBUXRCO0FBRWpCLFNBQVNZLElBQUksR0FBRztJQUM3QixjQUFjO0lBQ2QsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSVosK0NBQVEsQ0FBQztRQUFFYSxJQUFJLEVBQUUsRUFBRTtLQUFFLENBQUM7SUFDOUMsTUFBTSxLQUFDQyxLQUFLLE1BQUVDLFFBQVEsTUFBSWYsK0NBQVEsRUFBRTtJQUNwQyxNQUFNLEtBQUNnQixNQUFNLE1BQUVDLFNBQVMsTUFBSWpCLCtDQUFRLEVBQUU7SUFDdEMsTUFBTSxLQUFDa0IsU0FBUyxNQUFFQyxZQUFZLE1BQUluQiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUVqRCxzQkFBc0I7SUFDdEJDLGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU1tQixTQUFTLEdBQUcsVUFBWTtZQUM1QixJQUFJSixNQUFNLEVBQUU7Z0JBQ1ZHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkIsTUFBTUUsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUNyQ0MsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQzt3QkFDbkJDLElBQUksRUFBRVYsTUFBTTtxQkFDYixDQUFDO29CQUNGVyxPQUFPLEVBQUU7d0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtxQkFDbkM7b0JBQ0RDLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQUM7Z0JBQ0YsTUFBTWpCLElBQUksR0FBRyxNQUFNVSxHQUFHLENBQUNRLElBQUksRUFBRTtnQkFDN0JqQixPQUFPLENBQUNELElBQUksQ0FBQyxDQUFDO2dCQUNkUSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckI7U0FDRjtRQUVEQyxTQUFTLEVBQUUsQ0FBQztLQUNiLEVBQUU7UUFBQ0osTUFBTTtLQUFDLENBQUMsQ0FBQztJQUViLHlCQUF5QjtJQUN6QixxQkFDRSw4REFBQ2QsMkNBQVE7OzBCQUNQLDhEQUFDSixrREFBSTs7a0NBQ0gsOERBQUNnQyxPQUFLO2tDQUFDLHdCQUFzQjs7Ozs7NEJBQVE7a0NBQ3JDLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUNQLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMkhBQTJIOzBCQUN4SSw0RUFBQ0MsTUFBSTtvQkFBQ0QsU0FBUyxFQUFDLDREQUE2RDs7c0NBQzNFLDhEQUFDRSxJQUFFOzRCQUFDRixTQUFTLEVBQUMsaUZBQWlGO3NDQUFDLDhDQUVoRzs7Ozs7Z0NBQUs7c0NBQ0wsOERBQUNHLEdBQUM7NEJBQUNILFNBQVMsRUFBQyxxREFBcUQ7c0NBQUMsK0NBRW5FOzs7OztnQ0FBSTtzQ0FHSiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHlIQUEwSDs7OENBQ3ZJLDhEQUFDSSxVQUFRO29DQUNQSixTQUFTLEVBQUMsOEhBQW9JO29DQUM5SUssSUFBSSxFQUFDLFVBQVU7b0NBQ2ZDLEtBQUssRUFBRTNCLEtBQUs7b0NBQ1o0QixRQUFRLEVBQUUsQ0FBQ0MsS0FBSyxHQUFLNUIsUUFBUSxDQUFDNEIsS0FBSyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztvQ0FDakRJLFdBQVcsRUFBQyxxREFBcUQ7b0NBQ2pFQyxZQUFZLEVBQUUsRUFBRTs7Ozs7d0NBQ2hCOzhDQUdGLDhEQUFDQyxRQUFNO29DQUNMWixTQUFTLEVBQUMsNk5BQTZOO29DQUN2T0ssSUFBSSxFQUFDLFFBQVE7b0NBQ2JRLE9BQU8sRUFBRSxJQUFNL0IsU0FBUyxDQUFDSCxLQUFLLENBQUM7OENBQ2hDLFFBRUQ7Ozs7O3dDQUFTOzhDQUVULDhEQUFDb0IsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLDZEQUE2RDs4Q0FDekVqQixTQUFTLGlCQUFHLDhEQUFDZ0IsS0FBRztrREFBQyxhQUFXOzs7Ozs0Q0FBTSxpQkFBRyw4REFBQ2UsTUFBSTs7NENBQUMsR0FBQzs0Q0FBQ3RDLElBQUksQ0FBQ0UsSUFBSTs0Q0FBQyxHQUFDOzs7Ozs7NENBQU87Ozs7O3dDQUU1RDs7Ozs7O2dDQUNGOzs7Ozs7d0JBQ0Q7Ozs7O29CQUNIOzs7Ozs7WUFDRyxDQUNYO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncHQtMy1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBFbW9qaUhhcHB5SWNvbiBhcyBFbW9qaUhhcHB5SWNvblNvbGlkLFxuICBFbW9qaVNhZEljb24sXG4gIEZpcmVJY29uLFxuICBIZWFydEljb24sXG4gIFRodW1iVXBJY29uLFxuICBYSWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gUmVhY3QgSG9va3NcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyB0ZXh0OiBcIlwiIH0pO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEZldGNoIGRhdGEgZnJvbSBBUElcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvb3BlbmFpYCwge1xuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWU6IHNlYXJjaCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgc2V0RGF0YShkYXRhKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtzZWFyY2hdKTtcblxuICAvLyBXaGF0IHdlIHdhbnQgdG8gcmVuZGVyXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gTXkgQXdlc29tZSBHUFQtMyBBcHAgPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tcGluay0xMDAgdG8tYmx1ZS0zMDAgbWluLWgtc2NyZWVuIHB4LTQgcHktMTYgc206cHgtNiBzbTpweS0yNCBtZDpncmlkIG1kOnBsYWNlLWl0ZW1zLWNlbnRlciBsZzpweC04XCI+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgIG1heC13LTN4bCB3LWZ1bGwgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyIGZvbnQtZXh0cmFib2xkIHRleHQtc2xhdGUtODAwIGRyb3Atc2hhZG93IHNtOnRleHQtNXhsIG1iLTFcIj5cbiAgICAgICAgICAgIGl0IGlzIGEgdGV4dCB0cmFuc2Zvcm1lciBjcmVhdGVkIGJ5IFNjb3R0Li4uXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIHRleHQtY2VudGVyIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgIEhlcmUgeW91IGNhbiB3cml0ZSB0aGUgdG9waWNzIHdoYXQgeW91IGxpa2UgLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIHsvKiBDYXJkICYgSW5wdXQgZmllbGQgICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcmVsYXRpdmUgYmFja2Ryb3AtZmlsdGVyIG92ZXJmbG93LWhpZGRlbiBtYi02IG1heC13IHctZnVsbCByb3VuZGVkLW1kICByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktMCBwLTQgXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXcgc2hhZG93LXNtICAgICAgbWluLWgtNjQgIGJsb2NrIHctZnVsbCBmb2N1czpyaW5nLXBpbmstNTAwIGZvY3VzOmJvcmRlci1waW5rLTUwMCBzbTp0ZXh0LXNtIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGVhc2UgbGVhdmUgeW91ciB3b3JkcyBoZXJlIGZvciB0ZXh0IGNyZWF0aW9uLi4uLi5cIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiXCJ9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7LyogQnV0dG9uIHRvIHRoYXQgY2FsbHMgQVBJICovfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBtdC01IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctc20gdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTcwMCBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoKHF1ZXJ5KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHAtNSB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYm9yZGVyLXQtMiBib3JkZXItc2xhdGUtMjAwIFwiPlxuICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PiA6IDxzcGFuPiB7ZGF0YS50ZXh0fSA8L3NwYW4+fVxuICAgICAgICAgICAgICB7Lyoge2xvcmVtfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZyYWdtZW50IiwiRW1vamlIYXBweUljb24iLCJFbW9qaUhhcHB5SWNvblNvbGlkIiwiRW1vamlTYWRJY29uIiwiRmlyZUljb24iLCJIZWFydEljb24iLCJUaHVtYlVwSWNvbiIsIlhJY29uIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwidGV4dCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmZXRjaERhdGEiLCJyZXMiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsImhlYWRlcnMiLCJtZXRob2QiLCJqc29uIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsInAiLCJ0ZXh0YXJlYSIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@heroicons/react/solid":
/*!*****************************************!*\
  !*** external "@heroicons/react/solid" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();