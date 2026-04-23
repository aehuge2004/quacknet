import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';





export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('popular');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Sorting options"
      sx={{
        '& .Mui-selected': {
            backgroundColor: 'rgba(153,214,222,0.5)',
            color: '#FFF',
            '&:hover': { backgroundColor: 'rgba(153,214,222,0.7)' },
        },'& .MuiToggleButton-root': {
            color: '#FFFFFF',
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '20px',
            marginLeft: '20px',
        }
        }
        }
    >
      <ToggleButton value="popular">Popular</ToggleButton>
      <ToggleButton value="rising">Rising</ToggleButton>
      <ToggleButton value="top">Top Rated</ToggleButton>
      <ToggleButton value="new">New Releases</ToggleButton>
      <ToggleButton value="alphabetical">Alphabetical</ToggleButton>
    </ToggleButtonGroup>
  );
}
