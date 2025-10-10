// module pattern

const factory = (function () {
  let privateVariable = `This is a private variable`;

  function privateFunction() {
    // console.log('This Is A Private Function');
  }

  return {
    privateVariable,
    privateFunction,
  };
})();

factory.privateFunction();
// console.log(factory.privateVariable);

// factory pattern are here for learn
function createProduct(name, price) {
  let product = 30;

  return {
    name,
    price,

    stock() {
      console.log(`we have ${product} in stock`);
    },

    buy(quantity) {
      if (quantity <= product) {
        product -= quantity;
        console.log(
          `you booked product ${quantity} - ${product} left in stock.`
        );
      } else {
        console.log(`we only have ${product} in stock`);
      }
    },

    refill(quantity) {
      product += quantity;
      console.log(
        `you refilled ${quantity} products, now we have ${product} in stock.`
      );
    },
  };
}

let book = createProduct('book', 200);
book.buy(10);
