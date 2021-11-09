import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../App.css'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


let Maincard = () => {
  return (
    <Box sx={{ flexGrow: 1,marginLeft:25,marginRight:18 }} m={7}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Stack direction="row" spacing={10}>
        <Item>
        <Card sx={{ display: 'flex',boxShadow:'none' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography textAlign='left' sx={{ml:0.8}} component="div" variant="h5">
          Customized products
          </Typography>
          <Typography variant="subtitle1" sx={{width:300,mt:1}} color="text.secondary" component="div">
          Partner with one of 60,000 experienced manufacturers with design & production
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151,marginLeft:13 }}
        image="https://img.alicdn.com/tfs/TB1hg9VeET1gK0jSZFrXXcNCXXa-230-113.png"
        alt="Live from space album cover"
      />

    </Card>
    <Stack  direction="row" spacing={1}>
        <Item sx={{boxShadow:'none'}}>
        <Card sx={{boxShadow:'none',backgroundColor:'#F7F7F7'}}>
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography textAlign='center' sx={{fontWeight:'bold',fontSize:16}} component="div" variant="h6">
          Premium OEM Factories
          </Typography>
        </CardContent>
      </Box>
      <Stack direction="row" spacing={2}>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70,boxShadow:'none'}}
        image="https://s.alicdn.com/@sc04/kf/H32a7e99f690e4034b83826aeb1af1814C.jpg_100x100xz.jpg"
      />
        </Item>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70,boxShadow:'none'}}
        image="https://s.alicdn.com/@sc04/kf/H1796df7bb3a447d1a91193a490c51662Z.jpg_100x100xz.jpg"
      />
        </Item>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70}}
        image="https://s.alicdn.com/@sc04/kf/H81a5282f0b2f434bb6d5f2c41cf9f9b9U.jpg_100x100xz.jpg"
      />
        </Item>
      </Stack>
    </Card>
        </Item>
        <Item sx={{boxShadow:'none'}}>
        <Card sx={{boxShadow:'none',backgroundColor:'#F7F7F7'}}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography textAlign='center' sx={{fontWeight:'bold',fontSize:16}} component="div" variant="h6">
          Top-ranking suppliers
          </Typography>
        </CardContent>
      </Box>
      <Stack direction="row" spacing={2}>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70,boxShadow:'none'}}
        image="https://s.alicdn.com/@sc04/kf/H32a7e99f690e4034b83826aeb1af1814C.jpg_100x100xz.jpg"
      />
        </Item>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70,boxShadow:'none'}}
        image="https://s.alicdn.com/@sc04/kf/H1796df7bb3a447d1a91193a490c51662Z.jpg_100x100xz.jpg"
      />
        </Item>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70}}
        image="https://s.alicdn.com/@sc04/kf/H81a5282f0b2f434bb6d5f2c41cf9f9b9U.jpg_100x100xz.jpg"
      />
        </Item>
      </Stack>
    </Card>
        </Item>
      </Stack>

   
        </Item>
        <Item>
        <Card sx={{ display: 'flex',boxShadow:'none' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography textAlign='left' sx={{ml:0.8}} component="div" variant="h5">
          Ready-to-ship products
          </Typography>
          <Typography variant="subtitle1" sx={{width:300,mt:1}} color="text.secondary" component="div">
          Source from 15 million products that are ready to ship
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151,marginLeft:13 }}
        image="https://img.alicdn.com/tfs/TB1QcSVeET1gK0jSZFhXXaAtVXa-204-104.png"
        alt="Live from space album cover"
      />

    </Card>
    <Stack  direction="row" spacing={1}>
        <Item sx={{boxShadow:'none'}}>
        <Card sx={{boxShadow:'none',backgroundColor:'#F7F7F7'}}>
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography textAlign='center' sx={{fontWeight:'bold',fontSize:16}} component="div" variant="h6">
          Premium OEM Factories
          </Typography>
        </CardContent>
      </Box>
      <Stack direction="row" spacing={2}>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70,boxShadow:'none'}}
        image="https://s.alicdn.com/@sc04/kf/H32a7e99f690e4034b83826aeb1af1814C.jpg_100x100xz.jpg"
      />
        </Item>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70,boxShadow:'none'}}
        image="https://s.alicdn.com/@sc04/kf/H1796df7bb3a447d1a91193a490c51662Z.jpg_100x100xz.jpg"
      />
        </Item>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70}}
        image="https://s.alicdn.com/@sc04/kf/H81a5282f0b2f434bb6d5f2c41cf9f9b9U.jpg_100x100xz.jpg"
      />
        </Item>
      </Stack>
    </Card>
        </Item>
        <Item sx={{boxShadow:'none'}}>
        <Card sx={{boxShadow:'none',backgroundColor:'#F7F7F7'}}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography textAlign='center' sx={{fontWeight:'bold',fontSize:16}} component="div" variant="h6">
          Top-ranking suppliers
          </Typography>
        </CardContent>
      </Box>
      <Stack direction="row" spacing={2}>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70,boxShadow:'none'}}
        image="https://s.alicdn.com/@sc04/kf/H32a7e99f690e4034b83826aeb1af1814C.jpg_100x100xz.jpg"
      />
        </Item>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70,boxShadow:'none'}}
        image="https://s.alicdn.com/@sc04/kf/H1796df7bb3a447d1a91193a490c51662Z.jpg_100x100xz.jpg"
      />
        </Item>
        <Item sx={{background:'transparent',boxShadow:'none'}}>
        <CardMedia
        component="img"
        sx={{ width: 70}}
        image="https://s.alicdn.com/@sc04/kf/H81a5282f0b2f434bb6d5f2c41cf9f9b9U.jpg_100x100xz.jpg"
      />
        </Item>
      </Stack>
    </Card>
        </Item>
      </Stack>

   
        </Item>
      </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Maincard
