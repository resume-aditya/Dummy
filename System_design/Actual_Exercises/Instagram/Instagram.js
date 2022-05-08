// Functional Requirements

    // Users should be able to upload/download/view photos.
    // Users can perform searches based on photo/video titles.
    // Users can follow other users.
    // The system should be able to generate and display a user’s News Feed consisting of top photos from all the people the user follows.


    // Non-functional Requirements

        // Our service needs to be highly available.
        // The acceptable latency of the system is 200ms for News Feed generation.
        // Consistency can take a hit (in the interest of availability), if a user doesn’t see a photo for a while, it should be fine.
        // The system should be highly reliable, any uploaded photo or video should never be lost.


    // Capacity Estimation and Constraints
        // Let’s assume we have 500M total users, with 1M daily active users.
        // 2M new photos every day, 23 new photos every second.
        // Average photo file size => 200KB
        // Total space required for 1 day of photos
        // 2M * 200KB => 400 GB

        // Total space required for 10 years:
        // 400GB * 365 (days a year) * 10 (years) ~= 1425TB


//         Data Sharding
        // a. Partitioning based on UserID Let’s assume we shard based on the ‘UserID’ so that we can keep all photos of a user on the same shard. If one DB shard is 1TB, we will need four shards to store 3.7TB of data. Let’s assume for better performance and scalability we keep 10 shards.

        // b. Partitioning based on PhotoID If we can generate unique PhotoIDs first and then find shard number through “PhotoID % 10”, this can solve the above problems. We would not need to append ShardID with PhotoID in this case as PhotoID will itself be unique throughout the system.
    

    // it’s usually recommended to store all pictures separately in production. Amazon S3 is one of the most popular storage systems. However, you don’t need to be able to come up with this.

    // Secondly, to save space, images should be compressed. One common approach is to only store/serve the compressed version of images. Google photos actually is using this approach with unlimited free storage.