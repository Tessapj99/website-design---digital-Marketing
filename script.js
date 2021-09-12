let main = document.querySelector("div")

console.log(main);

let navbar = document.createElement("div");
main.appendChild(navbar)


navbar.style.cssText += `
position: relative;
left: 0;
top: 0;
display: flex;
width: 100%;
justify-content:space-between;
align-items:flex-start;
`;

const links = `
display: flex;
column-gap: 35px;
font-size: 1rem;
`;

let navleft = document.createElement("div");
navleft.style.cssText += links + `align-self:end; padding-left: 2rem;`;
navbar.appendChild(navleft);
let logo = document.createElement("img");

navleft.appendChild(logo)
logo.src = "birdy.png";

logo.style.cssText += `
width:2cm;
height:2cm;
padding-top: 0.5cm;
padding-right: 2cm;
justify-content: space-between;
padding bottom: 2cm;
flex-shrink:1;
`;


let navright = document.createElement("div")
navright.style.cssText +=
  links + `margin-left: auto; padding-right:0.5cm;`;

const CreateElementAndAppend = (
  value,
  style = null,
  onClick = null,
  tag,
  parent
) => {
  let tagName = document.createElement(tag);
  tagName.innerHTML = value;
  style !== null && (tagName.style.cssText += style);
  onClick !== null && tagName.addEventListener("click", onClick);
  parent.appendChild(tagName);
};


CreateElementAndAppend(
  "Home",
  `font-size:1.5rem;padding-top:0.5rem;font-family:arial;opacity:0.5;`,
  null,
  "p",
  navright
);
CreateElementAndAppend(
  "About",
  `font-size:1.5rem;font-family:arial;padding-top:0.5rem;opacity:0.5;`,
  null,
  "p",
  navright
);
CreateElementAndAppend(
  "Contact Us",
  `font-size:1.5rem;font-family:arial;padding-top:0.5rem;opacity:0.5;`,
  null,
  "p",
  navright
);
CreateElementAndAppend(
  "Services",
  `font-size:1.5rem;font-family:arial;padding-top:0.5rem;opacity:0.5;`,
  null,
  "p",
  navright
);

navbar.appendChild(navright);

let section2 = document.createElement("div")
section2.style.cssText += `
background-colour: teal;
display:flex;
width: 100%;
margin-top:10rem;
coloumn-gap:20px;
align-items:center;/
`;


let secleft = document.createElement("div")
secleft.style.cssText += `
width: 50%;
padding-left:2rem;
`;

CreateElementAndAppend(
  "GRAPHIC DESIGNER",
  `font-size: 2.7rem;color:Gray;font-family:arial;`,
  null,
  "h1",
  secleft
);
CreateElementAndAppend(
  "Focus on what is important to you and rely on us <br> for organizing your tasks",
  `font-size: 1.3rem;opacity:0.5;font-family:arial;`,
  null,
  "p",
  secleft
);

const onClickRegister = () => {
  register.style.display = "block";
  main.style.opacity = 0.7;
};

CreateElementAndAppend(
  "Register",
  `border-radius:4.5rem;padding:1.2rem;cursor: pointer;margin-bottom: 1.2rem;border-color:transparent;background-color:DarkBlue;color:white;font-size:1rem;font-family:arial;`,
  onClickRegister,
  `button`,
  secleft
);

const onClickLogin = () => {
  LogIn.style.display = "block";
  main.style.opacity = 0.7;
};

CreateElementAndAppend(
  "Log In",
  `border-radius:4.5rem;padding:1.2rem;cursor: pointer;margin-bottom: 1.2rem;margin-left:20px;border-color:transparent;background-color:DarkBlue;color:white;font-size:1rem;font-family:arial;`,
  onClickLogin,
  `button`,
  secleft
);
CreateElementAndAppend(
  "type here....",
  `border-radius:1rem;padding:1.2rem;cursor: pointer;margin-bottom: 1.2rem;margin-left:20px;border-color:blue;font-size:1rem;font-family:arial;`,
  null,
  `input`,
  secleft
);

section2.appendChild(secleft);


let secright = document.createElement("div");
  
let rightimg = document.createElement("img");
rightimg.src = "dx_image-2.jpg";

rightimg.style.cssText += `
width:50vw;
height: 100%;
padding-right:0.2cm;
flex-shrink:1;
`;

secright.appendChild(rightimg);
section2.appendChild(secright);


main.appendChild(section2);


// let section3 = document.createElement("div");

// section3.style.cssText += `
// background-color:darkblue;
// margin-top:1cm;
// height:20vh;
// opacity:0.7;
// position:realtive;

// ` ;
// main.appendChild(section3);

// Onclick register
let register = document.createElement("div");
register.style.display = "none";
register.style.cssText += `
position: absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
max-width: 100%;
padding: 5rem;
background-color: white;
`;


let registerModal = document.createElement("h1");
registerModal.innerHTML = "Register";
registerModal.style.textAlign = "center";


let registerForm = document.createElement("form");
registerForm.style.cssText += `
display: flex;
flex-direction: column;
row-gap: 1.2rem;
padding: 0 10rem;
`;

let registerInput = document.createElement("input");
registerInput.type = "text";
registerInput.placeholder = "yourmailid@example.com";
registerInput.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

let closeBtnR = document.createElement("span");
closeBtnR.innerHTML = "&times";
closeBtnR.style.cssText += `
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

let password = document.createElement("input");
password.type = "password";
password.placeholder = "*******";
password.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

let confirmPassword = document.createElement("input");
confirmPassword.type = "password";
confirmPassword.placeholder = "*******";
confirmPassword.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

let submitBtn = document.createElement("button");
submitBtn.innerHTML = "Submit";
submitBtn.style.cssText += `
border-radius:1.5rem;
padding:0.7rem;
margin-bottom: 1.2rem;
border-color:transparent;
background-color:DarkBlue;
color:white;
font-size:16px;
cursor: pointer;
`;

const alertOnClickR = () => {
  alert("I am an alert box!");
};

const onClickSubmitInRegisterModal = (e) => {
  e.preventDefault();
  alertOnClickR();
  register.style.display = "none";
  main.style.opacity = 1;
};

submitBtn.addEventListener("click", onClickSubmitInRegisterModal);
closeBtnR.addEventListener("click", onClickSubmitInRegisterModal);

register.appendChild(closeBtnR);
register.appendChild(registerModal);
register.appendChild(registerForm);
registerForm.appendChild(registerInput);
registerForm.appendChild(password);
registerForm.appendChild(submitBtn);

main.appendChild(register);

// onclick login 

let LogIn = document.createElement("div");
LogIn.style.display = "none";
LogIn.style.cssText += `
position: absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
max-width: 100%;
padding: 5rem;
background-color: white;
`;



let loginModal = document.createElement("h1");
loginModal.innerHTML = "Register";
loginModal.style.textAlign = "center";

let loginForm = document.createElement("form");
loginForm.style.cssText += `
display: flex;
flex-direction: column;
row-gap: 1.2rem;
padding: 0 10rem;
`;

let loginInput = document.createElement("input");
loginInput.type = "text";
loginInput.placeholder = "yourmailid@example.com";
loginInput.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

let closeBtnL = document.createElement("span");
closeBtnL.innerHTML = "&times";
closeBtnL.style.cssText += `
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;


let passwordL = document.createElement("input");
passwordL.type = "password";
passwordL.placeholder = "*******";
passwordL.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

let confirmPasswordL = document.createElement("input");
confirmPasswordL.type = "password";
confirmPasswordL.placeholder = "*******";
confirmPasswordL.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

let submitBtnL = document.createElement("button");
submitBtnL.innerHTML = "Submit";
submitBtnL.style.cssText += `
border-radius:1.5rem;
padding:0.7rem;
margin-bottom: 1.2rem;
border-color:transparent;
background-color:DarkBlue;
color:white;
font-size:16px;
cursor: pointer;
`;

const onClickSubmitInLoginModal = (e) => {
    e.preventDefault();
    //alertOnClickL();
    window.alert("mail ahs been sent");
  LogIn.style.display = "none";
  main.style.opacity = 1;
};


// alert on click 

const alertOnClickL = () => {
    alert("I am an alert box!");
};

submitBtnL.addEventListener("click", onClickSubmitInLoginModal);
closeBtnL.addEventListener("click", onClickSubmitInLoginModal);

LogIn.appendChild(closeBtnL);
LogIn.appendChild(loginModal);
LogIn.appendChild(loginForm);
loginForm.appendChild(loginInput);
loginForm.appendChild(passwordL);
loginForm.appendChild(confirmPasswordL);
loginForm.appendChild(submitBtnL);

main.appendChild(LogIn);


let section4 = document.createElement("div");
section4.style.cssText += `
display: flex;
justify-content:flex-end;`;

let leftSec = document.createElement("div");
leftSec.style.cssText += `
background-color:gray;
height:100vh;
width:50vw;
margin-top:1cm;
`;
section4.appendChild(leftSec);

let leftBox = document.createElement("div");
                                           
leftBox.style.display = "none";
leftBox.style.cssText += `
position: absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
max-width: 100%;
padding: 5rem;
background-color: white;
`;

let head = document.createElement("h2");
head.innerHTML = "Book your Appoinment Now";
head.style.textAlign = "left";
head.style.color = "white";

let infoForm = document.createElement("form");
infoForm.style.cssText += `
display: flex;
flex-direction: column;
row-gap: 1.2rem;
padding: 0 10rem;
`;


let tag1 = document.createElement("h4");
tag1.innerHTML = "Name";
tag1.style.textAlign = "left";

let info1 = document.createElement("input");
info1.type = "text";
info1.placeholder = "yourmailid@example.com";
info1.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;
let tag2 = document.createElement("h4");
tag2.innerHTML = "Place of Issue";
tag2.style.textAlign = "left";

let info2 = document.createElement("input");
info2.type = "text";
info2.placeholder = "select a city";
info2.style.cssText += `
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;

const onClickBook = () => {
  leftBox.style.display = "block";
  main.style.opacity = 0.7;
};

CreateElementAndAppend(
  "Book Now",
  `border-radius:4.5rem;padding:1.2rem;cursor: pointer;margin-bottom: 1.2rem;margin-left:20px;border-color:transparent;background-color:DarkBlue;color:white;font-size:1rem;font-family:arial;`,
  onClickBook,
  `button`,
  infoForm
);

const onClickBoooking = (e) => {
  e.preventDefault();
  //alertOnClickL();
  window.alert("mail ahs been sent");
  leftBox.style.display = "none";
  main.style.opacity = 1;
};

leftBox.addEventListener("click", onClickBoooking);



leftBox.appendChild(head);
leftBox.appendChild(infoForm);
infoForm.appendChild(tag1);
infoForm.appendChild(info1);
infoForm.appendChild(tag2);
infoForm.appendChild(info2);

leftSec.appendChild(leftBox);
section4.appendChild(leftSec);
main.appendChild(section4);


