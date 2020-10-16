// https://leetcode.com/problems/invalid-transactions/

// 1169. Invalid Transactions
// A transaction is possibly invalid if:
//
// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.
//
// Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.
//
// Example 1:
//
// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
// Example 2:
//
// Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]
// Example 3:
//
// Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// Output: ["bob,50,1200,mtv"]


let invalidTransactions = function(transactions) {
  let invalid = new Set(); // raw string output;
  let info = []; // objs from transactions

  // create an obj out of each trans
  for(let trans of transactions) {
    let [name, time, amount, location] = trans.split(','); // turns each raw trans into an arr;
    info.push({name, time, amount, location, raw: trans});
  }
  // sort each trans in chronological order;
  info.sort((a, b) => Number(a.time) - Number(b.time));

  for(let ele of info) {
    if(ele.amount > 1000) {
      invalid.add(ele.raw);
    }
  }

  for(let i = 0; i < info.length - 1; i++) {
    let current = info[i];
    let nextIdx = i + 1;

    // in case there were multiple transactions within an hour,
    // I have to compare each item to the rest of the arr;
    while(nextIdx < info.length && info[nextIdx].time - current.time <= 60) {
      if(info[nextIdx].name === current.name && info[nextIdx].location !== current.location) {
        invalid.add(current.raw);
        invalid.add(info[nextIdx].raw);
      }
      nextIdx++;
    }
  }

  return Array.from(invalid);
}








//
