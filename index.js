const btn = document.querySelector('#btn');
const getAdvise = () => {

    //QUOTE TRANSITION
    const quote = document.querySelector('#quote');
    const adviseId = document.querySelector('#adviseId');

    quote.classList.add('fade-out');
    quote.classList.remove('fade-in');

    adviseId.classList.add('fade-out');
    adviseId.classList.remove('fade-in');

    //API CALL
    const API_URL = 'https://api.adviceslip.com/advice'

    fetch(API_URL, {cache: 'no-store'})
    .then((response) => response.json())
    .then((data) => {
        setTimeout(() => {
            quote.innerHTML = data.slip.advice;
            adviseId.innerHTML = "ADVICE " +"#" + data.slip.id;

            quote.classList.remove('fade-out');
            quote.classList.add('fade-in');

            adviseId.classList.remove('fade-out');
            adviseId.classList.add('fade-in');
        }, 1000);
    })

    // DICE ANIMATION AND DISABLING BUTTON
    const dice = document.querySelector('#dice');
    btn.disabled = true;

    setTimeout(() => {
        dice.classList.add('dice-animation');
        btn.classList.add('btn-active');
    }, 0);

    setTimeout(() => {
        dice.classList.remove('dice-animation');
        btn.classList.remove('btn-active');
        btn.disabled = false;
    }, 1450);
}

btn.addEventListener('click', getAdvise);


