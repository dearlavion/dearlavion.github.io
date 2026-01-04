# 🟢 One-Day Java Multithreading Study Plan

## ⏱ Total Time: ~6–8 hours

Focus: **Understanding + explaining**, not memorizing APIs.

---

## 🕘 Hour 1 — Concurrency Basics (Foundations)

### Learn

- What is a **thread**
    
- Process vs thread
    
- Why multithreading exists
    

### Key Concepts

- CPU cores
    
- Context switching
    
- Race conditions
    
- Thread lifecycle
    

### Interview Script

> “A thread is the smallest unit of execution inside a process. Multithreading allows tasks to run concurrently, improving responsiveness and throughput.”

---

## 🕙 Hour 2 — `Thread` vs `Runnable`

### Learn

### `Thread`

`class MyThread extends Thread {     public void run() {         System.out.println("Running thread");     } }  new MyThread().start();`

### `Runnable`

`class MyTask implements Runnable {     public void run() {         System.out.println("Running task");     } }  new Thread(new MyTask()).start();`

### Key Differences (Interview Gold)

|Aspect|Thread|Runnable|
|---|---|---|
|Inheritance|Extends `Thread`|Implements `Runnable`|
|Flexibility|❌ Single inheritance|✅ Can extend other classes|
|Separation|Task + thread mixed|Task separated from execution|
|Preferred|❌ Rarely|✅ Yes|

### Interview Script

> “Runnable is preferred because it separates the task from the thread and avoids inheritance limitations.”

---

## 🕛 Hour 3 — Thread Lifecycle & Methods

### Learn

- Thread states: `NEW`, `RUNNABLE`, `BLOCKED`, `WAITING`, `TERMINATED`
    
- Key methods:
    
    - `start()`
        
    - `run()`
        
    - `sleep()`
        
    - `join()`
        
    - `interrupt()`
        

### Interview Trap

❌ Calling `run()` directly does **not** start a new thread.

`thread.run(); // runs in same thread thread.start(); // creates new thread`

---

## 🕐 Hour 4 — Problems with Manual Threads

### Understand why `Thread` is NOT scalable

Problems:

- Too many threads = high memory usage
    
- No reuse
    
- Hard to manage lifecycle
    
- Error handling is manual
    

### Interview Script

> “Creating threads manually doesn’t scale well and makes resource management difficult.”

---

## 🕑 Hour 5 — `Executor` & `ExecutorService` (Very Important)

### Learn Why Executors Exist

`ExecutorService executor = Executors.newFixedThreadPool(3);  executor.submit(() -> System.out.println("Task running"));  executor.shutdown();`

### Benefits

- Thread pooling
    
- Task queueing
    
- Lifecycle management
    
- Better performance
    

### Common Executors

|Executor|Use Case|
|---|---|
|`newSingleThreadExecutor()`|Sequential tasks|
|`newFixedThreadPool(n)`|Limited parallelism|
|`newCachedThreadPool()`|Short-lived tasks|
|`ScheduledExecutorService`|Delayed / periodic tasks|

### Interview Script

> “ExecutorService decouples task submission from execution and manages thread reuse efficiently.”

---

## 🕒 Hour 6 — Thread vs Runnable vs Executor (Final Comparison)

### 🔥 Must-Know Table

|Feature|Thread|Runnable|Executor|
|---|---|---|---|
|Represents|Thread + task|Task only|Thread manager|
|Scalability|❌ Poor|❌ Limited|✅ Excellent|
|Reusability|❌ No|❌ No|✅ Yes|
|Control|Manual|Manual|Managed|
|Interview Preference|❌|⚠️|✅|

### Golden Interview Line

> “Runnable defines _what to run_, Executor defines _how and when to run it_.”

---

## 🕓 Hour 7 — Common Interview Questions (Quick Fire)

Prepare answers to:

1. Why is `Runnable` better than `Thread`?
    
2. Why use `ExecutorService`?
    
3. Difference between `execute()` and `submit()`
    
4. What happens if you don’t shut down an executor?
    
5. Can a thread be restarted? (❌ No)
    

---

## 🧠 One-Sentence Summary (Memorize)

> “Thread is a low-level execution unit, Runnable represents a task, and ExecutorService manages threads efficiently and is the preferred way to handle concurrency in modern Java.”

---

## ✅ End-of-Day Confidence Check

You should be able to:

- Explain **Thread vs Runnable vs Executor** without code
    
- Write a simple Executor example
    
- Explain **why Executor is preferred**
    
- Spot common concurrency interview traps