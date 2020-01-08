# Lab: Multiple Components Animal Shelter

## Brief

Your task is look at the provided React Redux application that helps an animal shelter keep track of its animals, and do the following in order to help you get familiar with the container/component pattern using higher-order components:

### MVP

#### Part 1

Draw a diagram that details:
  - the component rendering hierarchy
  - the redux store
  - components that connect to the store
  - any props passed to components

#### Part 2

Answer the following questions:

1. If we want to connect a component to the Redux Store, which method do we use?
2. If a component needs to update the state, which function do we need to create to pass to `connect`?
3. If a component needs to read from the state, which funciton do we need to create to pass to `connect`?
4. If we have a component that needs to update the state, but not read from it, what is the first argument we pass `connect`.
5. All the components in the `containers` directory are higher-order components (HOCs). What makes them higher-order components?

#### Part 3

Add functionality to that app that display the total number of animals currently in the shelter. Use a separate component and container for this.
