var quantity = 1;
var price = 400;
var total = 0;

function Increment() {
    quantity += 1;
    document.getElementById("quantityInput").value = quantity;

    var vat = price * 0.15 * quantity;
    vat = Math.round(vat,3);
    document.getElementById("totalVat").innerHTML = "R" + vat;

    total = price * quantity;

    document.getElementById("total").innerHTML = "R" + total;
}
function Decrement() {
    if(quantity > 0){
        quantity -= 1;
    }
    document.getElementById("quantityInput").value = quantity;

    var vat = price * 0.15 * quantity;
    vat = Math.round(vat,3);
    document.getElementById("totalVat").innerHTML = "R" + vat; 

    total = price * quantity;
    document.getElementById("total").innerHTML = "R" + total;
}

function CloseWindow() {
    var el = document.getElementById("cartAnim"); 
    var pos = 0;
    var id = null;

    clearInterval(id);

    id = setInterval(frame, 10);
    function frame() {
        if(pos > 500){
            clearInterval(id);
            document.getElementById("cartContainer").style.display = "none";
        }
        else{
            pos += 30;

            el.style.position = "Relative";
            el.style.left = pos + 'px';
        }
    }
}
function Checkout() {
    if (quantity <= 0) {
        alert("Cannot Checkout 0 items.");
    }
    else{
        CloseWindow();
    }
}