// BEST: https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR?affiliate_id=5073518643380224

// https://medium.com/@sandeep4.verma/system-design-scalable-url-shortener-service-like-tinyurl-106f30f23a82
// https://www.geeksforgeeks.org/system-design-url-shortening-service/

// Functional Requirement
    // User should be able to generate a shorten URL
    // User should be able to click on that url and that should redirect to original url
    // The URL should expire after so and so time
    // User should be able to specify expire time
    // User should be able to provide custom shortlink for URL


// Design goals/ Non Functional Req
    // System should be highly available, if it is down redirections will fail
    // URL redirection should happen in real time with minimum latency
    // Nobody should be able to predict the short url

// Extended Req
    // Analystics: How many times url is visited


// Key components
    // Client: Br

// How many requests
    // Lets say 100 request per second
    // Monthly write request = 30*24*3600*100 = 259200000 = 259.2 Million
    // Lets say a shorted URL is read 100 times
    // Monthly read request = 259.2M * 100 = 25.9 Billion

// Size requirement
    // Lets say one url = 100byte ??
    // Total size = 259.2 M * lets say 5 years worth of expiry
    //  259*5*12*100 bytes

    // For caching apply 80-20 CSSPageRule, i.e. cache 20% of total


/createUSer (username, password)
/login (username,password) return API_KEY
/createURL(API_KEY, longURL, expirtyTimeOptional) -> shortURL
/getURL(API_KEY, shortURL)



Algo:
a->0, b->1, z->25, A->26, B-> 27, Z-> , 0, 1, 2, 9-61 (base 62)
MD5(Long URL) =>  base62encode(128-bit hash value)  => FE66AB7.... (take first 7 chars)
This could result in duplication of result.
// One solution is to keep a counter ,  which keeps track of a count (0–3.5 Trillion) so that in each case if we encode the counter value, there is a guarantee of no duplicates/collisions. Let’s see how we will use the counter - we will use a single server that will be responsible for maintaining a counter. Whenever the application servers receive a request, they will talk to the counter, which returns a unique number and increments the counter.

