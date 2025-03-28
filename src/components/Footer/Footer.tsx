import gsap from 'gsap';
import {Box, Typography, Divider, Grid} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

function Copyright() {
    return (
        <>
        <Divider/>
        <Box
            maxWidth='lg' 
            sx={{
                textAlign:'center',
                margin : '1em auto'
            }}>
            <Typography variant='h1' fontSize='1em'>
                {'Copyright © '}
                <Link color="inherit" target='_blank' rel="noreferrer" href="https://github.com/Xaviierkasvar">
                    Francisco Javier Castillo Barrios
                </Link>{' '} {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
        </>
    );
}

const styles = {
    mt: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flexWrap: 'wrap',
    color: 'white'
}

function Footer() {
    const router = useRouter();
    
    // Registrar ScrollToPlugin para que funcionen las animaciones de scroll
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollToPlugin);
    }
    
    return (
        <Box id="contact">
            <Divider/>
            <Box
                sx={{
                width: '100%',
                color: 'white',
                minHeight: '200px',
                display: 'flex',
                margin: '0 auto'
            }}>
                <Grid
                    sx={{
                    gap: '1.5em',
                    mx: {
                        xs: '3vw',
                        lg: 'auto'
                    },
                    my: '2em'
                }}
                    maxWidth='lg'
                    container>
                    <Grid item xs={12} sm={6} md={5}>
                        <Typography variant='h1' fontSize='1.4em' fontWeight='400'>Acerca de mí</Typography>

                        <Box sx={styles}>
                            <Typography variant='h3' fontSize='1em'>
                                Hola, soy Francisco Javier Castillo Barrios, Ingeniero de Sistemas especializado en desarrollo de software y aplicaciones web. 
                                Ofrezco soluciones tecnológicas innovadoras para empresas y particulares, enfocándome en la calidad, 
                                la eficiencia y la satisfacción del cliente.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant='h1' fontSize='1.4em' fontWeight='400'>Enlaces</Typography>

                        <Box className='link' sx={styles}>
                            <Typography 
                                className='FooterLink'
                                onClick={()=>{router.push('/'); gsap.to(window, {duration: .8, scrollTo: `#hero`})}}
                                style={{cursor: 'pointer'}}
                            >
                                Inicio
                            </Typography>
                            <Typography 
                                className='FooterLink'
                                onClick={()=>{router.push('/'); gsap.to(window, {duration: .5, scrollTo: `#projects`})}}
                                style={{cursor: 'pointer'}}
                            >
                                Proyectos
                            </Typography>
                            <Typography 
                                className='FooterLink'
                                onClick={()=>{router.push('/'); gsap.to(window, {duration: .5, scrollTo: `#skills`})}}
                                style={{cursor: 'pointer'}}
                            >
                                Habilidades
                            </Typography>
                            <Typography 
                                className='FooterLink'
                                onClick={()=>{router.push('/'); gsap.to(window, {duration: .5, scrollTo: `#about`})}}
                                style={{cursor: 'pointer'}}
                            >
                                Sobre mí
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant='h1' fontSize='1.4em' fontWeight='400'>Contacto</Typography>
                        <Box className='link' sx={styles}>
                            <a target='_blank' rel="noreferrer" href='https://github.com/Xaviierkasvar'>Github</a>
                            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/francisco-javier-castillo-barrios-673004220/'>LinkedIn</a>
                            <Typography variant='h1' fontSize='1em'>javier_castillo_15@hotmail.es</Typography>
                            <Typography variant='h1' fontSize='1em'>Soledad - Atlántico, Colombia</Typography>
                            <Typography variant='h1' fontSize='1em'>+57 300-433-0873</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Copyright/>
        </Box>

    );

}
export default Footer