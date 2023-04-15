const palindromes = function (str) {
    str = str.toLowerCase().replace(/[\W_]/g, ''); // convert to lowercase and remove non-alphanumeric characters
    return str === str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
