---
layout: post
title:  "Some useful materials to start wi Neo4J"
author: gaetano
categories: [ query, graphs, database, network, neo4j]
image: assets/images/programming.png
---
### Neo4J
A very usefull video course that you can watch is the one offered by Laith Academy on Youtube ([localhost:8080](https://www.youtube.com/watch?v=8jNPelugC2s){:target="_blank"}).

So, in the video the author install Neo4J software but I've switched to docker solution that is faster and without configuration problems.

You can open a terminal and digit
> `docker run --name Neo4j -p7474:7474 -p7687:7687 -d -v $HOME/neo4j/data:/data -v $HOME/neo4j/logs:/logs -v $HOME/neo4j import:/var/lib/neo4j/import -v $HOME/neo4j/plugins:/plugins --env NEO4J_AUTH=neo4j/test neo4j:latest`

