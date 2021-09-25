function validate(check){
    check();
}
function check(){
    var uname = document.getElementById("uname").value;
    var psw = document.getElementById("psw").value;

    if (uname == "admin" && psw == 12345){
        window.location.href = 'main.html';
        return false;
}
    else{
    window.location.href = 'index.html';
    return false;
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





