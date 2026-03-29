const projects = [
  {
    title: 'SAFEHOUSE: AN IOT BASED INTRUDER ALERT SYSTEM WITH BIOMETRIC SAFETY MEASURE',
    desc: 'Intelligent security system with PIR sensors, solenoid locks, ML-based face detection (MTCNN + FaceNet + k-NN), and a Flask dashboard.',
    evidence: [
      {name:'Homepage',img:'assets/HomePage.png'},
      {name:'Landingpage',img:'assets/LandingPage.png'},
      {name:'Loginpage',img:'assets/LoginPage.png'},
      {name:'Registerpage',img:'assets/RegisterPage.png'}
    ],
    preview:'safehouse/index.html'
  }
];

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    const evidence = project.evidence.map((item) => `<img src='${item.img}' alt='${item.name}' class='evidence-thumb' draggable='false'>`).join('');
    card.innerHTML = `
      <h4>${project.title}</h4>
      <p>${project.desc}</p>
      <div class='evidence-row'>${evidence}</div>
      <a class='btn btn-secondary preview-button' href='${project.preview}'>Open Project Preview</a>
    `;
    grid.appendChild(card);
  });
}

function setup() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  renderProjects();

  const projectNavLink = document.querySelector('a[href="#projects"]');
  if (projectNavLink) {
    projectNavLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '#projects';
      document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
    });
  }
}

window.addEventListener('DOMContentLoaded', setup);
