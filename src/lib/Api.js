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

  async createQuote(content, authorId) {
    return await this.post("/quotes", { content, authorId })
  }

  async get(url) {
    return (await axios(`${this.baseUri}${url}`)).data;
  }

  async post(url, body) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return (await axios.post(`${this.baseUri}${url}`, body, headers));
  }

}

export const api = new Api();