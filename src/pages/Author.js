import React from "react";
import { api } from '../lib/Api';
import withRouter from "../lib/withRouter"

class Author extends React.Component {

  state = {author: {name: "", id: 0, quotes: []}}
  
  async componentDidMount() {
    const author = await api.getAuthor(this.props.params.id);
    this.setState({author})
  }

  render() {
    return (
      <div>{this.state.author.name}</div>
    )
  }
}

export default withRouter(Author);