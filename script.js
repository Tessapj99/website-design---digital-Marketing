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
align-items:center;
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
CreateElementAndAppend(
  "Register",
  `border-radius:4.5rem;padding:1.2rem;cursor: pointer;margin-bottom: 1.2rem;border-color:transparent;background-color:DarkBlue;color:white;font-size:1rem;font-family:arial;`,
  null,
  `button`,
  secleft
);
CreateElementAndAppend(
  "Log In",
  `border-radius:4.5rem;padding:1.2rem;cursor: pointer;margin-bottom: 1.2rem;margin-left:20px;border-color:transparent;background-color:DarkBlue;color:white;font-size:1rem;font-family:arial;`,
  null,
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


let section3 = document.createElement("div");

section3.style.cssText += `
background-color:darkblue;
margin-top:1cm;
height:20git vh;
position:relative;

` ;

main.appendChild(section3);

