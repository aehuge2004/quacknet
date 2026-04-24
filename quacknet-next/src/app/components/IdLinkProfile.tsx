'use client'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IdActiveChip from './IdActiveChip'

export default function IdLinkProfile() {
    return (
        <Box sx={{ borderColor: '#99D6DE', borderWidth: '1px', borderRadius: '10px', padding: '15px'}}>
            <Stack direction="column" sx={{ alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', alignSelf: 'flex-start'}}>
                    ID Link
                </Typography>
                <Stack direction="row" sx={{width: '90%', height: '5vh', alignSelf: 'flex-start', alignItems: 'center', marginLeft: '1vw'}}>
                    <Typography sx={{ color: 'white', marginRight: '1vw' }}>
                        Id Linked: 
                    </Typography>
                    <IdActiveChip />
                </Stack>
                <Typography variant="subtitle1" sx={{ color: 'white', alignSelf: 'flex-start', marginLeft: '1vw'}}>
                    Alternate IDs
                </Typography>
                <Stack sx={{width: '90%', height: '5vh', borderRadius: '5px', background: '#2A4245', borderColor: '#99D6DE', borderWidth: '1px', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white'}}>
                        {/* IF THERE ARE ALTERNATIVE IDS */}
                    </Typography>
                </Stack>                           
            </Stack>
        </Box>
    )
}