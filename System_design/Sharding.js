// Sharding is a method for distributing a single dataset across multiple databases, which can then be stored on multiple machines. This allows for larger datasets to be split in smaller chunks and stored in multiple data nodes, increasing the total storage capacity of the system.



// In simple words horizontal slicing of database is sharding, lets say out of 100 user rows, you will divide it from 0-50 and 51-100 based on user ids

// The other part is said vertical slicing, you divide a big table column wise, 2 columns of table on 1 machine, 2 on diff