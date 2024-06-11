---
layout: post
title:  "Intelligent agent"
author: gaetano
categories: [ Artificial, Intelligence, AI, Machine learnning, agent ]
image: assets/images/ai_image.jpg

---


An intelligent agent is a computer like device that is capable of expressing barely intelligent behaviour.
Another way of definig it is a every device (or something similar) that is capable of perceving the environment, typically through it's own sensors, and to do the right thing at the right moment; in other words is capable to reach a goal.

There are different types, based or their own qualities, of an intelligent agent, in AI, that are;
<ul>
<li>agents with simple reflexes (or stimulus-response);</li>
<li>agents with model-based reflexes;</li>
<li>goal-based agents;</li>
<li>utility-based agents;</li>
<li>learning agents.</li>
</ul>

But, in reality, we can also make another distinction that is even more fundamental than the one just made:
<ul>
<li> agents without memory;</li>
<li>agents with memory.</li>
</ul>

# Types of agent

## Agent without memory
Agent without memory or also called purely reactive or stimulus-response are agent that doesen't mantain the previous states but only the current that receive as input.
### Agents with simple reflexes (also called purely reactive)
Agents with simple reflexes act only based on current perception. The agent's function is based on condition-action rules:

> if condition then action

This agent function performs well only when the environment is fully observable. Some agents of this type can also contain information about their current state, which allows them to ignore conditions whose actuators have already been triggered.

This, for example, cannot be applied to self-driving cars as the surrounding environment is not completely observable, indeed it is unpredictable.
This type of agent has good behaviors, for example, in virtual environments where everything is expected and controllable.

## Memory-based agent
Agent memory-based are agent that take a decision about what to do not only based on the current signal he receives as input but also based on the previous state he observed.

### Agents with model-based (or internal state) reflections
Agents with model-based reflexes can handle partially observable environments. Their current state is stored within the agent itself, which allows it to maintain data structures that describe the part of the world that cannot be observed or that was already obseverd.
Such behavior requires information about how the world works and behaves and is another input that the model manage. 
This additional information completes the “view of the world” model.

### Goal-based agents and Utility-based agents

The difference between the two agent is that one is state-based and another is goal-based.
A goal is something like a situaton that we want to achieve and a states is something numerical that allow us to reach the goal.
You can define a measure of how desirable each state is but, usually, it not happen for the goal that is a sort a beginning of the process to reach a new goal and, then, the final goal.

### Agent that learns

In some publications, artificial intelligence is referred to as autonomous intelligent agents, a term that indicates the independence of their actions, and their ability to learn and adapt to evolving circumstances. According to Nikola Kasabov, artificial intelligence systems must exhibit the following characteristics:
<ul>
<li>learning and improving through interaction with the environment</li>
<li>online and real time adaptation</li>
<li>learn quickly from large amounts of data</li>
<li>welcome the new rules of incremental problem solving</li>
<li>have storage memory and retrieval capacity</li>
<li>have parameters to represent short-term or long-term memory, age, forgetfulness, etc.</li>
<li>be able to analyze oneself in terms of behavior, mistakes and successes.</li>
</ul>
This opens the way to another very current topic which is machine learning, or the autonomous learning process of machines.



To perform their active functions, today's intelligent agents are normally collected into a hierarchical structure that contains many "sub-agents". Intelligent sub-agents execute and process low-level functions. Taken together, the intelligent agent and sub-agents create a system capable of accomplishing difficult or objective tasks with behaviors and responses that display, as already said, a form of intelligence.