## What
temporary storage that keeps recently used data handy or close by (get it much faster next time)

## Why

1. to prevent directly accessing the slower data source
	 the gap adds up quickly when serving thousands of requests
2. It keeps copies of frequently used data in a faster layer (often times memory but not always) so that system don't have to reach all the back way to the slower source

![[Pasted image 20251229001143.png]]
## Where to cache?
1. External caching
	use dedicated caching service (own server and has own memory)
	![[Pasted image 20251229001430.png]]

2. In-process caching
	fast, since on the same server as application
	![[Pasted image 20251229001721.png]]
3. CDN  (Content Delivery Network)
	cache content closest to the user
	![[Pasted image 20260101185419.png]]
4. Client Side Caching 
	Ex. Strava
	![[Pasted image 20260101185543.png]]

## Cache Architecture
1. Cache Aside
	most used
	![[Pasted image 20260101185746.png]]
2. Write through
	![[Pasted image 20260101185901.png]]
3. Write Behind
	![[Pasted image 20260101185944.png]]
4. Read Through
	mostly used by CDN, on step2 needs to have a special caching library 
	![[Pasted image 20260101190102.png]]

## Cache Eviction Policies
1. Least Recently Used (LRU) 
	evict the not recently used data
2. Least Frequently Used
	evict the least often used data
3. FIFO
4. TTL 
	each item expires


## References
https://www.youtube.com/watch?v=1NngTUYPdpI
