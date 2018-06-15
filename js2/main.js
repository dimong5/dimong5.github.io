
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 префиксный инкремент сначала увеличивает значение переменной, а после возвращает её значение
d = b++; alert(d); // 1 постфиксный инкремент в первую очередь возвращает значение, а только потом увеличивает на 1
c = (2+ ++a); alert(c); // 5 аналогично 2+(a=2+1)
d = (2+ b++); alert(d); // 4 2+(b=2), а затем b=b+1
alert(a); // 3 дважды использован оператор инкрементирования
alert(b); // 3 дважды использован оператор инкрементирования

var a = 2;
var x = 1 + (a *= 2); // 5


myVar1=5;
myVar2=2;
function posNeg(x) {
    if (x>=0) {
        return 1;
    }else {
            return 0;
    }
}
if (posNeg(myVar1)&&posNeg(myVar2)) {
    alert(myVar1-myVar2);
} else if (Boolean(!posNeg(myVar1))&&Boolean(!posNeg(myVar2))) {
    alert(myVar1*myVar2);
} else {
    alert(myVar1+myVar2);
}



do  {
    a=parseInt(prompt("Enter 'a' value 0-15"));
} while (a<0 || a>15);

switch (a) {
    case 0: document.write(0+"<br>");
    case 1: document.write(1+"<br>");
    case 2: document.write(2+"<br>");
    case 3: document.write(3+"<br>");
    case 4: document.write(4+"<br>");
    case 5: document.write(5+"<br>");
    case 6: document.write(6+"<br>");
    case 7: document.write(7+"<br>");
    case 8: document.write(8+"<br>");
    case 9: document.write(9+"<br>");
    case 10: document.write(10+"<br>");
    case 11: document.write(11+"<br>");
    case 12: document.write(12+"<br>");
    case 13: document.write(13+"<br>");
    case 14: document.write(14+"<br>");
    case 15: document.write(15+"<br>");
}

function add (x,y) {
    return (x+y);
}
function sub (x,y) {
    return (x-y);
}
function mul (x,y) {
    return (x*y);
}
function div (x,y) {
    return (x/y);
}
mathOperation(30,5,mul);
function mathOperation(arg1,arg2,operation){
    switch (operation){
       case add: console.log(add(arg1,arg2));break;
       case sub: console.log(sub(arg1,arg2));break;
       case mul: console.log(mul(arg1,arg2));break;
       case div: console.log(div(arg1,arg2));
    }
}
console.log(null===0);
console.log(null==0); // сравнение null и 0 вернет false, т.к. null означает отсутствие значения, а не 0. К тому же оба литерала имеют разные типы - number и object

// var val=5,pow=5;
function power(val, pow) {
    return (pow != 1) ? val*power(val, pow-1) : val;
}
console.log(power(2,10));
