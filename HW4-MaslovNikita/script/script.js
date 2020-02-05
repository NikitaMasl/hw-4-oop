//Make your order
var order = {
    bigburgers: {
        quontity: 5,
        cheese: 2,
        salad: 0,
        potatoes: 4
    },
    smallburgers: {
        quontity: 3,
        cheese: 0,
        salad: 0,
        potatoes: 0
    },
    olivie: 700,
    cesar: 700,
    cola: 2,
    coffe: 2
};
function Order(){
    this.price = 0;
    this.cal = 0;
}
Order.prototype.add_cheese = function (num) {
    this.price += (10 * num);
    this.cal += (20 * num);
}
Order.prototype.add_salad = function (num) {
    this.price += (20 * num);
    this.cal += (5 * num);
}
Order.prototype.add_potatoes = function (num) {
    this.price += (15 * num);
    this.cal += (10 * num);
}
Order.prototype.addBigBurger = function (num){
    this.price += (100 * num);
    this.cal += (40 * num);
}
Order.prototype.addSmallBurger = function(num){
    this.price += (50 * num);
    this.cal += (20 * num);
}
Order.prototype.addCesar = function(weight) {
    this.price += ((weight * 100) / 100);
    this.cal += ((weight * 20) / 100);
}
Order.prototype.addOlivie = function(weight) {
    this.price += ((weight * 50) / 100);
    this.cal += ((weight * 80) / 100);
}
Order.prototype.addCola = function(){
    this.price += 50;
    this.cal += 40;
}
Order.prototype.addCoffe = function(){
    this.price += 80;
    this.cal += 20;
}
function makeorder() {
    var bill = new Order();
    bill.addBigBurger(order.bigburgers.quontity);
    bill.addSmallBurger(order.smallburgers.quontity);
    bill.add_cheese(order.bigburgers.cheese);
    bill.add_potatoes(order.bigburgers.potatoes);
    bill.add_salad(order.bigburgers.salad);
    bill.add_cheese(order.smallburgers.cheese);
    bill.add_potatoes(order.smallburgers.potatoes);
    bill.add_salad(order.smallburgers.salad);
    bill.addCesar(order.cesar);
    bill.addOlivie(order.olivie);
    bill.addCoffe(order.coffe);
    bill.addCola(order.cola);

    console.log("Your bill:");
    console.log(bill);
    console.log("Your order cost: " + bill.price + " tugrikov");
    console.log("And have " + bill.cal + " cal");
}
makeorder();
