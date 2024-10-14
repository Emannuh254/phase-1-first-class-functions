// 1. Function that receives a callback function and calls it
function receivesAFunction(callback) {
    callback(); // Calls the callback function
  }
  
  // 2. Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function");
    }
    return namedFunction; // Returns the named function
  }
  
  // 3. Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function");
    };
  }
  