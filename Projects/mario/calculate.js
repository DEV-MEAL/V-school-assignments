var cheepPrice = document.getElementById("cheep-price");
var cheepQty = document.getElementById("cheep-qty");
var cheepTotal = document.getElementById("cheep-total");
cheepQty.addEventListener("change", function () {
    cheepTotal.value = cheepPrice.value * cheepQty.value
})

var bombsprice= document.getElementById("bombs-price");
var bombsQty = document.getElementById("bombs-qty");
var bombsTotal = document.getElementById("bombs-total");
bombsQty.addEventListener("change", function () {
    bombsTotal.value = bombsprice.value * bombsQty.value
})

var gombasprice= document.getElementById("gombas-price");
var gombasQty = document.getElementById("gombas-qty");
var gombasTotal = document.getElementById("gombas-total");
gombasQty.addEventListener("change", function () {
    gombasTotal.value = gombasprice.value * gombasQty.value
})
press=document.getElementById("press");
press.addEventListener("click", function () {
    idtotal=document.getElementById("idtotal");
     idtotal.value = Number(gombasTotal.value) + Number(bombsTotal.value) + Number(cheepTotal.value);
})

