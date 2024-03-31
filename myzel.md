---
title: About PeARS Myzel
layout: page
description: PeARS Myzel is a search engine of things for sustainability auditing
bodyClass: page-about
---

![Mycelium in the wild](/images/illustrations/myzel.jpg)
Mycelium, by Christian Scheckhuber - Own work, CC BY-SA 4.0, <a href="https://commons.wikimedia.org/w/index.php?curid=44748236">Link</a>


**Idea and conceptual design for a transparent supply chain platform:**<br> [Die DigitalLandscchaftsGärtnerin](https://diedigitallandschaftsgaertnerin.de/) (Julia Miosga)

**Search implementation:**<br> [the PeARS Team](https://pearsproject.org/team/)  (Aurelie Herbelot / Gosse Minnema)



## What is PeARS Myzel? 

PeARS Myzel is a <b>search engine of things</b> for sustainability audits. It helps people and businesses to track the provenance and sustainability of the products and supplies they buy.

Why is this needed? Consider the following scenarios. In order to grant sustainability certificates to companies, regulators must have a way to follow the entire supply chain leading to a final product, tracking the provenance of every good or service involved in production, including transport and other derivative activities. Businesses themselves must have access to transparent information about their supplies in order to ensure compliance with relevant laws. At the same time, data should be careful shared across actors. For instance, it is not necessary for a regulator to have access to *all* sensitive data of a business. That is, transparency and privacy must be carefully balanced.

Dealing with such complexity requires new kinds of information retrieval (IR) systems, which include a) symbolic search over things (rather than strings); b)  extended retrieval functions which could e.g. track entire chains of semantic relations across networks of entities; c) extreme flexibility to be adapted to the needs of different actors; d) interoperability; e) robust information security to prevent the propagation of false information.

PeARS Myzel is designed to be just that.


### Background

Advanced digital connectivity has led to fundamental changes in our everyday and business lives. While in the industrial age, value chains were vertically oriented towards individual sectors, production, logistics or trade, today they are horizontally oriented towards technologies and product cycles. Digitalization, proprietary platforms and networks have permanently changed the global market and therefore also product development. The speed of innovation and the demand for greater and faster economic growth are leading to ever more complex challenges and problems. We are confronted with economic and social injustice, as well as the triple crisis of climate change, loss of biodiversity and environmental pollution. In order to reduce or, in the best case scenario, prevent the devastating and far-reaching effects in their negativity, we urgently need new narratives and visions for a fair and sustainable economy, starting with transparent supply chains, a closed circular economy and an economy oriented towards the common goods.

In 2015, the global community adopted [the 2030 Agenda](https://sdgs.un.org/goals), setting 17 global Sustainable Development Goals (SDGs) for socially, economically and ecologically sustainable development. The European Union has recently agreed on implementing [new rules](https://commission.europa.eu/business-economy-euro/doing-business-eu/corporate-sustainability-due-diligence_en) that give companies an obligation to track and minimise their human rights and environmental impact (known as the 'Due Diligence Act'). The question is how such rules are to be implemented in complex business networks involving many different actors, products, and industry-specific regulations.


### A decentralised system

The Myzel project supports a democratic digital economy that promotes decentralized participation, creates transparency, acts socially and sustainably, and is secure. At the PeARS project, we have been working for a while on an open-source, federated search system. With Myzel, we port that system to the area of sustainability tracking and auditing, where supply chain data is involved. This means being able to search and link electronic shipping documents, customs data, sensor data, certificates and more. (See Figure 1 in this [Bitkom experiment](https://www.bitkom.org/sites/main/files/2020-10/201014_bitkom-paper_digital-supply-chain-experiment.pdf), showing all data involved in a transport process.)

Myzel is specifically based on the codebase of [PeARS Federated](/federated/).



### Searching things, not strings

Tracking supply chains is essentially a search problem: the user needs to find information in a large dataset. But in contrast with a typical search scenario where the data is made of text documents, the information we are searching through is a collection of *things* (e.g. a machine part, a seed bag) and *events* (e.g. arrival at a harbour, ownership change). That is, we are looking for things, not words, when sifting through the dataset.

A basic example of a search engine of things can be seen at work in the [Google Knowledge Graph](https://en.wikipedia.org/wiki/Google_Knowledge_Graph). The graph itself, as well as the associated search algorithm, form the infrastructure necessary to return 'infoboxes' at the top of the search results, usually generated from Wikipedia or from some other structured data. Each infobox is a description of an actual entity or event in the real world. This framework is however limited, as it only returns single entities from pre-existing datasets. That is, it is not possible to create new entity representations on-the-fly, nor it is possible to follow their relationships with other entities.

The PeARS project is instead building a complex 'search engine of things' that is based on decades of computational semantics research. It integrates insights from [Formal Distributional Semantics](https://aclanthology.org/J16-4002.pdf) and bio-inspired NLP for creating compact numerical representations of entities and events, which can themselves be linked via a searchable graph. 


### Security

Myzel implements two levels of security over the data shared across the network. The first one is an evolved permissioning system, which gives different views over the data to different types of actors. This is done by restricting access to certain nodes on the network, as well as filtering the semantic data types that a user has access to. The second level of security concerns the integrity of the data itself: we want the data on the network to reflect actual reality. In the field of semantics, the correspondence relation between words/concepts and the world is known as 'denotation', or simply 'meaning'. In order to ensure that bad actors cannot tamper with the denotation of a data point (i.e. the thing or event it refers to), we implement a 'proof-of-meaning' (extending the 'proof-of-work' and 'proof-of-stake' concepts popular in the blockchain technology) that require permitted actors to verify the data that is added to the network. 

 
