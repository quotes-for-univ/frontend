import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@mui/material";
import Container from "@mui/material/Container"
import React from "react";
import { api } from "../lib/Api"

export default class AuthorsList extends React.Component {

  state = {
    authors: []
  };

  async componentDidMount() {
    const authors = await api.getAuthors();
    this.setState({ authors });
  }
  
  render() {
    return (
      <Container>
        <h1>Authors</h1>
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableCell>UUID</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Nombre de citations</TableCell>
            </TableHead>
            <TableBody>
              {
                this.state.authors.map(author => {
                  return (
                    <TableRow>
                      <TableCell>{ author.id }</TableCell>
                      <TableCell>{ author.name }</TableCell>
                      <TableCell>{ author.quotes.length }</TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}