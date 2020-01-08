# Lab: React Dice App

### Learning Objectives

- Be able to use create-react-app to create the boiler plate application
- Be able to render to the page using JSX
- Be able to update state to re-render the UI

## Brief

Your task is to create a dice app. The user should be able to click a 'Roll Dice' button and see a random number displayed to the screen.

![Screenshot of example](images/dice_screenshot.png)

*Example Dice Application*

Use create-react-app to create the boiler plate application:

```bash
npx create-react-app dice_app
```

### MVP

- A user should be able to click the 'Roll Dice' button and see a random number between 1 and 6 displayed.
- This logic should be handled in a `Dice` component and the current dice roll result should be stored in the component's state.

### Extensions

- Update the `Dice` component able to be able to have any number of sides (display a number between 1 and any other number). The number of sides should be passed to the `Dice` component by the `App` component on props.
