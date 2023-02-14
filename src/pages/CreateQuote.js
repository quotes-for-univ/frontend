import React from "react";
import { api } from "../lib/api"

export default class CreateQuote extends React.Component {
  state = {content: "", authorId: 1, authors: []}
  componentDidMount() {
    const authors = api.getAuthors();
    this.setState(...this.state, { authors });
  }
  render() {
    const list = (
      <select value={this.state.authorId} onChange={e => updateAuthor(e)}>
        {
          this.state.authors.map(author => {
            return (
              <option value={author.id}>{author.name}</option>
            )
          })
        }
      </select>
    );
    return (
      <div>
        <form onSubmit={e => submit()}>
          <textarea value={this.state.content} onChange={e => this.updateContent(e)}></textarea>
          {list}
          <button type="submit">Créer</button>
        </form>
      </div>
    )
  }

  updateAuthor(event) {
    this.setState({...this.state, authorId: event.target.value});
  }

  updateContent(event) {
    this.setState({...this.state, content: event.target.value});
  }

  async submit() {
    await api.createQuote(this.state.content, this.state.authorId);
    location.href = "/quotes";
  }
}