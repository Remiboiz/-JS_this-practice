// ============================================================
//  The "this" Keyword — Practice Tasks
//  Web Development
// ============================================================
//
//  DIRECTIONS:
//    Complete each task below by filling in the TODO sections.
//    Use the "this" keyword to access or set properties and
//    call other methods on the same object.
//
//    Open index.html and click "Run Tests" to check your work.
//    A task turns green when all of its tests pass.
//
//  REMINDER — What is "this"?
//    Inside an object method or class, "this" refers to the
//    object that owns the function being called right now.
//    Use it like: this.propertyName  or  this.methodName()
// ============================================================


// ============================================================
//  TASK 1 — Object Method: Basic Property Access
// ============================================================
//  The "person" object already has name and age properties.
//  Complete the greet() method so it uses "this" to build
//  and return an introduction string.
//
//  Expected output of person.greet():
//    "Hi, I'm Alex and I'm 17 years old."
// ============================================================

const person = {
  name: "Alex",
  age: 17,

  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;

  }
};

// Uncomment to test in the console:
// console.log(person.greet());




// ============================================================
//  TASK 2 — Object Method: Calling Other Methods with this
// ============================================================
//  The "counter" object tracks a number called "count".
//  Complete the four methods so they all use "this.count"
//  to read and update the shared value.
// ============================================================

const counter = {
  count: 0,

  increment(amount) {
    this.count += amount;

  },

  decrement(amount) {
    this.count -= amount;
  },

  reset() {
    this.count = 0;
  },

  getCount() {
    return this.count;
  }
};

// Uncomment to test in the console:
// counter.increment(5);
// counter.increment(3);
// counter.decrement(2);
// console.log(counter.getCount()); // 6
// counter.reset();
// console.log(counter.getCount()); // 0




// ============================================================
//  TASK 3 — Constructor Function: Building with this
// ============================================================
//  Before classes, JavaScript used constructor functions with
//  "new" to create objects. "this" inside a constructor
//  refers to the new object being built.
//
//  Complete the Animal constructor so it saves the name and
//  sound arguments as properties on "this".
//  Then complete the speak() method on the prototype.
// ============================================================

function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.speak = function() {
  return `${this.name} says ${this.sound}!`;
};

// Uncomment to test in the console:
// const dog = new Animal("Rex", "woof");
// const cat = new Animal("Luna", "meow");
// console.log(dog.speak()); // "Rex says woof!"
// console.log(cat.speak()); // "Luna says meow!"




// ============================================================
//  TASK 4 — Class: Properties, Methods, and this
// ============================================================
//  Complete the Rectangle class.
//  - The constructor receives width and height and stores them.
//  - area() and perimeter() calculate and return their values.
//  - describe() must CALL this.area() and this.perimeter()
//    using "this" — do not recalculate manually inside it.
// ============================================================

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  describe() {
    return `This rectangle has an area of ${this.area()} and a perimeter of ${this.perimeter()}.`;
  }
}

// Uncomment to test in the console:
// const r = new Rectangle(6, 4);
// console.log(r.area());       // 24
// console.log(r.perimeter());  // 20
// console.log(r.describe());   // "This rectangle has an area of 24 and a perimeter of 20."




// ============================================================
//  TASK 5 — Class: Method Chaining with this
// ============================================================
//  When a method returns "this", you can chain calls together:
//    cart.addItem("Pen", 2.00).addItem("Ruler", 3.00).getTotal()
//
//  Complete the ShoppingCart class:
//    - addItem(name, price)    → push item, return this
//    - applyDiscount(percent)  → store discount, return this
//    - getTotal()              → sum prices, apply discount, return number
//
//  Discount example: 10% off $5.50 = $4.95
//    Total × (1 - discount / 100)
// ============================================================

class ShoppingCart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }

  addItem(name, price) {
    this.items.push({ name, price});
    return this; // enables chaining
  }

  applyDiscount(percent) {
    this.discount = percent;
    return this; //enables chaining 
  }

  getTotal() {
    let total = 0;

    for(let item of this.items) {
      total += item.price;
    }

    return total * (1 - this.discount / 100);
  }
}

// Uncomment to test in the console:
// const cart = new ShoppingCart();
// cart.addItem("Pencil", 1.50);
// cart.addItem("Notebook", 4.00);
// console.log(cart.getTotal());         // 5.5

// cart.applyDiscount(10);
// console.log(cart.getTotal());         // 4.95

// Chaining version:
// const cart2 = new ShoppingCart();
// const total = cart2
//   .addItem("Pen", 2.00)
//   .addItem("Ruler", 3.00)
//   .applyDiscount(20)
//   .getTotal();
// console.log(total);                   // 4.0
