import { Grid } from "@mui/material"
import Quote from "./Quote"

export default function searchResults(props) {
  return (
    <div>
      <div>{
        props.search === "" ? 'Tous les résultats' : `Résultats pour "${props.search}"`
      }
      </div>
      <Grid container spacing={2}>
        {
          props.results.map(quote => {
            return (
              <Grid item xs={4} key={quote.id}>
                <Quote quote={quote} />
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}