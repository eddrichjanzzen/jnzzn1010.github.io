---
title: "useState typescript warning: '(prev: any) => any' is not assignable to parameter of type"
layout: blog-specific
author: eddrichjanzzen
date: 2023-02-19
category: blog
tags:
  - react
description: 'An article that describes how to fix typescript warning when trying to update a previous value with useState hook.'
---

Recently, I implemented a handler to update a list of category strings using the `setState` hook in React. The handler, called `handleSetCategories`, wraps around `setCategories` and looks like this:

```ts
const [categories, setCategories] = useState<Array<string>>([]);

const handleSetCategories = (value: string[]): void => {
  setCategories(value);
};
```

However, throughout my implementation, I ran into a warning where Typescript was inferring the wrong types whenever I tried to update the previous value like so:

<div class="img-blog">
	<img src="/assets/images/blog/set-state-action/set-state-action-error.png" alt="set-previous-state-error">
</div>

#### Solution: Adding SetStateAction

The issue was that the` handleSetCategories` function only accepted the type `value: string[]` as its parameter. However, the value being passed in the above example was a function containing the prev value, which Typescript did not know about.

To fix this issue, I made use of React's `SetStateAction` type, which contains the definition for the function containing the prev value. This is how the updated code looks:

```ts
import { SetStateAction } from 'react';

const [categories, setCategories] = useState<Array<string>>([]);

const handleSetCategories = (value: SetStateAction<string[]>): void => {
  setCategories(value);
};
```

Now that the expected types have been supplied, the Typscript warning has disappeared!

I really hope this short article helped! :thumbsup: :thumbsup:
