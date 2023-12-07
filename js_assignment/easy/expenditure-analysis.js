/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];

  let checkCatagoryPresent = (catName)=>{
    let res;
    result.forEach(item=>{
      if(item.category === catName)
        res = true;
    });

    return (res ? true : false);
  };

  transactions.forEach(transaction => {
    if(checkCatagoryPresent(transaction.category)){
      result.forEach((item)=>{
        if(item.category === transaction.category)
          item.totalSpent += transaction.price;
      });
    }else{
      let newCatagory = {
        "category" : transaction.category,
        "totalSpent" : transaction.price
      };

      result.push(newCatagory);
    }
  });

  return result;
}

module.exports = calculateTotalSpentByCategory;
