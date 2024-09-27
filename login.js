const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.registration-link');
const btnPop = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.close-icon');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})

btnPop.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');

})

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
})

let modal = document.getElementById('popUp');

function signUp() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

      if (localStorage.getItem(username)) {
        alert('Username already exists. Please choose another.');
        return;
      }

      localStorage.setItem(username, JSON.stringify({ username, email, password }));
      openModal();
      clearTanan();
      
      
}

document.getElementById("regForm").addEventListener("submit", signUp);


function openModal() {
    modal.classList.add("open-modal");
  }

  function closeModal() {
    modal.classList.remove("open-modal");  
    wrapper.classList.remove('active');
  }



function signIn(event){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    

    var user = localStorage.getItem(username);

    if (user == null) {
        alert('Invalid username');
    } else {
        var data = JSON.parse(user);

        if (username === data.username && password === data.password) {
            window.location.href = "../random generator/activity.html";
        } else {
            alert('Incorrect username or password');
        }
    }
}
document.getElementById("loginForm").addEventListener('submit', signIn);


function clearTanan(){
    var username = document.getElementById('registerUsername').value = '';
    var email = document.getElementById('registerEmail').value = '';
    var password = document.getElementById('registerPassword').value = '';
    
}
document.getElementById('closing').addEventListener('click',clearTanan);    

function clearLogin(){
    var username = document.getElementById('username').value = '';
    var password = document.getElementById('password').value = '';
}

function showDescription() {
    var description = document.getElementById("description");
    description.style.display = (description.style.display === "none" || description.style.display === "") ? "block" : "none";
}
