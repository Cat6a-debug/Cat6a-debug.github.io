var clicks = 0
function showmeme() {
    document.getElementById('meme').style.display = 'block';
    document.getElementById('button').innerHTML = "Here you go!"
    clicks += 1
    if (clicks>=15) {
        document.getElementById('button').innerHTML = "Woah, okay, I've only the one. Settle down."
    }
    if (clicks>=25) {
        document.getElementById('button').innerHTML = "Okay, Okay! Fine! You can have <strong>one</strong> more.";
        document.getElementById('meme').style.display = 'none';
        document.getElementById('meme2').style.display = 'block';
    }
    if (clicks>=35) {
        document.getElementById('button').innerHTML = "SERIOUSLY STOP!";
    }
    if (clicks>=50) {
        document.getElementById('button').innerHTML = "<strong>STOP IT!</strong>";
    }
    if (clicks>=65) {
        var btn1 = document.createElement("button");
        btn1.innerHTML = "HA! I'M DOWN HERE NOW!";
        btn1.id = 'button2';
        btn1.onclick('showmeme2()');
        document.body.append(btn1);
        document.getElementById('button').remove();
    }
    var clicksound = new Audio('click.mp3')
    clicksound.play()
}
function showmeme2() {
    clicks += 1
    var clicksound = new Audio('click.mp3')
    clicksound.play()
}