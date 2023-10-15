---
title: 'Missing imports Pylance(reportMissingImports)'
layout: blog-specific
author: eddrichjanzzen
date: 2023-10-15
category: blog
tags:
  - tech
  - python
description: 'A simple solution to resolve warnings with Pylance(reportMissingImports) missing imports'
---

#### Import *** could not be resolved Pylance(reportMissingImports)

While working on Python projects with Docker or just simply any Python project, you may sometimes run into a warning indicating missing imports in `Visual Studio Code`.

<div class="img-blog">
	<img src="/assets/images/blog/vs-code-missing-imports/could-not-be-resolved.png" alt="import-could-not-be-resolved">
</div>

You're quite sure you've installed these packages already before... 🤔

#### What could be happening here? 

Sometimes it's because the wrong environment is being used. This could happen when the IDE is closed, and opened again. Sometimes the setting defaults back to the Global system Python, where the package has not been installed.

In cases like this, you may try updating the currently used Python interpreter at the bottom part of the screen to the one where the missing package had been installed. 

For example:

<div class="img-blog">
	<img src="/assets/images/blog/vs-code-missing-imports/change-interpreter.png" alt="change-interpreter">
</div>

Hope this helped! :smile: :thumbsup:
