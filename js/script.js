var cartCounter = 0;
var cartPrice = 0;
var addToCart = document.querySelectorAll('.item-button__cart');
var cartCounterLabel = document.querySelector('#cart-counter');

var fnPriceCounter = function (elem) {
  var tempPrice = elem.parentElement.previousElementSibling.innerHTML;
  tempPrice = tempPrice.replace(/^\$(\d+)\s\D+(\d+).*$/g, '$1.$2')
  cartPrice += +tempPrice;
  return 'Added ' + cartPrice.toFixed(2) + ' $';
}

var fnRestore = function (elem, restore) {
  elem.innerHTML = restore;
  elem.addEventListener('click', fnCounter);
}

var fnCounter = function () {
  cartCounter++;
  cartCounterLabel.innerHTML = cartCounter;

  if (cartCounter === 1) {
    cartCounterLabel.style.display = 'block';
  }

  var tempButton = this;
  var restoreHTML = this.innerHTML;

  this.innerHTML = fnPriceCounter(this);
  this.removeEventListener('click', fnCounter)
  setTimeout(fnRestore, 2000, tempButton, restoreHTML);
}

for(var i = addToCart.length; i--;){
  addToCart[i].addEventListener('click', fnCounter);
}