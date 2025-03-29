import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Tooltip,
    Typography
} from "@mui/material"
import {centeredStyles} from "../Perks/Perks"
import ProjectCard from "./ProjectCard"
import {useEffect} from 'react';
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import gsap from 'gsap'
import {IProjects} from "../../../Types/Types";

// Francisco's projects data
const franciscoProjects = [
    {
        title: "PCA Parque Caribe Aventura (Backoffice)",
        description: "Desarrollé un robusto backoffice utilizando Laravel 10, optimizando la gestión interna de Caribe Aventura. Este sistema mejora la eficiencia operativa y proporciona una interfaz amigable, facilitando la administración de datos y la generación de informes.",
        img: "/img/projects/pca_login.png",
        siteUrl: "https://caribeaventura.com/",
        repoUrl: "#"
    },
    {
        title: "Abacox",
        description: "Proporcioné soporte y mantenimiento a un sistema de información desarrollado en PHP puro 5.4. Este sistema, crucial para la gestión de CDRs y tickets, fue actualizado para mejorar su rendimiento y seguridad, aplicando buenas prácticas de programación.",
        img: "/img/projects/abacox_login.png",
        siteUrl: "https://abacox.infomediaservice.com/abacox3/",
        repoUrl: "#"
    },
    {
        title: "CEI",
        description: "Desarrollé un proyecto interno para la reserva de salas de conferencias y reuniones, optimizando el uso de recursos dentro de la organización. La solución incluye una interfaz intuitiva y un sistema de notificaciones para la gestión efectiva de reservas.",
        img: "/img/projects/cei_login.png",
        siteUrl: "#",
        repoUrl: "#"
    },
    {
        title: "SADIYS",
        description: "Implementé un sistema automatizado de control de accesos, mejorando la seguridad y gestión de entradas y salidas en las instalaciones. Incluye un registro detallado de actividades que contribuye a la transparencia y seguridad del entorno laboral.",
        img: "/img/projects/sadiys.png",
        siteUrl: "#",
        repoUrl: "#"
    },
    {
        title: "SAMS (Student Attendance Management System)",
        description: "Desarrollé un sistema integral para el control de asistencia de estudiantes, proporcionando una herramienta eficiente para la gestión académica con informes personalizados y notificaciones que mejoran la comunicación entre estudiantes y administradores.",
        img: "/img/projects/sams_login.png",
        siteUrl: "http://200.234.228.189/",
        repoUrl: "https://github.com/Xaviierkasvar/SAMS"
    },
    {
        title: "Website Funsoges",
        description: "Diseñé y desarrollé el sitio web para la Fundación Social Gesarey, enfocándome en una presentación atractiva y funcional con secciones interactivas que permiten a los usuarios conocer los servicios ofrecidos, facilitando el acceso a información clave.",
        img: "/img/projects/funsoges.png",
        siteUrl: "https://xaviierkasvar.github.io/website-funsoges/",
        repoUrl: "https://github.com/Xaviierkasvar/website-funsoges"
    },
    {
        title: "MGI Frontend",
        description: "Realicé una prueba técnica desarrollando un módulo de gestión de inventarios. Este proyecto incluye una interfaz responsiva que permite a los usuarios gestionar eficientemente su inventario, implementando principios de usabilidad y accesibilidad.",
        img: "/img/projects/mgi_login.png",
        siteUrl: "#",
        repoUrl: "https://github.com/Xaviierkasvar/mgi-font.git"
    },
    {
        title: "MGI Backend",
        description: "Desarrollé un módulo de gestión de inventarios con Laravel, implementando buenas prácticas y arquitectura limpia. Documenté la API con Swagger de forma exhaustiva para facilitar su uso y comprensión por otros desarrolladores.",
        img: "/img/projects/mgi_back.png",
        siteUrl: "#",
        repoUrl: "https://github.com/Xaviierkasvar/mgi-back"
    },
    {
        title: "99envios",
        description: "Aporté mi experiencia en desarrollo backend utilizando Laravel y frontend con React y Material UI. Implementé soluciones eficientes y visualmente atractivas, asegurando que el sistema fuera no solo funcional, sino también fácil de usar.",
        img: "/img/projects/99envios_login.png",
        siteUrl: "https://99envios.app/",
        repoUrl: "#"
    }
];

const Projects = ({projectsArray = franciscoProjects} : IProjects[] | any) => {

    useEffect(() => {

        MainTitleAnimation('.title3', '.title4')
        if (!projectsArray) 
            return;
        setTimeout(() => {

            for (let i = 0; i < projectsArray.length; i++) {

                gsap.to(`.p${i}`, {
                    duration: .8,
                    transform: 'translateX(0%)',
                    ease: 'easeIn',
                    scrollTrigger: {
                        trigger: `.p${i}`,
                        start: 'top 60%'
                    }
                })
            }
        }, 100)
    }, [])

    return (
        <Box sx={{
            overflowX: 'hidden'
        }}>
            <Container
                id='projects'
                maxWidth='lg'
                sx={{
                margin: '0 auto',
                py: '6em'
            }}>
                <Grid container>

                    <Grid item sx={centeredStyles}>
                        <Typography
                            className='title3 t25o0'
                            variant='h1'
                            sx={{
                            fontSize: {
                                xs: '2.2em',
                                sm: '2.5em',
                                md: '3em'
                            }
                        }}
                            fontWeight='600'>
                            Proyectos Destacados
                        </Typography>
                        <Typography
                            className='title4 t25o0'
                            variant='h2'
                            sx={{
                            pt: '1.5em',
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            }
                        }}>
                            Soluciones tecnológicas desarrolladas con enfoque en la calidad y la experiencia del usuario
                        </Typography>

                    </Grid>
                    <Box
                        sx={{
                        ...centeredStyles,
                        mt: '3em'
                    }}>

                        {projectsArray
                            ? projectsArray.map((project : any, index : number) => {
                                return <ProjectCard
                                    className={`p${index}`}
                                    isReversed={index % 2 === 0
                                    ? true
                                    : false}
                                    siteUrl={project.siteUrl}
                                    repoUrl={project.repoUrl}
                                    title={project.title}
                                    img={project.img}
                                    description={project.description}
                                    key={project.title}/>
                            })

                            : <Typography variant='h1' fontSize='1em' fontWeight='500' color='red'>There was an error loading the projects.</Typography>
}

                    </Box>
                    <Box
                        sx={{
                        margin: '0 auto',
                        mt: '3em'
                    }}>
                        <Tooltip title='Más proyectos próximamente'>

                            <Button
                                className='loadMore'
                                variant='contained'
                                sx={{
                                opacity: 0,
                                padding: '.5em 3.5em',
                                background: 'transparent',
                                border: '1px solid',
                                color: '#0092ff',
                                ':hover': {
                                    border: '1px solid transparent'
                                }
                            }}>
                                Ver Más
                            </Button>
                        </Tooltip>

                    </Box>
                </Grid>

            </Container>
            < Divider className='divider'/>
        </Box>
    )
}

export default Projects