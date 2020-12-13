var dayOfBirth = (((century / 4) -2 * year -1) + ((5 * year /4))+ ((26 * (month + 1) / 10)) + date) % 7;
var dayOfBirth = Math.floor(dayOfBirth)