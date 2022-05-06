let num = 5

function countDown() {
    let doc = document.getElementById("msg").innerHTML
    doc = (document.getElementById("msg").innerHTML).replace(num, num-1) 
    document.getElementById("msg").innerHTML = doc
    num -= 1
}

function changeCount() {
    setInterval(function () { if (num === 0) {window.location.replace("https://discord.gg/rTC5N8XCQR")} else {countDown(num)} }, 1000)
}