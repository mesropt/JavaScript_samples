/*
2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
 */

var a = 2;
var x = 1 + (a *= 2);
console.log(x) // 5

/*
Здесь применяется присваивание с умножением (смысл: a = a * 2). То есть x = 1 + 4.
 */