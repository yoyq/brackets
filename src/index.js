module.exports = function check(str, bracketsConfig) {
    let bracketsMas = [];
    let openBrackets = {};
    let closeBrackets = {};
    let sameBrackets = {};

    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
            sameBrackets[bracketsConfig[i][0]] = bracketsConfig[i][0];
        } else {
            openBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
            closeBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (sameBrackets[str[i]]) {
            if (bracketsMas[bracketsMas.length-1] === str[i]) {
                bracketsMas.pop();
            } else {
                bracketsMas.push(str[i]);
            }
        } else if (openBrackets[str[i]]) {
            bracketsMas.push(str[i]);
        } else {
            if (closeBrackets[str[i]] && bracketsMas[bracketsMas.length-1] === closeBrackets[str[i]]) {
                bracketsMas.pop();
            } else {
                return false;
            }
        }
    }

    return bracketsMas.length === 0;
}
