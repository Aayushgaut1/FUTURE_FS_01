var typed = new Typed('#text', {
  strings: ['', 'Developer', 'Designer', 'Writer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// SHOW SKILLS
let skillBtn = document.querySelector('.skill_btn');
let skillDet = document.querySelector('.about_bottom');

if (skillBtn && skillDet) {
  skillBtn.addEventListener('click', () => {
    skillDet.classList.toggle('show_skills');
  });
}
