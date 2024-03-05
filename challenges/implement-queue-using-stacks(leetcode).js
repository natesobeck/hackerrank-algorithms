class Stack {
  constructor() {
      this.array = []
  }
  push(value) {
      this.array.push(value)
      return this.array
  }
  pop() {
      return this.array.pop()
  }
}

var MyQueue = function() {
  this.mainStack = new Stack()
  this.secondStack = new Stack()
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.mainStack.push(x)
  return this.mainStack
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  this.secondStack.array = []
  let originalLength = this.mainStack.array.length
  for (let i = 0; i < originalLength; i++) {
      const popped = this.mainStack.pop()
      this.secondStack.push(popped)
  }
  for (let i = 0; i < originalLength; i++) {
      if (i !== 0) {
          const popped = this.secondStack.pop()
          this.mainStack.push(popped)
      }
  }
  const heldStack = this.mainStack
  this.mainStack = this.secondStack
  this.secondStack = heldStack
  return this.secondStack.array[0]
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  return this.mainStack.array[0]
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.mainStack.array.length ? false : true
};
