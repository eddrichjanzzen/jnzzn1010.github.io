---
title: 'Configure mysql local client in DBeaver'
layout: blog-specific
author: eddrichjanzzen
date: 2023-07-04
category: blog
tags:
  - others
description: 'An article that describes how to fix issues on dbeaver. "Native Client is not specified for connection"'
---

<div class="img-blog-right">
	<img src="/assets/images/blog/dbeaver-local-client/dbeaver-logo.png" alt="dbeaver-logo">
</div>

### DBeaver is Awesome!

If you're like me, I use [DBeaver](https://dbeaver.io/) as the database client of choice.

DBeaver is a multiplatform tool for databases and supports a lot of different databases which makes it awesome!  However, there might be times when you run into hiccups while doing some operations, for example, dumping data from a mysql database.

<br>

#### 1. Right click database

<div class="img-blog">
	<img src="/assets/images/blog/dbeaver-local-client/right-click-database.png" alt="right-click-database">
</div>

#### 2. Click on local client button

<div class="img-blog">
	<img src="/assets/images/blog/dbeaver-local-client/click-local-client-button.png" alt="click-local-client-button">
</div>

#### 3. Click browse

<div class="img-blog">
	<img src="/assets/images/blog/dbeaver-local-client/click-browse.png" alt="click-browse">
</div>

#### 4. Click add home

<div class="img-blog">
	<img src="/assets/images/blog/dbeaver-local-client/click-add-home.png" alt="click-add-home">
</div>

#### 5. Locate `mysql` installation

Locate your mysql local installation, in my case this is in the opt folder of homebrew

Tip: 💡 use `cmd` + `shift` + `.` to reveal hidden files.

<div class="img-blog">
	<img src="/assets/images/blog/dbeaver-local-client/locate-hidden-file.png" alt="locate-hidden-file">
</div>

eg. path `/opt/homebrew/Cellar/mysql/bin`

It should look something like this:

<div class="img-blog">
	<img src="/assets/images/blog/dbeaver-local-client/homebrew-cellar-mysql.png" alt="homebrew-cellar-mysql">
</div>

As you'll see, the start button is now enabled!

<div class="img-blog">
	<img src="/assets/images/blog/dbeaver-local-client/local-client-enabled.png" alt="local-client-enabled">
</div>

Congratulations! I hope this helped! 🙌

#### Sources:

- [https://david.raleche.com/web-consulting/how-to-fix-dbeaver-native-client-is-not-specified-for-connection/](https://david.raleche.com/web-consulting/how-to-fix-dbeaver-native-client-is-not-specified-for-connection/)
