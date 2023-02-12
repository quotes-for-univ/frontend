import { Container, Box } from "@mui/material"
import React from "react"
import { api } from "../lib/Api"
import SearchField from "../components/SearchField";
import SearchResults from "../components/SearchResults";
import { debounce } from "lodash";

export default class Quotes extends React.Component {

  state = {quotes: [], results: [], search: ""};

  async componentDidMount() {
    const quotes = await api.getQuotes();
    this.setState({ quotes, results: quotes });
  }

  search(event) {
    const search = event.target.value;
    let results = this.state.quotes;
    if (search.length > 1) {
      results = this.state.quotes.filter(quote => {
        return quote.content.includes(search)
      })
    }
    this.setState({
      ...this.state, results, search,
    });
  }

  render() {
    return (
      <Container>
        <h1>Citations</h1>
        <Box sx={{marginBottom: "16px"}}>
          <SearchField value={this.state.search} onChange={(e) => this.search(e)} />
        </Box>
        <SearchResults results={this.state.results} search={this.state.search} />
      </Container>
    );
  }
}