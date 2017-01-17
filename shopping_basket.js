var shoppingBasket ={
  items:[],
  amount: 0,
  empty:function(){
  this.items=[]
  },
  addItem:function(item){
   this.items.push(item);
  },
  removeItem:function(item){
    var indexOfItem = this.items.indexOf(item);
    this.items.splice(indexOfItem,1);
  },
  total:function(){
    this.amount = 0;
    for (item of this.items){
      this.amount += item.price;
    }
  },

  discount10:function(){
    if(this.amount>=20){
      this.amount = (this.amount*0.9).toFixed(2);
    }
  },

  discountCard:function(customer){
    if(customer.hasCard === true){
        this.amount = (this.amount*0.95).toFixed(2);
      }
  },

  // bogoff:function(){
  //   count={};
  //   for( item of this.items){
  //     if(count[item.name]){
  //       count[item.name] +=1 
  //       if(count[item.name]%2==0){
  //         this.amount -=item.price
  //       }
  //       else {count[item.name]=1
  //       }
  //     }

  //   }
  // }

}

module.exports = shoppingBasket;


// Extension (hard!) Add the ability to have buy one get one free items.