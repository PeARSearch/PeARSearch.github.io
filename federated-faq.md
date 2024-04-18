---
title: The PeARS Federated FAQ
layout: page
description: PeARS Federated is the decentralized version of the PeARS Web search engine. This is the official instance FAQ.
bodyClass: page-about
---

![Different instances of PeARS Federated](/images/illustrations/instances.png)


> **18.04.2024. This is a copy of the FAQ on PeARS Federated instances, to help you get a preview of the system. We are working hard on the instances themselves and hope to be able to invite some first testers in the next few weeks.**

## Where am I?

Hello! You are on an instance of 'PeARS Federated', a decentralised search engine. Every instance of PeARS can be considered a mini search engine for a single topic of interest. 

The idea behind PeARS is that each instance is populated via crowdsourcing. That means that if you sign up for an account, you can contribute to the content of the search index by sharing interesting URLs. This ensures that the index is of particularly high quality, as it has been vetted by human contributors.

You can read a technical description of PeARS Federated [here](/federated/).


## How do I contribute to the index of an instance?

First, you will need to sign up for an account on this instance. We are happy to have you onboard!

Every PeARS instance includes an indexing page which helps you with the hard work of converting documents into searchable representations. You can index in several ways but we will start with the simplest one, which consists in typing a single URL in the 'Index a single URL' box -- this will index just that page. You should also enter a keyword under the URL, telling PeARS the theme of the page you want to index. Over time, this will contribute to the creation of topical 'pods', which you can manage individually. Finally, add an optional note, if you feel like adding a comment about this resource that could be useful to others.

![The indexing page of PeARS Federated](/images/illustrations/indexing_page.png)

## What is a pod?

A pod is an index dedicated to a particular subtopic on the PeARS instance. Imagine the URL collection on this site is a library, and you are the librarian labelling different sections of your bookshelves. Having labelled sections help you direct visitors to the right book more easily. It also helps you and your fellow contributors manage the collection you have built.

If needed, you can go and check which pages have been indexed for a particular subtopic. Head over to the 'Themes' tab. There, you will find a pod for each keyword that has ever been used in the indexer. Each pod in the making shows you its current size. You can check the content of the pod by clicking on it. It is also possible to download the information contained in that pod.

![The pods page of PeARS Federated](/images/illustrations/themes_page.png)


## What are 'manual resources'?

Believe it or not, but not everything is on the Internet. Is there a little restaurant you love that doesn't have an online presence? No problem, add a manual resource from the indexing page, recommending your favorite chef.

You may also want to use the manual function when automatic indexing of a page has failed for any reason (typically, the website owner does not allow crawling). You can then mention that website in your manual entry. But please make sure not to use any material from the page you are citing, to avoid copyright violations.

![Entering a manual tip in PeARS Federated](/images/illustrations/manual_tips_page.png)


## What else can I do?

When you search, you will notice that each URL on the results page is accompanied by a set of three icons. These icons let you comment, share or report resources. The comment icon (<ion-icon name="chatbubble-outline"></ion-icon>) opens a new page which lets you add some useful information to the indexed page. Comments will appear together with a URL and can be accessed by clicking on the little speech bubble next to a snippet (URLs without comments do not show the bubble). The share icon (<ion-icon name="share-outline"></ion-icon>) copies the PeARS entry for the URL in your clipboard, so that you can share the link as well as any associated comments in one go. The flag icon (<ion-icon name="flag-outline"></ion-icon>) opens a new dialogue which you can use to tell the admins if you feel that the inclusion of a particular resource is problematic.

![The search results page in PeARS Federated](/images/illustrations/search_page.png)


## Help! I made a mistake while indexing!

No worries! First, whenever you index a new URL, the indexer will display a summary of your contribution. If you spot the mistake straight away, click on 'try again' and correct the information. Second, you can at any time delete any of your contributions (indexed URLs, manual resources and/or comments) by going to your profile page and clicking on the trash can next to an entry.


## How do I contribute to the PeARS code?

We'd love to see you on our GitHub repos! Come and join the discussion [here](https://github.com/orgs/PeARSearch/discussions)


## What is your approach to crawling?

Crawling is a big topic at the moment, as Big Tech companies are often accused of indiscriminately crawling Web content to train AI models, and by extension, AI-based search. 

PeARS always respects copyright holders. It automatically checks constraints set by robots.txt files and it only displays minimal snippets in search results. If you wish for your site to be removed from the the index, simply contact the admin for this instance, and we will delete your content.

