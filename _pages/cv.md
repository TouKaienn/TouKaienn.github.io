---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
  - /resume-json
---

{% assign cv = site.data.cv %}

[Download the complete CV (PDF)]({{ '/files/Kaiyuan_Tang_CV.pdf' | relative_url }}?v={{ cv.lastUpdated | date: '%Y%m%d' }}) · Updated {{ cv.lastUpdated }}

{{ cv.basics.summary }}

**Contact:** [{{ cv.basics.email }}](mailto:{{ cv.basics.email }}) · {{ cv.basics.phone }}<br>
{{ cv.basics.location.address }}, {{ cv.basics.location.city }}, {{ cv.basics.location.region }}

Research Interests
======

<ul>
{% for interest in cv.interests %}
  <li><strong>{{ interest.name }}:</strong> {{ interest.keywords | join: ", " }}</li>
{% endfor %}
</ul>

Education
======

<ul>
{% for education in cv.education %}
  <li><strong>{{ education.studyType }}{% if education.area %}, {{ education.area }}{% endif %}</strong>, {{ education.startDate }}–{{ education.endDate }}<br>
  {{ education.institution }}, {{ education.location }}{% if education.advisor %}<br>Advisor: {{ education.advisor }}{% endif %}</li>
{% endfor %}
</ul>

Employment
======

<ul>
{% for position in cv.work %}
  <li><strong>{{ position.position }}</strong>, {{ position.startDate }}–{{ position.endDate }}<br>
  {{ position.company }}, {{ position.location }}<br>{{ position.summary }}</li>
{% endfor %}
</ul>

Awards & Recognitions
======

<ul>
{% for award in cv.awards %}
  <li>{{ award.title }}, {{ award.date }}</li>
{% endfor %}
</ul>

Publications
======

{% include publications.html %}

Invited Talks
======

<ul>
{% for talk in cv.presentations %}
  <li><strong>{{ talk.name }}</strong><br>{{ talk.event }}, {{ talk.location }}, {{ talk.date }}</li>
{% endfor %}
</ul>

Service
======

{% include services.html %}
