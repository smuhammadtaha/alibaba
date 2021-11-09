import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Imgslider from './img-slider';
import Img from '../Capture.png'
import AssignmentIcon from '@mui/icons-material/Assignment';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,

}));

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "#FF4F00",
    color:"#fff",
    padding: theme.spacing(1),
    fontSize:10,
    fontWeight:'bold'
  }));

let Slider = () => {
  return (
    <Box sx={{ flexGrow: 1,marginLeft:16,marginRight:18 }} m={7}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
          <Typography variant="subtitle1" sx={{fontWeight:'bold',color:'#333333',marginLeft:2}} gutterBottom component="div">
        MY MARKETS
      </Typography>
      <Divider />
      <Stack direction="row" sx={{marginTop:3}} spacing={2}>
      <Avatar alt="Watches" src="https://sc02.alicdn.com/kf/HTB1IfiSUa6qK1RjSZFm7600PFXae.png_50x50xz.jpg" />
      <Typography variant="subtitle1" sx={{paddingTop:1}} gutterBottom component="div">
        Timepieces, Jewelry, Eyewear
      </Typography>
    </Stack>
    <Stack direction="row" sx={{marginTop:3}} spacing={2}>
      <Avatar alt="Watches" src="https://sc02.alicdn.com/kf/HTB1JdWLUhTpK1RjSZR0762EwXXa6.png_50x50xz.jpg" />
      <Typography variant="subtitle1" sx={{paddingTop:1}} gutterBottom component="div">
        Vehicles & Accessories
      </Typography>
    </Stack>
    <Stack direction="row" sx={{marginTop:3}} spacing={2}>
      <Avatar alt="Watches" src="https://sc01.alicdn.com/kf/H0e9c53982dc7407f9abc86bb5b2145bf4.png_50x50xz.jpg" />
      <Typography variant="subtitle1" sx={{paddingTop:1}} gutterBottom component="div">
        All Categories
      </Typography>
    </Stack>
    <Stack direction="row" sx={{marginTop:3}} spacing={2}>
      <Avatar alt="Watches" src="https://sc02.alicdn.com/kf/HTB1jH1RUkvoK1RjSZFN763xMVXal.png_50x50xz.jpg" />
      <Typography variant="subtitle1" sx={{paddingTop:1}} gutterBottom component="div">
        Lugage,Bags & Cases
      </Typography>
    </Stack>
    <Stack direction="row" sx={{marginTop:3}} spacing={2}>
      <Avatar alt="Watches" src="https://sc02.alicdn.com/kf/HTB1RxCkXHys3KVjSZFn760FzpXaP.png_50x50xz.jpg" />
      <Typography variant="subtitle1" sx={{paddingTop:1}} gutterBottom component="div">
        Home & Garden
      </Typography>
    </Stack>
    <Stack direction="row" sx={{marginTop:3}} spacing={2}>
      <Avatar alt="Watches" src="https://sc02.alicdn.com/kf/HTB1AkuTUgHqK1RjSZJn762NLpXa2.png_50x50xz.jpg" />
      <Typography variant="subtitle1" sx={{paddingTop:1}} gutterBottom component="div">
        Sports & Entertainment
      </Typography>
    </Stack>
    <Stack direction="row" sx={{marginTop:3}} spacing={2}>
      <Avatar alt="Watches" src="https://sc02.alicdn.com/kf/HTB1X82.bfc3T1VjSZLe762ZsVXa1.png_50x50xz.jpg" />
      <Typography variant="subtitle1" sx={{paddingTop:1}} gutterBottom component="div">
        Furniture
      </Typography>
    </Stack>
    <Stack direction="row" sx={{marginTop:3}} spacing={2}>
      <Avatar alt="Watches" src="https://img.alicdn.com/tfs/TB1SFxHuVY7gK0jSZKzXXaikpXa-36-36.png" />
      <Typography variant="subtitle1" sx={{paddingTop:1,paddingBottom:5}} gutterBottom component="div">
        All Categories
      </Typography>
    </Stack>

          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item><Imgslider/></Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <img src={Img}/>
            <Div>{"Home & Garden 2021 Online Trade"}</Div>
            <Stack direction="row" spacing={2} sx={{paddingTop:2}}>
      <Typography variant="body2" sx={{fontWeight:'bold'}} gutterBottom>
      Home & Garden 2021 Online Trade Show
      </Typography>
      <Avatar variant="square" src="https://i.alicdn.com/img/imgextra/i3/O1CN01rHG3DG1wp66sdIKKe_!!6000000006356-2-tps-350-350.png_100x100.jpg">
      </Avatar>
    </Stack>
    <Stack direction="row" spacing={2} sx={{paddingTop:2}}>
      <Typography variant="body2" sx={{fontWeight:'bold'}} gutterBottom>
      Digital Booths
      </Typography>
      <Avatar sx={{paddingLeft:10}} variant="square" src="https://i.alicdn.com/img/imgextra/i3/O1CN01i1pN3924J3K92CAMq_!!6000000007369-2-tps-350-350.png_100x100.jpg">
      </Avatar>
    </Stack>
    <Stack direction="row" spacing={2} sx={{paddingTop:2}}>
      <Typography variant="body2" sx={{fontWeight:'bold'}} gutterBottom>
      Top Ranking Product
      </Typography>
      <Avatar sx={{paddingLeft:4}} variant="square" src="https://i.alicdn.com/img/imgextra/i2/O1CN01IlZLHL1h7O4Zn6rIX_!!6000000004230-2-tps-350-350.png_100x100.jpg">
      </Avatar>
    </Stack>
    <Stack direction="row" spacing={2} sx={{paddingTop:2}}>
      <Typography variant="body2" sx={{fontWeight:'bold'}} gutterBottom>
      Home & Garden 2021 Online Trade Show
      </Typography>
      <Avatar variant="square" src="https://i.alicdn.com/img/imgextra/i3/O1CN01rHG3DG1wp66sdIKKe_!!6000000006356-2-tps-350-350.png_100x100.jpg">
      </Avatar>
    </Stack>
    <Stack direction="row" spacing={2} sx={{paddingTop:2}}>
      <Typography variant="body2" sx={{fontWeight:'bold'}} gutterBottom>
      Digital Booths
      </Typography>
      <Avatar sx={{paddingLeft:10}} variant="square" src="https://i.alicdn.com/img/imgextra/i3/O1CN01i1pN3924J3K92CAMq_!!6000000007369-2-tps-350-350.png_100x100.jpg">
      </Avatar>
    </Stack>
    <Stack direction="row" spacing={2} sx={{paddingTop:2}}>
      <Typography variant="body2" sx={{fontWeight:'bold'}} gutterBottom>
      Top Ranking Product
      </Typography>
      <Avatar sx={{paddingLeft:4}} variant="square" src="https://i.alicdn.com/img/imgextra/i2/O1CN01IlZLHL1h7O4Zn6rIX_!!6000000004230-2-tps-350-350.png_100x100.jpg">
      </Avatar>
    </Stack>
    <Stack direction="row" spacing={2} sx={{paddingTop:2}}>
      <Typography variant="body2" sx={{fontWeight:'bold'}} gutterBottom>
      Top Ranking Product
      </Typography>
      <Avatar sx={{paddingLeft:4}} variant="square" src="https://i.alicdn.com/img/imgextra/i2/O1CN01IlZLHL1h7O4Zn6rIX_!!6000000004230-2-tps-350-350.png_100x100.jpg">
      </Avatar>
    </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Slider;
