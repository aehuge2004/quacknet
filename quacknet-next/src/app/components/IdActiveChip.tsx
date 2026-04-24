import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const ActiveChip = styled(Chip)({
  root: {
    backgroundColor: 'rgba(67, 160, 71, 0.5)',
    border: '1px solid #43A047',
    color: 'white'
  }
})

const InactiveChip = styled(Chip)({
    root: {
        backgroundColor: 'rgba(244, 67, 51, 0.5)',
        border: '1px solid #F44336',
        color: 'white'
    }
})

export default function IdActiveChip() {
  return (
    <Stack direction="row" spacing={1}>
        <Chip label="Active" color="success"/>
        <Chip label="Inactive" color="error"/>
    </Stack>
  );
}
