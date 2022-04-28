ImageArray = new Array();
ImageArray[0] = 'avatar.png';
ImageArray[1] = 'cat.png';
URLArray = new Array();
URLArray[0] = 'https://madokamagicausa.com';
URLArray[1] = 'https://genrandom.com/cats';

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    if (this.txt[0] !== undefined && this.txt[0] === "c") {this.el.innerHTML = '<center><h3 class="wrap"><a href="https://reoccur.xyz/abt">'+this.txt+'</a></h3></center>';}
    else {this.el.innerHTML = '<center><h3 class="wrap">'+this.txt+'</h3></center>';}

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

function checkRedirect() {
    var num = Math.floor( Math.random() * 420);
    if (num === 69) {location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';}
    console.log(`a surprise is locked behind a number.\nthe number is however not this number.\nthe number for this visit is ${num}.`)
}

function getRandomImage() {
    var num = Math.floor( Math.random() * 2);
    var img = ImageArray[num];
    var url = URLArray[num]
    document.getElementById("randImage").innerHTML = (`<a href="${url}"> <img src="assets/images/${img}" width=250px height=250px> </a>`)
}

function typeWriter() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
}


