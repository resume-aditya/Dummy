// 1 Bit
// 1 Byte = 8 bits
// 1 Kilobyte (KB) = 1024 Bytes ≈ 1000 Bytes
// 1 Megabyte (MB) = 1024 KB ≈ 1000 KB
// 1 Gigabyte (GB) = 1024 MB ≈ 1000 MB
// 1 Terabyte (TB) = 1024 GB ≈ 1000 GB
// 1 Petabyte (PB) = 1024 TB ≈ 1000 TB
// 1 Exabyte (EB) = 1024 PB ≈ 1000 PB

// How to start

    // Start with gathering the requirement (5-6 concreate points)
    // Write down non functional requirements like, scalability, consistent etc
    // Define Public api end ppoints like, /reserveSpot, /cancelSpot, /payForSpot
    // Internal API end points like calculartePrice, checkIfempty etc
    // Define tables and columns, create their relations
    // High Level Design :
            // Client, mobile/web
            // App server - maybe divide into multiple services
            // Database - Is sharding needed, is different read and write DB needed
            // Is load balancer needed