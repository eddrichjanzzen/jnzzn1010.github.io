---
title: 'Github: Support for password authentication was removed'
layout: blog-specific
author: eddrichjanzzen
date: 2021-08-29
category: blog
tags:
  - tech
description: 'An article that describes the fix for the github error where the support for password authentication was removed. The article shows the step by step guide to fix the issue for MacOS users'
---

#### Password authentication was removed

Recently, I've been trying to clone a repository on [Github](github.com). I ran into an issue where I couldn't clone the repository because password authentication is no longer supported.

```bash

remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.

```

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/use-personal-token.png" alt="github-auth-error">
</div>

The error above has to do with a policy change in Github's security. The support for using regular username and password has been removed and instead been replaced with a personal access token. Click [here](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/) for more information.

In this article, I'll be walking through the steps to take when faced with this error. Note that the steps below are for MacOS users.

#### Generating a personal access token

Follow these steps to generate a personal access token. Make sure to keep note of the generated personal access token as this will be used in the succeeding steps.

#### 1. On the Github dashboard, click on Settings.

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/settings.png" alt="settings">
</div>

#### 2. Click on Developer Settings

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/developer-settings.png" alt="developer-settings">
</div>

#### 3. Click on Personal access tokens

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/personal-access-token.png" alt="personal-access-tokens">
</div>

#### 4. Click on Generate new token

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/generate-new-token.png" alt="generate-new-token">
</div>

#### 5. Enter password

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/enter-password.png" alt="enter-password">
</div>

#### 6. Add a note for the token, configure expiry and the allowed permissions.

In this example, we are leaving all the persmissions is checked, and with no expiry

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/token-configuration.png" alt="token-configuration">
</div>

#### 7. Click on Generate Token

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/generate-token-button.png" alt="generate-token-button">
</div>

#### 8. Copy the token

Copy the token. Store it somewhere safe where only you can access it. You will need this personal token in the next step.

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/copy-token.png" alt="generate-token-button-2">
</div>

#### Using the Personal Token instead of password

If this is your **first time ever** to clone a respository in Github then follow these steps. If not, then proceed to the instructions on: Replacing the Credentials in Keychain access, below.

#### 1. Re-clone the respository.

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/re-clone.png" alt="re-clone">
</div>

#### 2. Paste the personal access token in the password prompt

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/paste-personal-token.png" alt="paste-personal-token">
</div>

#### 3. Congratulations, you have successfully cloned the repository

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/clone-success.png" alt="clone-success">
</div>

#### Replacing the Credentials in Keychain access

If you've **cloned a few repositories** before in Github, it's likely that your credentials are already stored in the Keychain. Follow these steps to configure Keychain Access.

#### 1. Open Keychain access.

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/spotlight-keychain-access.png" alt="keychain-access">
</div>

#### 2. On Keychain Access, search `git`

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/search-git.png" alt="search-git">
</div>

#### 3. Click on `github.com`

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/click-github.png" alt="click-github">
</div>

#### 4. Tick the checkbox `show password`.

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/keychain-access-password.png" alt="keychain-access-password">
</div>

#### 5. Enter system password, then click on Always allow

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/always-allow.png" alt="always-allow">
</div>

#### 6. Paste the Token into the password field

Copy the token from the previous guide on generating a personal access token. Then paste it in the input as seen below:

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/paste-token.png" alt="paste-token">
</div>

#### 7. Congratulations, you have successfully cloned the repository

Re-clone the repository

<div class="img-blog">
	<img src="/assets/images/blog/github-auth-error/clone-success-keychain-access.png" alt="clone-succcess-keychain-access">
</div>

I hope this article will be of help to anyone who encounters a similar issue. :smile: :thumbsup:
