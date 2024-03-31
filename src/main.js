const sfw = document.getElementById('sfw');
const nsfw = document.getElementById('nsfw');
const ball = document.getElementById('ball');
const resultScreen = document.getElementById('result');
const answer = document.getElementById('answer');
const instructions = document.getElementById('instructions');

const answers = [{nsfw: "You don’t know your ass from first base", sfw:"You don’t know your elbow from first base"},

{nsfw: "Blow it out your ass", sfw:"Blow it out your elbow"},

{nsfw: "You think you’re soooooo glamorous", sfw:"You think you’re sooooo glamourous"},

{nsfw: "Try again, dickhead", sfw:"Try again"},

{nsfw: "Ask again later, I’m watching Jeopardy", sfw:"Ask again later, I’m watching Jeopardy"},

{nsfw: "You are NOT hungry", sfw:"You are NOT hungry"},

{nsfw: "I’m not your grandma, I'm a crazy lady", sfw:"I’m not your grandma, I'm a crazy lady"},

{nsfw: "Bring me my coffee then ask again", sfw:"Bring me my coffee then ask again"},

{nsfw: "In your dreams, dickhead", sfw:"In your dreams"},

{nsfw: "You’re blowing it!!!", sfw:"You’re blowing it!!!"},

{nsfw: "They’re just jealous", sfw:"They’re just jealous"},

{nsfw: "Go to CVS for me then ask again", sfw:"Go to CVS for me then ask again"},

{nsfw: "I was just thinking about them so they're probably going to die soon", sfw:"I was just thinking about them so they're probably going to die soon"},

{nsfw: "That looks like twenty pounds of shit in a ten pound bag", sfw:"That looks like twenty pounds of crap in a ten pound bag"},

{nsfw: "Now why the fuck…", sfw:"Now why the heck…"},

{nsfw: "Everyone’s always coming up to me and telling me their crazy life story", sfw:"Everyone’s always coming up to me and telling me their crazy life story"},

{nsfw: "God did make all kinds of faces", sfw:"God did make all kinds of faces"}
]

var isSfw = true;

nsfw.addEventListener('click', makeNsfw.bind(this));
sfw.addEventListener('click', makeSfw.bind(this));
ball.addEventListener('click', shakeBall.bind(this));

function updateAnswer(){
    let index = Math.floor(Math.random() * answers.length);
    if (isSfw){
        answer.innerText = answers[index]['sfw'];
    } else {
        answer.innerText = answers[index]['nsfw'];
    }
}

function shakeBall(){
    ball.classList.add('animate-wobble-motion');
    resultScreen.classList.add('animate-screen-fade-out');
    setTimeout(()=> resultScreen.classList.remove('animate-screen-fade-out'), 1000);
    setTimeout(()=> resultScreen.classList.add('hidden'), 1000);
    setTimeout(updateAnswer, 2000);
    setTimeout(()=> instructions.classList.add('hidden'), 4150);
    setTimeout(()=> answer.classList.remove('hidden'), 4200);
    setTimeout(()=> resultScreen.classList.remove('hidden'), 4200);
    setTimeout(()=> answer.classList.add('hidden'), 10000);
    setTimeout(()=> ball.classList.remove('animate-wobble-motion'), 10000);
    setTimeout(()=> resultScreen.classList.remove('animate-screen-fade-out'), 10000);
    setTimeout(()=> instructions.classList.remove('hidden'), 10500);
}

function makeSfw(){
    if (isSfw === false){
        sfw.classList.toggle('bg-teal-200');
        nsfw.classList.toggle('bg-teal-200');
        sfw.setAttribute('aria-description', 'mode selected');
        nsfw.setAttribute('aria-description', 'mode not selected');
        isSfw = true;
    }
}

function makeNsfw(){
    if (isSfw === true){
        sfw.classList.toggle('bg-teal-200');
        nsfw.classList.toggle('bg-teal-200');
        nsfw.setAttribute('aria-description', 'mode selected');
        sfw.setAttribute('aria-description', 'mode not selected');
        isSfw = false;
    }
}