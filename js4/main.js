var numberInput,
    objSeparated = {
        ones: 0,
        tens: 0,
        hundrets: 0,
    };
console.log(divConvert(numberInput = +prompt("Enter number 0-999")));
function divConvert(x) {
    if (numberInput > 999) {
        for (var i in objSeparated) {
            delete objSeparated[i];
            //или обнуление objSeparated[i]=0;
        };
    } else {

        for (var i in objSeparated) {
            objSeparated[i] = numberInput % 10;
            numberInput = (numberInput - numberInput % 10) / 10;
        };
    };
    return objSeparated;
}





