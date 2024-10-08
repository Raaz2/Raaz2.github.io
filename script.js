const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li');

hamburger.addEventListener('click', () => {
  // Toggle hamburger menu
  hamburger.classList.toggle('active');

  // Toggle nav links
  navLinks.classList.toggle('active');

  // Animate nav links
  links.forEach((link, index) => {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });

    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
});

//for typing change in about
const textArray = ["Java Backend Developer.", "Problem Solver.", "JavaScript Expert.", "Effective Communicator.", "Team Player."];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
const typedTextSpan = document.getElementById("typed-text");
const cursorSpan = document.querySelector(".typed-cursor");

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 50);
});


// opening resume
let drive = document
  .querySelector(".Drivegoogle")
  .addEventListener("click", openDrive);

function openDrive() {
  window.open(
    (href =
      "https://drive.google.com/file/d/1NrrW31MyWGM9ziF7yPSOu2zII0V4SgSr/view?usp=sharing")
  );
}

let drive2 = document
  .querySelector(".googleDrive")
  .addEventListener("click", openDrive2);

function openDrive2() {
  window.open(
    (href =
      "https://drive.google.com/file/d/1NrrW31MyWGM9ziF7yPSOu2zII0V4SgSr/view?usp=sharing")
  );
}


function sendEmail() {
  var name = document.querySelector('input[placeholder="Name"]').value;
  var subject = document.querySelector('input[placeholder="Subject"]').value;
  var body = document.querySelector('textarea[placeholder="Message.."]').value;
  var recipient = "rajeevranjanmishra4339@gmail.com";
  var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;
}

