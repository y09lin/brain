const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getRandomDigits = n => {
  var digits = new Array();
  for (var i=0; i<n; i++){
    digits[i] = Math.floor(Math.random()*10);
  }
  return digits;
}

module.exports = {
  formatTime: formatTime,
  getRandomDigits: getRandomDigits
}
