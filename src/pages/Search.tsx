import Stack from "@mui/material/Stack";
import Header from "../components/Header";
import TextField from '@mui/material/TextField'
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import ProductsList from "../components/ProductsList";
import { useState } from "react";
import Button from '@mui/material/Button'

function Search() {

    const [queryInput, setQueryInput] = useState('');
    const [query, setQuery] = useState('');


    // If the user presses enter when searching, their search is submitted
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setQuery(queryInput);
        }
    }

    return (
        <>
            <Header />
            <Stack padding={4} alignItems='center' sx={{width: '100%'}}>
                <Stack direction='row' gap={2}  sx={{width: '100%', maxWidth: '1024px'}}>
                    <TextField
                        placeholder='Search for a product or category'
                        label="Search"
                        value={queryInput}
                        onChange={(e) => setQueryInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                        fullWidth
                    />
                    <Button 
                        onClick={() => setQuery(queryInput)}
                        variant="contained" 
                        color="primary"
                    >
                      Search
                    </Button>
                </Stack>
                <ProductsList query={query}></ProductsList>
            </Stack>
        </>
    )
}

export default Search;
