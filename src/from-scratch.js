class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4
  }

}

class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    super(side1, side2, side1, side2)

  }
  getArea() {
    return this.side1 * this.side2
  }

}

class Square extends Rectangle {
  constructor(side1) {
    super(side1, side1)
  }
  getDiagonal() {
    return this.side1 * Math.sqrt(2)
  }
}

/* Be creative with this one! */
class Person {
  static #instances = []
  constructor(name, partner, age) {
    this.name = name;
    this.partner = partner;
    this.age = age;
    Person.#instances.push(this)
  }
  getBirthYear() {
    const currentYear = 2024;
    return currentYear - this.age;
  }

  breakUp() {
    if (!this.partner) {
      return `${this.name} doesn't even have a partner...`
    } else {
      const oldPartner = this.partner;
      this.partner = null;
      return `${this.name} has broken up with ${oldParnter}.`
    }
  }
  giveASummary() {
    if (!this.partner && this.age > 18)
      return `${this.name} is ${this.age} and is very lonely...`
    else if (!this.partner)
      return `${this.name} isn't allowed to date because they are only ${this.age}.`
    else
      return `${this.name} is ${this.age} and they are dating ${this.partner}.`
  }
  static listInstances() {
    return [...Person.#instances]
  }
  static findByName(name) {
    return Person.#instances.find((person) => person.name === name);
  }
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
