/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до
100.
 */

for (var counter = 0; counter <= 100; counter++) {
    if (counter > 1) {
        if (counter < 3) {console.log(counter);}
        else {
            var x = counter - 1;
            while (counter % x !== 0) {
                var x = x - 1; if (x === 1) {
                    console.log(counter);
                }
            }
        }
    }
}
