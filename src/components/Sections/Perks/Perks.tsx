import {Box, Container, Typography, Divider} from '@mui/material';
import PerkCard from './PerkCard';
import {useEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ShieldIcon from '@mui/icons-material/Shield';
import SyncIcon from '@mui/icons-material/Sync';

export const centeredStyles = {
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

gsap.registerPlugin(ScrollTrigger);

// Servicios basados en el seeder de Francisco
const perksArray = [
    {
        title: 'Desarrollo Web',
        Icon: CodeIcon,
        text: 'Desarrollo completo de aplicaciones web usando tecnologías modernas como PHP, Laravel, Vue.js, HTML, CSS y más. Enfoque en soluciones eficientes y interfaces amigables para el usuario.',
    },
    {
        title: 'Soporte y Mantenimiento',
        Icon: BuildIcon,
        text: 'Servicios de soporte técnico, mantenimiento preventivo y correctivo de sistemas de información, incluyendo administración de bases de datos y servidores para garantizar el óptimo funcionamiento.',
    },
    {
        title: 'Integración de APIs',
        Icon: IntegrationInstructionsIcon,
        text: 'Desarrollo e implementación de APIs RESTful o GraphQL para conectar diferentes sistemas y servicios, permitiendo la interoperabilidad entre plataformas.',
    },
    {
        title: 'Desarrollo de Software a Medida',
        Icon: CodeIcon,
        text: 'Creación de software personalizado según las necesidades específicas de clientes, desde sistemas de gestión empresarial hasta aplicaciones especializadas.',
    },
    {
        title: 'Seguridad Informática',
        Icon: ShieldIcon,
        text: 'Auditorías de seguridad, pruebas de penetración (pentesting), implementación de políticas de seguridad, cifrado de datos y protección contra amenazas cibernéticas.',
    },
    {
        title: 'Migración y Actualización de Sistemas',
        Icon: SyncIcon,
        text: 'Migración de aplicaciones y datos a nuevas plataformas, actualización de software obsoleto, y modernización de sistemas heredados para mejorar rendimiento y seguridad.',
    }
];

const Perks = () => {
    useEffect(() => {
        MainTitleAnimation('.h1', '.h2')
    }, [])

    return (<> 
        <Container
            id="services"
            maxWidth='lg'
            sx={{
                margin: '0 auto',
                my: '4em'
            }}>
            <Box sx={centeredStyles}>
                <Typography
                    className='h1 t25o0'
                    variant='h1'
                    sx={{
                        fontSize: {
                            xs: '2.2em',
                            sm: '2.5em',
                            md: '3em'
                        }
                    }}
                    fontWeight='600'>
                    Servicios Profesionales
                </Typography>
                <Typography
                    variant='h2'
                    className='secondary h2'
                    sx={{
                        pt: '1.5em',
                        transform: 'translateY(15px)',
                        opacity: 0,
                        maxWidth: '570px',
                        fontSize: {
                            xs: '.8em',
                            sm: '1em'
                        }
                    }}>
                    Ofrezco soluciones tecnológicas completas, desde el desarrollo de aplicaciones hasta la optimización y mantenimiento de sistemas existentes.
                </Typography>

                <Box
                    sx={{
                        mt: '3em',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '5%',
                        justifyContent: {
                            xs: 'center',
                            sm: 'space-between'
                        }
                    }}>
                    {perksArray.map((perk, index) => {
                        // Mostrar solo los primeros 3 servicios para mantener el diseño original
                        if (index < 3) {
                            return <PerkCard key={perk.title} title={perk.title} text={perk.text} Icon={perk.Icon}/>
                        }
                        return null;
                    })}
                </Box>
                
                {/* Segunda fila de servicios */}
                <Box
                    sx={{
                        mt: '3em',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '5%',
                        justifyContent: {
                            xs: 'center',
                            sm: 'space-between'
                        }
                    }}>
                    {perksArray.map((perk, index) => {
                        // Mostrar los siguientes 3 servicios
                        if (index >= 3 && index < 6) {
                            return <PerkCard key={perk.title} title={perk.title} text={perk.text} Icon={perk.Icon}/>
                        }
                        return null;
                    })}
                </Box>
            </Box>
        </Container> 
        <Divider /> 
    </>)
}

export default Perks