// Consider a function which prints i in 1 second
// Call that function 5 times
// Result: It should print numbers with 1 second gap not all at once


// If something needs to be run only when some settimeout is done it has to be written in body of settimeout
// So when some operation involving settimeout needs to be done over and over again, recursion becomes an obvious candidate

function timeoutIn1Sec(i) {
  if (i > 5) return false;
  setTimeout(() => {
    console.log(i);
    timeoutIn1Sec(i+1)
  }, 1000);
}

timeoutIn1Sec(1);
