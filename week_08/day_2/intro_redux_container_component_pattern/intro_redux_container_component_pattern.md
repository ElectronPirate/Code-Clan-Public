# React Redux: Container/Component Pattern with Redux

### Learning Objectives
- Understand the benefits of using the container/component pattern
- Understand where and when to connect to the store

## Introduction

Redux is a state management library that abstracts the application state into one central store. When using Redux in a React application, we have the capability to connect every component directly to the store, both reading state and updating it. But this can lead to a number of problems:

- Mapping state and dispatch to props in every component can create a lot of boilerplate code.
- Reasoning about how state is being updated can become difficult.
- Testing connected components is more difficult.

## Container/Component Pattern

Using the Container Component pattern we can ensure our applications have a structure that are easy to reason about and maintain.

### Containers

Containers are:

- often connected components that can access the stores state
- responsible for the majority of the business logic, such as filtering or sorting data that is accessed from state, before passing it to presentational components.

### Presentation Components

Presentational Components are:

- functional components that receive data on props
- responsible for rendering the data they receive on props to the screen
- dispatching actions to update state by calling functions that they receive on props

By ensuring our application has presentation components where appropriate, we make our UI easier to test and maintain.

## Higher-Order Components

We can use Higher-Order components to help connect our containers and components. Higher-Order Components are components that return another component, but wrapped with additional props. So we can make our containers higher-order components, which connect to the store, then return the relevant presentational component, wrapped with state data and dispatch functions as props.
