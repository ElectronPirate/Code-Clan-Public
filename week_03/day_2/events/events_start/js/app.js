document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const button = document.querySelector('#button');
  button.addEventListener('click', () => {
    const resultParag = document.querySelector('#button-result');
    resultParag.textContent = "That button has definitely been clicked"
  })

  const input = document.querySelector('#input');
  input.addEventListener('input', (event) => {
    // get the value of the input
    const inputtedText = event.target.value;
    // update the paragraph below with the text
    const resultParag = document.querySelector('#input-result');
    resultParag.textContent = `You typed: ${inputtedText}`;
  });

  const select = document.querySelector('#select');
  select.addEventListener('change', (event) => {
    const selected = event.target.value;
    const selectParag = document.querySelector('#select-result');
    selectParag.textContent = `You selected: ${selected}`;
  });


  const form = document.querySelector('#form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const first = event.target.first_name.value;
    const last = event.target.last_name.value;

    const formParag = document.querySelector('#form-result');
    formParag.textContent = `Your name is: ${first} ${last}`
  })

});
