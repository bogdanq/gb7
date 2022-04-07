import axios from "axios";

class Request {
  constructor(token = "") {
    this.request = axios.create({
      baseURL: "https://api.github.com",
    });
    this.token = token;
  }

  get = (url) => {
    return this.request.get(url);
  };

  post = (url, body) => {
    return this.request.post(url, body);
  };

  delete = (url) => {
    return this.request.delete(url);
  };
}

export const request = new Request();
