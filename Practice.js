const generateAsync = (pname) => {
  return new Promise((res, rej) => {
    let timeout = Math.floor(Math.random()*5)*1000 + 2000;
    setTimeout(() => {
      res({pname, timeout})
    }, timeout);
  })
}

let promiseArray = Array(5).fill('').map((v, i) => generateAsync('promise '+ i))

const printInOneSec = (i) => {
  setTimeout(() => {
    console.log(i)
  }, 1000);
}

function printInGap(i) {
  if (i==6) return;
  setTimeout(() => {
    console.log(i);
    printInGap(i+1)
  }, 1000);
}
printInGap(1)