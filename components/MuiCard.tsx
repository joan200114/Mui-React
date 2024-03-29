import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia 
          component="img"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
          alt="React image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a JavaScript-based UI development library. 
            Although React is a library rather than a language, 
            it is widely used in web development.  
            The library first appeared in May 2013 and is now 
            one of the most commonly used frontend libraries 
            for web development.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
