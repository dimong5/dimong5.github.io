alert("Введите температуру в градусах Цельсия");
var tCelsium=prompt(),
    tFarenheit=9/5*tCelsium+32,
    a=66666666,b=3333;
alert("Температура в Фаренгейтах="+tFarenheit);
console.log("допустим у нас есть a и b:");
console.log("a="+a);
console.log("b="+b);
console.log("меняем местами:");
b=a+b;
a=b-a;
b=b-a;
console.log("a="+a);
console.log("b="+b);
