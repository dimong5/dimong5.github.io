
var i=2,j,k;

while (i<=100) {
    j=1;
    k=0;
    while (j<=i) {
        if (i%j==0) {
            k=k+1;
        }
        j++;
    }
    if (k==2) {
        document.write(i+" ");
    }
    i++;
}

function even(x){
    i=1;
    do {
        if (i%2==0) {
            document.write("<br>"+i+" - is even number");
        } else {
            document.write("<br>"+i+" - is odd number");
        }
        i++;
    } while (i<=x);
}
even(30);
document.write("<br>");


for (i=1; i<=9; document.write(i++)) {}

var x="x";
for (i=1; i<=20; i++) {
    console.log(x);
    x=x+"x";
}
