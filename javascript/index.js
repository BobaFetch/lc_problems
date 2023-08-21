//2620. Counter
function createCounter(n) {
    let count = 0;
    let next = n;
  
    return function() {
      out = next;
      next += 1;
      return out;
    }
  }
  
  // 2626. Array Reduce Transformation
  var reduce = function(nums, fn, init) {
    let acc = init;
  
    if (nums.length === 0) return init;
  
    for (let i = 0; i < nums.length; i++) {
        acc = fn(acc, nums[i])
    }
  
    return acc
  };
  
  // 2634. Filter Elements From Array
  
  var filter = function(arr, fn) {
    let output = [];
  
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            output.push(arr[i])
        }
    }
  
    return output
  };
  
  // 2635. Apply Tranform Over Each Element In Array
  var map = function(arr, fn) {
    let output = arr;
  
    for (let i = 0; i < output.length; i++) {
        output[i] = fn(output[i], i)
    }
    return output
  };
  
  // 2665. Counter II
  const createCounter = function(init) {
    let n = init;
  
    return {
      increment: function() {
        n++;
        return n;
      },
  
      decrement: function() {
        n--;
        return n;
      },
  
      reset: function() {
        n = init;
        return n;
      }
    }
  }
  
  // 2667. Create Hello World Function
  function createHelloWorld() {
    return function() {
        return "Hello World"
    }
  }
  
  
  