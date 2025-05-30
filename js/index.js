//adding footer
const body = document.querySelector("body");
const footerElement = document.createElement("footer");
body.appendChild(footerElement);

//adding copyright
let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement('p')
copyright.innerHTML = "<p class= 'copyright'>David Lee " + thisYear + ' \u{00A9}</p>'
footerElement.appendChild(copyright);

//adding skills
let skills = ["HTML", "CSS", "JavaScript", "C#", "SQL", "PHP", "Verilog", "Haskell", "GitHub"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = '<li class="skills-block">' + skills[i] + '</li>';
    skillsList.appendChild(skill);
}

//message handling
let messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener("submit", function (event) {

    //reading inputs
    event.preventDefault();
    let username = event.target.usersName.value;
    let email = event.target.email.value;
    let userMessage = event.target.usersMessage.value;
    console.log(username + email + userMessage);


    //displaying messages
    let messageSection = document.getElementById("Messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = "<a href='mailto:" + email + "'>" + username + "</a><br><span>" + userMessage + "</span>";

    //remove button
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener("click", function () {
        let entry = removeButton.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    event.target.reset();
})

let projectSection = document.getElementById("Projects");
let projectList = projectSection.querySelector("ul");
const hideTheseProjects = ['Davlee1', 'Kotlin-tutorials', 'DavidLee.github.io'];

fetch('https://api.github.com/users/Davlee1/repos')
    .then(response => {
        if (!response.ok) {
            throw new Error('Request failed');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (!hideTheseProjects.includes(data[i].name)) //checks if the project name should be displayed
            {
                let project = document.createElement("li");
                project.classList.add("Projects-block");
                project.innerHTML = data[i].name;
                projectList.appendChild(project);
            }
        }
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
