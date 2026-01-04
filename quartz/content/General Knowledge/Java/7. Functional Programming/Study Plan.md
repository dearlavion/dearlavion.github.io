
## **Step 1: Understand Functional Programming Basics (1–2 days)**

### Goal:

Grasp **functional programming concepts** in Java.

### Topics:

- What is **functional programming** (FP)
    
- Immutability & side-effect-free functions
    
- Declarative vs imperative style
    
- **First-class functions**: passing functions as arguments
    
- Functional interfaces: `Predicate`, `Function`, `Consumer`, `Supplier`, `BinaryOperator`
    

### Exercises:

- Write a simple **lambda**:
    

`List<String> names = List.of("Alice","Bob"); names.forEach(n -> System.out.println(n.toUpperCase()));`

- Convert a **for loop** into a **functional operation** using `forEach`, `map`, `filter`.
    

### Resources:

- Oracle Java Docs: Streams & Lambdas
    
- Baeldung: “Introduction to Java 8 Streams”
    

---

## **Step 2: Learn Streams Basics (1 day)**

### Goal:

Understand **what a Stream is** and **why we use it**.

### Topics:

- `Stream` vs `Collection`
    
- Intermediate vs terminal operations
    
- Lazy evaluation
    
- Parallel streams
    

### Exercises:

- Print elements from a list using a stream
    
- Use `.count()` and `.forEach()`
    
- Try `.parallelStream()` and measure difference (small lists vs large lists)
    

---

## **Step 3: Master Intermediate Operations (1–2 days)**

### Goal:

Learn **transformations** in streams.

### Topics:

- `filter`, `map`, `flatMap`, `distinct`, `sorted`, `peek`, `limit`, `skip`
    

### Exercises:

- Filter users by age > 25
    
- Map `List<User>` → `List<String>` of names
    
- Flatten a `List<List<String>>` into `List<String>`
    
- Sort a list of strings
    

---

## **Step 4: Master Terminal Operations & Collectors (1–2 days)**

### Goal:

Learn **how to gather results** from streams.

### Topics:

- `collect(Collectors.toList())`, `toSet()`, `toMap()`
    
- `groupingBy()`, `partitioningBy()`
    
- `joining()`, `counting()`, `summarizingInt()`
    
- `reduce()`
    

### Exercises:

- Convert stream to `List`, `Set`, `Map`
    
- Group users by department
    
- Count users above a certain age
    
- Join names into a single string
    

---

## **Step 5: Sorting & Comparators (1 day)**

### Goal:

Understand **natural vs custom ordering** in streams.

### Topics:

- `.sorted()`
    
- `.sorted(Comparator.comparing(...))`
    
- `.min()` and `.max()` with comparator
    
- Comparable vs Comparator in streams
    

### Exercises:

- Sort users by name (Comparable)
    
- Sort users by age (Comparator)
    
- Find min/max by age
    

---

## **Step 6: Functional Patterns & Higher-Order Functions (1 day)**

### Goal:

Practice **functional programming concepts with streams**.

### Topics:

- Passing functions as arguments (`map`, `filter`, `reduce`)
    
- Chaining operations
    
- Avoiding mutation
    
- Lazy evaluation demonstration
    

### Exercises:

- Implement a pipeline: `filter → map → reduce`
    
- Show that intermediate operations are **lazy** by adding `peek()`
    
- Compare **imperative vs declarative** approach
    

---

## **Step 7: Interview Practice & Problem Solving (2–3 days)**

### Goal:

Apply streams + FP in **real problems**.

### Common questions:

1. Filter a list of users older than 25 and collect names
    
2. Find first user whose name starts with "J"
    
3. Sum of all ages (`mapToInt().sum()`)
    
4. Group users by department (`Collectors.groupingBy`)
    
5. Sort employees by salary descending, then name ascending
    
6. Remove duplicates and print distinct names
    
7. Demonstrate laziness with `peek()`
    

### Tips:

- Draw a **pipeline diagram** for each stream: source → intermediate → terminal
    
- Explain **why you chose map/filter/collect**
    
- Mention **immutable & declarative style** in answers
    

---

## **Optional: Cheat Sheet for Quick Review**

|Concept|Example|
|---|---|
|`filter`|`.filter(u -> u.getAge() > 25)`|
|`map`|`.map(User::getName)`|
|`flatMap`|`.flatMap(listOfLists::stream)`|
|`sorted`|`.sorted(Comparator.comparing(User::getAge))`|
|`collect`|`.collect(Collectors.toList())`|
|`reduce`|`.reduce(0, (a,b)->a+b)`|
|`peek`|`.peek(System.out::println)`|