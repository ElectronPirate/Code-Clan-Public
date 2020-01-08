# Homework: Redux with the Container/Component Pattern

## Brief

Your task is to build a React Redux application with a theme of your choice. A user should be able to submit an entry relevant to your theme and see a list of all entries displayed on the page below.

Use React and React-Redux, implementing the Container/Component pattern. Only connect to the store where necessarily, keeping components presentational where possible.

### MVP

- A user should be able to submit an entry and see it displayed in a list below.

### Extensions

- Add additional functionality relevant to your theme.

## Planing

- Start by configuring the Redux Dev Tools
- Start by creating the reducer, creating the store and making it accessible to the application

## Consideration

In each component you will need to ask:

- Does this component need access to state in order to render? If so, you will need to write a `mapStateToProps` function.
- Does this component need to update state by dispatching an action? If so, you will need to write a `mapDispatchToProps` function.
