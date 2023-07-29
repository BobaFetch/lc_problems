// 412. FizzBuzz
function fizzBuzz(n: number): string[] {
    let output: string[] = [];
  
    for (let i=1; i<=n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output.push("FizzBuzz")
      } else if (i % 3 === 0) {
        output.push("Fizz")
      } else if (i % 5 === 0) {
        output.push("Buzz")
      } else output.push(i.toString())
    }
  
    return output;
  }
  
  // 1672. Richest Customer Wealth
  function maximumWealth(accounts: number[][]): number {
    let richecstCustomer:number = 0;
  
    for (let i=0; i<accounts.length; i++) {
      let currentCustomerWealth:number = 0;
  
      for (let j=0; j<accounts[i].length; j++) {
        currentCustomerWealth += accounts[i][j];
      };
      if (currentCustomerWealth > richecstCustomer) richecstCustomer = currentCustomerWealth;
  
    }
    return richecstCustomer;
  };
  
  // 1480. Running Sum of 1d Array
  function runningSum(nums: number[]): number[] {
    let output: number[] = [];
    let acc:number = 0;
  
    for (let i=0; i<nums.length; i++) {
      acc += nums[i];
      output.push(acc);
    }
    
    return output;
  }
  
  