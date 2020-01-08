# Homework: Getting Familiar with Redux

### Learning Objectives
- Know Redux's data flow
- Be able to identify pure and impure functions
- Understand the relationship between actions, reducers, the store and state.

## Brief

So far we have looked at Redux the library, without using any front-end frameworks. Tomorrow we will be seeing how to use Redux in a React application, which will involve using another library. Your task for tonight is to make yourself as familiar with Redux as possible, so that when we add React into the mix, you are clear about the Redux's foundational principles.

Please submit answers the the questions below.

### MVP

#### Part 1

1. What are actions used for?
2. What type of object must an action be?
3. At a minimum, what is the one property the action should have? And what is this property used for?
4. What is the responsibility of the reducer?
5. What is the responsibility of the store?

#### Part 2

When working with Redux, the reducers must be pure functions. One of the qualities that makes a function pure is that is doesn't modify (or 'mutate') objects outside their scope. When a reducer is passed the state, it must not mutate the state, but instead return a newly created state object. Read the following page on common ways patterns for not mutating state in reducers:

[https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns)

Which of the following functions are pure:

```js
const reducer1 = (action, state) => {
  return state + 1;
}

const reducer2 = (action, state) => {
  state.push("Cat");
  return state;
}

const reducer3 = (action, state) => {
  return [...state, "Dog"];
}

const reducer4 = (action, state) => {
  return state.map(pet => {
    pet.price /= 2;
    return pet;
  });
}

const reducer5 = (action, state) => {
  return state.map(pet => {
    return { ...pet, pet.price: pet.price / 2 }
  });
}
```

### Extensions

Do one (or all!) of the following:

- Create another Redux application from scratch.
- Add additional features the to applications we have been building today.
- Complete the [basics tutorial on the Redux website](https://redux.js.org/basics/basic-tutorial).
