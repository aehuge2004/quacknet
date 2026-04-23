import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, background: 'rgba(131, 135, 133, 0.55)', border: '1px solid #838785', boxShadow: 'inset 2px -1px 4px 4px rgba(0, 0, 0, 0.2)' }}
    >
      <IconButton sx={{ p: '10px', color: 'white' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'white' }}
        placeholder="Search Games"
        inputProps={{ 'aria-label': 'search google maps' }}
      />

    </Paper>
  );
}
