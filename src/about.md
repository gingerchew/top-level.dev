---
title: About
layout: post
---

## What is this?

This is a probably compatible list of the top level domains, or TLD, in [the list by ICANN here](https://data.iana.org/TLD/tlds-alpha-by-domain.txt]).

### Probably?

The site is set to clear the cache once a year. So... *probably*.

### How do I know the list is up to date?

This site was last built at this time: {{ build.timestamp }}. This is also included in the footer.

### What are all of the domains starting with `xn--`?

Due to *reasons* characters outside of the `[A-Za-z0-9]-_` group are not exactly supported in urls, to accomodate this the `xn--` urls translate to various characters across multiple languages. [Check out this part of the Wikipedia list of top level domains](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Internationalized_generic_top-level_domains) to get a better idea of how it works.

### Made with

- [11ty](https://www.11ty.dev/) by Zach Leatherman
- [Eleventy plus Vite](https://eleventyplusvite.netlify.app/) template by Matthias Ott