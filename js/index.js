const body = document.querySelector("body");
const footerElement = document.createElement("footer");
body.appendChild(footerElement);

let today = new Date();
let thisYear = today.getFullYear();

let copyright = document.createElement('p')
copyright.innerHTML = "<p class= 'copyright'>David Lee " + thisYear + ' \u{00A9}</p>'

footerElement.appendChild(copyright);

let skills = [ "HTML", "CSS", "JavaScript", "C#", "SQL", "PHP", "Verilog", "Haskell", "GitHub"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++){
    let skill = document.createElement("li");
    skill.innerHTML = '<li class="skills-block">'+ skills[i] +'</li>';
    skillsList.appendChild(skill);
}