let $ = x => document.querySelector(x);
let $s = x => document.querySelectorAll(x);

function clearFields(...fieldNames){
    for(let f in fieldNames){
        $(fieldNames[f]).value = "";
    }
}

function setInRange(field, min, max){
    let val = parseFloat($(field).value);

    if(val > max){
        $(field).value = max;
    }

    if(val < min){
        $(field).value = min;
    }
}