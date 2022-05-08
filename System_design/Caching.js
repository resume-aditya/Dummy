// Caching means storing data into the cache, which is a high-speed low latency data storage.

// Caching layer typically stores the data in memory (or RAM) and hence avoids accessing the secondary memory (disk) which is an expensive operation in terms of time. 

// Caching is the component in system design which enables storing frequently used data in memory which can directly be accesed rather hitting DB every time

// // There is a famous 80:20 rule which states that 20% of the data is accessed almost 80% of the time. So generally we try to keep that 20% data in the cache.

// Caching tools Redis, memcache, hazelcast

// Cached data should also have an expiry time 
// Cache can also be invalidated at any time if data gets stale


// Global Cache#
        // This is a simpler option where we maintain a single global cache space, which is used by all nodes.
        //  For every request, the application queries this cache to retrieve data. 
        // A global cache is simpler and effective up to a certain scale, however, it could become a potential performance bottleneck and point of failure, if the number of requests increases beyond the maximum capacity of the cache. 
        // This is where the distributed cache comes in.

// Distributed cache#
        // For a distributed system application, we need a distributed cache. 
        // We distribute the cached data to multiple nodes.
        //  When a request comes in, a lookup happens to determine on which machine the data is cached and then that node fulfills the cache request.
        // Examples of Cache systems used in Distributed Systems: Redis Memcached Aerospike DBS Apache Ignite

// Cache Write Policies
    // Write through cache : As the name suggests, In this scheme data is written to a database through a cache, and write operations are confirmed only if write to the database as well as cache are successful. 
    // Write around cache 
    // Write back cache -  In this scheme, data is written only to the cache, and then write operation is confirmed to the client. This results in blazing fast write operations as we don't write the data to the database. Subsequently, data is asynchronously written to the database in a separate thread.

// Cache Eviction policies
    // Least Recently Used (LRU)
    //  Most Recently Used (MRU)
    // First In First Out (FIFO):
    // LIFO
    // Random
