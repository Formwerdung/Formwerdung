---
title: Jesus 2
date: 2020-03-03
excerpt: Lorem ipsum
order: 3
---

# Mobile first as design methodology

The origin of the term _Responsive Design_ can, as is relatively well-known, be traced back to this A List Apart article by Ethan Marcotte, published on May 25, 2010. The term is adapted from _Responsive Architecture_, denoting architectural spaces which adapt to the presence people [die in ihnen verweilen].

Marcotte starts with the observation that clients have begun to ask for "iPhone websites" and goes on to ask himself about the logical conclusion of making a website for a device specifically. Should we make a website for the Nokia N90, he asks rhetorically? More than nine years on, the example makes Marcottes point, as the Nokia known back then simply does not exist anymore.

The issue here is more than just the inefficiency resulting from tackling devices separately (even if that in fact never means starting from stratch), it is that we cannot even make informed choices about how devices will work in one or two years. (How did iPhone resolutions change in the last two years). Thus even given perfect research (which is possible but no one has), we don't know what device the site will be seen on.

_Responsive design_ thus does not mean that a website works on all (or 99% of) devices, it means that the site itself is design in a device-agnostic manner. It is one general outlook intended to help us achieve "works on all devices\* (within pragmatic limits) and it is rightly favoured to other approaches.

This is a fundamental difference to print design, in which the format of the output is known, even if there's a set of formats the design has to work for (a logo working in different sizes being a prime example).

The origins of the so-called _Mobile-first_ methodology are less clear to me, just as the concept itself seems much less clear. There is a very distinct narrow sense of _mobile-first_ which speaks exclusively to the coding of stylesheets (be it in CSS, SASS, CSS-in-JS, you name it). In this sense it literally means to enforce one rule: All media queries with sizes in them must only use min-width queries. It takes advantage. of the logical truth that all media queries using max-widths can be rewritten in completely equivalent queries using only min-widths (example?). This approach enforces consistency which for several reasons makes programmers faster (and thus, makes programs cheaper without any trade-off to quality). It is favoured over the reverse approach (using only max-width designations, which we might term _desktop-first_) because site designs tend to be additive when going from small to large screens, adding more intricate grids and css-intensive flourish, (a related technical advantage because it results in the least css being loaded on the devices which tend to operate with slower internet connections, which makes sense, even if css is generally not the performance bottleneck of a site).

In this sense, _mobile-first_ would mean that the website is basically programmed for mobile devices first, so that the tablet "version" (which of course doesn't exist in a responsive design framework) of a site is literally done before the desktop version.

But often, _mobile-first_ is also used in a wider sense that's much muddier, referring generally to _designing the mobile part first_. Clients know that it is good, because should somewhat help with a website's design working especially well on smartphones and tablets and also it being really consistent between all devices because they have been in the designers mind while designing. But is it really? Many designers would probably say they do it, but do they really? What I what like to do in what follows is to offer an ameliorative definition of this wide sense of _mobile-first_ to make it stand as a clear and distinct methodology so that we may then answer the first question with a resounding yes. This, I believe in – but I also believe that almost no designers actually do _mobile first_ this construed. In the course of my ameliorative work, I will thus have to present arguments to convince fellow designers so that hopefully, in the future, the answer to the second question will also be affirmative.

In brief, my definition is nothing more than a thorough explanation of what it literally means to design _mobile-first_, of how to soundly do the mobile design first. And that this is one good methodology within the purview of responsive design.
