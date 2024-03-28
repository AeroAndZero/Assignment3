function clearErrors(){
    let errorMessages = $s(".error")
    for(let i in errorMessages){
        errorMessages[i].innerHTML = ""
    }
}

function validate(){
    let hasErrors = false;

    // arrival date
    if($("#arrivalDate").value == ''){
        $("#arrivalDateErr").innerHTML = "Must select a date"
        hasErrors = true;
    }

    // night
    if($("#night").value == '' || parseInt($("#night").value) < 1){
        $("#nightErr").innerHTML = "Enter a valid number"
        hasErrors = true;
    }

    // room type
    if(
        $("#roomTypeStandard").checked == false &&
        $("#roomTypeBusiness").checked == false &&
        $("#roomTypeSuite").checked == false
    ){
        $("#roomTypeErr").innerHTML = "Please select one"
        hasErrors = true;
    }

    // bed type
    if(
        $("#bedTypeKing").checked == false &&
        $("#bedTypeDoubleDouble").checked == false
    ){
        $("#bedTypeErr").innerHTML = "Please select one"
        hasErrors = true;
    }

    // name
    if($("#fullname").value.trim() == ""){
        $("#fullnameErr").innerHTML = "Your full name is required!"
        hasErrors = true;
    }

    // email
    let emailPattern = /\w+@\w+\.\w+/
    if($("#email").value.trim() == "" || !emailPattern.test($("#email").value.trim())){
        $("#emailErr").innerHTML = "This email is invalid!"
        hasErrors = true;
    }

    // phone
    if($("#phone").value.trim() == "" || $("#phone").value.trim().length != 10){
        $("#phoneErr").innerHTML = "This field is required"
        hasErrors = true;
    }

    // phillips trimmer
    $("#fullname").value = $("#fullname").value.trim()
    $("#email").value = $("#email").value.trim()
    $("#phone").value = $("#phone").value.trim()

    if(!hasErrors){
        $("#logger").innerHTML = "Your reservation has been set!"
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    $("#btnSubmit").addEventListener("click", (e) => {
        clearErrors();
        validate();
        e.preventDefault();
    })

    $("#arrivalDate").focus()
})