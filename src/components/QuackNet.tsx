import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {styled} from '@mui/material/styles'
import Logo from '../images/Duck.png'

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 36,
  color: '#061213',
  fontWeight: 'bold',
  padding: '6px 12px',
  lineHeight: 1.5,
  fontFamily: [
    'Poppins'
  ]
});



function QuackNet() {
  return (
    <Stack direction="row" spacing={1} sx= {{ justifyContent: "space-evenly", alignItems: "flex-start", backgroundColor: "#99D6DE"}}>
      <img src={Logo} className="App-logo" alt="logo" />
      <BootstrapButton variant="text" disableRipple>QuackNet</BootstrapButton>
    </Stack>
  );
}

export default QuackNet;