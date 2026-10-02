---
permalink: /
layout: about
title: "About"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<header class="homepage-header">
  <h1>{{ site.author.name }}</h1>
  <p class="homepage-position">Postdoctoral Researcher · University of Notre Dame</p>
</header>

<div class="homepage-intro">
<div class="homepage-bio" markdown="1">

I am a postdoctoral researcher in the [Department of Computer Science and Engineering](https://cse.nd.edu/) at the [University of Notre Dame](https://www.nd.edu/), working with [Prof. Chaoli Wang](https://sites.nd.edu/chaoli-wang/) in the ND-VIS research group.

I received my Ph.D. in Computer Science and Engineering from Notre Dame in June 2026, advised by Prof. Wang, and my Bachelor of Engineering from [Xidian University](https://en.xidian.edu.cn/) in 2022.

</div>
<img class="homepage-portrait" src="{{ '/images/profile.png' | relative_url }}" alt="Kaiyuan Tang" width="720" height="720">
</div>

<div class="homepage-research" markdown="1">

My research brings together **scientific visualization, machine learning, computer graphics, and human-centered AI**. I develop neural representations for scientific data compression and generalization, expressive rendering and editable scene representations, and multimodal interfaces and visualization agents.

</div>

<ul class="homepage-links" aria-label="Contact and academic profiles">
  <li><a href="mailto:{{ site.author.email }}">Email</a></li>
  <li><a href="{{ site.author.googlescholar }}">Google Scholar</a></li>
  <li><a href="{{ site.author.orcid }}">ORCID</a></li>
  <li><a href="https://github.com/{{ site.author.github }}">GitHub</a></li>
</ul>

<section class="homepage-news" aria-labelledby="news">
<h2 id="news">News</h2>

{% include recent-news.html %}
</section>
