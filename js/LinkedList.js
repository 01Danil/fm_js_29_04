"use strict";

class LinkedListIterator {
  constructor(list) {
    this.collection = list;
    this.curentElement = null;
  }
  next() {
    this.curentElement = this.curentElement
      ? this.curentElement.next
      : this.collection.head;
    return {
      value: this.curentElement ? this.curentElement.value : undefined, // очередной елемент нашего списка
      done: this.curentElement === null, // boolean
    };
  }
}

class ListItem {
  constructor(value) {
    this.value = value; // set value(value)
    this.next = null;
    this.prev = null;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
}

class LinkedList {
  constructor(...args) {
    // rest -> args = [1, true, null, "qwe", 5]
    this.lenght = 0;
    this.head = null;
    this.tail = null;
    for (const argument of args) {
      this.push(argument);
    }
  }
  push(value) {
    const newListItem = new ListItem(value);
    if (this.lenght === 0) {
      this.head = newListItem;
      this.tail = newListItem;
    } else {
      newListItem.prev = this.tail;
      this.tail.next = newListItem;
      this.tail = newListItem;
    }
    return ++this.lenght;
  }
  pop() {
    if (this.lenght === 1) {
      this.head = null;
      this.tail = null;
      this.lenght = 0;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

// const list = new LinkedList(1, true, null, "qwe", 5);
// console.log(...list)
// for (const item of list) {
// 	console.log(item)
// }
