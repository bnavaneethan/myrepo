#!/usr/bin/env node

var prime = function(n) {
	if (n == 2) { return n;}
	else { var flag = true;
		for(i = 2; i < n; i++) {
			if (n % i == 0) { 
				flag = false; break;}
		}
		if (flag == true) return n;
		else return 0;
	}
};


var firstkprime = function(k) {
	var i = 2;
	var arr = [];
	while(true) {
		if (arr.length < k) {
			var tmp = prime(i);
			if (tmp > 0) arr.push(tmp);
			i++;
		}
		else break;
	}
	return arr;
};

var fmt = function(arr) {
	return arr.join(",");
};

var k = 100;
//console.log("firstkprime(" + k + ")");
console.log(fmt(firstkprime(k)));

