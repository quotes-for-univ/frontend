import axios from "axios"

class Api {

  constructor() {
    this.baseUri = "http://localhost:3000"
  }

  async getAuthor(id) {
    return await this.get(`/authors/${id}`)
  }

  async getQuotes() {
    return await this.get("/quotes?_expand=author");
  }

  async getAuthors() {
    return await this.get("/authors?_embed=quotes");
  }

  async get(url) {
    return (await axios(`${this.baseUri}${url}`)).data;
  }
}

export const api = new Api();