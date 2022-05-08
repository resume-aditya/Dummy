console.log('lets play with dom')
//Windows object helps with DOM, BOM and providinf global object for JS
//DOM provides methods to manipularre document, create elements inside it etc
// BOM provides top level objects like navigator, location etc to manipulate browser etc
// 

//Every html tag is an object or node in the DOM

function showAlertForNSeconds (n) {
    var d = document.createElement('div');
    Object.assign(d.style, {
        'background-color': 'aquamarine',
        'border-radius': '4px',
        'border' : '1px solid aqua',
        'padding': '15px'
    })
    d.innerHTML = '<strong>Important Announcement : </strong> I think you should be more attentive';
    //document.body.append(d)
    weird.before(d)
    setTimeout(()=>{
        d.remove()
    }, (n||2)*1000)
}

//Events : how do u assign event handlers, inside html.... onclick="cosnole.log('hello world')", in => JS element.onclick= ()=>{dfhjdh}
// this inside both the above ways is the element itself
// issue with above ways is that only one handler can be applied , hence the use of addEventListener
let b = document.getElementById('alertButton')
b.addEventListener('click', ()=>{showAlertForNSeconds(5)})
b.addEventListener('click', ()=>{console.log('lets print this inside'); console.log(this)});

// an object can also be assigned in addEventLIstener function, that function should have handleEvent function inside
// we can also create a fancy class with above methods and some nice switch case and variables etc, event.type can be used 



//Event bubbling : An event when triggered on an element has the tendency to move up till its ancestors and triggere the event 
// handlers along the way, event.target gets the value on which event was actually triggered and current has element on which
// handler was added
    


//Websocket protocol (starting with wss:// or ws://) is a javascript specification which provides a way to maintain continous communication between server and client.
// this is a biderctional communication, with data sent in form of packets. few important functions are provided :
//onOpen, onclose, send, onmessage
let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

socket.onopen = function(e) {
  console.log("[open] Connection established");
  console.log("Sending to server");
  socket.send("My name is Aditya");
};

socket.onmessage = function(event) {
    console.log(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    console.log('[close] Connection died');
  }
};

socket.onerror = function(error) {
    console.log(`[error] ${error.message}`);
};