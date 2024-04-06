import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';


function Header() {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Box width='100%' display='flex' justifyContent='space-between'>
                    <Box display='flex' gap={2} alignItems='center'>
                        <StyledLink to='/' aria-label='The Store Homepage'>
                            <Typography variant="h6">
                                The Store
                            </Typography>
                        </StyledLink>
                        <StyledLink to='/' aria-label='The Store Homepage'>
                            <Button tabIndex={-1} component='div' role='' color="inherit">
                                 Home 
                            </Button>
                        </StyledLink>
                    </Box>
                    <Box display='flex' gap={1} alignItems='center'>
                        <StyledLink to='/search' aria-label='Search items page'>
                            <IconButton tabIndex={-1}>
                                <SearchIcon sx={{color: 'white'}} />
                            </IconButton>
                        </StyledLink>
                        <StyledLink to='/cart' aria-label='Open shopping cart'>
                            <IconButton tabIndex={-1}>
                                <ShoppingCartIcon sx={{color: 'white'}}  />
                            </IconButton>
                        </StyledLink>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

// Need to use this, otherwise MUI styling gets overriden by <a> tag styling
// for header which is not appealing
const StyledLink = styled(Link)((_) => ({
    color: 'white',
    textDecoration: 'none',
}));

export default Header;
