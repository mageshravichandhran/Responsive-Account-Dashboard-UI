'use strict';


const person1 = {
  name:"Magesh",
 mail:"mageshxyz@gmail.com",
 phoneno:"9899283833",
 username:"mag",
 address:"chennai",
  pwd:1111,
};

const person2 = {
  name:"Jagadeesh",
  mail:"jagaxyz@gmail.com",
  phoneno:"9899218323",
  address:"tvm",
  username:"jaga",
  pwd:2222
};

const person3 = {
 name:"Kamal",
 mail:"kamalxyz@gmail.com",
 phoneno:"8932822920",
 address:"chennai",
 username:"kamal",
 pwd:3333
};

const person4 = {
  name:"Suresh",
 mail:"sureshxyz@gmail.com",
 phoneno:"9834855833",
 username:"sur",
 address:"chennai",
 pwd:4444
};

const persons=[person1,person2,person3,person4]



const labelWelcome = document.querySelector('.welcome');


const containerApp = document.querySelector('.app');
const containercontents = document.querySelector('.contents');

const btnLogin = document.querySelector('.login__btn');
const btnLogout=document.querySelector(".Logout")
const nav=document.querySelector(".nav2")

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const popup=document.querySelector(".popupbox")
const containeraccopen=document.querySelector(".accountopen")
const createacc=document.querySelector(".createbtn")
const submitbtn=document.querySelector(".submit")
const nav1=document.querySelector(".mainnav")
const texth1=document.querySelector(".textedit")
const wrongfeedback=document.querySelector(".wrongpwd")
const inpname=document.querySelector("#crtename")
const inpmail=document.querySelector("#crtemail")
const inpphno=document.querySelector("#crteph")
const inpusername=document.querySelector("#crteuser")
const inppwd=document.querySelector("#crtepwd")




const displaycontents = function (user) {
  containercontents.innerHTML = '';
  for(const [data,value] of Object.entries(user)){
    const html= `<div class="table__row">
                  <div class="table__date">${data}</div>
                  <div class="table__value">${value}</div>
                </div>`
  containercontents.insertAdjacentHTML("beforeend", html);



  }

     

    

};





let currentperson;

btnLogin.addEventListener('click', function (e) {
  
  e.preventDefault();

  currentperson = persons.find(
    person => person.username === inputLoginUsername.value
  );


  if (currentperson?.pwd === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentperson.name
    }`
    ;
    createacc.classList.add("hide") 
    inputLoginUsername.classList.add("blockaction")
    inputLoginPin.classList.add("blockaction")
    inputLoginUsername.disable=true;
    btnLogin.disable=true;

    containerApp.style.opacity = 100;
    nav.style.opacity=100;
    btnLogout.classList.remove("hide")

    displaycontents(currentperson)
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    wrongfeedback.classList.add("hide")
    
    


  }
  else{
    wrongfeedback.classList.remove("hide")
  }
  btnLogout.addEventListener("click",function(e){
    e.preventDefault()
    containerApp.style.opacity=0;
    nav.style.opacity=0;
    btnLogout.classList.add("hide")
    labelWelcome.textContent="login in to get started"
    createacc.classList.add("hide") 
    inputLoginUsername.classList.remove("blockaction")
    inputLoginPin.classList.remove("blockaction")
    inputLoginUsername.disable=false;
    btnLogin.disable=false;
    
    createacc.classList.remove("hide");

    
  })




});

createacc.addEventListener("click",function(e){
  e.preventDefault()
  inpname.value="";
  inpmail.value="";
  inpphno.value="";
  inpusername.value="";
  inppwd.value="";

  containerApp.classList.add("hide")
  nav.classList.add("hide")
  nav1.classList.add("blur")
  inputLoginUsername.classList.add("blockaction")
  inputLoginUsername.disable=true;
  btnLogin.disable=true;
  containeraccopen.classList.remove("hide")
  createacc.disable=true;



})

submitbtn.addEventListener("click",function(e){
  e.preventDefault()
  let newuser={};
  newuser.name=inpname.value;
  newuser.mailid=inpmail.value;
  newuser.phno=inpphno.value;
  newuser.username=inpusername.value;
  newuser.pwd=Number(inppwd.value);

  persons.push(newuser)
  containerApp.classList.remove("hide")
  nav.classList.remove("hide")
  nav1.classList.remove("blur")
  containeraccopen.classList.add("hide")

  btnLogin.disable=false;










  texth1.textContent="Account Created Succefully"

})
