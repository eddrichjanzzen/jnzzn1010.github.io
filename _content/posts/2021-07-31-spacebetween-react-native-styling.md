---
title: 'React Native: Space Between Styling'
layout: blog-specific
author: eddrichjanzzen
date: 2021-07-31
category: blog
tags:
  - tech
  - react
description: 'An article that describes a solution to add equal spacing between views using React Native Styling.'
---

##### Learn once, write anywhere.

[React Native](https://reactnative.dev/) is an amazing tool for writing cross plaform applications. If you're thinking about building applications with the the capability to support multiple platforms, then this is the tool for you! :raised_hands:

Recently, I've been working on a feature that diplays a list of elements into the view port in a grid-style format. At first, I was able to solve the issue by adding the `grid-gap` property to the styles prop like so:

```js
{
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  ...
  gap: '1.25rem'
}
```

![grid-gap](/assets/images/blog/reactnative-spacebetween/grid-spaced.png){:class="img-blog-center"}

However as I was implementing tests, I discovered that React Native doesn't support the usage of `grid-gap`.

The test would fail with the following error:

```bash

Invariant Violation: "gap" is not a valid style property.

```

Another solution I tried was to add a `justifyContent: 'space-between'`, this fix certainly fixes the issue, but when less elements were displayed in the bottom of the viewport, the spacing would be too far off.

![grid-gap](/assets/images/blog/reactnative-spacebetween/grid-spaced-space-between.png){:class="img-blog-center"}

After another hour of trial and error, I was able to find another way. If you are using the `map` function to render your component, you can try the following code:

```jsx
// Change to the number of columns in your grid
const numCols = 4;

// Change to the spacing for each item
const spacing = '1.25rem';

const parentStyles = {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
};

const childStyles = (index) => {
  let styles = {
    marginBottom: spacing,
    marginLeft: index % numCols !== 0 ? spacing : 0,
  };

  return styles;
};

// Parent View
<View style={parentStyles}>
  {
    // List of child views to render
    contents.map((content, index) => (
      // add a margin of 'spacing' to the bottom of all cards
      // will supply a left-margin to all cards in between the gap,
      // everytime a card is NOT divisible numCols, add a margin to the left
      <View style={childStyles(index)}>
        <Card key={index} content={content} />
      </View>
    ))
  }
</View>;
```

The result may be the same, but it certainly fixed the issue. You can configure the grid-gap by changing the `spacing` variable. You can also configure the number of columns by changing the `numCol` variable.

![grid-gap](/assets/images/blog/reactnative-spacebetween/grid-spaced.png){:class="img-blog-center"}

I hope this article will be of help to anyone who encounters a similar issue. :smile: :thumbsup:
