import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CottageIcon from '@mui/icons-material/Cottage';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Person3Icon from '@mui/icons-material/Person3';
import useAuth from '../Auth/useAuth/useAuth';
import useAdmin from '../../Hooks/useAdmin';
import { useQuery } from '@tanstack/react-query';

const drawerWidth = 240;

function DashboardPage(props) {
  const [isAdmin] = useAdmin();
  const {user, loading} = useAuth();

  const {data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            return res.json()
        }
  })

  console.log('user type =',users.type)

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      
      {/* 1st list admin */}
      <List>
         {/* admin home */}
        <Link to="/dashboard/adminhome" >
            <ListItem  disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <CottageIcon />
                </ListItemIcon>
                <ListItemText primary="Admin Home" />
                </ListItemButton>
            </ListItem>  
        </Link>
        
        {/* manage users */}
        <Link to="/dashboard/manageusers" >
            <ListItem  disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <Person3Icon />
                </ListItemIcon>
                <ListItemText primary="Manage Users" />
                </ListItemButton>
            </ListItem>  
        </Link>
        

      </List>
      <Divider />

      {/* 2nd list landlord */}
      <List>
         {/*landlord home */}
        <Link to="/dashboard/landlordhome" >
            <ListItem  disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <CottageIcon />
                </ListItemIcon>
                <ListItemText primary="Landlord Home" />
                </ListItemButton>
            </ListItem>  
        </Link>
        

        

      </List>
      <Divider />

      {/* 3rd list tenant */}
      <List>
         {/*tenant home */}
        <Link to="/dashboard/tenanthome" >
            <ListItem  disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <CottageIcon />
                </ListItemIcon>
                <ListItemText primary="Tenant Home" />
                </ListItemButton>
            </ListItem>  
        </Link>
        
        {/* manage booking */}
        <Link to="/dashboard/managebooking" >
            <ListItem  disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <BeenhereIcon></BeenhereIcon>
                </ListItemIcon>
                <ListItemText primary="Manage Booking" />
                </ListItemButton>
            </ListItem>  
        </Link>

        {/* manage cart */}
        <Link to="/dashboard/managecart" >
            <ListItem  disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon></ShoppingCartIcon>
                </ListItemIcon>
                <ListItemText primary="Manage Cart" />
                </ListItemButton>
            </ListItem>  
        </Link>

      </List>
      <Divider />

      {/* 4th list general category */}
      <List>
         {/* home */}
        <Link to="/" >
            <ListItem  disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <CottageIcon />
                </ListItemIcon>
                <ListItemText primary="House-Rent" />
                </ListItemButton>
            </ListItem>  
        </Link>
        

        {/* test */}
        <Link to="/apartments" >
            <ListItem  disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Apartments" />
                </ListItemButton>
            </ListItem>  
        </Link>

      </List>

    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
        
      <CssBaseline />
      
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* page content */}
        <Outlet></Outlet>
        <Typography paragraph>
          
        </Typography>
        <Typography paragraph>
          
        </Typography>
      </Box>
    </Box>
  );
}

DashboardPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardPage;