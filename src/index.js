let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let upTo20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {

  myNumberArray = Array.from(String(number), Number)
  if (myNumberArray.length === 1) {
    return units[myNumberArray[0]]
  }
  if (myNumberArray.length === 2) {
    return twoDigitToHumanReadable(myNumberArray[0], myNumberArray[1])
  }
  if (myNumberArray.length === 3) {
    if (myNumberArray[1] === 0 && myNumberArray[2] === 0) {
      return `${units[myNumberArray[0]]} hundred`
    }
    return `${units[myNumberArray[0]]} hundred ${twoDigitToHumanReadable(myNumberArray[1], myNumberArray[2])}`
  }
}

function twoDigitToHumanReadable(dozen, unit) {
  if (dozen === 1) {
    return upTo20[unit]
  }
  if (unit === 0) {
    return `${dozens[dozen]}`
  } else {
    if (dozen === 0) {
      return units[unit]
    }
    dozen = `${dozens[dozen]}`
    unit = `${units[unit]}`
  }
  return dozen + ' ' + unit
}
