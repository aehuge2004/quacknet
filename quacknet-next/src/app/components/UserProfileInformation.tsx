'use client'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import EmailIcon from '@mui/icons-material/Email';

export default function UserProfileInformation() {
    return (
        <Box sx={{ borderColor: '#99D6DE', borderWidth: '1px', borderRadius: '10px', padding: '15px'}}>
            <Stack direction="column" sx={{ alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', alignSelf: 'flex-start'}}>
                    User Information
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'white', alignSelf: 'flex-start', marginLeft: '1vw'}}>
                    Username
                </Typography>
                <Stack sx={{width: '90%', height: '5vh', borderRadius: '5px', background: '#2A4245', borderColor: '#99D6DE', borderWidth: '1px', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white' }}>
                        username
                    </Typography>
                </Stack>
                <Typography variant="subtitle1" sx={{ color: 'white', alignSelf: 'flex-start', marginLeft: '1vw'}}>
                    Email
                </Typography>
                <Stack sx={{width: '90%', height: '5vh', borderRadius: '5px', background: '#2A4245', borderColor: '#99D6DE', borderWidth: '1px', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white'}}>
                        email
                    </Typography>
                </Stack>
                <Typography variant="subtitle1" sx={{ color: 'white', alignSelf: 'flex-start', marginLeft: '1vw'}}>
                    Sign-In Methods
                </Typography>
                <Stack direction="row" spacing={2} sx={{alignSelf: 'flex-start', marginLeft: '1vw'}}>
                    <Stack sx={{width: '3vw', borderRadius: '5px', background: '#2A4245', borderColor: '#99D6DE', borderWidth: '1px', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                        <img src='/images/RIT.svg' width={80}/>
                    </Stack>
                    <Stack sx={{width: '3vw', borderRadius: '5px', background: '#2A4245', borderColor: '#99D6DE', borderWidth: '1px', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                        <img src='/images/GoogleIcon.png' width={20}/>
                    </Stack>
                    <Stack sx={{width: '3vw', borderRadius: '5px', background: '#2A4245', borderColor: '#99D6DE', borderWidth: '1px', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                        <EmailIcon sx={{color:'#99D6DE'}} width={100}/>
                    </Stack>
                </Stack>                               
            </Stack>
        </Box>
    )
}