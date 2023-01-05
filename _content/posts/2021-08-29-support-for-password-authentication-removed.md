---
title: "Github: Support for password authentication was removed"
layout: blog-specific
author: eddrichjanzzen
date: 2021-08-29
category: blog
tags:
  - tech
description: "An article that describes the fix for the github error where the support for password authentication was removed. The article shows the step by step guide to fix the issue for MacOS users"
---

#### Password authentication was removed

Recently, I've been trying to clone a repository on [Github](github.com). I ran into an issue where I couldn't clone the repository because password authentication is no longer supported. 

```bash

remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.

```

![github-auth-error](/assets/images/blog/github-auth-error/use-personal-token.png){:class="img-blog"}

The error above has to do with a policy change in Github's security. The support for using regular username and password has been removed and instead been replaced with a personal access token. Click [here](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/) for more information.

In this article, I'll be walking through the steps to take when faced with this error. Note that the steps below are for MacOS users. 

#### Generating a personal access token

Follow these steps to generate a personal access token. Make sure to keep note of the generated personal access token as this will be used in the succeeding steps.

##### 1. On the Github dashboard, click on Settings. 

![settings](/assets/images/blog/github-auth-error/settings.png){:class="img-blog"}


##### 2. Click on Developer Settings

![developer-settings](/assets/images/blog/github-auth-error/developer-settings.png){:class="img-blog"}


##### 3. Click on Personal access tokens

![personal-access-tokens](/assets/images/blog/github-auth-error/personal-access-token.png){:class="img-blog"}


##### 4. Click on Generate new token

![generate-new-token](/assets/images/blog/github-auth-error/generate-new-token.png){:class="img-blog"}


##### 5. Enter password

![enter-password](/assets/images/blog/github-auth-error/enter-password.png){:class="img-blog"}


##### 6. Add a note for the token, configure expiry and the allowed permissions. 


In this example, we are leaving all the persmissions is checked, and with no expiry

![token-configuration](/assets/images/blog/github-auth-error/token-configuration.png){:class="img-blog"}


##### 7. Click on Generate Token

![generate-token-button](/assets/images/blog/github-auth-error/generate-token-button.png){:class="img-blog"}


##### 8. Copy the token


Copy the token. Store it somewhere safe where only you can access it. You will need this personal token in the next step.

![generate-token-button](/assets/images/blog/github-auth-error/copy-token.png){:class="img-blog"}


#### Using the Personal Token instead of password
If this is your **first time ever** to clone a respository in Github then follow these steps. If not, then proceed to the instructions on: Replacing the Credentials in Keychain access, below.


##### 1. Re-clone the respository. 

![re-clone](/assets/images/blog/github-auth-error/re-clone.png){:class="img-blog"}



##### 2. Paste the personal access token in the password prompt 

![paste-personal-token](/assets/images/blog/github-auth-error/paste-personal-token.png){:class="img-blog"}



##### 3. Congratulations, you have successfully cloned the repository
![clone-success](/assets/images/blog/github-auth-error/clone-success.png){:class="img-blog"}



#### Replacing the Credentials in Keychain access

If you've **cloned a few repositories** before in Github, it's likely that your credentials are already stored in the Keychain. Follow these steps to configure Keychain Access.


##### 1. Open Keychain access. 

![keychain-access](/assets/images/blog/github-auth-error/spotlight-keychain-access.png){:class="img-blog"}


##### 2. On Keychain Access, search `git`

![search-git](/assets/images/blog/github-auth-error/search-git.png){:class="img-blog"}


##### 3. Click on `github.com`

![click-github](/assets/images/blog/github-auth-error/click-github.png){:class="img-blog"}


##### 4. Tick the checkbox `show password`. 

![keychain-access-password](/assets/images/blog/github-auth-error/keychain-access-password.png){:class="img-blog"}


##### 5. Enter system password, then click on Always allow

![always-allow](/assets/images/blog/github-auth-error/always-allow.png){:class="img-blog"}


##### 6. Paste the Token into the password field


Copy the token from the previous guide on generating a personal access token. Then paste it in the input as seen below: 

![paste-token](/assets/images/blog/github-auth-error/paste-token.png){:class="img-blog"}



##### 7. Congratulations, you have successfully cloned the repository


Re-clone the repository


![clone-succcess-keychain-access](/assets/images/blog/github-auth-error/clone-success-keychain-access.png){:class="img-blog"}


I hope this article will be of help to anyone who encounters a similar issue. :smile: :thumbsup:
