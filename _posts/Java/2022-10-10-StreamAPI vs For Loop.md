---
layout: post
title:  "[Java4Geeks] | Stream API vs For Loop"
author: gaetano
categories: [ programming, java, performance, loop, java 8, ]
image: assets/images/programming.png

---

Maybe someone can ask itself, as ever, if use a certain thing instead of another will be more efficient.
This is way this post bornt: let you decide if it's better to use Java8 Stream API or a simple For Loop to filter a List of Objects.\\

I will give you the answer as fast as possibile:

<h2>THERE IS NO AN ABSOLUTE ANSWER: IT DEPENDS!</h2>

But from what it depends? It depends from:

1. Java version used;
2. Code readability;
3. Filtering complexity.

<h4>Java version used</h4>
So, the first point is quite simple: if you are using Java version older than 8 (for compatiblity with some already formed application) there is no chance to decide: you *MUST* use the For Loop.

<h4>Code readability</h4>
From one side we have the super classic For Loop from the other side we can note that the Java Stream API are a little bit mor human readable end mnemonic for example, before look at the code, we can do this reasonment

What is you source data name? The source name is *orders*
How much data you have? I don't know precisely, I have a **stream** that is a list.

What do you want to do with this stream? I want to **filter** it with some conditions.

Where do you want to put the result of the filtering? I want to **collect** it in the same origin data type, a list.

And now the code

orders
        .stream()
	    .filter(c -> c.getAmount() > 36378 && c.getEvenOrOdd().equals("Even"))
	    .collect(Collectors.toList());

In second instance note that with Stream you are able to collect the result in the **same** origin data source that you're filtering meanwhile, with a for, you have to declare a new data structure, a new ArrayList for example, to save the result of the elaboration. 

<h4>Performance in complex filtering</h4>

Last but not least the performance, with the code that you can find in [Github][linkedRepo] I've obtainted the following results

If I run it only one time
> Order size is: 500000
Time Elapsed - SimpleFilteringWithFor: 47
Time Elapsed - SimpleFilteringWithLambda: 42
Time Elapsed - ComplexFilteringWithFor: 59
Time Elapsed - ComplexFilteringWithLambda: 42
Time Elapsed - VeryComplexFilteringWithFor: 69
Time Elapsed - VeryComplexFilteringWithLambda: 43

And 10 times with order size 500000

> Order size is: 500000
First timer media is: 25
Second timer media is: 31
Third timer media is: 25
Fourth timer media is: 31
Fifth timer media is: 43
Sixth timer media is: 40

10 times with with order size 2500000

> Order size is: 2500000
First timer media is: 161
Second timer media is: 234
Third timer media is: 165
Fourth timer media is: 206
Fifth timer media is: 264
Sixth timer media is: 248

So what you use depends on what do you need, in general theese are the main difference between the two methods.
If you have to do quite simple operation, maybe, the for loop is the answer to your problems meanwhile if you have to implement some complex filter, then, you can use Stream API (with one or more filter) to improve readability and, in certain case, preformance.

[linkedRepo]: https://github.com/gaetanodigrazia/Java4Geeks/tree/master/src/main/java/com/java4geeks/streamvsforloop
