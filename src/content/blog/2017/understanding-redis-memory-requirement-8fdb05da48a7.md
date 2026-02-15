---
title: "Understanding Redis Memory Requirement"
description: "Understanding Redis Memory Requirement"
pubDatetime: "2017-01-13T16:41:15+00:00"
tags: ["redis", "memory-requirement"]
canonicalURL: "https://medium.com/@aruny/understanding-redis-memory-requirement-8fdb05da48a7"
source: "medium"
---

> Imported from Medium: [https://medium.com/@aruny/understanding-redis-memory-requirement-8fdb05da48a7](https://medium.com/@aruny/understanding-redis-memory-requirement-8fdb05da48a7)

<p>RDB on, server stopped taking new connection since RDB was failing after 4.61GB of RAM data, the rss/used memory ratio hit 0.5. means half of the data was swapped by OS. RDB failed because it uses copy-on-write which requires equal amount of RAM to actual changed data.</p><h4># Memory</h4><pre>used_memory:9917597920<br>used_memory_human:9.24G<br>used_memory_rss:4957216768<br>used_memory_peak:9917597920<br>used_memory_peak_human:9.24G<br>used_memory_lua:36864<br>mem_fragmentation_ratio:0.50<br>mem_allocator:jemalloc-3.6.0</pre><h4>With RDB off</h4><pre># Memory<br>used_memory:12061875128<br>used_memory_human:11.23G<br>used_memory_rss:7251791872<br>used_memory_peak:12061875128<br>used_memory_peak_human:11.23G<br>used_memory_lua:36864<br>mem_fragmentation_ratio:0.60 (rss/used)<br>mem_allocator:jemalloc-3.6.0</pre><img src="https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=8fdb05da48a7" width="1" height="1" alt="">
