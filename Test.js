/**
 * Created by Joshua Baert on 10/18/2016.
 */

var sums = function (sum, num) {
	return sum + num;
};

var _ = {
	
	reduce: function (collection, iterator, initialValue) {
		console.log (initialValue);
		for (var i=0; i<collection.length; i++) {
			initialValue = iterator(initialValue, collection[i]);
			console.log (initialValue);
		}
		return initialValue
	}
	
	
	
	
};
console.log(_.reduce([1, 2, 3], sums, 0));

