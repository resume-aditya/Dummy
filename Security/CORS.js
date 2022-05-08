// The browser's same-origin policy blocks reading a resource from a different origin.
// This mechanism stops a malicious site from reading another site's data, 
        // but it also prevents GOOD/VALID uses.


// Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. 


// CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.
//  In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

// For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts

// This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

// Access-Control-Allow-Origin: *