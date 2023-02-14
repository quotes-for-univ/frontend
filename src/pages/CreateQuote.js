import React from "react";
import { api } from "../lib/Api"

export default class CreateQuote extends React.Component {
  state = {content: "", authorId: 1, authors: [], confirmation: false};

  async componentDidMount() {
    const authors = await api.getAuthors();
    console.log(authors);
    this.setState({...this.state, authors });
  }
  render() {
    const list = (
      <select value={this.state.authorId} onChange={e => this.updateAuthor(e)}>
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
        {
          this.state.confirmation ? <div>Création confirmée <a href="/quotes">Retour à la liste</a></div> : ""
        }
        <form onSubmit={e => this.submit(e)}>
          <textarea value={this.state.content} onChange={e => this.updateContent(e)}></textarea>
          {list}
          <button type="submit">Créer</button>
        </form>
      </div>
    )
  }

  updateAuthor(event) {
    this.setState({
      ...this.state,
      authorId: event.target.value,
      confirmation: false,
    });
  }

  updateContent(event) {
    this.setState({
      ...this.state,
      content: event.target.value,
      confirmation: false,
    });
  }

  async submit(e) {
    e.preventDefault();
    await api.createQuote(this.state.content, this.state.authorId);
    this.setState({...this.state, confirmation: true});
  }
}