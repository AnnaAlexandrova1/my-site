
// // Плавный скролл для якорных ссылок
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Анимация появления элементов при скролле
// const animateOnScroll = () => {
//     const elements = document.querySelectorAll('.animate-fade-in, .animate-scale-up');

//     elements.forEach(element => {
//         const elementPosition = element.getBoundingClientRect().top;
//         const screenPosition = window.innerHeight / 1.2;

//         if (elementPosition < screenPosition) {
//             element.style.animationPlayState = 'running';
//         }
//     });
// };

// window.addEventListener('scroll', animateOnScroll);
// window.addEventListener('load', animateOnScroll);

// // Инициализация прогресс-баров при загрузке
// document.addEventListener('DOMContentLoaded', () => {
//     const progressBars = document.querySelectorAll('.skill-progress');
//     progressBars.forEach(bar => {
//         bar.style.width = bar.style.width;
//     });
// });

// // Мобильное меню
// const mobileMenuButton = document.querySelector('.md\\:hidden');
// const mobileMenu = document.querySelector('.md\\:flex');

// mobileMenuButton.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
//     mobileMenu.classList.toggle('flex');
//     mobileMenu.classList.toggle('flex-col');
//     mobileMenu.classList.toggle('absolute');
//     mobileMenu.classList.toggle('top-16');
//     mobileMenu.classList.toggle('left-0');
//     mobileMenu.classList.toggle('right-0');
//     mobileMenu.classList.toggle('bg-white');
//     mobileMenu.classList.toggle('p-4');
//     mobileMenu.classList.toggle('shadow-lg');
//     mobileMenu.classList.toggle('space-y-4');
//     mobileMenu.classList.toggle('space-x-8');
// });

function typeWriter(element, text, speed = 500) {
    let i = 0;
    element.innerHTML = '             ';
    element.classList.add('cursor-blink');

    function type() {
        if (i < text.length) {
            let newText = element.innerHTML + text.charAt(i)

            element.innerHTML = newText.slice(1);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Использование
const text = "Hello, World!";
const typewriterElement = document.getElementById('typed-out');
const catElement = document.getElementById('cat');

setTimeout(() => {
    typeWriter(typewriterElement, text, 200);
}, 3200)

