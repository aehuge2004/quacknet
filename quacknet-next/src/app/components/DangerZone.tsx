'use client'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function DangerZone() {
    return (
        <Box sx={{ borderColor: '#F44336', borderWidth: '1px', borderRadius: '10px', padding: '15px', background: 'rgba(244, 67, 54, 0.25)'}}>
            <Stack spacing={1} direction="column" sx={{ alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', alignSelf: 'flex-start'}}>
                    Danger Zone
                </Typography>
                <Button variant="outlined" sx={{width: '90%', height: '5vh', borderRadius: '5px', background: '#061213', borderColor: '#1B5662', borderWidth: '1px', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white', textTransform: 'none', fontSize: '0.9rem' }}>
                        Change Username
                    </Typography>
                </Button>
               <Button variant="outlined" sx={{width: '90%', height: '5vh', borderRadius: '5px', background: '#061213', borderColor: '#1B5662', borderWidth: '1px', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white', textTransform: 'none', fontSize: '0.9rem' }}>
                        Change Password
                    </Typography>
                </Button>
               <Button variant="outlined" sx={{width: '90%', height: '5vh', borderRadius: '5px', background: '#061213', borderColor: '#1B5662', borderWidth: '1px', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white', textTransform: 'none', fontSize: '0.9rem' }}>
                        Change Email
                    </Typography>
                </Button>  
               <Button variant="outlined" sx={{width: '90%', height: '5vh', borderRadius: '5px', background: '#061213', borderColor: '#1B5662', borderWidth: '1px', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white', textTransform: 'none', fontSize: '0.9rem' }}>
                        Delete Account
                    </Typography>
                </Button>                              
            </Stack>
        </Box>
    )
}