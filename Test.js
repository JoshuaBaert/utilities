/**
 * Created by Joshua Baert on 10/18/2016.
 */



var _ = {
	
	some: function (collection, iterator) {
		var boo = true;
		if (typeof iterator === 'undefined') {
			for (var key in collection) {
				if (!collection[key]) {
					boo = false;
				}
			}
		} else {
			for (var key in collection) {
				if (!iterator(collection[key])) {
					boo = false
				}
			}
		}
		return boo;
	}
		
		
		
		
	};
console.log(_.some([true, true, true]));

