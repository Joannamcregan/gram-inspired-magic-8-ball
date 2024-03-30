const sfw = document.getElementById('sfw');
const nsfw = document.getElementById('nsfw');

var isSfw = true;

nsfw.addEventListener('click', makeNsfw.bind(this));
sfw.addEventListener('click', makeSfw.bind(this));

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