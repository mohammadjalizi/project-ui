import React from 'react'

const Appbar = () => {
  return (
<Box sx={{ flexGrow: 1 }}>
      <Appbar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Appbar>
    </Box>
  )
}

export default Appbar