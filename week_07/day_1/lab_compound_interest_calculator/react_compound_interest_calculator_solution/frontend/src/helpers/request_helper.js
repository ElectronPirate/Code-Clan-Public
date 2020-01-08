class RequestHelper {
  constructor(url) {
    this.url = url;
  }

  post(payload) {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  }
}

module.exports = RequestHelper;
