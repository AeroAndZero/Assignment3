function makeChange(n){
    let quaters = Math.floor(n / 25)
    n %= 25
    let dimes = Math.floor(n / 10)
    n %= 10
    let nickles = Math.floor(n / 5)
    n %= 5
    let pennies = n

    $("#quaters").value = quaters;
    $("#dimes").value = dimes;
    $("#nickles").value = nickles;
    $("#pennies").value = pennies;
}

function processEntries(){
    let amount = parseInt($("#amount").value)
    amount = isNaN(amount) ? 0 : amount;

    if(amount < 0 || amount > 99 || isNaN(amount)){
        alert("amount should be > 0 and < 99");
        return;
    }

    makeChange(amount);
}

document.addEventListener("DOMContentLoaded", (event) => {
    $("#btnCalculate").addEventListener("click", processEntries)

    $("#btnClear").addEventListener("click", () =>{
        clearFields('#amount', '#quaters', '#dimes', '#nickles', '#pennies');

        $("#amount").focus()
    } )

    $("#amount").addEventListener("click", () => clearFields("#amount"))

    $("#amount").focus()
})