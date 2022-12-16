const ratingPage = document.querySelector('.rating-page');
const thankYouPage = document.querySelector('.thanks-page');
const submit = document.getElementById('submit');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('#rates');

submit.addEventListener('click', () => {
    thankYouPage.classList.remove('hidden');
    ratingPage.style.display = 'none';
});

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
       rating.innerHTML = rate.innerHTML
    });
})