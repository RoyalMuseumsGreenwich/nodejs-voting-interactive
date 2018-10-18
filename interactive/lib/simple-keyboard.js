/*!
 * 
 *   simple-keyboard v2.3.26
 *   https://github.com/hodgef/simple-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.SimpleKeyboard=n():t.SimpleKeyboard=n()}(this,function(){return function(t){function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){t.exports=e(1)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(2);n.default=o.a},function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var i=e(3),a=(e.n(i),e(4)),s=e(5),r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function t(){o(this,t),c.call(this);var n="string"===typeof(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:".simple-keyboard",e="object"===r(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1];e||(e={}),this.keyboardDOM=document.querySelector(n),this.options=e,this.options.layoutName=this.options.layoutName||"default",this.options.theme=this.options.theme||"hg-theme-default",this.options.inputName=this.options.inputName||"default",this.input={},this.input[this.options.inputName]="",this.keyboardDOMClass=n.split(".").join(""),this.keyboardDOM?this.render():console.error('"'+n+'" was not found in the DOM.')},c=function(){var t=this;this.handleButtonClicked=function(n){var e=t.options.debug;if("{//}"===n)return!1;"function"===typeof t.options.onKeyPress&&t.options.onKeyPress(n);var o={newLineOnEnter:!0===t.options.newLineOnEnter};t.input[t.options.inputName]||(t.input[t.options.inputName]="");var i=s.a.getUpdatedInput(n,t.input[t.options.inputName],o);t.input[t.options.inputName]!==i&&(t.input[t.options.inputName]=i,e&&console.log("Input changed:",t.input),"function"===typeof t.options.onChange&&t.options.onChange(t.input[t.options.inputName])),e&&console.log("Key pressed:",n)},this.clearInput=function(n){n=n||t.options.inputName,t.input[t.options.inputName]=""},this.getInput=function(n){return n=n||t.options.inputName,t.input[t.options.inputName]},this.setInput=function(n,e){e=e||t.options.inputName,t.input[e]=n},this.setOptions=function(n){n=n||{},t.options=Object.assign(t.options,n),t.render()},this.clear=function(){t.keyboardDOM.innerHTML="",t.keyboardDOM.className=t.keyboardDOMClass},this.render=function(){t.clear();var n=t.options.layout?"hg-layout-custom":"hg-layout-"+t.options.layoutName,e=t.options.layout||a.a.getLayout(t.options.layoutName),o={};Array.isArray(t.options.buttonTheme)&&t.options.buttonTheme.forEach(function(t){if(t.buttons&&t.class){var n=t.buttons.split(" ");Array.isArray(n)&&n.forEach(function(n){var e=o[n];o[n]=e?e+" "+t.class:t.class})}else console.warn('buttonTheme row is missing the "buttons" or the "class". Please check the documentation.')}),t.keyboardDOM.className+=" "+t.options.theme+" "+n,e[t.options.layoutName].forEach(function(n){var e=n.split(" "),i=document.createElement("div");i.className+="hg-row",e.forEach(function(n){var e=s.a.getButtonClass(n),a=o[n],r=s.a.getButtonDisplayName(n,t.options.display),u=document.createElement("div");u.className+="hg-button "+e+(a?" "+a:""),u.onclick=function(){return t.handleButtonClicked(n)};var c=document.createElement("span");c.innerHTML=r,u.appendChild(c),i.appendChild(u),"function"===typeof t.options.onInit&&t.options.onInit()}),t.keyboardDOM.appendChild(i)})}};n.a=u},function(t,n){},function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function t(){o(this,t)};i.getLayout=function(t){return"qwerty"===t?
{

	default:
	[
		"1 2 3 4 5 6 7 8 9 0",
		"q w e r t y u i o p {bksp}",
		"a s d f g h j k l . @",
		"{shift} z x c v b n m {.com} {.co.uk}"
	],
	shift:
	[
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { } |",
		'{lock} A S D F G H J K L : " {enter}',
		"{shift} Z X C V B N M < > ? {shift}",
		".com @ {space}"
	]
	
	// default:
	// [
	// 	"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
	// 	"{tab} q w e r t y u i o p [ ] \\",
	// 	"{lock} a s d f g h j k l ; ' {enter}",
	// 	"{shift} z x c v b n m , . / {shift}",
	// 	".com @ {space}"
	// ],
	// shift:
	// [
	// 	"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
	// 	"{tab} Q W E R T Y U I O P { } |",
	// 	'{lock} A S D F G H J K L : " {enter}',
	// 	"{shift} Z X C V B N M < > ? {shift}",
	// 	".com @ {space}"
	// ]
}:"numeric"===t?{default:["1 2 3","4 5 6","7 8 9","{//} 0 {bksp}"]}:i.getLayout("qwerty")},n.a=i},function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}(),a=function(){function t(){o(this,t)}return i(t,null,[{key:"normalizeString",value:function(t){var n=void 0;return n="@"===t?"at":","===t?"comma":"."===t?"dot":"\\"===t?"backslash":"/"===t?"fordardslash":"*"===t?"asterisk":"&"===t?"ampersand":"$"===t?"dollarsign":"="===t?"equals":"+"===t?"plus":"-"===t?"minus":"'"===t?"apostrophe":";"===t?"colon":"["===t?"openbracket":"]"===t?"closebracket":"//"===t?"emptybutton":"",n?" hg-button-"+n:""}},{key:"getDefaultDiplay",value:function(){return{"{.com}":".com","{.co.uk}":".co.uk","{bksp}":" ","{enter}":"< enter","{shift}":"shift","{s}":"shift","{tab}":"tab","{lock}":"caps","{accept}":"Submit","{space}":" ","{//}":" "}}}]),t}();a.getButtonClass=function(t){var n=t.includes("{")&&"{//}"!==t?"functionBtn":"standardBtn",e=t.replace("{","").replace("}","");return"hg-"+n+("standardBtn"===n?a.normalizeString(e):" hg-button-"+e)},a.getButtonDisplayName=function(t,n){return n=n||a.getDefaultDiplay(),n[t]||t},a.getUpdatedInput=function(t,n,e){var o=n,i=e.newLineOnEnter;if("{bksp}"===t&&o.length>0){o=o.slice(-2).match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g)?o.slice(0,-2):o.slice(0,-1)}else"{space}"===t?o+=" ":"{tab}"===t?o+="\t":"{enter}"===t&&i?o+="\n":t.includes("{")||t.includes("}")||(o+=t);return o},n.a=a}])});
//# sourceMappingURL=index.js.map