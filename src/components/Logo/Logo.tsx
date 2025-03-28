import {Box, Typography} from '@mui/material'
import {useRouter} from 'next/router';
import gsap from 'gsap';

const Logo = ({toggleDrawer, colorMode, color} : any) => {
    const router = useRouter()
    const isDarkMode = colorMode.mode === 'dark';
    
    return (
        <Box
            onClick={() => {
                toggleDrawer(false);
                if (router.pathname !== '/') {
                    console.log('pathname: ', router);
                    router.push('/');
                }
                gsap.to(window, {
                    duration: 1,
                    scrollTo: `#hero`
                });
            }}
            sx={{
                flex: 1,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Typography 
                variant="h6" 
                sx={{
                    fontWeight: 700,
                    color: isDarkMode ? 'white' : 'black',
                    letterSpacing: '0.5px'
                }}
            >
                FJCB
            </Typography>
        </Box>
    )
}

export default Logo