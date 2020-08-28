"use strict";

// Tasks from lesson practics:

class MyString {
  static reverse(string) {
    return string.split("").reverse().join("");
  }

  static ucFirst(string) {
    return string
      .split()
      .map((lеtter) => `${lеtter.charAt(0).toUpperCase()}${lеtter.slice(1)}`)
      .join();
  }

  static ucWords(string) {
    return string
      .split(" ")
      .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
      .join(" ");
  }
}

class User {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }

  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name mast be a string");
    }
    if (name.length > 128 || name === "") {
      throw new RangeError("Name must be within 1 to 128 symbols");
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set surname(surname) {
    if (typeof surname !== "string") {
      throw new TypeError("Surname mast be a string");
    }
    if (surname.length > 128 || surname === "") {
      throw new RangeError("Surame must be within 1 to 128 symbols");
    }
    this._surname = surname;
  }

  get sutname() {
    return this._surname;
  }

  get FullName() {
    return `${this._name} ${this._surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this._year = year;
  }

  get Course() {
    const date = new Date();
    return date.getFullYear() - this._year;
  }
}