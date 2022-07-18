ImageArray = [];
ImageArray[0] = 'avatar.png';
ImageArray[1] = 'cat.png';
URLArray = [];
URLArray[0] = 'https://madokamagicausa.com';
URLArray[1] = 'https://genrandom.com/cats';

const TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    if (this.txt[0] !== undefined && this.txt[0] === "C") {this.el.innerHTML = '<div style="text-align: center;"><h3 class="wrap"><a href="./abt/">'+this.txt+'</a></h3></div>';}
    else if (this.txt[0] !== undefined && this.txt[0] === "F") {this.el.innerHTML = '<div style="text-align: center;"><h3 class="wrap"><a href="./abt/">'+this.txt+'</a></h3></div>';}
    else {this.el.innerHTML = '<div style="text-align: center;"><h3 class="wrap">'+this.txt+'</h3></div>';}

    const that = this;
    let delta = 200 - Math.random() * 100;

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
    const num = Math.floor(Math.random() * 420);
    if (num === 69) {location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';}
    console.log(`a surprise is locked behind a number.\nthe number is however not this number.\nthe number for this visit is ${num}.`)
}

function getRandomImage() {
    const num = Math.floor(Math.random() * 2);
    // noinspection JSUnusedAssignment
    let img = ImageArray[num];
    // noinspection JSUnusedAssignment
    let url = URLArray[num];
    // Forcing cat image for the time being
    img = "circleavatar.png"
    url = "https://genrandom.com/cats"
    document.getElementById("randImage").innerHTML = (`<a href="${url}"> <img src="assets/images/${img}" width=250px height=250px alt=""> </a>`)
}

function typeWriter() {
    const elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    const css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
}

function typeWriter2() {
    const elements = document.getElementsByClassName('typewrite2');
    for (let i=0; i<elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    const css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
}

function myFunction() {
    const x1 = document.getElementById("type1");
    const b1 = document.getElementById("myButton");
    const l1 = document.getElementById("eng1");
    const h1 = document.getElementById("eng2");
    const x2 = document.getElementById("type2");
    const b2 = document.getElementById("myButton2")
    const l2 = document.getElementById("cat1");
    const h2 = document.getElementById("cat2");
    x1.setAttribute('hidden', '')
    b1.setAttribute('hidden', '')
    l1.setAttribute('hidden', '')
    h1.setAttribute('hidden', '')
    x2.removeAttribute('hidden')
    b2.removeAttribute('hidden')
    l2.removeAttribute('hidden')
    h2.removeAttribute('hidden')
}

function myFunction2() {
    const x1 = document.getElementById("type1");
    const b1 = document.getElementById("myButton");
    const l1 = document.getElementById("eng1");
    const h1 = document.getElementById("eng2");
    const x2 = document.getElementById("type2");
    const b2 = document.getElementById("myButton2")
    const l2 = document.getElementById("cat1");
    const h2 = document.getElementById("cat2");
    x2.setAttribute('hidden', '')
    b2.setAttribute('hidden', '')
    l2.setAttribute('hidden', '')
    h2.setAttribute('hidden', '')
    x1.removeAttribute('hidden')
    b1.removeAttribute('hidden')
    l1.removeAttribute('hidden')
    h1.removeAttribute('hidden')
}
