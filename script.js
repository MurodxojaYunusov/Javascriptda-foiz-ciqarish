var Ingliz = parseInt(prompt("Ingliz tlini foizini kiriting"));
var Matematika = parseInt(prompt("Matematika tlini foizini kiriting"));
var Fizika = parseInt(prompt("Fizika tlini foizini kiriting"));



function Parcentage(num1, num2, num3){
    var x = num1 + num2 + num3;
    var z = x/300 * 100
    return z;
}

var Total = Parcentage(Ingliz, Matematika, Fizika)
document.write("Sizning balingiz foizda:" + " " + Total + "%")