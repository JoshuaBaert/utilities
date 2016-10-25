/**
 * Created by Joshua Baert on 10/18/2016.
 */

/************ whoAreYou method **********/

var one = {
	name: 'Ryan',
	sayName: function () {
		return 'Hello, my name is ' + this.name;
	}
};
var two = {
	name: 'Dan'
};

var newSayName = one.sayName.bind(two);

var helloMessage = newSayName();

console.log(helloMessage);
