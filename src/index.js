const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let decode = function (expr) {
    let world = "";
    for (let i = 0; i < expr.length; i = i + 10) {
        let letter = expr.substr(i, 10);
        let encode = ""
        if (letter == "**********") {
            world += " ";
            continue;
        }
        for (let k = 0; k <= letter.length; k = k + 2) {
            let code = letter.substr(k, 2);
            if (code == "10") {
                encode += ".";
            }
            else if (code == "11") {
                encode += "-";
            }
        }
        world += MORSE_TABLE[encode];
        encode = "";
    }
    return(world);
}
module.exports = {
    decode
}
