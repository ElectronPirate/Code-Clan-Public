const RequestHelper = require("../helpers/request_helper.js");
const PubSub = require("../helpers/pub_sub.js");

class Characters {
  constructor() {
    this.data = null;
  }

  getData() {
    const url = `http://localhost:3000/characters`;
    const request = new RequestHelper(url);
    request
      .get()
      .then(data => {
        this.data = data;
        PubSub.publish("Characters:character-data-loaded", this.data);
      })
      .catch(message => {
        console.error(message);
      });
  }

  postCharacter(char) {
    const url = `http://localhost:3000/characters`;
    const request = new RequestHelper(url);
    request
      .post(char)
      .then(characters => {
        PubSub.publish("Characters:character-data-loaded", characters);
      })
      .catch(console.error);
  }
}

module.exports = Characters;
