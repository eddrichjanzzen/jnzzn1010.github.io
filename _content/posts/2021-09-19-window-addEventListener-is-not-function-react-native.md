---
title: 'React Native: window.AddEventListener is not a function'
layout: blog-specific
author: eddrichjanzzen
date: 2021-09-19
category: blog
tags:
  - tech
  - react
description: 'An article that describes a the fix for the window.AddEventListener is not a function.'
---

##### window.addEventListener is not a function

Recently, I've been working on a adding an event listener on a React Native Application to keep track of window events.

```js
// reset state the code in state if the user clicked on the back button in browser
useEffect(() => {
  const popState = window.addEventListener('popstate', (e) => {
    const { state } = e;
    if (state !== null) {
      handleSetPasswordResetInfo({ code: '' });
    }
  });
  // remove listener
  return () => {
    window.removeEventListener('resize', popState);
  };
}, []);
```

While the behavior works on the browser version, I ran into the following error when running the tests in `jest`:

```bash
FAIL  __tests__/ResetCodeScreen.test.jsx
  ● Test suite failed to run

    TypeError: window.addEventListener is not a function
```

After some investigation, I found that `window.addEventListener` is a case of something that exists in the browser, but isn't nessesarily implemented in React Native.

##### Solution

I was able to resolve the issue by explicitly adding a checking for the platform like so:

```js
if (Platform.OS === 'web') {
  // insert logic here
}
```

Luckly, React Native provides a straight forward way of checking the platform. By checking the platform, are able to make sure that the code inside the statement is only being used in the browser. `Plaform.OS == 'web'`. In fact, we can also check the platform if it's `ios` or `android`.

Example snippet:

```js
import { Platform } from 'react-native';
...

  if (Platform.OS === 'web') {
    // reset state the code in state if the user clicked on the back button in browser
    useEffect(() => {
      const popState = window.addEventListener('popstate', (e) => {
        const { state } = e;
        if (state !== null) {
          handleSetPasswordResetInfo({ code: '' });
        }
      });
      // remove listener
      return () => {
        window.removeEventListener('resize', popState);
      };
    }, []);
  }
```

##### Result

```bash
 PASS  components/Ui/PasscodeScreen/__test__/PasscodeScreen.test.jsx (6.476s)
  Testing Passcode Screen
    ✓ renders correctly (158ms)
```

There you have it! I hope this article will be of help to anyone who encounters a similar issue. :smile: :thumbsup:

##### Sources:

- [https://stackoverflow.com/questions/66145171/i-had-an-issue-today-with-window-addeventlistener-and-react-native](https://stackoverflow.com/questions/66145171/i-had-an-issue-today-with-window-addeventlistener-and-react-native)
- [https://reactnative.dev/docs/platform-specific-code](https://reactnative.dev/docs/platform-specific-code)
