const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', () => {
    section1.classList.add('hidden');
    section2.classList.remove('hidden');
});

btn2.addEventListener('click', () => {
    section2.classList.add('hidden');
    section1.classList.remove('hidden');
});
