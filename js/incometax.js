function processEntries(){
    let taxableIncome = parseInt($("#taxableIncome").value)
    taxableIncome = isNaN(taxableIncome) ? 0 : taxableIncome;

    if(taxableIncome <= 0){
        alert("Enter valid taxable income");
        return;
    }

    let ranges = [
        [0, 9875],
        [9875, 40125],
        [40125, 85525],
        [85525, 163300],
        [163300, 207350],
        [297350, 518400]
    ]

    let baseAmount = [
        [0, 0.1],
        [987.5, 0.12],
        [4617.5, 0.22],
        [14605.5, 0.24],
        [33271.5, 0.32],
        [47367.5, 0.35],
        [156235, 0.37]
    ]

    let taxOwned = 0;

    for (let i in ranges){
        if(ranges[i][0] <= taxableIncome && taxableIncome < ranges[i][1]){
            taxOwned = baseAmount[i][0] + baseAmount[i][1] * (taxableIncome - ranges[i][0]);
            
            break;
        }
    }

    $("#taxOwned").value = taxOwned.toFixed(2);
}

document.addEventListener("DOMContentLoaded", (event) => {
    $("#btnCalculate").addEventListener("click", processEntries)

    $("#btnClear").addEventListener("click", () =>{
        clearFields('#taxableIncome', '#taxOwned');

        $("#taxableIncome").focus()      
    } )

    $("#taxableIncome").addEventListener("click", () => clearFields("#taxableIncome"))

    $("#taxableIncome").focus()
})