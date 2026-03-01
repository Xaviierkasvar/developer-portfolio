import { Container, Box, Grid } from '@mui/material';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import ReadMore from '../ReadMore/ReadMore';
import { ColorModeContext } from '../../../../pages/_app';
import { useContext } from 'react';

const About = () => {
    const colorMode = useContext(ColorModeContext);
    
    return (
        <Container
            id='about'
            maxWidth='lg'
            sx={{
                margin: '0 auto',
                py: '6em',
            }}
        >
            <Grid
                container
                sx={{
                    justifyContent: {
                        sm: 'center',
                        md: 'space-between'
                    }
                }}
            >
                {/* Imagen */}
                <Grid item xs={12} sm={12} md={4} lg={5}>
                    <Box
                        sx={{
                            maxWidth: '400px',
                            width: '100%',
                            height: '450px',
                            margin: '0 auto',
                            boxShadow: {
                                xs: '-.5em 1.5em 0px #0092ff',
                                sm: '-1.5em 1.5em 0px #0092ff'
                            },
                            position: 'relative'
                        }}
                    >
                        <Box
                            sx={{
                                width: '100px',
                                height: '100px',
                                zIndex: '0',
                                position: 'absolute',
                                right: {
                                    xs: '-4%',
                                    sm: '90%'
                                },
                                bottom: {
                                    xs: '-5%',
                                    sm: '-10%'
                                },
                                background: 'transparent',
                                backgroundImage: colorMode.mode === 'dark'
                                    ? 'radial-gradient(white 2px, transparent 0)'
                                    : 'radial-gradient(black 2px, transparent 0)',
                                backgroundSize: '15px 13px'
                            }}
                        ></Box>
                        <Image
                            alt='Francisco Javier Castillo Barrios'
                            className='img1'
                            layout='fill'
                            src={`/img/f36f9423.jpg`}
                        />
                    </Box>
                </Grid>

                {/* Texto */}
                <Grid item xs={12} sm={12} md={7.5} lg={7}>
                    <Box sx={{ pb: '.5em' }}>
                        <Typography
                            variant='h1'
                            sx={{
                                fontSize: {
                                    xs: '2.2em',
                                    sm: '2.5em',
                                    md: '3em'
                                },
                                py: '.5em',
                                pt: {
                                    xs: '1.8em',
                                    md: 0,
                                }
                            }}
                            fontWeight='600'
                        >
                            Sobre mí, soy Francisco Javier Castillo Barrios
                        </Typography>

                        <Typography
                            variant='h2'
                            sx={{
                                maxWidth: '570px',
                                fontSize: {
                                    xs: '.8em',
                                    sm: '1em'
                                },
                                textAlign: 'justify',
                            }}
                        >
                            Ingeniero de Sistemas especializado en desarrollo de software y aplicaciones web, con sólida experiencia como DevOps Engineer y programador Full Stack. Mi experiencia abarca tecnologías de backend como Python (Django, FastAPI), PHP (Laravel), Java (Spring Boot), Node.js (Express.js), y frontend con JavaScript/TypeScript (React, React Native, Angular, Vue.js, Next.js). He desplegado arquitecturas cloud-native en AWS y Azure, implementando soluciones escalables con Docker, CI/CD y bases de datos relacionales y NoSQL.
                        </Typography>

                        <Typography
                            variant='h2'
                            sx={{
                                maxWidth: '570px',
                                fontSize: {
                                    xs: '.8em',
                                    sm: '1em'
                                },
                                textAlign: 'justify',
                                py: '.5em'
                            }}
                        >
                            Recientemente me desempeñé como Líder Técnico Full Stack & DevOps Architect en Pivvot Consulting SAS, donde lideré equipos de desarrollo en proyectos full-stack de alta complejidad, implementando arquitecturas modernas (microservicios, tiempo real), gestionando pipelines CI/CD con Azure DevOps, y desplegando soluciones cloud-native. Dirigí el desarrollo de 4 plataformas principales: QuickGrowth (SaaS con IA - GPT-4), MAPOH (gestión educativa), Flotu (movilidad compartida) y FOM (operaciones de campo).
                        </Typography>

                        <Typography
                            variant='h2'
                            sx={{
                                maxWidth: '570px',
                                fontSize: {
                                    xs: '.8em',
                                    sm: '1em'
                                },
                                textAlign: 'justify',
                            }}
                        >
                            También cuento con experiencia como Ingeniero de I&D y DevOps Engineer en Infomedia Service SAS, implementando prácticas DevOps con Docker, Azure DevOps, y desarrollando con múltiples tecnologías. Además, trabajé en Fundación Social GESAREY desarrollando sistemas de gestión, backoffice y plataformas de comercio electrónico.
                        </Typography>

                        <Typography
                            variant='h2'
                            sx={{
                                maxWidth: '570px',
                                fontSize: {
                                    xs: '.8em',
                                    sm: '1em'
                                },
                                textAlign: 'justify',
                            }}
                        >
                            Estoy familiarizado con metodologías ágiles (Scrum)
                            <ReadMore>
                                , y herramientas modernas como Azure DevOps, Docker, Git y Postman. Como profesional proactivo, ético y orientado a objetivos, estoy comprometido con la implementación de soluciones innovadoras en el ámbito tecnológico. Constantemente aprendo nuevas tecnologías y mejores prácticas para entregar software de alta calidad que satisfaga las necesidades de los clientes.
                            </ReadMore>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default About;
