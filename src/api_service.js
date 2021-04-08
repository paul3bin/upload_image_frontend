export class API {
  static loginUser(body) {
    return fetch(`https://upload-image-backend-flask-api.herokuapp.com/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static registerUser(body) {
    return fetch(
      `https://upload-image-backend-flask-api.herokuapp.com/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    ).then((resp) => resp.json());
  }
}
