import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Filter } from '@/types/game_filter_interface';


type FilterHeaderProps = {
  value: Filter["order_type"];
  onChange: (value: Filter["order_type"]) => void;
};


export default function ColorToggleButton({onChange}: FilterHeaderProps) {
  const [alignment, setAlignment] = React.useState('popular');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
    onChange(newAlignment as Filter["order_type"]);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Sorting options"
      sx={{
      '& .MuiToggleButton-root': {
        color: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '20px',
        marginLeft: '20px',
        '&:hover': {
          backgroundColor: 'rgba(153,214,222,0.3)',  //  unselected hover
          color: '#FFF',
        },
      },
      '& .MuiToggleButton-root.Mui-selected': {
        backgroundColor: 'rgba(153,214,222,0.5)',
        color: '#FFF',
        '&:hover': {
          backgroundColor: 'rgba(153,214,222,0.7)',  //  selected hover
          color: '#FFF',
        },
      },
    }}
    >
      <ToggleButton value="popular">Popular</ToggleButton>
      <ToggleButton value="rising">Rising</ToggleButton>
      <ToggleButton value="top rated">Top Rated</ToggleButton>
      <ToggleButton value="new releases">New Releases</ToggleButton>
      <ToggleButton value="alphabetical">Alphabetical</ToggleButton>
    </ToggleButtonGroup>
  );
}
