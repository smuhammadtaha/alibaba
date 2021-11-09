import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';


const Root = styled('div')(({ theme }) => ({
  width: '75%',
  ...theme.typography.h5,
}));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

let Content =() => {


  return (
    <Box sx={{ flexGrow: 1,marginLeft:25,marginRight:18 }} m={7}>

    <Stack direction="row">
      <Item sx={{boxShadow:'none'}}>
      <Root>
      <Divider sx={{fontWeight:'bold',mb:4}}  textAlign="left">SECURITY</Divider>
    </Root>
      </Item>
    </Stack>
    <Stack direction="row" spacing={2}>
        <Item sx={{boxShadow:'none'}}>
        <Card sx={{ display: 'flex',boxShadow:'none' }}>
      <CardMedia
        component="img"
        sx={{ width: 360,height:320,marginLeft:1 }}
        image="https://img.alicdn.com/tfs/TB1J99aCkvoK1RjSZFDXXXY3pXa-300-320.jpg"
        alt="Live from space album cover"
      />
      
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:24,height:30,ml:1}} src="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png" />
             <Typography component="div" sx={{paddingTop:0.3,fontWeight:'bold'}} variant="subtitle1">
            Premium OEM Factories
          </Typography>

        </Stack>
        <Typography variant="subtitle2" sx={{mt:1,width:250}} textAlign='left' color="text.secondary" component="div">
        Well-made and from high capacity factories
          </Typography>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:90,height:90,ml:20}} src="https://s.alicdn.com/@sc04/kf/H3bf8c800a8d74d24bd7e59c2aa940495H.jpg_220x220.jpg" />

        </Stack>
        <br/>
        <Stack direction="row" spacing={0} sx={{marginTop:-3}}>
             <Typography component="div" sx={{fontWeight:'bold'}} variant="subtitle1">
            Delivered Duty Paid
          </Typography>

        </Stack>
        <Typography variant="subtitle2" sx={{width:250}} textAlign='left' color="text.secondary" component="div">
        Include shipping and duty fees
          </Typography>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:60,height:60,ml:20}} src="https://s.alicdn.com/@sc04/kf/H4735f3c5cfcc4740aa69c47427ee8098B.jpg_220x220.jpg" />

        </Stack>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Stack direction="row" spacing={1}>
             <Typography component="div" sx={{paddingTop:0.3,fontWeight:'bold'}} variant="subtitle1">
            Top Sales
          </Typography>

        </Stack>
        <Typography variant="subtitle2" sx={{mt:1,width:250}} textAlign='left' color="text.secondary" component="div">
        Other Security & Protection Products
          </Typography>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:90,height:90,mt:3,ml:20}} src="https://s.alicdn.com/@sc04/kf/H181ecaf8489248df9f05f655bffca6afZ.jpg_220x220.jpg" />

        </Stack>
        <br/>
        <Stack direction="row" spacing={1}sx={{marginTop:-3}}>
             <Typography component="div" sx={{fontWeight:'bold'}} variant="subtitle1">
            Safes
          </Typography>

        </Stack>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:90,height:90,ml:20}} src="https://s.alicdn.com/@sc04/kf/Hdb77caafac2640f194fa1677c925428cS.jpg_220x220.jpg" />

        </Stack>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Stack direction="row" spacing={1}>
             <Typography component="div" sx={{paddingTop:0.3,fontWeight:'bold'}} variant="subtitle1">
             Surveillance Products
          </Typography>

        </Stack>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:90,height:90,mt:7,ml:20}} src="https://s.alicdn.com/@sc04/kf/UTB8eIovDwQydeJk43PUq6AyQpXaq.jpg_220x220.jpg" />

        </Stack>
        <br/>
        <Stack direction="row" spacing={1}sx={{marginTop:-3}}>
             <Typography component="div" sx={{fontWeight:'bold'}} variant="subtitle1">
            Alarms
          </Typography>

        </Stack>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:90,height:90,ml:20}} src="https://s.alicdn.com/@sc04/kf/HLB1M__7h13tHKVjSZSgq6x4QFXaq.jpg_220x220.jpg" />

        </Stack>
        </CardContent>
      </Box>
      


    </Card>
    
        </Item>

      </Stack>
      <Stack direction="row">
      <Item sx={{boxShadow:'none'}}>
      <Root>
      <Divider sx={{fontWeight:'bold',mb:4}}  textAlign="left">POWER TRANSMISSION</Divider>
    </Root>
      </Item>
    </Stack>
    <Stack direction="row" spacing={2}>
        <Item sx={{boxShadow:'none'}}>
        <Card sx={{ display: 'flex',boxShadow:'none' }}>
      <CardMedia
        component="img"
        sx={{ width: 360,height:320,marginLeft:1 }}
        image="https://img.alicdn.com/imgextra/i1/O1CN01cQVjm81cBttiOsIpT_!!6000000003563-0-tps-300-320.jpg"
        alt="Live from space album cover"
      />
      
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:24,height:30,ml:1}} src="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png" />
             <Typography component="div" sx={{paddingTop:0.3,fontWeight:'bold'}} variant="subtitle1">
            Premium OEM Factories
          </Typography>

        </Stack>
        <Typography variant="subtitle2" sx={{mt:1,width:250}} textAlign='left' color="text.secondary" component="div">
        Well-made and from high capacity factories
          </Typography>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:90,height:90,ml:20}} src="https://s.alicdn.com/@sc04/kf/H3bf8c800a8d74d24bd7e59c2aa940495H.jpg_220x220.jpg" />

        </Stack>
        <br/>
        <Stack direction="row" spacing={0} sx={{marginTop:-3}}>
             <Typography component="div" sx={{fontWeight:'bold'}} variant="subtitle1">
            Delivered Duty Paid
          </Typography>

        </Stack>
        <Typography variant="subtitle2" sx={{width:250}} textAlign='left' color="text.secondary" component="div">
        Include shipping and duty fees
          </Typography>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:60,height:60,ml:20}} src="https://s.alicdn.com/@sc04/kf/H4735f3c5cfcc4740aa69c47427ee8098B.jpg_220x220.jpg" />

        </Stack>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Stack direction="row" spacing={1}>
             <Typography component="div" sx={{paddingTop:0.3,fontWeight:'bold'}} variant="subtitle1">
            Top Sales
          </Typography>

        </Stack>
        <Typography variant="subtitle2" sx={{mt:1,width:250}} textAlign='left' color="text.secondary" component="div">
        Other Security & Protection Products
          </Typography>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:90,height:90,mt:3,ml:20}} src="https://s.alicdn.com/@sc04/kf/H181ecaf8489248df9f05f655bffca6afZ.jpg_220x220.jpg" />

        </Stack>
        <br/>
        <Stack direction="row" spacing={1}sx={{marginTop:-3}}>
             <Typography component="div" sx={{fontWeight:'bold'}} variant="subtitle1">
            Safes
          </Typography>

        </Stack>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:90,height:90,ml:20}} src="https://s.alicdn.com/@sc04/kf/Hdb77caafac2640f194fa1677c925428cS.jpg_220x220.jpg" />

        </Stack>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Stack direction="row" spacing={1}>
             <Typography component="div" sx={{paddingTop:0.3,fontWeight:'bold'}} variant="subtitle1">
             Surveillance Products
          </Typography>

        </Stack>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:90,height:90,mt:7,ml:20}} src="https://s.alicdn.com/@sc04/kf/UTB8eIovDwQydeJk43PUq6AyQpXaq.jpg_220x220.jpg" />

        </Stack>
        <br/>
        <Stack direction="row" spacing={1}sx={{marginTop:-3}}>
             <Typography component="div" sx={{fontWeight:'bold'}} variant="subtitle1">
            Alarms
          </Typography>

        </Stack>
          <Stack direction="row" spacing={1}>
             <Avatar alt="Remy Sharp" sx={{width:90,height:90,ml:20}} src="https://s.alicdn.com/@sc04/kf/HLB1M__7h13tHKVjSZSgq6x4QFXaq.jpg_220x220.jpg" />

        </Stack>
        </CardContent>
      </Box>
      


    </Card>
    
        </Item>

      </Stack>
    </Box>
  );
}

export default Content
