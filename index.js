function login(){
    let username= document.getElementById("username")
    let password2= document.getElementById("password2")

    let website_username="KARTIK";
    let website_password="12345";

    if(username==website_username && password2==website_password){
        window.location="home.html"
    }
}
function func(){
    var username= document.getElementById("username").value;
    var password2= document.getElementById("password").value;

    var website_username="KARTIK";
    var website_password="12345";

    if(username=="KARTIK" && password2=="12345"){
        window.location.href="home.html";
        alert("success")
    }
    else{
        alert("Bhai galat entry ki hai")
    }
} 