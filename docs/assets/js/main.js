ImageArray = new Array();
ImageArray[0] = 'avatar.png';
ImageArray[1] = 'cat.png';
URLArray = new Array();
URLArray[0] = 'https://madokamagicausa.com';
URLArray[1] = 'https://genrandom.com/cats';

function checkRedirect() {
    var num = Math.floor( Math.random() * 420);
    if (num === 69) {location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';}
    console.log(`a surprise is locked behind a number.\nthe number is however not this number.\nthe number for this visit is ${num}.`)
}

function getRandomImage() {
    var num = Math.floor( Math.random() * 2);
    console.log(num)
    var img = ImageArray[num];
    var url = URLArray[num]
    document.getElementById("randImage").innerHTML = (`<a href="${url}"> <img src="assets/images/${img}" width=250px height=250px> </a>`)
}
