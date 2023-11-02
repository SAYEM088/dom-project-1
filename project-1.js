let btn =document.querySelector('#new-quote');
let quote = document.querySelector('.qoute');
let person = document.querySelector('.person');

const quotes = [
    { quote: `"The only way to do great work is to love what you do."`, person: `Steve Jobs` },
    { quote: `"In three words, I can sum up everything I've learned about life: it goes on."`, person: `Robert Frost` },
    { quote: `"You miss 100% of the shots you don't take."`, person: `Wayne Gretzky` },
    { quote: `"The future belongs to those who believe in the beauty of their dreams."`, person: `Eleanor Roosevelt` },
    { quote: `"Life is what happens when you're busy making other plans."`, person: `John Lennon` },
    { quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`, person: `Winston Churchill` },
    { quote: `"The only limit to our realization of tomorrow will be our doubts of today."`, person: `Franklin D. Roosevelt` },
    { quote: `"It does not matter how slowly you go as long as you do not stop."`, person: `Confucius` },
    { quote: `"I have not failed. I've just found 10,000 ways that won't work."`, person: `Thomas A. Edison` },
    { quote: `"The best way to predict the future is to create it."`, person: `Peter Drucker` },
    { quote: `"In the end, we will remember not the words of our enemies, but the silence of our friends."`, person: `Martin Luther King Jr.` },
    { quote: `"Life is really simple, but we insist on making it complicated."`, person: `Confucius` },
    { quote: `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`, person: `Ralph Waldo Emerson` },
    { quote: `"You can't use up creativity. The more you use, the more you have."`, person: `Maya Angelou` },
    { quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`, person: `Nelson Mandela` }
  ];
  
  btn.addEventListener('click',function(){
     let random =Math.floor(Math.random()* quotes.length);
     quote.innerText =quotes[random].quote;
     person.innerText =quotes[random].person;
  })
  