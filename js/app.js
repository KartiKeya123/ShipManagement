const login = document.querySelector('#login');
const signup = document.querySelector('#signup');
const loginUrl = 'http://localhost:8080/login';
const signupUrl = 'http://localhost:8080/adduser';

const sendHttpRequest = async(method, url, data) => {
    return await fetch(url, {
        method: method,
        headers: data ? { 'Content-Type': 'application/json' } :{},
        body: JSON.stringify(data)
    }).then(response => {
        if(response.statusText >= 400) {
            return response.json().then(errResdata => {
                const error = new error('Something went wrong!!!');
                error.data = errResdata;
                throw error;
            });
        }
        return response;
    });
};

const addUser = () => {
    let email = document.getElementById("email").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let mobil = document.getElementById("mobil").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;

    sendHttpRequest('POST', signupUrl,{
        email: email,
        firstname: firstname,
        lastname: lastname,
        mobil: mobil,
        password: password,
        username: username
    }).then(response => {
        return response.text();
    }).then(responseData => {
        alert(responseData);
    }).catch(err => {
        alert(err);
    });

    document.getElementById('signup-form').reset();
};

const loginUser = () => {
    let loginPassword = document.getElementById("login-password").value;
    let loginUsername = document.getElementById("login-username").value;

    sendHttpRequest('POST', loginUrl,{
        password: loginPassword,
        username: loginUsername
    }).then(response => {
        return response.json();
    }).then(responseData => {
        alert(JSON.stringify(responseData));
    }).catch(err => {
        alert(err);
    });
    document.getElementById('login-form').reset();
};

login.addEventListener('click', loginUser);
signup.addEventListener('click', addUser);