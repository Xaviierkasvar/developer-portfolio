import {Container, Typography, Grid, Divider} from '@mui/material';
import { useContext, useEffect } from 'react';
import {ColorModeContext} from '../../../../pages/_app';
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import {centeredStyles} from '../Perks/Perks';
import ToolCard from './ToolCard';
import gsap from 'gsap';


// Datos de las habilidades técnicas de Francisco
const franciscoTechTools = [
  // Herramientas Frontend
  { 
    title: "HTML", 
    svg: "/icons/html.svg", 
    isBackend: false,
    filter: false
  },
  { 
    title: "CSS", 
    svg: "/icons/css.svg", 
    isBackend: false,
    filter: false
  },
  { 
    title: "JavaScript ES6", 
    svg: "/icons/javascript.svg", 
    isBackend: false,
    filter: false
  },
  { 
    title: "Vue 3", 
    svg: "/icons/vue.svg", 
    isBackend: false,
    filter: false
  },
  { 
    title: "React", 
    svg: "/icons/react.svg", 
    isBackend: false,
    filter: false
  },
  { 
    title: "Angular", 
    svg: "/icons/angular.svg", 
    isBackend: false,
    filter: false
  },
  { 
    title: "Bootstrap", 
    svg: "/icons/bootstrap.svg", 
    isBackend: false,
    filter: false
  },
  { 
    title: "Ionic", 
    svg: "/icons/ionic.svg", 
    isBackend: false,
    filter: false
  },
  
  // Herramientas Backend y otras
  { 
    title: "PHP", 
    svg: "/icons/php.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "Laravel", 
    svg: "/icons/laravel.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "Python", 
    svg: "/icons/python.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "Java", 
    svg: "/icons/java.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "Spring Boot", 
    svg: "/icons/spring.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "SQL Server", 
    svg: "/icons/sqlserver.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "PostgreSQL", 
    svg: "/icons/postgresql.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "MySQL", 
    svg: "/icons/mysql.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "Azure DevOps", 
    svg: "/icons/azure.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "Git", 
    svg: "/icons/git.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "Docker", 
    svg: "/icons/docker.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "Swagger", 
    svg: "/icons/swagger.svg", 
    isBackend: true,
    filter: false
  },
  { 
    title: "Postman", 
    svg: "/icons/postman.svg", 
    isBackend: true,
    filter: false
  }
];

const TechTools = ({iconsArray = franciscoTechTools} : any) => {
    let FrontendTools = iconsArray && iconsArray.filter((icon : any) => !icon.isBackend);
    let OtherTools = iconsArray && iconsArray.filter((icon : any) => icon.isBackend);

    const colorMode = useContext(ColorModeContext);
    // turn off "filter" mode when the theme is set to dark mode
    const isfilterMode = (item : any) => colorMode
        ?.mode === 'light'
            ? false
            : item
                ?.filter;

    useEffect(() => {
        MainTitleAnimation('.title1', '.title2');
        gsap.to('.secondTitle', {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.secondTitle',
                start: 'top 70%'
            }
        });
    }, []);

    return ( <> <Container
        id='skills'
        maxWidth='lg'
        sx={{
        margin: '0 auto',
        py: {
            xs: '6em'
        }
    }}>

        <Grid container>

            <Grid item sx={centeredStyles}>
                <Typography
                    className=' title1 t25o0'
                    variant='h1'
                    sx={{
                    fontSize: {
                        xs: '2.2em',
                        sm: '2.5em',
                        md: '3em'
                    }
                }}
                    fontWeight='600'>
                    Habilidades Técnicas 
                </Typography>
                <Typography
                    variant='h2'
                    className='secondary title2 t25o0'
                    sx={{
                    pt: '1.5em',
                    maxWidth: '570px',
                    fontSize: {
                        xs: '.8em',
                        sm: '1em'
                    }
                }}>
                    Tecnologías de desarrollo Frontend
                </Typography>

            </Grid>
            <Grid
                sx={{
                ...centeredStyles,
                flexDirection: 'row',
                justifyContent: {
                    xs: "center"
                },
                mt: '3em',
                flexWrap: 'wrap'
            }}
                xs={12}
                item>

                {FrontendTools && FrontendTools.map((item : any) => {
                    return <ToolCard
                        className='toolCard1'
                        filter={isfilterMode(item)}
                        svg={item.svg}
                        title={item.title}
                        key={item.title}/>
                })}

            </Grid>

           {OtherTools ? 
            <>
           
            <Grid item sx={centeredStyles}>

                <Typography
                    variant='h2'
                    className='secondary secondTitle t25o0'
                    sx={{
                    pt: '3.5em',
                    opacity: 0,
                    fontSize: {
                        xs: '.8em',
                        sm: '1em'
                    }
                }}>
                    Tecnologías de Backend y herramientas
                </Typography>

            </Grid>
            <Grid
                sx={{
                ...centeredStyles,
                flexDirection: 'row',
                justifyContent: {
                    xs: "center"
                },
                mt: '3em',
                flexWrap: 'wrap'
            }}
                xs={12}
                item>

                {OtherTools.map((tool : any) => {
                    return <ToolCard
                        className='toolCard2'
                        filter={isfilterMode(tool)}
                        svg={tool.svg}
                        title={tool.title}
                        key={tool.title}/>
                })
           

            }

            </Grid>
            
           </>
            : 
            <Typography sx={{margin:'0 auto',fontSize:'1em', fontWeight:'500', color:'red'}} variant='h1' >There was an error loading the items.</Typography>
            }

        </Grid>

    </Container> < Divider /> </>)
}

export default TechTools