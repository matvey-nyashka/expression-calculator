function eval() {
    // Do not use eval!!!
    return;
}

function fer(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "/") {
          if (array[i+1] === "0") {
            throw new Error("TypeError: Division by zero.");
          }
        }
      }
    let leftPair = 0;
    let rightPair = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "(") {
        leftPair++;
      }
      if (array[i] === ")") {
        rightPair++;
      }
    }
    if (leftPair != rightPair) {
      throw new Error("ExpressionError: Brackets must be paired.");
    }
    
  }

function expressionCalculator(expr) {
    let arr = expr.replace(/\s/g,"").split("");
    fer(arr);
    result = new Function("return " + expr.replace(/\s/g,""));
    return result();
}

module.exports = {
    expressionCalculator
}