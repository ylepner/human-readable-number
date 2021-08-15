module.exports = function toReadable(number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let upTo20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let bigNumber = ['hundred', 'thousand'];

  myNumberArray = Array.from(String(number), Number)
  if (myNumberArray.length === 1) {
    return units[myNumberArray[0]]
  }
  if (myNumberArray.length === 2) {
    if (myNumberArray[0] === 1) {
      return upTo20[myNumberArray[1]]
    }
    if (myNumberArray[1] === 0) {
      return answer = `${dozens[myNumberArray[0]]}`
    } else {
      return answer = `${dozens[myNumberArray[0]]} ${units[myNumberArray[1]]}`
    }
  }
  if (myNumberArray.length === 3) {
    if (myNumberArray[1] === 0) {
      if (myNumberArray[2] === 0) {
        return answer = `${units[myNumberArray[0]]} ${bigNumber[0]}`
      }
      return answer = `${units[myNumberArray[0]]} ${bigNumber[0]} ${units[myNumberArray[2]]}`
    }
    if (myNumberArray[1] === 1) {
      return answer = `${units[myNumberArray[0]]} ${bigNumber[0]} ${upTo20[myNumberArray[2]]}`
    }
    if (myNumberArray[2] === 0) {
      return answer = `${units[myNumberArray[0]]} ${bigNumber[0]} ${dozens[myNumberArray[1]]}`
    } else {
      return answer = `${units[myNumberArray[0]]} ${bigNumber[0]} ${dozens[myNumberArray[1]]} ${units[myNumberArray[2]]}`
    }
  }
}
