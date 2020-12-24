
function postSign() {
    var user = {
        name: document.getElementById('name').value,
        fathername: document.getElementById('fname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    document.getElementById('name').value = "";
    document.getElementById('fname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:5000/signup';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));
    Http.onreadystatechange = (e) => {
        document.getElementById("result").innerText = Http.responseText;
    }
    return false;


}


function login() {

    let Emails = document.getElementById("lemail").value;
    let Passwords = document.getElementById("lpassword").value;

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:5000/login';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");

    Http.send(JSON.stringify({
        email: Emails,
        password: Passwords
    }));
    document.getElementById('lemail').value = ""
    document.getElementById('lpassword').value = ""
    Http.onreadystatechange = (e) => {

        let JSONres = JSON.parse(Http.responseText)

        document.getElementById("Result").innerText = JSONres.message;
        document.getElementById("name").innerText = "Name :" + JSONres.name;
        document.getElementById("fname").innerText = "Father Name :" + JSONres.fname;
        document.getElementById("email").innerText = "Email :" + JSONres.email;



    }


    return false;
}