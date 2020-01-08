class RequestHelper{

  constructor (url) {
    this.url = url;
  }

  get() {
    return fetch(this.url)
      .then((response) => response.json());
  }

  post(payload) {
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json());
  }

  delete(id) {
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json());
  }

}

module.exports = RequestHelper;
