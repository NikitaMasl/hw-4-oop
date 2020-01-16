
//Make your order
var order = {
    bigburgers:{
        quontity:0,
        cheese:0,
        salad:0,
        potatoes:0
    },
    smallburgers:{
        quontity:0,
        cheese:0,
        salad:0,
        potatoes:0
    },
    olivie:0,
    cesar:0,
    cola:0,
    coffe:0
};

function Burger(){
    
}
Burger.prototype.add_cheese = function(num){
    this.price += (10*num);
    this.cal += (20*num);
}
Burger.prototype.add_salad = function(num){
    this.price += (20*num);
    this.cal += (5*num);
}
Burger.prototype.add_potatoes = function(num){
    this.price += (15*num);
    this.cal += (10*num);
}
function Big_burger(){
    this.price =  100;
    this.cal = 40;
}
Big_burger.prototype = Object.create(Burger.prototype)
function Small_burger(){
    this.price =  50;
    this.cal = 20;
}
Small_burger.prototype = Object.create(Burger.prototype)


function Salad(){

}
Salad.prototype.calculateprice = function(weight){
    this.price = ((weight*this.price)/100); 
    this.cal = ((weight*this.cal)/100); 
}
function Cesar(){
    this.price = 100;
    this.cal = 20;
}
Cesar.prototype = Object.create(Salad.prototype);
function Olivie(){
    this.price = 50;
    this.cal = 80;
}
Olivie.prototype = Object.create(Salad.prototype);


function Cola(){
    this.price = 50;
    this.cal = 40;
}
function Coffe(){
    this.price = 80;
    this.cal = 20;
}

function makeorder(){
    var bill=[];
    var money = 0;
    var cal=0;
    for(i=0; i<order.bigburgers.quontity; i++){
        bill[i]=new Big_burger();
        bill[i].add_cheese(order.bigburgers.cheese);
        bill[i].add_salad(order.bigburgers.salad);
        bill[i].add_potatoes(order.bigburgers.potatoes);
    }
    for(i=order.bigburgers.quontity; i<order.smallburgers.quontity+order.bigburgers.quontity; i++){
        bill[i]=new Small_burger();
        bill[i].add_cheese(order.smallburgers.cheese);
        bill[i].add_salad(order.smallburgers.salad);
        bill[i].add_potatoes(order.smallburgers.potatoes);
    }
    var numprevpos=order.bigburgers.quontity+order.smallburgers.quontity;
    if(order.olivie>0){
        bill[numprevpos] = new Olivie();
        bill[numprevpos] .calculateprice(order.olivie);
        numprevpos++;
    }
    if(order.cesar>0){
        bill[numprevpos] = new Cesar();
        bill[numprevpos] .calculateprice(order.cesar);
        numprevpos++;
    }
    if(order.cola>0){
        for(i=numprevpos; i<numprevpos+order.cola; i++){
            bill[i] = new Cola();
        }
        numprevpos+=order.cola;
    }
    if(order.coffe>0){
        for(i=numprevpos; i<numprevpos+order.coffe; i++){
            bill[i] = new Coffe();
        }
        numprevpos+=order.coffe;
    }
    console.log("Your bill:")
    for(i=0;i<bill.length;i++){
        console.log(bill[i]);
        money+=bill[i].price;
        cal+=bill[i].cal
    }
    console.log("Your order cost: " + money + " tugrikov");
    console.log("And have "+cal+" cal");
}
makeorder();
