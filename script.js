var typed = new Typed('#element', {
  strings: ['Welcome To My Website'],
  typeSpeed: 50,
});

var typed = new Typed('#about_me', {
  strings: [`I am Pratik Guha, an IT Engineering Student at Netaji Subhas Engineering College. Currently, I am in my 3rd year of studies. I possess knowledge about standard coding languages such as C, C++, and Python, as well as some web development languages like HTML, CSS, and JavaScript. Additionally, I have earned Google Cloud Skill Badges through the arcade games and the Google Cloud Facilitator program.`],
  typeSpeed: 30,
});
let cirtificate = document.getElementById('cirtficate')

function show() {
  if (cirtificate.style.display == 'none') {
    cirtificate.style.display = 'flex';
  }
  else {
    cirtificate.style.display = 'none';

  }
}

let tcs = document.getElementById('tcs');
function toggle() {
  if (tcs.style.display == 'none') {
    tcs.style.display = 'flex'
  }
  else {
    tcs.style.display = 'none';

  }
}