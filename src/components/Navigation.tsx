import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

export default function Navigation() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
            }}
          >
            Your Name
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/blog">Blog</Button>
            <Button color="inherit" href="/about">About</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}