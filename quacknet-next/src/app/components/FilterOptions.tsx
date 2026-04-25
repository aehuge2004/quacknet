import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import {Genre} from '@/types/genres'
import { Filter } from '@/types/game_filter_interface';

const localTheme = createTheme( {
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#99D6DE',
          '&.Mui-checked': { color: '#99D6DE' },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#99D6DE',
          '&.Mui-checked': { color: '#99D6DE' },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#FFF',
          fontWeight: 'bold',
        },
      },
    },
  },
});


export default function FilterOptions() {
    const [alignment, setAlignment] = useState<string | null>(null);
    const [genres, setGenres] = useState<Genre[]>([]);
    // const [partialFilter, setPartialFilter] = useState<Filter>({});

    useEffect(() => {
      (async () => {
        setGenres(await (await fetch("/api/genres")).json())
      })()
    }, [])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlignment(e.target.value);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clicked = (e.target as HTMLInputElement).value;
    if (clicked === alignment) {
        setAlignment(null);  // deselects if clicking the already-selected option
    }
    };
    return (
    <ThemeProvider theme={localTheme}>
    <Box sx={{ background: 'rgba(153, 214, 222, 0.25)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: 2, border: '1px solid #99D6DE', borderRadius: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>Filter</Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'white' }}>Players</Typography>
        <RadioGroup   value={alignment}
            onChange={handleChange}
            onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                if ((e.target as HTMLInputElement).value === alignment) {
                setAlignment(null);
                }
            }}
            sx={{ 
                color: 'white',
                '&.Mui-checked': { color: 'white' },
             }}
             >
            <FormControlLabel value="single" control={<Radio />} label="Single Player" />
            <FormControlLabel value="multi" control={<Radio />} label="Multi Player" />
            <FormControlLabel value="online" control={<Radio />} label="Online" />
        </RadioGroup>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'white' }}>Genres</Typography>
        <FormGroup>
             {genres.map((genre) => ((
              <FormControlLabel control={<Checkbox />} label={genre.genre_name} />
             )))}
        </FormGroup>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'white' }}>Release Date</Typography>
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Released Between" />
            <FormControlLabel control={<Checkbox />} label="Past Month" />
            <FormControlLabel control={<Checkbox />} label="Past Year" />
        </FormGroup>
    </Box>
    </ThemeProvider>

  );
}