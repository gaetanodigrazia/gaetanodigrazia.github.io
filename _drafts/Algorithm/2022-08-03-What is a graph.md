---
layout: post
title:  "What is a graph?"
author: gaetano
categories: [ algorithm, graphs, network, edge, vertices, research, ai, data, structure]
image: assets/images/algorithm.png
hidden: true
---

A graph, $$G$$, is a mathematical structure, nowadays used like data structure, that consist of two different sets, called $$E$$ and $$V$$, where the $$E$$ stands Edge (or link) for and the $$V$$ stands for Vertices (or node).

To be more precise: $$V$$ is the set of Vertices and it's elements is called Vertice, that corresponde to object, and $$E$$ is called set of Edge and it's own elements are called Edges that are the connections between objects.

The graph edges sometimes have Weights $$W$$, which indicate the strength (or some other attribute) of each connection between the nodes.

So, in the figure below we see the $$W$$ like an integer number next to the arrows, some names (Blaxhall, Dunwich, ...) as $$V$$ and the arrows that stand for the $$E$$

<a title="Pluke, CC0, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:CPT-Graphs-directed-weighted.svg"><img width="256" alt="CPT-Graphs-directed-weighted" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/CPT-Graphs-directed-weighted.svg/256px-CPT-Graphs-directed-weighted.svg.png"></a>


##### Directed and undirected graphs
Undirected graphs have edges that do not have a direction: the edges indicate a two-way relationship, in that each edge can be traversed in both directions.

This figure below show a simple undirected graph with four nodes and four edges.
<a title="Pluke, CC0, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:CPT-Graphs-undirected-unweighted-ex1.svg"><img width="256" alt="CPT-Graphs-undirected-unweighted-ex1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/CPT-Graphs-undirected-unweighted-ex1.svg/256px-CPT-Graphs-undirected-unweighted-ex1.svg.png"></a>

Directed graphs have edges with direction: the edges indicate a one-way relationship, in that each edge can only be traversed in a single direction. 
This figure shows a simple directed graph with five nodes and nine edges.

<a title="Pluke, CC0, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:CPT-Graphs-directed-unweighted-ex1.svg"><img width="256" alt="CPT-Graphs-directed-unweighted-ex1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/CPT-Graphs-directed-unweighted-ex1.svg/256px-CPT-Graphs-directed-unweighted-ex1.svg.png"></a>

Note that loops, i.e. nodes pointing to themselves, are possible in a graph.



#### Walktrough
A **path**, in a graph G(V,E) from a vertex $$x$$ to a vertex $$y$$ is a sequence of nodes $$<v_0,v_1,...,v_k>$$ with $$v_0 = x$$ and $$v_k = y$$ such that $$(v_{i-1},v_i)\in E\forall i: 1\leq i \leq k$$.\
Such a path has **length** $$k$$, where $$k$$ is the number of vertices.\
Moreover, the path is **simple** if all vertices are distinct from each other.\
If there exists a path between $$x$$ and $$y$$, then it is said that $$y$$ is **reachable** from $$x$$ i.e. that $$x$$ is an <em>antenate</em>  of $$y$$ and $$y$$ is <em>descendant</em> of $$x$$.
If $$x=y$$ the path is called **cycle**, trivially, however, a directed **graph acyclic** is an oriented graph <em>non</em> containing cycles (DAG) that is shown in the figure below.

<a title="Not me, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:DirectedAcyclicGraph.png"><img width="128" alt="DirectedAcyclicGraph" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/DirectedAcyclicGraph.png"></a>

We can encounter the graph theory in Airflow and Neo4J.