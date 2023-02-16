const menuLogo = document.querySelector('#menu-logo');
const menuClose = document.querySelector('#menu-close');
const mobileBody = document.querySelector('.mobile-body');
const featureContainer = document.querySelector('#feature-cont');

//  hamburger button functionality start
menuLogo.addEventListener('click', () => {
  mobileBody.classList.add('active');
});

menuClose.addEventListener('click', () => {
  mobileBody.classList.remove('active');
});
//  hamburger button functionality end

const speakerPeople = {
  0: {
    name: 'Oscar Byiringiro',
    title: 'Software developer from Rwanda',
    image: './images/newwoscar.jpg',
    description: 'we are happy to develop your things in professional way on time',
  },
  1: {
    name: 'Lea nes',
    title: 'Software developer from Rwanda',
    image: './images/lea.jpg',
    description: 'we are happy to marketing your project with outstanding skills',
  },
  2: {
    name: 'Peter edwin',
    title: 'Software developer from UK',
    image: './images/peter.jpg',
    description: 'we are happy to monitor your security 24 hours in more dimension',
  },
  3: {
    name: 'Jim nazdis',
    title: 'Software developer from Rwanda',
    image: './images/jim.jpg',
    description: 'we are happy to develop your things in professional way on time',
  },
};

let html = '';
const keysSpeaker = Object.keys(speakerPeople);
for (let i = 0; i < keysSpeaker.length; i += 1) {
  html += `<div class="card-feature">
    <div class="feature-image">
        <img src="${speakerPeople[i].image}" alt="speaker profile">
    </div>
    <div class="feature-detail">
        <h3 class="feature-title">${speakerPeople[i].name}</h3>
        <h4 class="feature-intro">${speakerPeople[i].title}</h4>
        <hr>
        <p class="feature-description">${speakerPeople[i].description}</p>
    </div>
</div>`;
}
featureContainer.innerHTML = html;