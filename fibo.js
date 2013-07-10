#!/usr/bin/env node

var fibonacci = function(n) {
	if(n < 1) { return 0;}
	else if (n == 1 || n == 2) { return 1;}
	else if (n > 2) { return fibonacci(n - 1) + fibonacci(n - 2);}
};

var firstkfib = function(k) {
	var i = 1;
	var arr = [];
	for(i = 1; i < k+1; i++) {
		arr.push(fibonacci(i));
	}
	return arr;
};

var fmt = function(arr) {
	return arr.join(" ");
};

var k = 20;
console.log("firstkfib(" + k + ")");
console.log(fmt(firstkfib(k)));

