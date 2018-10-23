(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function ToBuyController($scope, ShoppingListCheckOffService) {
		
		var listBuy = this;

		listBuy.items = ShoppingListCheckOffService.getItemsToBuy();
		$scope.listBuy = listBuy.items;

		$scope.bought = function(itemIndex){
			ShoppingListCheckOffService.addItemToBought($scope.listBuy[itemIndex].name, $scope.listBuy[itemIndex].quantity);
			ShoppingListCheckOffService.removeItemBuy(itemIndex);
			console.log($scope.listBuy.length);
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', '$scope'];
	function AlreadyBoughtController(ShoppingListCheckOffService, $scope) {
		$scope.listBought = ShoppingListCheckOffService.getItemsToBought();
}

	function ShoppingListCheckOffService() {
		var service = this;

		// List of shopping items
  		var itemsToBuy = [{name:"Book", quantity:10},
  					 	  {name:"Cafe", quantity:20}, 
  					 	  {name:"Food", quantity:30}, 
  					 	  {name:"Drink", quantity:40}, 
  					 	  {name:"Fruit", quantity:50}];

  		var itemsToBought = [];

  		service.addItemToBought = function (itemName, quantity) {
		    var item = {
		      name: itemName,
		      quantity: quantity
		    };
		    itemsToBought.push(item);
	  	};

		service.removeItemBuy = function (itemIndex) { 
		    itemsToBuy.splice(itemIndex, 1);
		};

		service.getItemsToBuy = function () {
			return itemsToBuy;
		};

		service.getItemsToBought = function () {
			return itemsToBought;
		};
	}
})();