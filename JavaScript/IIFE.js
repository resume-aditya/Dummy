// async inside loop

for (var i=0; i<5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}
// Always prints 5

// With IIFE

for (var i=0; i<5; i++) {
    (function(i){
        setTimeout(() => {
            console.log(i)
        }, 1000);
    })(i);
}

// or 

for (var i = 0; i < 2; i++) {
    const button = document.createElement('button');
    button.innerText = 'Button ' + i;
    button.onclick = (function(copyOfI) {
      return () => {
        console.log(copyOfI);
      };
    })(i);
    document.body.appendChild(button);
  }
  console.log(i); // 2