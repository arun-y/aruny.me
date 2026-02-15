---
title: "Recommendation Engine — Based on latent feature"
description: "Recommendation Engine — Based on latent feature"
pubDatetime: "2017-01-13T16:21:42+00:00"
tags: ["machine-learning", "data-science"]
canonicalURL: "https://medium.com/@aruny/recommendation-engine-based-on-latent-feature-d1b713441794"
source: "medium"
---

> Imported from Medium: [https://medium.com/@aruny/recommendation-engine-based-on-latent-feature-d1b713441794](https://medium.com/@aruny/recommendation-engine-based-on-latent-feature-d1b713441794)

<p>Recommendation Engine Overview:</p><p>Motivation:</p><p>Given set of items purchased or rated by a user, recommend or suggest set of additional items which user could be interested in.</p><p>Items could be movie, web pages, tv programs, grocery items, friends, advertisement etc.</p><p>Essentially we have to determine the utility of an item with a user, and then recommend items to a user with highest utility score.</p><p>Like all supervised machine learning, here as well we will have a training phase and then test phase.</p><p>The high level steps in training phase are:</p><p>1. Load the training/input transaction data (sparse matrix) into memory. Use efficient data structures. Lets call this matrix X.</p><p>2. Run algorithm to compute the model (2 low rank matrices). Has to be very efficient both in terms of space and time complexity. Lets call this matrices A and S.</p><p>3. Save model into persistent storage.</p><p>So essentially we need to split X into two low rank matrices such that X = A.S, the same is performed using probabilistic matrix factorization technique.</p><p>In test phase/ score phase.</p><p>1. Load the computed model into memory.</p><p>2. compute recommendation using model. This is essentially multiplying matrices A and S.</p><p>3. Save recommendation against each user. Remove items, which user already purchased, and take top N scored items.</p><img src="https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=d1b713441794" width="1" height="1" alt="">
