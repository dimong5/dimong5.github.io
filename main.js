alert("Введите температуру в градусах Цельсия");
var tCelsium=prompt(),
    tFarenheit=9/5*tCelsium+32,
    a,b, admin, name, myTest;
alert("Температура в Фаренгейтах="+tFarenheit);
alert("Допустим у нас есть переменные a и b:");
a=prompt("a=");
b=prompt("b=");
a=parseInt(a);
b=parseInt(b);
b=a+b;
a=b-a;
b=b-a;
alert("Меняем местами:\n\rТеперь a="+a+", b="+b);
alert("Остальные части задания в консоли");
admin="Василий";
name=admin;
console.log("name="+name);
myTest=1000+"108";
console.log("1000+'108'="+myTest);
console.log("Тип переменной станет: "+typeof(myTest)+", т.к. при сложении литералов числового и строкового типов результат приводится к строковому типу");

