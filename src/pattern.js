// module pattern

const factory = (function () {
  let privateVariable = `This is a private variable`;

  function privateFunction() {
    console.log('This Is A Private Function');
  }

  return {
    privateVariable,
    privateFunction,
  };
})();

factory.privateFunction();
console.log(factory.privateVariable);
