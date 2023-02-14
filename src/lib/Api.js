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

  async createAuthors(content, authorId) {
    return await this.post("/quotes", { content, authorId })
  }

  async get(url) {
    return (await axios(`${this.baseUri}${url}`)).data;
  }

  async post(url, body) {
    return (await axios({
      method: 'post',
      url, body,
      headers: {
        'Content-Type': 'application/json',
      },
    }))
  }

}

export const api = new Api();