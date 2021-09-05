// JavaScript source code
function sample() {
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["Telephone"];

    

    
        if (name.value == "") {
		window.alert("Please enter your name.");
		name.focus();
		return false;
    }

    if (name.value == 0 || name.value == 1 || name.value == 2 || name.value == 3 || name.value == 4 || name.value == 5 || name.value == 6 || name.value == 7 || name.value == 8 || name.value == 9) {
        window.alert("Please enter only alphabets.");
        name.focus();
        return false;
    }
    
    if (email.value == "") {
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}

	if (phone.value == "") {
		window.alert("Please enter your telephone number.");
		phone.focus();
		return false;
    }

   

	
	return true;
}
