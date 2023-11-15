"use strict";

class Stack {
  constructor(maxSize, ...args) {
    // args -> array
    this._size = 0;
    this.maxSize = maxSize;
    // console.log(args[Symbol.iterator]().next().value)
    for (const argument of args) {
      // console.log(argument)
      this.push(argument);
    }
  }
  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0;
  }
  push(argument) {
    if (this.size >= this.maxSize) {
      throw new RangeError("stack overflow!");
    }
    this[`_${this.size}`] = argument;
    this._size++;
    return this.size;
  }
  pick() {
    return this[`_${this.size - 1}`];
  }
  pop() {
    if (this.isEmpty) {
      return;
    }
    const deletedElement = this[`_${this.size - 1}`];
    delete this[`_${this.size - 1}`];
    this._size--;
    return deletedElement;
  }
}

const stack1 = new Stack(undefined, 8, 12, 7, 4);
console.log(stack1);
