( function (){

	

	angular.module('ShoppingList', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


	// Controller

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var toBuyCtrl = this;
		toBuyCtrl.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
		toBuyCtrl.buy = ShoppingListCheckOffService.buy;
	};


	// Controller

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var alreadyBoughtCtrl = this;
		alreadyBoughtCtrl.itemsAlreadyBought = ShoppingListCheckOffService.getItemsBought();
	};


	// Service

	function ShoppingListCheckOffService(){
		var service = this;

		var itemsToBuy = [
			{ name: "cookies", quantity: 10 },
			{ name: "bread", quantity: 1 },
			{ name: "chips", quantity: 4 },
			{ name: "eggs", quantity: 10 },
			{ name: "water", quantity: 10 }
		];

		var itemsAlreadyBought = [];

		service.buy = function(index){
			itemsAlreadyBought.push(itemsToBuy[index]);
			itemsToBuy.splice(index, 1);
		};

		service.getItemsToBuy = function(){
			return itemsToBuy;
		};

		service.getItemsBought = function(){
			return itemsAlreadyBought;
		};

	}; 

})();