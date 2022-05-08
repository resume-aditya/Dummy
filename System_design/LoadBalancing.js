// A load balancer is a vital component of any distributed system.  - eg HAproxy
// The load balancer is typically put in front of your webserver(s) to redirect requests according to number of sessions, a hash of source IP and destination IP, requested URL or other criteria. Additionally, it will check availability of the backend servers to ensure requests get answered even if one server fails

// It helps to distribute the client requests within a cluster of servers to improve the responsiveness and availability of applications or websites.

        // let’s assume a system has one server that is overloaded with the request of clients
        // The server has a limit of serving requests per second
        // So, we need to add more servers to handle large amounts of requests
        // But we may need a load balancer to balance the loads between the servers.

/********************
 * 
 * The load balancer is a server that usually sits between client devices and a set of servers and distributes client requests across servers
 * 
 */
    // Features : 
        // Distributes requests over multiple server
        // Stops overloading : If a server is not available to deal with new requests or is not responding, LB will stop sending requests to such a server.
        // Health Checks : Carry out continous health checks on server to ensure they can handle req
        // Low latency : Latencies(or slowness) should occur less often as requests are not blocked, and users don’t need to wait for their requests to be processed.
        // High system availbility: Availability is a key characteristic of a distributed system. In case of a full server failure scenario, this won’t affect the user experience as the load balancer will simply send the client request to a healthy server

// Two types of loadbalancer:   
        // Software LB
        // Hardware LB (Ignore this, very costly)


// Load Balancing Techniques:
        // Random selection
                //  the servers are selected randomly
                // no other factors calculated in the selection of the server
                // some of the servers sitting idle, and some are overloaded with requests in this technique
        // Round Robin  
                // Starts giving request to 1st
                // When LB reaches the end of the list, it starts over at the beginning,
                // The servers need to be of equal specification for this method to be useful
                // Otherwise, a low processing powered server may have the same load as a high processing capacity server
        // Weighted Round Robin Method
                // A weight is assigned to each server
        // Least Response Time
        // Least Connection :  Here, the load balancer sends traffic to the server with the fewest active connections at the time when the client request is received
        // Source IP Hashing : In this method, a hash of the client’s IP address is generated which is used to select a server for a client.


/*** When a new server is added or a server is removed from the server's pool, the load balancer needs to be updated; otherwise, it might be a waste of resources */