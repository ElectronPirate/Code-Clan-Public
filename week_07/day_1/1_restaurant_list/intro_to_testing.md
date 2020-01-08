# Testing with Jest & React Testing Library

## Intro

The main reason to write tests is to make sure that our app works the way it should.
That’s really all there is to it.

But how far do we go? Should we test that a button changes colour when we hover over it? Probably not.
Instead, we should test _the key features_. What value is the app giving to the user? Let's make sure that happens.

## React Testing Library

React Testing Library was created by Kent C Dodds based on the guiding principle:

```
The more your tests resemble the way your software is used, the more confidence they can give you.
```

It's an alternative to Enzyme which is a React testing utility created by Airbnb.

From the RTL website...


###The problem

You want to write maintainable tests for your React components. As a part of this goal, you want your tests to avoid including implementation details of your components and rather focus on making your tests give you the confidence for which they are intended. As part of this, you want your testbase to be maintainable in the long run so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down.

###This solution

The react-testing-library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. Its primary guiding principle is:

The more your tests resemble the way your software is used, the more confidence they can give you.

So rather than dealing with instances of rendered react components, your tests will work with actual DOM nodes. The utilities this library provides facilitate querying the DOM in the same way the user would. Finding for elements by their label text (just like a user would), finding links and buttons from their text (like a user would). It also exposes a recommended way to find elements by a data-testid as an "escape hatch" for elements where the text content and label do not make sense or is not practical.

This library encourages your applications to be more accessible and allows you to get your tests closer to using your components the way a user will, which allows your tests to give you more confidence that your application will work when a real user uses it.

This library is a replacement for Enzyme. While you can follow these guidelines using Enzyme itself, enforcing this is harder because of all the extra utilities that Enzyme provides (utilities which facilitate testing implementation details). Read more about this in the FAQ.
```

## Resources

[Create React App - Running tests](https://facebook.github.io/create-react-app/docs/running-tests)

[Getting Started with TDD in React](https://daveceddia.com/getting-started-with-tdd-in-react/)

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

[React Testing Examples](https://react-testing-examples.com/)
