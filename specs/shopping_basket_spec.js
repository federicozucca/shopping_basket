var basket = require("../shopping_basket");
var assert = require("assert");

describe("Shopping Basket",function(){
  it("should start empty", function(){
    assert.equal(0,basket.items.length);
  });

  it("should be able to add in item to the basket", function(){
    basket.empty();
    basket.addItem({name:"Coke",price:1.00})
    assert.equal(1,basket.items.length);
  });

  it("should be able to remove an item to the basket", function(){
    basket.empty();
    basket.addItem({name:"Fanta",price:1.00})
    basket.addItem({name:"Fanta",price:1.00})
    basket.removeItem({name:"Fanta",price:1.00})
    assert.equal(1,basket.items.length);
  }) 

  it("should be able to calculate the amount of the basket", function(){
    basket.empty();
    basket.addItem({name:"Fanta",price:1.00})
    basket.total();
    assert.equal(1, basket.amount);
  }) 

  it("should have a 10% discount if total amount greater than 20£", function(){
    basket.empty();
    basket.addItem({name:"White Wine",price:20})
    basket.total();
    basket.discount10();
    assert.equal(18, basket.amount);
  }) 

  it("should have a 5% discount if they have  a discount card", function(){
    basket.empty();
    basket.addItem({name:"White Wine",price:20})
    basket.total();
    basket.discount10();
    basket.discountCard({hasCard:true});
    assert.equal(17.10, basket.amount);
  }) 

  // it("should have a buy one get one for free discount", function(){
  //   basket.empty();
  //   basket.addItem({name:"White Wine",price:10})
  //   basket.addItem({name:"White Wine",price:10})
  //   console.log(basket.items)
  //   basket.total();
  //   basket.bogoff();
  //   assert.equal(10, basket.amount);
  // }) 


});
