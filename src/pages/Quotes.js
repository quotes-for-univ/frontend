import { Container, Grid, TextField, Box } from "@mui/material"
import React from "react"
import Quote from "../components/Quote";
import { api } from "../lib/Api"

export default class Quotes extends React.Component {

  state = {quotes: [], results: []};

  async componentDidMount() {
    const quotes = await api.getQuotes();
    this.setState({ quotes, results: quotes });
  }

  search(event) {
    this.setState({
      quotes: this.state.quotes,
      results: this.state.quotes.filter(quote => {
        return quote.content.includes(event.target.value)
      }),
    });
  }

  render() {
    return (
      <Container>
        <h1>Citations</h1>
        <Box sx={{marginBottom: "16px"}}>
          <TextField id="search" label="Rechercher dans les citations" variant="outlined" onChange={(e) => this.search(e)} />
        </Box>
        <Grid container spacing={2}>
          {
            this.state.results.map(quote => {
              return (
                <Grid item xs={4} key={quote.id}>
                  <Quote quote={quote} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    );
  }
}