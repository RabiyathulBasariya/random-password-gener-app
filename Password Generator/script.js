let characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "-", "_", "=", "+", "[", "]", "{", "}", ";", ":",
    "'", '"', ",", ".", "<", ">", "?", "/"
];
let p1 = "";
let p2 = "";
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let input = document.getElementById("num");

function randomPasswordGenerator() {

    p1 = '';
    p2 = '';
    let length = Number(input.value)

    if (length > 16) {
        length = 16;
        input.value = 16;
    }
    if (length < 8) {
        length = 8;
        input.value = 8;
    }

    for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * characters.length);
        let chara = Math.floor(Math.random() * characters.length);
        let charact = characters[char];
        let charac = characters[chara]

        p1 += charact;
        p2 += charac;
    }
    pass1.textContent = p1;
    pass2.textContent = p2;
}


pass1.addEventListener("click", function () {
    navigator.clipboard.writeText(p1);
    pass1.textContent = "Copied!";
    setTimeout(function () {
        pass1.textContent = p1;
    }, 1000)
})

pass2.addEventListener("click", function () {
    navigator.clipboard.writeText(p2);
    pass2.textContent = "Copied!";
    setTimeout(function () {
        pass2.textContent = p2;
    }, 1000)
})
