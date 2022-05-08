// ACID
    // Atomicity refers to All or nothing which means all the changes which are part of a single transaction are performed or everything is rolled back and none of these changes take effect.

    // Consistency refers to guarantee that all data that is written to the database will conform to defined schema and constraints at the time of saving the data.
    
    // Isolation refers to the ability of a database to isolate data among transactions providing an independent view of the data. Thus if multiple transactions are executed concurrently, these should not interfere or see intermediate or incorrect data and the result should be the same as if they were run sequentially. 
    
    // Durability refers to the permanent nature of the data that was stored as a part of the transaction once it is successful. Once the transaction is complete the subsequent reads should fetch the last written data.



// BASE
    // BASE refers to Basically available, soft state, eventual consistency.
    // Soft State refers that the state of a system might vary over time, even without any new input.
    // Basically Available means the system is mostly available and every working node responds to requests in a reasonable amount of time.

// The CAP Theorem
    // a network-shared system can only guarantee /strongly support two of the following three properties:
   
    // Consistency: Data should be sequential consistent(refers to linearizability across all nodes of a distributed system, such that all nodes in a system return same data after a successful write operation.

    // Availability: Every request served by a non-failing node must result in a response in a reasonable amount of time.
    
    // Partition tolerance: In the case of partition failure, System will continue to work and provide consistent data.
