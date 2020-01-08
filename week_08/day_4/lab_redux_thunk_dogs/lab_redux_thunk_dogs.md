# Lab: Redux Thunk CEO Dogs

### Learning Objectives
- Be able to handle an asynchronous request using Redux Thunk

## Brief

Your task is to create an application that allows a user to enter the breed of a dog, and see a photo of a dog of that breed displayed to the screen. Each time they search, a new photo should be displayed alongside their previous searches.

Use the [CEO Dogs API](https://dog.ceo/).

### MVP

- When a user submits a breed via a form, make a request for a random image of that breed, using the random image by breed end point: `https://dog.ceo/api/breed/hound/images/random`.
- Update the store's state with the new image.
- Display all the images that have been searched to the page.

### Extensions

- When a user searches for a breed that doesn't return an image, display a message saying that the breed wasn't found. Note: You can't handle this with `catch` after `fetch` because fetch doesn't reject according to response status, only if there is a network failure. Instead you will need to do some conditional logic in your `fetch`'s `then`.
- Style with flexbox to display the images in a grid.
