webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(16);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: {
        todos: [],
        newTodo: ''
    },
    mutations: {
        GET_TODO(state, todo) {
            state.newTodo = todo;
        },
        ADD_TODO(state) {
            state.todos.push({
                body: state.newTodo,
                completed: false
            });
        },
        EDIT_TODO(state, todo) {
            var todos = state.todos;
            todos.splice(todos.indexOf(todo), 1);
            state.todos = todos;
            state.newTodo = todo.body;
        },
        REMOVE_TODO(state, todo) {
            var todos = state.todos;
            todos.splice(todos.indexOf(todo), 1);
        },
        CLEAR_TODO(state) {
            state.newTodo = '';
        }
    },
    actions: {
        getTodo({ commit }, todo) {
            commit('GET_TODO', todo);
        },
        addTodo({ commit }) {
            commit('ADD_TODO');
        },
        editTodo({ commit }, todo) {
            commit('EDIT_TODO', todo);
        },
        removeTodo({ commit }, todo) {
            commit('REMOVE_TODO', todo);
        },
        clearTodo({ commit }) {
            commit('CLEAR_TODO');
        }

    },
    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos.filter(todo => {
            return !todo.completed;
        })
    }

}));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(9)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(14),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d149b634",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_GetTodo_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_GetTodo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_GetTodo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CurrentTodos_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CurrentTodos_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_CurrentTodos_vue__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    GetTodo: __WEBPACK_IMPORTED_MODULE_0__components_GetTodo_vue___default.a,
    CurrentTodos: __WEBPACK_IMPORTED_MODULE_1__components_CurrentTodos_vue___default.a
  }

});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        edit(todo) {
            this.$store.dispatch('editTodo', todo);
        },
        remove(todo) {
            this.$store.dispatch('removeTodo', todo);
        }
    },
    computed: {
        todos() {
            return this.$store.getters.todos;
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        getTodo(e) {
            this.$store.dispatch('getTodo', e.target.value);
        },
        addTodo() {
            this.$store.dispatch('addTodo');
            this.$store.dispatch('clearTodo');
        }
    },
    computed: {
        newTodo() {
            return this.$store.getters.newTodo;
        }
    }

});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_main_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sass_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(2);


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */]({
  el: '#app',
  template: '<App/>',
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App___default.a }
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(12),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(13),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row",
    attrs: {
      "id": "current-todos"
    }
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [(_vm.todos.length > 0) ? _c('h3', [_vm._v("There is " + _vm._s(_vm.todos.length) + " Task To Do")]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "id": "table-container"
    }
  }, [_c('table', {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.todos), function(todo) {
    return _c('tr', [_c('td', [_vm._v(" " + _vm._s(todo.body) + " ")]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_c('button', {
      staticClass: "btn btn-warning",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function($event) {
          _vm.edit(todo)
        }
      }
    }, [_c('span', {
      staticClass: "glyphicon glyphicon-edit"
    }), _vm._v(" Edit\n                ")]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-danger",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function($event) {
          _vm.remove(todo)
        }
      }
    }, [_c('span', {
      staticClass: "glyphicon glyphicon-remove-circle"
    }), _vm._v(" Remove\n                ")])])])
  }))])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    staticClass: "text-center header",
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Task")]), _vm._v(" "), _c('th', {
    staticClass: "text-center header",
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Actions")])])])
}]}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "small-vertical-padding",
    attrs: {
      "id": "get-todo"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h2', [_vm._v("What To Do")]), _vm._v(" "), _c('div', {
    staticClass: "input-group mb-3"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "aria-label": "Task",
      "aria-describedby": "basic-addon2",
      "placeholder": "Task. . ."
    },
    domProps: {
      "value": _vm.newTodo
    },
    on: {
      "change": _vm.getTodo
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-append"
  }, [_c('button', {
    staticClass: "btn btn-info",
    on: {
      "click": _vm.addTodo
    }
  }, [_vm._v("Add Todo")])])])])])])
},staticRenderFns: []}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "app"
    }
  }, [_vm._m(0), _vm._v(" "), _c('GetTodo'), _vm._v(" "), _c('CurrentTodos')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 text-center small-vertical-padding"
  }, [_c('h1', [_vm._v(" Simple To Do List App")])])])
}]}

/***/ })
],[8]);
//# sourceMappingURL=app.9502b415f7a257495338.js.map