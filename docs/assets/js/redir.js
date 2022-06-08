let num = 3

function countDown() {
    let doc
    doc = (document.getElementById("msg").innerHTML).replace(num, String(num-1))
    document.getElementById("msg").innerHTML = doc
    num -= 1
}

function changeCount() {
    setInterval(function () { if (num === 0) {window.location.replace("https://discord.gg/rTC5N8XCQR")} else {countDown(num)} }, 1000)
}