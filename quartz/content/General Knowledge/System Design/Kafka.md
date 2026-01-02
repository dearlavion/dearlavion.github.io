open-source distributed event streaming platform
## What
1. Message Queue -  a system where messages are stored until they are consumed. Each message is **typically processed by only one consumer**.
	Ideal for task delivery guarantees that only needs to be processed once
2. Stream - continuous flow of data that can be **processed in real time by multiple consumers**.
		- multiple independent consumers that process the same data differently (e.g., one consumer updates a dashboard, another updates a database).
		- Pub-Sub (can be multiple subscribers), ideal for analytics

## Why Kafka?
1. Fault Tolerant
	 a. Leader-Follower Partitions for backup
	 b. Retry and error
2. High Availability
	 Can easily scale by
		 1. Adding more Brokers (physical servers)
		 2. Good partition key design - to evenly distribute load

## Flow
A. #Producer send message and specify the topic and partition

	Topic - Logical group of partitions/data, can have multiple partition

	Partition - "queue" of ordered immutable sequence of messages
		- Kafka strategy to scale as they allow for messages to be consumed in parallel.

B. Broker / Server receives the message

C. Consumer subscribes to the topic
	With consumer groups, each event is guaranteed to only be processed by one consumer in the group.


![[Pasted image 20251228013942.png]]
Important: 
	1. Consumer internally track the offset where it stopped 
	2. Once consumer consumes the message it responds to the broker the offset "I finished reading offset 99"
	3. Broker also keeps track of the offset for backup purposes incase consumer is down
	


## Optimization Strategy
1. Producer can batch send message
2. Producer can compress message before sending

## Logs Retention Policy
	Defaults to 7 days
	 When log file reaches 1 GB

## Reference
https://www.hellointerview.com/learn/system-design/deep-dives/kafka

https://www.youtube.com/watch?v=DU8o-OTeoCc&list=PL5q3E8eRUieUHnsz0rh0W6AzwdVJBwEK6