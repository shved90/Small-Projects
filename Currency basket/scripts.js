
//modifiable variables for different basket layout setup
var shoppingItem = "item";
var shoppingList = "shoppingList";
var shoppingBasket = "basket";
var basketList = "basketList"
var currencyList = "currency";

document.addEventListener("click", function(event){
	clickResult(event.target);
})

function clickResult(target){
	var nodes = [];
	var element = target;
	nodes.push(element);
	while(element.parentNode) {
		nodes.unshift(element.parentNode);
		element = element.parentNode;
	}
	
	var lookupById = {};
	for (var i = 0, len = nodes.length; i < len; i++) { // easy lookup functions
		lookupById[nodes[i].id] = nodes[i];
	}
	
	var lookupByClass = {};
	for (var i = 0, len = nodes.length; i < len; i++) {
		lookupByClass[nodes[i].classList] = nodes[i];
	};
	 
	if(event.target.dataset.action == "basket:add"){ // list of actionable click cases
		addToBasket(lookupByClass[shoppingItem]);
	};
	if(event.target.dataset.action == "basket:remove"){
		removeFromBasket(lookupByClass[shoppingItem])
	};
	if(event.target.dataset.action == "basket:minus"){
		changeQuantity(lookupByClass[shoppingItem])
	};
	if(event.target.dataset.action == "basket:plus"){
		changeQuantity(lookupByClass[shoppingItem])
	};
	if(lookupById[currencyList]){
		changeCurrency(event.target);
	}

	var datasetAction = event.target.dataset.action;

	// switch(datasetAction) { //better way of doing the above, not sure why it doesnt work as it is now
	// 	case "baket:add":
	// 		addToBasket(lookupByClass[shoppingItem]);
	// 		break;

	// 	case "basket:remove":
	// 		removeFromBasket(lookupByClass[shoppingItem])
	// 		break;

	// 	case "basket:minus":
	// 		changeQuantity(lookupByClass[shoppingItem])
	// 		break;

	// 	case "basket:plus":
	// 		changeQuantity(lookupByClass[shoppingItem])
	// 		break;

	// 	default:
	// 		console.log("nothing actionable has been clicked")
	// }
}

window.onload = function() { // check items in basket, and update total on load - adds dynamic element to initial page view
  updateTotal()
};


function addToBasket(item){ // add to basket and update total
	event.preventDefault();
	var clone = item.cloneNode(true);
	var itemList = document.getElementById(basketList);
	itemList.insertBefore(clone, itemList.firstChild);

	updateTotal();
}

function changeQuantity(item){ // check if plus or minus clicked, update total, if less than 1 then remove item from basket and update total
	var quantityAction = event.target.dataset.action;
	var quantity = item.getElementsByClassName("quantity")[0];
	switch(quantityAction) {
		case "basket:plus":
			quantity.innerText++;
			updateTotal();
			break;

		case "basket:minus":
			quantity.innerText--;
			if (quantity.innerText < 1){
				removeFromBasket(item);
			}
			updateTotal();
			break;
	}
}

function updateTotal(){
	var itemList = document.getElementById(basketList);
	var BasketItemPrices = itemList.getElementsByClassName("item__price");
	var BasketItemQuantity = itemList.getElementsByClassName("quantity");

	var totalPrice = 0;
	for (var i = 0; i < BasketItemPrices.length; i++){ // run through all price tags in basket, output sum of all
		totalPrice += BasketItemPrices[i].getAttribute("content") * BasketItemQuantity[i].innerText; 
	}

	document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
}

function removeFromBasket(item){
	event.preventDefault();
	item.remove();
	updateTotal();
}

function changeCurrency(currency){
	currencylayer(function(currencyObj){ // needs an active state on default/selected currency to run in conjunction with updateTotal and on load
		updateTotal();

		var objectCurrencyName = sourceCurrency + currency.id;
		var objectList = JSON.parse(currencyObj)["quotes"];
		var objectCurrencyValue = 0;

		for (var key in objectList) {
		  if (objectList.hasOwnProperty(key) && key == objectCurrencyName) { // find target currency value
		    objectCurrencyValue = objectList[key];
		  }
		}

		var priceFields = document.getElementsByClassName("item__price");
		var basketTotal = document.getElementById("totalPrice").innerText;

		for (var i = 0; i < priceFields.length; i++){ // apply currency value to all price/totalPrice fields
			var currentPrice = priceFields[i].getAttribute("content");
			priceFields[i].innerText = (currentPrice * objectCurrencyValue).toFixed(2);
		}

		document.getElementById("totalPrice").innerText = (basketTotal * objectCurrencyValue).toFixed(2);

	})
}

var endpoint = 'live', //with paid license can have convert value for intelligent conversion rates based on changing source currency
access_key = '1d93f9b48ec227d86f41f1e9ebd2541c',
sourceCurrency = "USD", //license restricts to USD only for source currency
currencies = "EUR, GBP, RUB, USD";

function currencylayer(currencyObj) {
	
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				currencyObj(xhr.responseText);
			}
			else {
				console.log('Request failed.  Returned status of ' + xhr.status);
			}
		}
    }
	
	xhr.open('GET', 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key + '&source=' + sourceCurrency + '&currencies=' + currencies + '&format=1', true);
	
	xhr.send();
	return xhr.onreadystatechange();
};

