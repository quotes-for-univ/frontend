import { Container, Grid, TextField } from "@mui/material";
import React from "react";
import AuthorsSelector from "../components/AuthorsSelector";
import { api } from "../lib/Api"
import { Navigate } from "react-router-dom"

export default class CreateQuote extends React.Component {
  state = {content: "", authorId: 1, authors: [], confirmation: false};

  render() {
    return (
      <div>
        {this.state.confirmation && <Navigate replace to="/quotes" />}
        <form onSubmit={e => this.submit(e)}>
          <Container>
            <div>
              <TextField  value={this.state.content} onChange={e => this.updateContent(e)} variant="outlined" />
            </div>
            <div>
              <AuthorsSelector value={this.state.authorId} onChange={e => this.updateAuthor(e)} />
            </div>
            <div>
              <button type="submit">Créer</button>
            </div>
          </Container>
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