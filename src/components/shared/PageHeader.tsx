import * as React from 'react'
import { Link } from 'react-router-dom'
import { Menu, MenuItem, Button, Grid } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

const PageHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <Grid container
        direction="row"
        justify="flex-end"
        alignItems="center">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon></MenuIcon>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/">
            Home
        </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/about">
            About
        </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/device-management">
            Device Management
        </MenuItem>
        </Menu>
      </Grid>

    </header>
  )
}


export default PageHeader
