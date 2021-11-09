import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import InputUnstyled, { InputUnstyledProps } from '@mui/core/InputUnstyled';
import Divider from '@mui/material/Divider';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'none'
}));

const StyledInputElement = styled('input')`
  width: 400px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 6px 10px;
  margin-left: 20px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #fff;
    border-color: #fff;
  }

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`;
const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1,boxShadow: 0 }} m={2}>
      <Grid container spacing={2}  >
        <Grid item xs={2}>
          <Item >
              <img src="https://www.logolynx.com/images/logolynx/ae/aeb2860b9fe61bb42faae3f85d9c389f.png" width="200" height="45"/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <div >
          <Button variant="outlined" sx={{color:'#000',border:'2px solid',borderColor:'#FF6A00 transparent #FF6A00 #FF6A00',":hover":{borderColor:'#FF6A00 transparent #FF6A00 #FF6A00 '}}} {...bindTrigger(popupState)}>
            Products 
            <Divider sx={{ height: 28,ml:1 }} orientation="vertical" />

            <CustomInput  aria-label="Demo input" placeholder="Type something..." />
            </Button>
            <Button variant="contained" sx={{backgroundColor:'#FF6A00',height:51,borderRadius:'0% 30% 30% 0%',":hover":{backgroundColor:'#FF6A00'}}}>Search</Button>


          </div>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item>
            
            <PersonOutlineOutlinedIcon fontSize='large'/>SignUp
            
            
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item> 
            <SmsOutlinedIcon fontSize='large' />   Messages
            </Item>
        </Grid>
        <Grid item xs={1}>
          <Item>
              <LocalAtmOutlinedIcon fontSize='large'/>  Orders
              </Item>
        </Grid>
        <Grid item xs={1}>
          <Item>
              <ShoppingCartOutlinedIcon fontSize='large'/>  Orders
              </Item>
        </Grid>

      </Grid>
    </Box>
  );
}