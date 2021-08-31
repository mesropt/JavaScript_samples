/*
4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
 */

for(let lineLength = 0; lineLength < 20; lineLength++) {
    let pyramid = '';
    for(let lineNumber = 0; lineNumber <= lineLength; lineNumber++) {
        pyramid = pyramid + 'x';
    }
    console.log(pyramid);
}