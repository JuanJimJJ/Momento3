//Animation between menus
const btnLogIn= document.querySelector('.login-button'),
      btnSignUp = document.querySelector('.sign-up-button'),  
      signUp = document.querySelector('.sign-up'),
      logIn  = document.querySelector('.log-in');

document.addEventListener('click', e => {
    if (e.target === btnLogIn || e.target === btnSignUp) {
        logIn.classList.toggle('active');
        signUp.classList.toggle('active')
    }
});

//Signing up

const url = "https://cesde-f928b-default-rtdb.firebaseio.com/user.json";
const signupInfo = document.querySelector('#signup-form');
const loginInfo = document.querySelector('#login-form');

signupInfo.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
    method: "POST",
    body: JSON.stringify({
      address: signupInfo.querySelector('#address').value,
      document: signupInfo.querySelector('#document').value,
      mail: signupInfo.querySelector('#mail').value,
      name: signupInfo.querySelector('#name').value,
      password: signupInfo.querySelector('#password').value,
      phone: signupInfo.querySelector('#phone').value,
      surname: signupInfo.querySelector('#surname').value,
    }),
})
.then((Response) => {
  Response.json();
})
.then((data) => {
  console.log(data);
})
});

// Logging in

loginInfo.addEventListener('submit', (e) => {
        e.preventDefault();
        const mail = loginInfo.querySelector('#login-mail').value;
        const password = loginInfo.querySelector('#login-pw').value;
  
fetch(url)
    .then((response) => {
    return response.json();
    })
    .then((data) => {
    for (let pair in data) {

            if (data[pair].mail == mail && data[pair].password == password) {
            window.open('indexhome.html', '_blank');
            debugger
            }

            else if (data[pair].mail !== mail || data[pair].password !== password) {
            console.log("Incorrect info. Please try again!");
            //window.alert("Incorrect info. Please try again!");
            debugger
            }
        }
    })
});



