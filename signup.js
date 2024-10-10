function signup() {
	var email = document.getElementById("kartiksutar@24gmail.com").value;
	var name = document.getElementById("KARTIK").value;
	var password = document.getElementById("12345").value;

	if (email == "kartiksutar@24gmail.com" || name == "KARTIK" || password == "12345") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully signed up");
		return true;
        window.location.href="index.html";
	}

}