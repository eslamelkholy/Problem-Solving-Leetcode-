class MyStack {
  constructor() {
    this.stack = [];
    this.indexPointer = -1;
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
    this.indexPointer++;
  }
  /**
   * @return {number}
   */
  pop() {
    const result = this.stack[this.indexPointer];
    this.stack.splice(this.indexPointer, 1);
    this.indexPointer--;
    return result;
  }
  /**
   * @return {number}
   */
  top() {
    return this.stack[this.indexPointer];
  }
  /**
   * @return {boolean}
   */
  empty() {
    return this.stack.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
