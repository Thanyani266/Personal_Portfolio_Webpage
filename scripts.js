const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {

        const resumeDetails = document.querySelectorAll('.resume-details');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-details');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if(index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }else{
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if(index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});

// A simple chatbot that responds with some predefined answers
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();
  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
    output = "Hello, nice to meet you. How can I assist you today?";
  } else if (input.includes("how are you")) {
    output = "I'm doing fine, thank you for asking. How can I assist you today?";
  } else if (input.includes("what is your name") || input.includes("name") || input.includes("who are you")) {
    output = "My name is Carlos, I'm a chatbot.";
  } else if (input.includes("what can you do")) {
    output = "I can chat with you and answer some questions about Thanyani Gumani's portfolio.";
  } else if (input.includes("help")) {
    output = "Sure, I am here to help. What do you need assistance with?";
  } else if (input.includes("services")) {
    output = "I offer a variety of services including web development, data analytics, data science, and DevOps consulting";
  } else if (input.includes("projects") || input.includes("work")) {
    output = "You can view my projects by visiting the portfolio section on this page (navbar)";
  } else if (input.includes("skills")) {
    output = "Thanyani has skills in HTML, CSS, JavaScript, Python, Machine Learning, MySQL, React.js, and Node.js";
  } else if (input.includes("contact")) {
    output = "You can contact Thanyani by phone at +27 81 703 9324, by email at Thanyani.Gumani@capaciti.org.za";
  } else if (input.includes("experience") || input.includes("work experience")) {
    output = "Thanyani has over 4 years of experience in Data Science and DevOps Engineering.";
  } else if (input.includes("education") || input.includes("qualification") || input.includes("qualifications")) {
    output = "Thanyani completed MSc Applied Mathematics(Data Science), Web Development Bootcamp and A certificate in Software Engineering.";
  } else if (input.includes("resume") || input.includes("cv") || input.includes("curriculum vitae")) {
    output = "You can download my resume/CV from the link provided on the homepage.";
  } else if (input.includes("programming languages")) {
    output = "Thanyani is proficient in HTML, CSS, JavaScript, MySql, Matlab, and Python.";
  } else if (input.includes("where are you based") || input.includes("location") || input.includes("where are you located") || input.includes("where are you situated") || input.includes("where do you stay")) {
    output = "I am based in Johannesburg, South Africa.";
  } else if (input.includes("tell me a joke")) {
    output = "Why did the chicken go to the seance? To get to the other side.";
  } else {
    output = "Sorry, I don't understand that. Please try something else.";
  }
  return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.innerHTML = `<i class='bx bxs-bot'></i>`;
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
    displayUserMessage(input);
    let output = chatbot(input);
    setTimeout(function() {
      displayBotMessage(output);
    }, 1000);
    document.getElementById("input").value = "";
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    sendMessage();
  }
});


// -------------------------------------------------------------------------------- //
const chatIcon = document.querySelector(".chatbot-toggler"); 
const chatbotContainer = document.querySelector(".chatbot-container"); 


chatIcon.addEventListener('click', () => {
  chatIcon.children[0].classList.toggle('bx-x');
  chatbotContainer.classList.toggle('active');
})