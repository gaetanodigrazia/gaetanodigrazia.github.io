---
layout: post
title:  "[Java4Geeks] | Stream API vs For Loop"
author: gaetano
categories: [ programming, java, performance, loop, java 8, ]
image: assets/images/programming.png

---

Perhaps someone may wonder, as always, whether using one thing instead of another will be more efficient. This is why this post is born: give you some tips to decide if it is better to use Java8 Stream API or a simple For Loop to filter a List of Objects.

I will give you the answer as fast as possibile:

<h2>THERE IS NO ABSOLUTE ANSWER: IT DEPENDS!</h2>

But what does it depend on? Depend on:

1. Java version used;
2. Code readability;
3. Filtering complexity.

<h4> Java version used </h4>
So, the first point is quite simple: if you are using a Java version older than 8 (for compatibility with some already formed application) there is no choice: you must *MUST* use the For Loop.

<h4> Readability of the code </h4>
On the one hand we have the super classic For Loop, on the other we can see that the Java Stream APIs are a bit more human readable and for example, before looking at the code, we can do this reasoning

What is the name of the source data? The name of the source is *orders*
How much data do you have? I don't know exactly, I have a **stream** which is a list.

What do you want to do with this flow? I want to **filter** it with some conditions.

Where do you want to put the filter result? I want to **collect** it in the same type of source data, a list.

And now the code

	     orders
        .stream()
	    .filter(c -> c.getAmount() > 36378 && c.getEvenOrOdd().equals("Even"))
	    .collect(Collectors.toList());

Secondly, note that with Stream you can collect the result in the **same** source data source you are filtering while, with a for, you have to declare a new data structure, for example a new ArrayList, to save the result of the processing.

<h4>Performance in complex filtering</h4>

Last but not least the performance, with the code that you can find in [Github][linkedRepo] I've obtainted the following results

If I run it only one time
> Order size is: 500000\\
Time Elapsed - SimpleFilteringWithFor: 47\\
Time Elapsed - SimpleFilteringWithLambda: 42\\
Time Elapsed - ComplexFilteringWithFor: 59\\
Time Elapsed - ComplexFilteringWithLambda: 42\\
Time Elapsed - VeryComplexFilteringWithFor: 69\\
Time Elapsed - VeryComplexFilteringWithLambda: 43

And 10 times with order size 500000

> Order size is: 500000\\
First timer media is: 25\\
Second timer media is: 31\\
Third timer media is: 25\\
Fourth timer media is: 31\\
Fifth timer media is: 43\\
Sixth timer media is: 40

10 times with with order size 2500000

> Order size is: 2500000\\
First timer media is: 161\\
Second timer media is: 234\\
Third timer media is: 165\\
Fourth timer media is: 206\\
Fifth timer media is: 264\\
Sixth timer media is: 248

So what you use depends on what you need, in general these are the main difference between the two methods.
If you need to do a fairly simple operation, perhaps, the for loop is the answer to your problems while if you need to implement complex filters, then you can use Stream API (with one or more filters) to improve readability and, in some case, performance.

[linkedRepo]: https://github.com/gaetanodigrazia/Java4Geeks/tree/master/src/main/java/com/java4geeks/streamvsforloop
