const signup = document.querySelector('#signup');

const addUser = async() => {
    let email = document.getElementById("email").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let mobil = document.getElementById("mobil").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;

    

    let response = await fetch('http://localhost:8080/adduser', {
        method:'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: email,
                firstname: firstname,
                lastname: lastname,
                mobil: mobil,
                password: password,
                username: username
            })
    });

    document.getElementById('signup-form').reset();

    this.alert(response.body);
};

signup.addEventListener('click', addUser);

const login = document.querySelector('#login');

const loginUser = async() => {
    let loginPassword = document.getElementById("login-password").value;
    let loginUsername = document.getElementById("login-username").value;

    let response = await fetch('http://localhost:8080/login',{
        method:'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                password: loginPassword,
                username: loginUsername
            })
    });
    console.log(response);
};

login.addEventListener('click', loginUser);