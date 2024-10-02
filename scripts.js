function changeBackground(imageSrc, title, match, comingSoon,description) {
    document.getElementById('background-image').src = imageSrc;
    document.querySelector('.info h1').innerText=title;
    document.querySelector('.info.match').innerText=match;
    document.querySelector('.info.coming-soon').innerText=comingSoon;
    document.querySelector('.info.description').innerText=description;

}

