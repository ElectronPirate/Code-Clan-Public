![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Testing Classes & Objects

Let's add some tests to our Bear, River, Fish.

```bash
npm init
npm install --save-dev jest
mkdir specs
touch specs/bear.test.js
```

```js
// package.json

"scripts": {
  "test": "jest"
}

```

### TASK

Write tests to make sure we have completed the original brief. Use the "shoulds" to guide you what tests to write.

- A fish should have a name

- A river should have a name e.g. "Amazon"
- A river should hold many fish
- A river should lose a fish when a bear takes a fish
- A river should have a fishCount method

- A bear should have a name e.g. "Yogi" and a type e.g. "Grizzly"
- A bear should have an empty belly ( maybe an array )
- A bear should have a roar method
- A bear should have a foodCount method
- A bear should be able to take a fish from the river
