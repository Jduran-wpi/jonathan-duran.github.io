---
sidebar_position: 1
title: CS 542 - Database Management Systems Final Report
---

# TPC-H benchmark

## By Jonathan Duran and CS542 Team

### Team Members: Kevin Fortier, Jonathan Duran and William Campbell

### Date: May 2021

In this report, I, Jonathan Duran, along with my collaborators Kevin Fortier and William Campbell, explored runtime performance optimization strategies for TPC-H OLAP queries using SQLite3 and Python. The TPC-H benchmark, composed of 22 industry-representative queries, was used to evaluate SQLite3’s native performance capabilities. We systematically executed each query through a Python-based framework, measuring and classifying runtimes to identify performance bottlenecks.

One of the slowest queries, Query 17, was targeted for optimization. By combining SQL with Python—specifically using pandas and NumPy—we restructured the query logic, reducing runtime from over 4,200 seconds to under 15 seconds. This hybrid approach illustrates how general-purpose programming tools can be effectively leveraged to overcome optimization limitations in lightweight database engines like SQLite3.

Our findings emphasize the value of Python-driven enhancements in OLAP contexts and present a reusable pattern for optimizing other complex queries where native database performance falls short.

<iframe src="/pdf/CS542FinalPaper.pdf" width="100%" height="600px"></iframe>
