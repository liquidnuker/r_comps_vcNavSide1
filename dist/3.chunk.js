webpackJsonp([3],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcNavSide102_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_36b20aef_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcNavSide102_vue__ = __webpack_require__(16);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcNavSide102_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_36b20aef_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcNavSide102_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcNavSide102.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcNavSide102.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36b20aef", Component.options)
  } else {
    hotAPI.reload("data-v-36b20aef", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      links: [{
        link: "http://",
        linkText: "Link One",
        linkImgSrc: "images/x.jpg",
        linkImgAlt: "",
        linkImgTitle: ""
      }, {
        link: "http://",
        linkText: "Link Two",
        linkImgSrc: "",
        linkImgAlt: "",
        linkImgTitle: ""
      }, {
        link: "http://",
        linkText: "Link Three",
        linkImgSrc: "",
        linkImgAlt: "",
        linkImgTitle: ""
      }]
    };
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prName1"],
  components: {},
  mounted: function mounted() {
    // console.log(".vue mounted");
  },
  methods: {}
});

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav', {
    staticClass: "vcnavSide102",
    attrs: {
      "role": "navigation"
    }
  }, [_c('h3', {
    staticClass: "vcnavSide102_heading"
  }, [_vm._v("Nav Title")]), _vm._v(" "), _c('ul', _vm._l((_vm.links), function(i, index) {
    return _c('li', [_c('div', {
      staticClass: "vcnavSide102_img-holder"
    }, [_c('img', {
      attrs: {
        "src": i.linkImgSrc,
        "alt": i.linkImgAlt,
        "title": i.linkImgTitle
      }
    })]), _vm._v(" "), _c('a', {
      attrs: {
        "href": i.link,
        "tabindex": "0",
        "aria-setsize": "3",
        "aria-posinset": index + 1
      }
    }, [_vm._v(_vm._s(i.linkText))])])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-36b20aef", esExports)
  }
}

/***/ })

});