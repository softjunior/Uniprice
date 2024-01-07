const countdown = document.querySelector('.countdown');

const interval = setInterval(() => {

const deadline = new Date(2024, 2, 10, 12, 0, 0);

const current = new Date();

const diff = deadline - current;

const days = Math.floor(diff/(1000 * 60 * 60 *24)); 
const hours = Math.floor(diff/(1000 * 60 * 60) % 24); 
const minutes = Math.floor(diff/(1000 * 60) % 60); 
const seconds = Math.floor((diff/1000) % 60); 


countdown.innerHTML = `
    <div data-content="Jours">${days}</div>
    <div data-content="Heures">${hours}</div>
    <div data-content="Minutes">${minutes}</div>
    <div data-content="Secondes">${seconds}</div>
`;
}, 1000);