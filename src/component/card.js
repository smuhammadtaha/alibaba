import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow:'none '
}));

let Carddesign = () => {
  return (
    <Box sx={{ flexGrow: 1,marginLeft:16,marginRight:18  }} m={7}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>
              
          <Stack direction="row" sx={{marginBottom:3.4,marginLeft:5}} spacing={2}>
      <Avatar alt="Watches" src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" sx={{height:20,width:20,padding:1}} />
      <Typography  variant="subtitle1" sx={{paddingTop:1,fontWeight:'bold'}} gutterBottom component="div">
        New Arrivals
      </Typography>
    </Stack>
      <Card sx={{ maxWidth: 155,marginLeft:8,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/H023a5e73f34a4c0ebd86b9a4aaf163d7X.jpg_120x120.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary">
          $16.00  <br />
          Trending Now
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
              
      <Card sx={{ maxWidth: 155,marginTop:8,marginLeft:8,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/Hecda7cc2db504df8b9ef67d163f9ff589.png_120x120.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary">
          $4.84  <br />
          Trending Now
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>
        <Grid item xs={1.6}>
          <Item>
              

      <Card sx={{ maxWidth: 155,marginLeft:2,marginTop:8,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/H67c01bc958064c5fb4e2d44735ceebebK.jpg_220x220.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary" sx={{marginLeft:2}}>
             $4.59  <br />
          Trending Now
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>

        <Grid item xs={2.6} >
          <Item>
              
          <Stack direction="row" sx={{marginBottom:3.5,marginLeft:9}} spacing={2}>
      <Avatar alt="Watches" src="https://img.alicdn.com/tfs/TB1VsukzuH2gK0jSZJnXXaT1FXa-38-34.png" sx={{height:20,width:20,padding:1}} />
      <Typography  variant="subtitle1" sx={{paddingTop:1,fontWeight:'bold'}} gutterBottom component="div">
        Top-ranked Products
      </Typography>
    </Stack>
      <Card sx={{ maxWidth: 155,marginLeft:8,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg"
        alt="Paella dish"
        
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary">
          $42.57  <br />
          1 Piece
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>
        <Grid item xs={1.7}>
          <Item>
              
      <Card sx={{ maxWidth: 155,marginTop:8,marginLeft:2,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/H524face07b6f4e77866abab13e408ef4M.jpg_120x120xz.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary">
          $2.20  <br />
          1 Piece
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>
        
        <Grid item xs={1.7}>
          <Item>
              

      <Card sx={{ maxWidth: 155,marginLeft:2,marginTop:8,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/H6553af387ea34736bbbb0f3686f0e29cI.jpg_120x120xz.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary">
          $3.82  <br />
          2 Units
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginTop:4}}>
        <Grid item xs={2}>
          <Item>
              
          <Stack direction="row" sx={{marginBottom:3.4,marginLeft:5}} spacing={2}>
      <Avatar alt="Watches" src="https://img.alicdn.com/imgextra/i3/O1CN01NRSdOO1N2zv6KFoVV_!!6000000001513-0-tps-42-48.jpg" sx={{height:20,width:20,padding:1}} />
      <Typography  variant="subtitle1" sx={{paddingTop:1,fontWeight:'bold'}} gutterBottom component="div">
        Dropshipping
      </Typography>
    </Stack>
      <Card sx={{ maxWidth: 155,marginLeft:8,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/Hd261c5aaabe54326961885f80f564951T.jpg_120x120xz.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary">
          $4.50  <br />
          1 Piece
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
              
      <Card sx={{ maxWidth: 155,marginTop:8,marginLeft:8,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/He164d6747f4c453ab6e41e5547424e31O.jpg_120x120xz.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary">
          $0.80  <br />
          1 Piece
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>
        <Grid item xs={1.6}>
          <Item>
              

      <Card sx={{ maxWidth: 155,marginLeft:2,marginTop:8,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/Hdfb24cb24de84bd89193ab29fd26aa9aJ.jpg_120x120xz.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary" sx={{marginLeft:2}}>
             $0.04  <br />
          1 Piece
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>

        <Grid item xs={2.6} >
          <Item>
              
          <Stack direction="row" sx={{marginBottom:3.5,marginLeft:9}} spacing={2}>
      <Avatar alt="Watches" src="https://img.alicdn.com/imgextra/i4/O1CN01caWYqW1cVasvCBKJ2_!!6000000003606-0-tps-46-32.jpg" sx={{height:20,width:20,padding:1}} />
      <Typography  variant="subtitle1" sx={{paddingTop:1,fontWeight:'bold'}} gutterBottom component="div">
        True View
      </Typography>
    </Stack>
      <Card sx={{ maxWidth: 155,marginLeft:10,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/H61b627f94b714b7c9abc1676db2faca8L.jpg_120x120xz.jpg"
        alt="Paella dish"
        
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary">
          $42.57  <br />
          1 Piece
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>
        <Grid item xs={1.7}>
          <Item>
              
      <Card sx={{ maxWidth: 155,marginTop:8,marginLeft:2,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/Hde0f4a4b15be415cadb8e9edbdb57e15V.jpg_120x120xz.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary">
          $2.20  <br />
          1 Piece
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>
        
        <Grid item xs={1.7}>
          <Item>
              

      <Card sx={{ maxWidth: 155,marginLeft:2,marginTop:8,boxShadow:'none' }}>

      <CardMedia
        component="img"
        height="124"
        image="https://s.alicdn.com/@sc04/kf/Hd4b64cb7403b449886eff7123b2303617.jpg_120x120xz.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" align="center" color="text.secondary">
          $3.82  <br />
          2 Units
        </Typography>
      </CardContent>
    </Card>
    
          </Item>
        </Grid>
        </Grid>
    </Box>
  );
}
export default Carddesign