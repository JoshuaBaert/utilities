/**
 * Created by Joshua Baert on 10/18/2016.
 */

var list = [[5, 1, 7], [3, 2, 1]];

var _ = {
	
	invoke : function (list, methodName, args) {
		
		
		if (typeof methodName !== 'string') {
			console.log(methodName);
			methodName = methodName.toString().slice(9);
			console.log(methodName);
			
			var index = methodName.indexOf('(');
			methodName = methodName.slice(0,index);
			console.log(methodName);
		}
		for (var i = 0; i < list.length; i++) {
			list[i] = list[i][methodName]();
		}
		return list;
	}
	
	
	
	
};
console.log(_.invoke(list, Array.prototype.sort));

