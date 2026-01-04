## What
Big O notation is a way to describe **how the runtime or memory usage of an algorithm grows as the input size increases**.

"There are millions of ways to solve a problem, it's important to identify what is good, better, and best" ~Harvard CS50

![[Pasted image 20260103212916.png]]

## Common Big O

| Big O      | Name         | Example                         | Notes                                |
| ---------- | ------------ | ------------------------------- | ------------------------------------ |
| O(1)       | Constant     | Accessing an array element      | Fastest, independent of input size   |
| O(log n)   | Logarithmic  | Binary search                   | Efficient, grows slowly              |
| O(n)       | Linear       | Simple loop over array          | Grows proportionally with input      |
| O(n log n) | Linearithmic | Merge sort, quicksort (average) | Common for efficient sorting         |
| O(n²)      | Quadratic    | Nested loops                    | Slow for large inputs                |
| O(2^n)     | Exponential  | Recursive Fibonacci             | Becomes infeasible quickly           |
| O(n!)      | Factorial    | Traveling salesman brute force  | Extremely slow, only for tiny inputs |

## Example Problem
**Phonebook with 1000 pages, find "NINA"**

### Solution 1: Flip each page
**O(n)**
Good - It proportionally grows with input

### Solution 2: Flip by 2 pages 
**O(n/2)**
Better - Yes, n/2 is smaller than n, but as n grows, both **grow linearly**.

### Solution 3: Divide the book by half, decide which half is closer to "NINA", discard the other half... repeat till one page is left with "NINA"
**O(log2n)**
Best - each step **reduces the problem size by a constant factor** (often by 2).
- Instead of processing every element, the algorithm **cuts the input in half each time**.