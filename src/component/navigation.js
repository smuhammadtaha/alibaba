import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ListIcon from '@mui/icons-material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../App.css';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontsize:'small',
  
    boxShadow:'none'
  
}));

let Navigation = () => {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);




    const handleClick = () => {
      setOpen(!open);
    };
    const handleClick1 = () => {
        setOpen1(!open1);

    }
    const handleClick2 = () => {
        setOpen2(!open2);

    }
    const handleClick3 = () => {
        setOpen3(!open3);
      };
      const handleClick4 = () => {
        setOpen4(!open4);
      };
      const handleClick5 = () => {
        setOpen5(!open5);
      };


  return (
    <Box sx={{ flexGrow: 1,boxShadow: 1  }}   >
      <Grid container spacing={2} >
        <Grid item xs={1.8} md={1.8} >
          <Item >

          <ListItemButton onClick={handleClick} >
        <ListItemIcon  sx={{":hover":{color: "#FF852F"}}}>
          <ListIcon  sx={{fontSize:18,}}/>
        </ListItemIcon>
        <ListItemText secondary="Categories" sx={{marginRight:10,":hover":{color:"#FF852F"}}}/>
        
        {open ? <ExpandLess /> : <ExpandMore />}

      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            
            <ListItemText primary="Machinery / Vehicals" sx={{fontSize:10}}/>
            <ListItemIcon  >
              <ChevronRightIcon sx={{pl:4,fontSize:18}} />
            </ListItemIcon>
            
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            
            <ListItemText primary="Consumer Electronics" sx={{fontSize:10}}/>
            <ListItemIcon  >
              <ChevronRightIcon sx={{pl:4,fontSize:18}} />
            </ListItemIcon>
            
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            
            <ListItemText primary="Home Appliance" sx={{fontSize:10}}/>
            <ListItemIcon  >
              <ChevronRightIcon sx={{pl:4,fontSize:18}} />
            </ListItemIcon>
            
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            
            <ListItemText primary="Home / Furniture" sx={{fontSize:10}}/>
            <ListItemIcon  >
              <ChevronRightIcon sx={{pl:4,fontSize:18}} />
            </ListItemIcon>
            
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            
            <ListItemText primary="Agricuture / Food" sx={{fontSize:10}}/>
            <ListItemIcon  >
              <ChevronRightIcon sx={{pl:4,fontSize:18}} />
            </ListItemIcon>
            
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            
            <ListItemText primary="Packaging & Printing" sx={{fontSize:10}}/>
            <ListItemIcon  >
              <ChevronRightIcon sx={{pl:4,fontSize:18}} />
            </ListItemIcon>
            
          </ListItemButton>
        </List>
      </Collapse>
      
          </Item>
          
        </Grid>
        <Divider sx={{ height: 28, mt: 4 }} orientation="vertical" />

        <Grid item xs={0.9} sx={{mt:0}} >
          <Item >
          <Typography variant="caption" display="block" gutterBottom sx={{fontSize:13,marginTop:1.5,":hover":{color: "#FF852F"}}}>
          Ready to Ship
      </Typography>
          </Item>
        </Grid>
        <Grid item xs={0.9} sx={{mt:0}} >
          <Item >
          <Typography variant="caption" display="block" gutterBottom sx={{fontSize:13,marginTop:1.5,":hover":{color: "#FF852F"}}}>
          Personal Pro..
      </Typography>
          </Item>
        </Grid>
        <Grid item xs={0.8} sx={{mt:0}} >
          <Item >
          <Typography variant="caption" display="block" gutterBottom sx={{fontSize:13,marginTop:1.5,":hover":{color: "#FF852F"}}}>
             Trade Shows
      </Typography>
          </Item>
        </Grid>
        <Grid item xs={1.3} md={1.1} sx={{mt:0,}} >
          <Item>
          <ListItemButton onClick={handleClick1} >
          <Typography variant="caption" display="block" gutterBottom sx={{fontSize:13,marginTop:0.6,":hover":{color: "#FF852F"}}}>
             BuyerCentral
      </Typography>
      {open1 ? <ExpandLess sx={{fontSize:20,paddingLeft:1,":hover":{color: "#FF852F"}}} /> : <ExpandMore sx={{fontSize:20,paddingLeft:1,":hover":{color: "#FF852F"}}} />}

            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <LightbulbOutlinedIcon sx={{color:"#FF852F"}} />
            <ListItemText secondary="Blog" sx={{pl:1}}/>

            
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <MonetizationOnOutlinedIcon sx={{color:"#FF852F"}} />
            <ListItemText secondary="Trade " sx={{pl:1}}/>

            
          </ListItemButton>
          
        </List>
      </Collapse>
          </Item>
        </Grid>
        <Grid item xs={1.3} md={1.3} sx={{mt:0,}} >
          <Item>
          <ListItemButton onClick={handleClick2} >
          <Typography variant="caption" display="block" gutterBottom sx={{fontSize:13,marginTop:0.6,":hover":{color: "#FF852F"}}}>
             Sell on Alibaba
      </Typography>
      {open2 ? <ExpandLess sx={{fontSize:20,paddingLeft:1,":hover":{color: "#FF852F"}}} /> : <ExpandMore sx={{fontSize:20,paddingLeft:1,":hover":{color: "#FF852F"}}} />}

            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText secondary="For Global Seller" sx={{pl:1,":hover":{color: "#FF852F"}}}/>

            
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText secondary="Chinese Seller" sx={{pl:1,":hover":{color: "#FF852F"}}}/>

            
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText secondary="Partner Program" sx={{pl:1,":hover":{color: "#FF852F"}}}/>

            
          </ListItemButton>
        </List>
      </Collapse>
          </Item>
        </Grid>
        <Grid item xs={1} md={1} sx={{mt:0,}} >
          <Item>
          <ListItemButton onClick={handleClick3} >
          <Typography variant="caption" display="block" gutterBottom sx={{fontSize:13,marginTop:0.6,":hover":{color: "#FF852F"}}}>
             Help
      </Typography>
      {open3 ? <ExpandLess sx={{fontSize:20,paddingLeft:1,":hover":{color: "#FF852F"}}} /> : <ExpandMore sx={{fontSize:20,paddingLeft:1,":hover":{color: "#FF852F"}}} />}

            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText secondary="For Buyer" sx={{pl:1,":hover":{color: "#FF852F"}}}/>

            
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText secondary="For Supplier" sx={{pl:1,":hover":{color: "#FF852F"}}}/>

            
          </ListItemButton>
        </List>
      </Collapse>
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item></Item>
        </Grid>
        <Divider sx={{ height: 28, mt: 4 }} orientation="vertical" />

        <Grid item xs={1.3} md={1.3} sx={{mt:0,}} >
          <Item>
          <ListItemButton onClick={handleClick4} >
          <Typography variant="caption" display="block" gutterBottom sx={{fontSize:13,marginTop:0.6,":hover":{color: "#FF852F"}}}>
             English - USD
      </Typography>
      {open4 ? <ExpandLess sx={{fontSize:20,paddingLeft:1,":hover":{color: "#FF852F"}}} /> : <ExpandMore sx={{fontSize:20,paddingLeft:1,":hover":{color: "#FF852F"}}} />}

            </ListItemButton>
            <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText secondary="Deustch" sx={{pl:1,":hover":{color: "#FF852F"}}}/>

            
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText secondary="Urdu" sx={{pl:1,":hover":{color: "#FF852F"}}}/>

            
          </ListItemButton>
        </List>
      </Collapse>
          </Item>
        </Grid>
        <Divider sx={{ height: 28, mt: 4 }} orientation="vertical" />

        <Grid item xs={1.3} md={1.3} sx={{mt:0,}} >
          <Item>
          <ListItemButton onClick={handleClick5} >
          <Typography variant="caption" display="block" gutterBottom sx={{fontSize:13,marginTop:0.6,":hover":{color: "#FF852F"}}}>
            Ship to : PAK
      </Typography>
      {open5 ? <ExpandLess sx={{fontSize:20,paddingLeft:1,":hover":{color: "#FF852F"}}} /> : <ExpandMore sx={{fontSize:20,paddingLeft:1,":hover":{color: "#FF852F"}}} />}

            </ListItemButton>
            <Collapse in={open5} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText secondary="USA" sx={{pl:1,":hover":{color: "#FF852F"}}}/>

            
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText secondary="CHINA" sx={{pl:1,":hover":{color: "#FF852F"}}}/>

            
          </ListItemButton>
        </List>
      </Collapse>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Navigation
