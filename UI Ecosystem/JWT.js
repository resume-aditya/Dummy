// JWT or JSON web tokens is a way to do authorization (not authentication) of client requests. 
// Post login, server sends a JWT to client and on all subsequent requests client should send that JWT token in its header

// A JWT token comprises of DATA and secret key
// When subsequent request reaches server, they are intercepted and that JWT token is verified with that secret key, and hence data and user is determined and based on that filtered data etc can be sent
