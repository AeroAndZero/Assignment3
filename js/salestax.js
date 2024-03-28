function processEntries(){
    let subtotal = parseFloat($("#subtotal").value)
    let taxRate = parseFloat($("#taxRate").value)

    subtotal = isNaN(subtotal) ? 0 : subtotal;
    taxRate = isNaN(taxRate) ? 0 : taxRate;

    if(subtotal <= 0 || subtotal > 10000 || taxRate <= 0 || taxRate > 12){
        alert("Subtotal must be > 0 and < 10000\nTax Rate must be > 0 and < 12");    
        return;
    }

    let salesTax = subtotal * taxRate / 100;
    let total = subtotal + salesTax;

    $("#salesTax").value = salesTax;
    $("#total").value = total;

}

document.addEventListener("DOMContentLoaded", (event) => {
    $("#btnCalculate").addEventListener("click", processEntries)

    $("#btnClear").addEventListener("click", () =>{
        clearFields('#subtotal', '#taxRate', '#salesTax', '#total');
        $("#subtotal").focus()      
    } )

    $("#subtotal").addEventListener("click", () => clearFields("#subtotal"))

    $("#taxRate").addEventListener("click", () => clearFields("#taxRate"))

    $("#subtotal").focus()
})