function chess() {

    var blockBig = document.getElementsByClassName("container");
    var blockSmall = document.createElement("div");
    var blockBorder = document.createElement("div");
    var leftColumn = document.createElement("div");
    var rightColumn = document.createElement("div");
    var upperRow = document.createElement("div");
    var lowerRow = document.createElement("div");
    var letter = document.createElement("div");
    var letterArray = new Array("a", "b", "c", "d", "e", "f", "g", "h")

    letter.style.width = "35px";
    letter.style.height = "35px";
//letter.style.border="1px solid black";
//letter.style.display="table-cell";
// letter.style.verticalAlign="bottom";
// letter.style.textAlign="center";
    letter.style.display = "flex";
    letter.style.alignItems = "center";
    letter.style.justifyContent = "center";



    upperRow.style.display = "flex";
    upperRow.style.justifyContent = "space-between";
    upperRow.style.flexDirection = "row";
//upperRow.style.border="1px solid black";
    upperRow.style.width = "870px";
    upperRow.style.height = "35px";
    upperRow.style.padding = "0px 70px 0px 70px";

    blockBorder.appendChild(upperRow);

    for (i = 1; i <= 8; i++) {
        letter.innerText = letterArray[i - 1];
        upperRow.appendChild(letter.cloneNode(true));
    }


    lowerRow.style.display = "flex";
    lowerRow.style.justifyContent = "space-between";
    lowerRow.style.flexDirection = "row";
//lowerRow.style.border="1px solid black";
    lowerRow.style.width = "870px";
    lowerRow.style.height = "35px";
    lowerRow.style.padding = "0px 70px 0px 70px";


    leftColumn.style.display = "flex";
    leftColumn.style.justifyContent = "space-around";
    leftColumn.style.flexDirection = "column";
//leftColumn.style.border="1px solid black";
    leftColumn.style.width = "35px";
    leftColumn.style.height = "800px";
    blockBorder.appendChild(leftColumn);

    for (i = 1; i <= 8; i++) {
        letter.innerText = i;
        leftColumn.appendChild(letter.cloneNode(true));
    }


    rightColumn.style.display = "flex";
    rightColumn.style.justifyContent = "space-around";
    rightColumn.style.flexDirection = "column";
//rightColumn.style.border="1px solid black";
    rightColumn.style.width = "35px";
    rightColumn.style.height = "800px";


    blockBorder.style.width = "880px";
    blockBorder.style.height = "880px";
//blockBorder.style.border="1px solid black";
    document.body.appendChild(blockBorder);
    blockBorder.appendChild(blockBig[0]);

    blockBorder.appendChild(rightColumn);
    for (i = 8; i >= 1; i--) {
        letter.innerText = i;
        rightColumn.appendChild(letter.cloneNode(true));
    }

    blockBorder.style.margin = "0 auto";
    blockBorder.style.display = "flex";
    blockBorder.style.justifyContent = "center";
    blockBorder.style.alignItems = "center";
    blockBorder.style.flexWrap = "wrap";
    blockBorder.style.backgroundColor = "grey";


    blockSmall.setAttribute("class", "inner");
    var text = document.createElement('span');
    text.style.fontSize = "40px";
    text.style.textAlign = "center";
    text.style.alignSelf = "center";


    var figureWhite = new Array("♖", "♘", "♗", "♔", "♕", "♗", "♘", "♖");
    for (var j = 1; j <= 8; j++) {

        for (var i = 1; i <= 8; i++) {
            blockSmall.appendChild(text);


            if (blockSmall.style.backgroundColor == "black") {
                text.style.color = "white";
            } else {
                text.style.color = "black";
            }

            switch (j) {


                case 1:
                    text.innerText = figureWhite[i - 1];
                    break;
                case 8:
                    text.innerText = figureWhite[i - 1];
                    break;
                case 2:
                    text.innerText = "♙";
                    break;
                case 7:
                    text.innerText = "♙";
                    break;
                default:
                    text.innerText = " ";
            }
            ;


            blockBig[0].appendChild(blockSmall.cloneNode(true));


            if (blockSmall.style.backgroundColor == "black") {
                blockSmall.style.backgroundColor = "white"
            } else {
                blockSmall.style.backgroundColor = "black"
            }
        }
        ;
        if (blockSmall.style.backgroundColor == "black") {
            blockSmall.style.backgroundColor = "white"
        } else {
            blockSmall.style.backgroundColor = "black"
        }
    }
    ;
    blockBorder.appendChild(lowerRow);
    for (i = 8; i >= 1; i--) {
        letter.innerText = letterArray[i - 1];
        lowerRow.appendChild(letter.cloneNode(true));
    }
}

chess();