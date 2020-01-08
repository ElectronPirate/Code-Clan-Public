myFunctions = {

  helloWorld() {
    return "Hello World!";
  },

  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },

  divide(num1, num2) {
    return num1 / num2;
  },

  lengthOfString(str) {
    return str.length;
  },

  concatenateStrings(str1, str2) {
    return str1 + str2;
  },

  addStringAsNumber(str1, str2){
    return Number(str1) + Number(str2);
  },

  numberToFullMonthName(num) {
    switch(num){
      case 1:
        return "January";
      case 3:
        return "March";
      case 4:
        return "April";
      case 9:
        return "September";
      case 10:
        return "October";
      default:
        return "Uh oh, that's not a valid number";
    }
  },

  numberToShortMonthName(num){
    return myFunctions.numberToFullMonthName(num).substring(0, 3);
  },

  volumeOfCube(sideLength){
    return Math.pow(sideLength, 3);
  },

  volumeOfSphere(radius){
    return Number(((4.0 / 3.0) * Math.PI * (radius ** 3)).toFixed(2));
  },

  farenHeitToCelcius(f){
    var cecliusAsString = ((f - 32) * (5.0/9.0)).toFixed(2);
    return Number(cecliusAsString);
  }

};

module.exports = myFunctions;
