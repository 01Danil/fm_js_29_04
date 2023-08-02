"use strict";

// {}
// new Object ()
// Object ()

const obj = {
  _prop: 88,
  get prop() {
    return this._prop;
  },
  set prop(value) {
    this._prop = value;
  },
};

// console.log(obj._prop); // НЕЛЬЗЯ !!!
obj.prop = 123;
// console.log(obj.prop);