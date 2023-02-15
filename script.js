let button = document.querySelector("#button");
let qoute = document.querySelector(".mainContent");
let person = document.querySelector(".person");

const qoutes = [
    {
        qoute: '"Be yourself; everyone else is already taken."',
        person: 'OSCAR WILDE'
    },
    {
        qoute: '"In three words I can sum up everything I\'ve learned about life: it goes on."',
        person: 'Robert Frost'
    },
    {
        qoute: '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."',
        person: 'Albert Einstein'
    },
    {
        qoute: '"A room without books is like a body without a soul."',
        person: 'Marcus Tullius Cicero'
    },
    {
        qoute: '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams."',
        person: 'Dr. Seuss'
    }
]

button.addEventListener('click',change);
function change(){
    let rand = Math.floor(Math.random() * qoutes.length);
    qoute.innerText = qoutes[rand].qoute;
    person.innerText = qoutes[rand].person;
}