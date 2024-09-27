function logout(){
    window.location.href = "login.html";
    disableBackButton();

}
document.getElementById("home").addEventListener('click',logout);