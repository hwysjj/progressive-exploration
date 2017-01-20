/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/0b2956ba3d0f8a25d8dd4b32d6c72c3b', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/0b2956ba3d0f8a25d8dd4b32d6c72c3b',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "header"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "resize": "cover",
	            "src": "http://eskipaper.com/images/image-2.jpg"
	          },
	          "classList": [
	            "img-styl"
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "title-box"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": function () {return this.txt}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "article"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "paragraph"
	          ],
	          "attr": {
	            "value": "Alan Mathison Turing ( 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer.Turing is widely considered to be the father of theoretical computer science and artificial intelligence."
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "paragraph"
	          ],
	          "attr": {
	            "value": "During the Second World War, Turing worked for the Government Code and Cypher School (GC&CS) at Bletchley Park, Britain's codebreaking centre. For a time he led Hut 8, the section responsible for German naval cryptanalysis. He devised a number of techniques for speeding the breaking of German ciphers, including improvements to the pre-war Polish bombe method, an electromechanical machine that could find settings for the Enigma machine. Turing played a pivotal role in cracking intercepted coded messages that enabled the Allies to defeat the Nazis in many crucial engagements, including the Battle of the Atlantic; it has been estimated that this work shortened the war in Europe by more than two years and saved over fourteen million lives."
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "paragraph"
	          ],
	          "attr": {
	            "value": "After the war, he worked at the National Physical Laboratory, where he designed the ACE, among the first designs for a stored-program computer. In 1948 Turing joined Max Newman's Computing Machine Laboratory at the Victoria University of Manchester, where he helped develop the Manchester computers and became interested in mathematical biology. He wrote a paper on the chemical basis of morphogenesis, and predicted oscillating chemical reactions such as the Belousov–Zhabotinsky reaction, first observed in the 1960s."
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "paragraph"
	          ],
	          "attr": {
	            "value": "Turing was prosecuted in 1952 for homosexual acts, when by the Labouchere Amendment, \"gross indecency\" was still criminal in the UK. He accepted chemical castration treatment, with DES, as an alternative to prison. Turing died in 1954, 16 days before his 42nd birthday, from cyanide poisoning. An inquest determined his death as suicide, but it has been noted that the known evidence is also consistent with accidental poisoning. In 2009, following an Internet campaign, British Prime Minister Gordon Brown made an official public apology on behalf of the British government for \"the appalling way he was treated.\" Queen Elizabeth II granted him a posthumous pardon in 2013."
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "header": {
	    "width": 750,
	    "height": 500
	  },
	  "img-styl": {
	    "width": 750,
	    "height": 500
	  },
	  "title-box": {
	    "width": 750,
	    "height": 500,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0
	  },
	  "title": {
	    "fontSize": 100,
	    "color": "rgba(255,255,255,0.8)"
	  },
	  "article": {
	    "padding": 20
	  },
	  "paragraph": {
	    "marginBottom": 15
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        txt: 'running...'
	    }}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);