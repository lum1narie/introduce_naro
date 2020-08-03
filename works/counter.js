let count = 0

const displayCount = (count) => {
  const countElement = document.querySelector('#count')
  countElement.innerText = '回数: ' + count
}

const countUp = () => {
  count++
  displayCount(count)
}

const resetCount = () => {
    count = 0
  displayCount(count)
}