import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

function CategoryChips({ categoryOptions, category, onChange }) {
  const [selectedCategory, setSelectedValue] = useState(category);

  const handleChange = (event, newValue) => {
    if (newValue === null) {
        newValue = '';
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  return (
    <Box padding={2}>
        <ToggleButtonGroup
          value={selectedCategory}
          exclusive
          onChange={handleChange}
          aria-label="chip-radio-group"
          sx={{
            display: 'flex',
            maxWidth: '1024px',
            flexWrap: 'wrap'
          }}
        >
          {categoryOptions.map((option) => (
            <ToggleButton
              key={option}
              value={option}
              aria-label={option}
              sx={{
                border: 'none',
                padding: '4px',
              }}
            >
              <Chip
                label={option}
                color={selectedCategory === option ? 'primary' : 'default'}
                variant={selectedCategory === option ? 'filled' : 'outlined'}
              />
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
    </Box>
  );
};

export default CategoryChips;