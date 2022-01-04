module.exports = function reverse (n) {

    const result = n.toString().split('').reverse().join('');
    return parseFloat(result);
  
}
