/// What is PubSub?
// PubSub or Publisher-Subscriber model is a concept which basically involves two ends. 
// Publisher and Subscriber. Or in very simple terms: Giver and Taker. 
// Publisher will have some data it needs to give (regardless of source) which Subscribers take and use


// Main parts
// Some event source to generate data. (In real world this might generate from real-world events but for the purposes of this example, we'll fake it).
// Something to hold our subscriber list so that we know who we need to send data to (Data).
// Someway to register/deregister subscribers (Methods).
// Someway to send data to all the subscribers (Logic).


const PubSub = (function(){
    // private variables and data
    let eventSourceAddress;
    let subscribers;
    let __tick;

    function __tickHandler() {
        _pushPayloadToSubscribers(new Date());
    }

    function _pushPayloadToSubscribers(payload) {
        subscribers.map(subscriber => {
            subscriber.callback(payload);
        });
    }

    function _addSubscriber(callback) {
        var id = new Date().getTime();
        subscribers.push({ id, callback });
        return id;
    }

    function _removeSubscriber(id) {
        subscribers = subscribers.filter(subscriber => subscriber.id !== id);
    }

    function _removeAllSubscribers() {
        subscribers = [];
    }

    return class _PubSubInternal{
        // public methods and data
        constructor(address) {
            eventSourceAddress = address;
            subscribers = [];
            __tick = null;
        }

        plugSource() {
            console.log("Event feed attached!");
            __tick = window.setInterval(__tickHandler.bind(this), 4000);
        }


        unplugSource() {
            window.clearInterval(__tick);
            console.log("Event feed unplugged!");
        }

        subscribe(callback) {
            return _addSubscriber(callback);
        }

        unsubscribe(id) {
            return _removeSubscriber(id);
        }

        unsubscribeAll() {
            return _removeAllSubscribers();
        }

    }
})();

var pubSub = new PubSub(someEventSourceAddress);

// add subscribers
let subscriber1 = pubSub.subscribe( (data) => {
    console.log("Consoling from Subscriber 1");
    console.log(data);
});

let subscriber2 = pubSub.subscribe( (data) => {
    console.log("Consoling from Subscriber 2");
    console.log(data);
});

// Start fake feed
pubSub.plugSource();