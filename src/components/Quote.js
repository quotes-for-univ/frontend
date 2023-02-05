import { Card, CardContent, Typography } from "@mui/material"

export default function Quote(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2">{ props.quote.content }</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">{ props.quote.author.name }</Typography>
      </CardContent>
    </Card>
  )
}