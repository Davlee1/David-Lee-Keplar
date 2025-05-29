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
    removeButton.innerHTML = "<button type='remove' id='remove'>Remove</button>";
    removeButton.addEventListener("click", function () {
        let entry = removeButton.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    event.target.reset();
})