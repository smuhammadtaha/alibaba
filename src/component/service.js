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
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const currencies = [
    {
      value: 'bag',
      label: 'Bag/Bags',
    },
    {
      value: 'gram',
      label: 'Gram/Grams',
    },
  ];



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Root = styled('div')(({ theme }) => ({
    width: '75%',
    ...theme.typography.h5,
  }));


let Service = () => {
    const [currency, setCurrency] = useState('bag');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrency(event.target.value);
    };


  return (
    <Box sx={{ flexGrow: 1,marginLeft:25,marginRight:18 }} m={7}>
      <Stack direction="row" spacing={2}>
        <Item sx={{boxShadow:'none'}}>
        <Root>
      <Divider sx={{fontWeight:'bold',mb:4}}  textAlign="left">REQUEST FOR QUOTATION</Divider>
        </Root>
        </Item>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Item sx={{boxShadow:'none'}}>
        <Card sx={{ display: 'flex',boxShadow:'none' }}>
      <CardMedia
        component="img"
        sx={{ width: 470,height:320,marginLeft:1 }}
        image="https://img.alicdn.com/tfs/TB1RrnvyuT2gK0jSZFvXXXnFXXa-800-375.png"
        alt="Live from space album cover"
      />
      </Card>
        </Item>
        <Item sx={{width:'55%'}}>
        <Typography sx={{m:4}} variant="h4" color='#333' fontWeight='bold' textAlign='left' gutterBottom component="div">
        One Request, Multiple Quotes
      </Typography>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1,mr:30, width: '500px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" size='medium' label="What are you looking for" variant="outlined" />
      
      </Box>
      <Box
      component="form"
      sx={{
        '& > :not(style)': {  width: '200px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-number"
          label="Number"
          sx={{mt:2,mr:67}}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-select-currency"
          sx={{mt:-7,mr:10}}
          select
          label="Select"
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>
        <Button sx={{mr:63,backgroundColor:'#FD6500'}} variant="contained">Request For Quotation</Button>

        </Item>
      </Stack>

    </Box>
  );
}
export default Service
